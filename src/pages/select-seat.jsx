import Availability from "../components/select-seats/availability";
import Checkout from "../components/select-seats/checkout";
import Cinema from "../components/select-seats/cinema";
import DateTime from "../components/select-seats/date-time";
import Screen from "../components/select-seats/screen";
import Seats from "../components/select-seats/seats";

function SelectSeat () {
    return ( 
        <>
        <Cinema/>
        <DateTime/>
        <Screen/>
        <Seats/>
        <Availability/>
        <Checkout/>
        </>
     );
}

export default SelectSeat ;