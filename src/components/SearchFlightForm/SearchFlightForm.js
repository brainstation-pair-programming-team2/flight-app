import './SearchFlightForm.scss'

export default function SearchFlightForm() {
    <>
        <form className='search__flight'>
            <label className='search__flight-number'>
                <input type="text" name="flight-number" id="flight-number" placeholder='Enter Flight Number'/>
            </label>
            <label className='search__date'>
                <input type="date" name="flight-date" id="flight-date"/>
            </label>
            <label className='search__submit'>
                <button type='submit'>Search</button>
            </label>
        </form>
    </>
}