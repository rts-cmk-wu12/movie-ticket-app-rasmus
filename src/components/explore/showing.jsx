import '../../styles/scss/explore/showing.scss';

function Showing() {
    return ( 
        <>
        <div className="showing">
            <button className='showing__button showing__button--one'>Now Showing</button>
            <button className='showing__button showing__button--two'>Upcoming</button>
        </div>
        </>
     );
}

export default Showing;