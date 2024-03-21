import './Search.scss';
import { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import SearchFlightForm from '../../components/SearchFlightForm/SearchFlightForm';
import SearchRouteForm from '../../components/SearchRouteForm/SearchRouteForm';
import Status from '../Status/Status';
import { useNavigate } from 'react-router-dom';
import globe from '../../assets/earth.png';

export default function Search() {
    const [searchMethod, setSearchMethod] = useState('number');
    const navigate = useNavigate();

    const handleSearchMethod = (e) => {
        if (e.target.classList[0] === 'search__method-number') {
            setSearchMethod('number');

        } else if (e.target.classList[0] === 'search__method-route') {
            setSearchMethod('route');
        }
    }

    const formHandler = (formData) => {
        navigate('/status', { state: formData });
    }


    return (
        <>
            <header>
                <Nav selectedPage={'search'} />
            </header>
            <main>
                <section className='search'>
                    <h1 className='search__title'>Search Flight</h1>
                    <div className='search__container'>
                        <div className='search__container__left'>
                            <div className='search__method'>
                                <button className={`search__method-number ${searchMethod === 'number' ? 'search__method--selected' : ''}`} onClick={handleSearchMethod}>By Flight Number</button>
                                <button className={`search__method-route ${searchMethod === 'route' ? 'search__method--selected' : ''}`} onClick={handleSearchMethod}>By Route</button>
                            </div>
                            <div className='search__input'>
                                {searchMethod === 'number' ? <SearchFlightForm formHandler={formHandler} /> : <SearchRouteForm formHandler={formHandler} />}
                            </div>
                        </div>
                        <div className='search__img-container'>
                            <img className='search__img' src={globe} alt='globe' />
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}