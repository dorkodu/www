import { Outlet, ScrollRestoration } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'

import { theme } from '#/styles/theme'

function App() {
  return (
    <>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <Outlet />
      </MantineProvider>
      <ScrollRestoration />
    </>
  )
}

export default App
