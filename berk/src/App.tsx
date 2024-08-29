import { MantineProvider } from "@mantine/core";
import { theme } from "./common/styles/theme";
import Home from "@/modules/home";

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <Home />
    </MantineProvider>
  );
}
