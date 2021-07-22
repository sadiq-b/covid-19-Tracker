import React, { useEffect, useState } from 'react';
import LineGraph from './Components/LineGraph';
import './App.css';
import CovidSummary from './Components/CovidSummary';
import axios from './axios';
const App = () => {

    const [ConfirmedCases, setConfirmedCases] = useState(0);
    const [TotalRecovered, setTotalRecovered] = useState(0);
    const [TotalDeaths, setTotalDeaths] = useState(0);
    const [Loading, setLoading] = useState(false);
    const [CovidDetails, setCovidDetails] = useState({});
    const [Days,setDays]=useState(7);
    const [Country,setCountry]=useState('')

    //componentdidmount
    useEffect(() => {
        setLoading(true)
        axios.get(`./summary`)
            .then(res => {
                setLoading(false)
                if (res.status === 200) {
                    setConfirmedCases(res.data.Global.TotalConfirmed)
                    setTotalRecovered(res.data.Global.TotalRecovered)
                    setTotalDeaths(res.data.Global.TotalDeaths)
                    setCovidDetails(res.data)
                    console.log(res)
                }

            })
            .catch(err => {
                console.log(err)
            })
    }, [])
 

    const formatDate=(date)=>{
        const d =new Date(date);
       // 2021-07-21
        const year=d.getFullYear();
        const month=`0${d.getMonth()+1}`.slice(-2);
        const day=d.getDate();

        return `${year}-${month}-${day}`;
    }
    const countryChangeHandler=(e)=>{
        setCountry(e.target.value);
        const d=new Date();
        const to=formatDate(d);
        const from= formatDate(d.setDate(d.getDate()-7));
        //console.log(from,to)
        coronaDateRange(e.target.value,from,to);

    }

    const dayChangeHandler=(e)=>{
        setDays(e.target.value)
    }
    
    const coronaDateRange=(countrySlug,from,to)=>{
        axios.get(`/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
        .then(res=>{
            console.log(res);
        })
        .catch(error =>{
            console.log(error);
        })

    }
    if (Loading) {
        return <p> Fething data from server.... </p>
    }
    return (
        <div className='App'>
            <CovidSummary
                ConfirmedCases={ConfirmedCases}
                TotalRecovered={TotalRecovered}
                TotalDeaths={TotalDeaths}
                Country={'Nigeria'} />
            <div>
                <select value={Country} onChange={countryChangeHandler}>
                    {CovidDetails.Countries && CovidDetails.Countries.map(country => <option key={country.Slug} value={country.Slug}>{country.Country}</option>)}
                </select > 
                <select value={Days} onChange={dayChangeHandler}>
                    <option value="7">Last 7 days</option>
                    <option value="30">Last 30 days</option>
                    <option value="90">Last 90 days</option>
                </select>

            </div>
            <LineGraph />
        </div>
    )
}


export default App