import './Search.scss';
import { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import SearchFlightForm from '../../components/SearchFlightForm/SearchFlightForm';
import SearchRouteForm from '../../components/SearchRouteForm/SearchRouteForm';

export default function Search() {
    const [searchMethod, setSearchMethod] = useState('number');

    const handleSearchMethod = (e) => {
        if (e.target.className === 'search__method-number') {
            setSearchMethod('number');
        } else {
            setSearchMethod('route');
        }
    }
    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                <section className='search'>
                    <h1 className='search__title'>Search Flight</h1>
                    <div className='search__method'>
                        <button className='search__method-number' onClick={handleSearchMethod}>By Flight Number</button>
                        <button className='search__method-route' onClick={handleSearchMethod}>By Route</button>
                    </div>
                    <div className='search__input'>
                        {searchMethod === 'number' ? <SearchFlightForm /> : <SearchRouteForm />}
                    </div>
                </section>
            </main>

        </>
    )
}