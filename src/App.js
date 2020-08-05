import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

// local imports
import theme from './components/ui/Theme';

import joshSurprised from './assets/images/joshsurprised.png';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <h1>Welcome to the Lambda Network App!</h1>
        <img src={joshSurprised} width='400' alt='' />
      </div>
    </ThemeProvider>
  );
}

export default App;
