import React from 'react'
import { Outlet } from 'react-router-dom'

interface MainLayoutProps {
  coreHeader: JSX.Element
}

export const MainLayout = React.forwardRef<HTMLDivElement, MainLayoutProps>(({ coreHeader }, ref) => {
  return (
    <div ref={ref}>
      {coreHeader}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 px-4">
        <Outlet />
      </div>
    </div>
  )
})
