import React, { Fragment } from 'react';
import EventPlanningCalculators from './pages/EventPlanningCalculators';  /* This component is the entry point to your application */
import { ThemeProvider }       from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { theme }     from './styles/theme';


// IMPORTANT! Place GlobalStyle as a sibling to your application component
function App() {

  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        
          <EventPlanningCalculators />
        
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

