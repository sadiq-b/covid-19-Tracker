import React from 'react';
import Card from './Card';




const CovidSummary=(props)=>{

    const {
        ConfirmedCases,
        TotalRecovered,
        TotalDeaths,
        Country,
    }=props;
    return(
        <div>
        <div>
            <h1> {Country === '' ? 'Corona Virus Statistics' : Country}</h1>
            <div
            style={{
                display:'flex',
                justifyContent:'center',
            }}> 
            <Card>
                <span>ConfirmedCases</span><br/>
                <span>{ConfirmedCases}</span>
            </Card>
            <Card>
                <span>TotalRecovered</span><br/>
                <span>{TotalRecovered}</span>
            </Card>
            <Card>
                <span>TotalDeaths</span><br/>
                <span>{TotalDeaths}</span>
            </Card>
            </div>
        </div>
        
    </div>

    )
}


export default CovidSummary



 