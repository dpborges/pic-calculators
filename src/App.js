import React, { Fragment } from 'react';
import EventPlanningCalculators from './pages/EventPlanningCalculators';  /* This component is the entry point to your application */
import { GlobalStyle } from './components/Styles/GlobalStyles';
import { ThemeProvider }       from 'styled-components';
import { theme }     from './components/Styles/theme';

// IMPORTANT! Place GlobalStyle as a sibling to your application component
function App() {

  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        
          <EventPlanningCalculators theme={theme} />
        
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

