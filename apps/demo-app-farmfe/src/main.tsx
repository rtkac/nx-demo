import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'

import AppEntry from './app/AppEntry'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <AppEntry />
  </StrictMode>,
)
