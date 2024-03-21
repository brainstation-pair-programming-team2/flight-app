import './SearchRouteForm.scss'

export default function SearchRouteForm() {
    return (
        <>
            <form className='search__route'>
                <label className='search__from'>
                    <input type="text" name="flight-from" id="flight-from" placeholder='Enter Departure City' />
                </label>
                <label className='search__to'>
                    <input type="text" name="flight-to" id="flight-to" placeholder='Enter Arrival City' />
                </label>
                <label className='search__arline'>
                    <input type="text" name="flight-airline" id="flight-airline" placeholder='Enter Airline' />
                </label>
                <label className='search__date'>
                    <input type="date" name="flight-date" id="flight-date" />
                </label>
                <label className='search__submit'>
                    <button type='submit'>Search</button>
                </label>
            </form>
        </>
    )
}