import './SearchRouteForm.scss'

export default function SearchRouteForm({formHandler}) {
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const inputs = form.querySelectorAll('input');
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 1);

        let isValid = true;

        inputs.forEach((input) => {
            if (input.value.trim() === '') {
                input.classList.add('invalid');
                isValid = false;
            } else {
                input.classList.remove('invalid');
            }
        });

        const selectedDate = new Date(inputs[3].value);
        if (inputs[3].value.trim() === '' || selectedDate <= currentDate) { 
            inputs[3].classList.add('invalid');
            isValid = false;
        } else {
            inputs[3].classList.remove('invalid');
        }

        if (isValid) {
            const formData = {
                by: 'route',
                from: inputs[0].value,
                to: inputs[1].value,
                airline: inputs[2].value,
                date: inputs[3].value
            }
            formHandler(formData);
        }
    };


    return (
        <>
            <form className='route' onSubmit={handleSubmit}>
                <label className='route__from'>
                    Departure From
                    <input type="text" name="flight-from" id="flight-from" placeholder='Enter Departure City' />
                </label>
                <label className='route__to'>
                    Arrival To
                    <input type="text" name="flight-to" id="flight-to" placeholder='Enter Arrival City' />
                </label>
                <label className='route__airline'>
                    Airline
                    <input type="text" name="flight-airline" id="flight-airline" placeholder='Enter Airline' />
                </label>
                <label className='route__date'>
                    Date
                    <input type="date" name="flight-date" id="flight-date" />
                </label>
                <label className='route__submit'>
                    <button type='submit' className='route__submit-button'>Search</button>
                </label>
            </form>
        </>
    )
}