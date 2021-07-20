import React from 'react';
import LineGraph from './Components/LineGraph';
import './App.css';
import CovidSummary from './Components/CovidSummary'
const App = () => {
    return (
        <div className='App'>
            <CovidSummary
            ConfirmedCases={0}
            TotalRecovered ={0}
            TotalDeaths={0}
            Country={'Nigeria'}/>
            <LineGraph />
        </div>
    )
}


export default App