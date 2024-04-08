import React, { ReactNode } from 'react'

interface ICenterContainerProps {
    children: ReactNode;
  }

const CenterContainer = ({children}: ICenterContainerProps) => {
  return (
    <div className="px-[5%] pb-[20px] max-w-[1400px] m-auto h-screen">
      {children}
    </div>
  )
}

export default CenterContainer