import '../../styles/scss/select-seats/availability.scss';

function Availability() {
    return (
        <>
            <div className='available'>
                
                    <div className='available__blue'></div>
                    <p>Selected</p>
                
                
                    <div className='available__red'></div>
                    <p>Reserved</p>
                
                
                    <div className='available__empty'></div>
                    <p>Available</p>
                
            </div>

        </>
    );
}

export default Availability;