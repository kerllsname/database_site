import '@mantine/core/styles.css';

import { AppShell, MantineProvider } from '@mantine/core';
import HeaderComponent from './Components/Header/Header';
import MainComponent from './Components/Main/Main';

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <AppShell header={{ height: 70 }}>
        <AppShell.Header>
          <HeaderComponent />
        </AppShell.Header>
        <AppShell.Main>
          <MainComponent />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
