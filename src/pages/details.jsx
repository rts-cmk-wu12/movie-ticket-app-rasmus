import Synopsis from "../components/details/synopsis";
import Header from "../components/header";


function Details () {
    return ( 
        <>
        <Header
        bookmark={true}
        title={'Details Movie'}/>
        <Synopsis/>
        
        </>
     );
}

export default Details ;