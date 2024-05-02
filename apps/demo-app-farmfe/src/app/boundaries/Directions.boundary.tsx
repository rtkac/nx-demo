import { useDir } from '@core/hooks'
import { DirectionProvider } from '@radix-ui/react-direction'
import type { PropsWithChildren } from 'react'

interface DirectionsBoundaryProps extends PropsWithChildren {}

export const DirectionsBoundary: React.FC<DirectionsBoundaryProps> = ({ children }) => {
  const { direction } = useDir()

  return <DirectionProvider dir={direction}>{children}</DirectionProvider>
}
