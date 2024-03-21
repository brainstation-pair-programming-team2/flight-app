import './SearchFlightForm.scss'

export default function SearchFlightForm() {
    return (
        <>
            <form className='flight'>
                <label className='flight__number'>
                    Flight Number
                    <input type="text" name="flight-number" id="flight-number" placeholder='Enter Flight Number' />
                </label>
                <label className='flight__date'>
                    Date
                    <input type="date" name="flight-date" id="flight-date" />
                </label>
                <label className='flight__submit'>
                    <button type='submit' className='flight__submit-button'>Search</button>
                </label>
            </form>
        </>
    )
}