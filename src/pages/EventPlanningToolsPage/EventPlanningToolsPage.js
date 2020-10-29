import React, {useState} from  'react';
import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import GuestListCalculator from './GuestListCalculator';
import DrinkCalculator from './DrinkCalculator';
import FoodServingCalculator from './FoodServingCalculator';
import DrinksAndAppetizersCalculator from './DrinksAndAppetizersCalculator';

export default function EventPlanningToolsPage(props) {

    // Helper function to manage the state of the expansion panels
    const setPanelCloseFlag = (panelNumber) => {
        if (panelNumber === 1) {
          let wasClosed  =  panel1Closed;  
          setPanel1Closed(prevPanel1Closed => !prevPanel1Closed) // toggle state 
          if (wasClosed) { closePanelsListed([2,3,4]);} /*if was closed and now being opened, close all other panels */
        }
        if (panelNumber === 2) {
            let wasClosed  =  panel2Closed;
            setPanel2Closed(prevPanel2Closed => !prevPanel2Closed); // toggle state 
            if (wasClosed) { closePanelsListed([1,3,4]); } /*if was closed and now being opened, close all other panels */
        }
        if (panelNumber === 3) {
          let wasClosed  =  panel3Closed;
          setPanel3Closed(prevPanel3Closed => !prevPanel3Closed) // toggle state 
          if (wasClosed) { closePanelsListed([1,2,4]); } /*if was closed and now being opened, close all other panels */
        }
        if (panelNumber === 4) {
          let wasClosed  =  panel4Closed;
          setPanel4Closed(prevPanel4Closed => !prevPanel4Closed); // toggle state 
          if (wasClosed) { closePanelsListed([1,2,3]);} /*if was closed and now being opened, close all other panels */
        }
    }
    // Helper function used to close panels other than one clicked on to open
    const closePanelsListed = (panelList) =>  {
        panelList.includes(1) && setPanel1Closed(true);
        panelList.includes(2) && setPanel2Closed(true);
        panelList.includes(3) && setPanel3Closed(true);
        panelList.includes(4) && setPanel4Closed(true);
    }

    // Guest List Calculator Panel
    const [panel1Closed, setPanel1Closed] = useState(true);  /* this is Guest List Panel */
    const onClickHandlerForPanel1 = () => {setPanelCloseFlag(1)}

    // Standard Drink Calculator Panel
    const [panel2Closed, setPanel2Closed] = useState(true);  /* this is Guest List Panel */
    const onClickHandlerForPanel2 = () => {setPanelCloseFlag(2)}

    // Food Servings Calculator Panel
    const [panel3Closed, setPanel3Closed] = useState(true);  /* this is Guest List Panel */
    const onClickHandlerForPanel3 = () => {setPanelCloseFlag(3)}

    // Drinks and Appetizers Calculator Panel
    const [panel4Closed, setPanel4Closed] = useState(true);  /* this is Guest List Panel */
    const onClickHandlerForPanel4 = () => {setPanelCloseFlag(4)}

    const [numGuests, setNumGuests] = useState(0);

    const guestInputFormCb = (numGuests) => {
      console.log("Inside EventPlanningToolsPage / Callback ");
      console.log("   numGuests ", numGuests);
      setNumGuests(numGuests);
    }

    return (
      <Page>
        <PageHeader/>
        <GuestListCalculator 
            formCallBack={guestInputFormCb} 
            onClickHandler={onClickHandlerForPanel1} 
            closed={panel1Closed}
        />
        <DrinkCalculator 
            numGuests={numGuests} 
            onClickHandler={onClickHandlerForPanel2} 
            closed={panel2Closed}
        />
        <FoodServingCalculator 
            numGuests={numGuests} 
            onClickHandler={onClickHandlerForPanel3} 
            closed={panel3Closed}
        />
        <DrinksAndAppetizersCalculator 
            numGuests={numGuests} 
            onClickHandler={onClickHandlerForPanel4} 
            closed={panel4Closed}
        />
      </Page>
    )
}
