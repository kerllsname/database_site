import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import HomePageComponent from "./Components/Homepage";

function App() {
  return (
    <MantineProvider>
      <HomePageComponent />
    </MantineProvider>
  );
}

export default App;
