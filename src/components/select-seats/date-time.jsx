import '../../styles/scss/select-seats/date-time.scss';

function DateTime() {
    return ( 
        <>
        <div className='container'>
            <div className='container__date'>
            <p>Date</p>
            <select name="" id="">
                <option value="1">12/12/02</option>
                <option value="2">15/02/17</option>
                <option value="3">27/08/20</option>
            </select>
        </div>
        <div className='container__time'>
            <p>Time</p>
            <select name="" id="">
                <option value="1">01:00 PM</option>
                <option value="2">09:00 PM</option>
                <option value="3">12:00 AM</option>
            </select>
        </div>
        </div>
        
        </>
     );
}

export default DateTime;