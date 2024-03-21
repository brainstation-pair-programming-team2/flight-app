import './SearchFlightForm.scss'

export default function SearchFlightForm({formHandler}) {
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

        const selectedDate = new Date(inputs[1].value);
        if (inputs[1].value.trim() === '' || selectedDate <= currentDate) { 
            inputs[1].classList.add('invalid');
            isValid = false;
        } else {
            inputs[1].classList.remove('invalid');
        }

        if (isValid) {
            const formData = {
                by: 'number',
                flightNumber: inputs[0].value,
                date: inputs[1].value
            };
            formHandler(formData);
        }
    };

    return (
        <>
            <form className='flight' onSubmit={handleSubmit}>
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