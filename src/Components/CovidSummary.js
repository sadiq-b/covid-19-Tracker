import React from 'react';
import Card from './Card';
import NumberFormat from 'react-number-format';




const CovidSummary = (props) => {

    const {
        ConfirmedCases,
        TotalRecovered,
        TotalDeaths,
        Country,
    } = props;
    return (
        <div>
            <div>
                <h1 style={{ textTransform: 'capitalize' }}> {Country === '' ? 'Corona Virus Statistics' : Country}</h1>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <Card>
                        <span>ConfirmedCases</span><br />
                        <span>{<NumberFormat value={ConfirmedCases} displayType={'text'} thousandSeparator={true} />}</span>
                    </Card>
                    <Card>
                        <span>TotalRecovered</span><br />
                        <span>{<NumberFormat value={TotalRecovered} displayType={'text'} thousandSeparator={true} />}</span>
                    </Card>
                    <Card>
                        <span>TotalDeaths</span><br />
                        <span>{<NumberFormat value={TotalDeaths} displayType={'text'} thousandSeparator={true} />}</span>
                    </Card>
                </div>
            </div>

        </div>

    )
}


export default CovidSummary



