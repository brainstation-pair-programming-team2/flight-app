import { useParams, useSearchParams } from 'react-router-dom';
import './Status.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = 'http://api.aviationstack.com/v1';
const accessKey = 'access_key=b0eca0caf368aac0da6333fb04c2965b';

export default function Status(){

    //const {by, to, from, airline, date, flightNumber} = useParams();

    const [flight, setFlight] = useState(null);

    const flightNumber = 'ac103';
    const by = 'number';
    
    console.log(useSearchParams())

    useEffect(() => {
        (async() => {
            if(by === 'number'){
                try{
                    const {data} = await axios.get(`${baseUrl}/flights?flight_iata=${flightNumber}&${accessKey}`);
                    setFlight(data.data[0]);
                }
                catch(e){
                    console.log(e);
                }
            }
        })();
    }, []);

    if(flight){
        return <h1>Loading...</h1>;
    }

    return (
        <section>
            <h2></h2>
        </section>
    );
}