import { useParams, useSearchParams } from 'react-router-dom';
import './Status.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const baseUrl = 'http://api.aviationstack.com/v1';
const accessKey = 'access_key=b0eca0caf368aac0da6333fb04c2965b';

export default function Status(){

    //const {by, to, from, airline, date, flightNumber} = useParams();

    const [flight, setFlight] = useState(null);
    const location = useLocation();
    const {by, to, from, airline, date, flightNumber} = location.state;

    useEffect(() => {
        (async() => {
            if(by === 'number'){
                try{
                    //console.log(`${baseUrl}/flights?flight_iata=${flightNumber}&${accessKey}`);
                    const {data} = await axios.get(`${baseUrl}/flights?flight_iata=${flightNumber}&${accessKey}`);
                    console.log(data.data);
                    //setFlight(data.data[0]);
                }
                catch(e){
                    console.log(e);
                }
            }
        })();
    }, []);

    // if(flight){
    //     return <h1>Loading...</h1>;
    // }

    return (
        <section>
            <h2></h2>
        </section>
    );
}