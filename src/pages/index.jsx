import Search from "../components/index/search";
import Header from "../components/index/header";
import ComingSoon from '../components/index/coming-soon';
import CinemaNearYou from '../components/index/cinema-near-you';


function Index() {
    return ( 
        <>
        <Header/>
        <Search/>
        <ComingSoon/>
        <CinemaNearYou/>

        </>
     );
}

export default Index;