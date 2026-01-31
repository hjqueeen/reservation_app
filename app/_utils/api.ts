/**
 * API base URL, auth, and restaurant ID for webapp.
 * Aligns with gastrosoftware RestaurantApi and AuthInterceptor.
 */

const AUTH_TOKEN_KEY = "auth_access_token";
const AUTH_EMAIL_KEY = "auth_saved_email";

/** Base URL for API. Same as Android BASE_URL (e.g. https://your-api.com/api). Default /api for same-origin. */
export function getApiBaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (url !== undefined && url !== "") return url.replace(/\/$/, "");
  return "/api";
}

/** Restaurant ID for orders (same as Android BuildConfig.RESTAURANT_ID) */
export function getRestaurantId(): string {
  return process.env.NEXT_PUBLIC_RESTAURANT_ID ?? "default";
}

// --- Auth token (aligned with gastrosoftware TokenManager) ---

export function getAccessToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function saveAccessToken(token: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export function clearAccessToken(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

export function saveCredentials(email: string, _password: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(AUTH_EMAIL_KEY, email);
}

export function getSavedEmail(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(AUTH_EMAIL_KEY);
}

export function clearAuth(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_EMAIL_KEY);
}

/** Headers for authenticated API requests. Login endpoint must not use Authorization. */
export function getAuthHeaders(includeAuthorization = true): HeadersInit {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  if (includeAuthorization) {
    const token = getAccessToken();
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
}

// --- Login API (aligned with gastrosoftware RestaurantApi.login) ---

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user?: unknown;
  tool_id?: string;
  toolId?: string;
}

export async function loginApi(
  baseUrl: string,
  email: string,
  password: string
): Promise<LoginResponse> {
  const url = `${baseUrl}/auth/login`;
  const res = await fetch(url, {
    method: "POST",
    headers: getAuthHeaders(false),
    body: JSON.stringify({ email: email.trim(), password } as LoginRequest),
  });
  if (!res.ok) {
    const code = res.status;
    const text = await res.text();
    let message = "Email or password is incorrect";
    if (code === 400 || code === 401) message = "Email or password is incorrect";
    else if (code === 404) message = "Server not found";
    else if (code === 500) message = "Server error";
    else if (text) message = text;
    throw new Error(message);
  }
  return res.json() as Promise<LoginResponse>;
}
