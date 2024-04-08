import DashboardNavbar from '@/components/Navbar/DashboardNavbar'
import React, { ReactNode } from 'react'

interface IDashboardContainerProps {
    children: ReactNode
}

const DashboardContainer = ({children}: IDashboardContainerProps) => {
  return (
    <div className="px-[5%] pb-[20px] bg-[#FAFCFD] h-screen">
      <DashboardNavbar/>
      {children}
    </div>
  )
}

export default DashboardContainer