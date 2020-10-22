import React, {useState} from  'react';
import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import GuestListCalculator from './GuestListCalculator';
import DrinkCalculator from './DrinkCalculator';
import FoodServingCalculator from './FoodServingCalculator';

export default function EventPlanningToolsPage(props) {

    // const [panel1Closed, setPanel1Closed] = useState(true);  /* this is Guest List Panel */
    // const onClickHandlerForPanel1 = () => {setPanel1Closed(prevPanel1Closed => !prevPanel1Closed)}

    const [numGuests, setNumGuests] = useState(0);

    const guestInputFormCb = (numGuests) => {

      console.log("Inside EventPlanningToolsPage / Callback ");
      console.log("   numGuests ", numGuests);

      setNumGuests(numGuests);
    }

    return (
      <Page>
        <PageHeader/>
        <GuestListCalculator formCallBack={guestInputFormCb} />
        <DrinkCalculator numGuests={numGuests} />
        <FoodServingCalculator numGuests={numGuests} />
      </Page>
    )
}
