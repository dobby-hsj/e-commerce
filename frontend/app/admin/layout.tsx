import React from 'react'
import { SideBar } from '@/components/admin/layouts/SideBar';
import { NavBar } from '@/components/admin/layouts/NavBar';

export default function layout({children}) {
  return (
    <div>
        <SideBar />
        <NavBar />
        {children}
    </div>
  )
}
