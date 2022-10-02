import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ContextConnect } from './context/ContextConnect';
import Dashboard from './screens/Dashboard';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <ContextConnect>
        <Dashboard />
      </ContextConnect>
    </ChakraProvider>
  );
}

export default App;
