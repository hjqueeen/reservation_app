"use client";

import React from 'react'
import { useRouter } from "next/navigation";


const StaffPage = () => {
  const router = useRouter();
    
  return (
    <div>StaffPage
        <div onClick={() => router.push("kitchen")}>Kitchen</div>
    </div>
  )
}

export default StaffPage