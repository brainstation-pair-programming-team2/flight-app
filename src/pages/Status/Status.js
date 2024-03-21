import { useParams, useSearchParams } from 'react-router-dom';
import './Status.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import Nav from '../../components/Nav/Nav';

const baseUrl = 'http://api.aviationstack.com/v1';
const accessKey = 'access_key=b0eca0caf368aac0da6333fb04c2965b';

export default function Status() {

    //const {by, to, from, airline, date, flightNumber} = useParams();

    const [flight, setFlight] = useState(null);
    const location = useLocation();
    const { by, to, from, airline, date, flightNumber } = location.state;

    useEffect(() => {
        (async () => {
            if (by === 'number') {
                try {
                    const { data } = await axios.get(`${baseUrl}/flights?flight_iata=${flightNumber}&${accessKey}`);
                    // console.log(data.data);
                    setFlight(data.data[0]);
                }
                catch (e) {
                    console.log(e);
                }
            }else if(by === 'route'){
                try {
                    const { data } = await axios.get(`${baseUrl}/flights?dep_iata=${from}&arr_iata=${to}&airline_iata=${airline}&${accessKey}`);
                    console.log(data.data);
                    setFlight(data.data[0]);
                }
                catch (e) {
                    console.log(e);
                }
            }
        })();
    }, []);

    console.log(flight);

    if(!flight){
        return <h1>Loading...</h1>;
    }


    const toDate = (string) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const date = new Date(string);
        const day = days[date.getDay()];
        let hour = date.getHours();
        let minute = date.getMinutes();
        console.log(hour.length);
        if((hour + '').length === 1){
            hour = `0${hour}`;
        }
        if((minute + '').length === 1){
            minute = `0${minute}`;
        }
        return `${day} ${hour}:${minute}`
    }

    let flightClass = '';
    let flightStatus = flight.flight_status;
    if (flightStatus === 'active' || 'landed') {
        flightClass = 'status__status--green';
    }else if(flightStatus === 'scheduled'){
        flightClass = 'status__status--blue';
    }else if(flightStatus === 'cancelled' || 'delayed'){
        flightClass = 'status__status--red';
    }

    return (
        <>
            <header>
                <Nav />
            </header>
            <section className='status'>
                <h1>Flight Status</h1>
                <div className='status__container'>
                    <div className='status__flight'>
                        <h2>{flight.flight.iata}</h2>
                        <h2>{flight.flight_date}</h2>
                    </div>
                    <h3 className={`status__status ${flightClass}`}>{flight.flight_status.toUpperCase()}</h3>
                    <div className='status__info-container'>
                        <div className='status__info'>
                            <div className='status__departure'>
                                <p className='status__item'>Actual - {toDate(flight.departure.actual)}</p>
                                <p className='status__item'>Estimated - {toDate(flight.departure.estimated)}</p>
                                <p className='status__item'>{flight.departure.iata}</p>
                                <p className='status__item'>Terminal - {flight.departure.terminal}</p>
                            </div>
                            <div className='status__progress-bar'>
                            </div>
                            <div className='status__arrival'>
                                <p className='status__item'>Actual - {toDate(flight.arrival.actual)}</p>
                                <p className='status__item'>Estimated - {toDate(flight.arrival.estimated)}</p>
                                <p className='status__item'>{flight.arrival.iata}</p>
                                <p className='status__item'>Terminal - {flight.arrival.terminal}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}