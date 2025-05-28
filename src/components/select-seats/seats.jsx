import '../../styles/scss/select-seats/seats.scss';

function Seats() {

    const frontSeats = [
        'a1', 'a2', 'a3', 'a4', 'a5', 'a6'
    ]

    const middleSeats = [
        'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8',
        'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8',
        'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8',
        'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8'

    ]

    const backSeats = [
        'f1', 'f2', 'f3', 'f4', 'f5', 'f6'
    ]

    function createButton(seat) {
        return (
            <button
                key={seat}
                type='submit'
                value={seat}
                className='seat-button'
            >
            </button>
        )
    }

    function selectSeat(event) {
        event.preventDefault()
        const selectedSeat = event.nativeEvent.submitter
        let data = JSON.parse(localStorage.getItem('seat') || '[]');

        if (!data.includes(selectedSeat.value)) {
            data.push(selectedSeat.value)

        } else {
                data = data.filter(seat => seat !== selectedSeat.value)
        }

        localStorage.setItem('seat', JSON.stringify(data))
        selectedSeat.classList.toggle('seat-button--saved')
    }

    return (
        <>
            <form onSubmit={selectSeat} className='all-seats'>
                <div className='all-seats__row'>{frontSeats.map(createButton)}</div>
                <div className='all-seats__row all-seats__row--long'>{middleSeats.map(createButton)}</div>
                <div className='all-seats__row'>{backSeats.map(createButton)}</div>
            </form>
        </>
    );
}

export default Seats;