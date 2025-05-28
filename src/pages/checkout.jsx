import Header from "../components/header";
import Card from '../assets/card.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {

    const [errors, setErrors] = useState({})

    function validateForm(event) {
        event.preventDefault()

        const newErrors = {}
        const form = event.target

        const currentDate = new Date()
        const currentMonth = currentDate.getMonth()+1
        const currentYear = Number(currentDate.getFullYear().toString().slice(-2))

        const dateSplitter = form.date.value.split('/')
        const writtenMonth = dateSplitter[0]
        const writtenYear = dateSplitter[1]

        const legitDate = writtenMonth >=1 && writtenMonth <=12 && writtenYear >=0 && writtenYear <=99
        const legitFormat = form.date.value.match(/^(\d{2})\/(\d{2})$/)
        const legitDateRange = (writtenYear > currentYear) || (writtenYear === currentYear && writtenMonth >= currentMonth)

        
        if ( !form.email.value.toLowerCase().match(/^\S+@\S+\.\S+$/)){
            newErrors.email = 'YOU FAILED'
        }

        if ( form.name.value.length <=2){
            newErrors.name = 'YOU FAILED'
        }

        if ( form.number.value.length !==16) {
            newErrors.number = 'YOU FAILED'
        }

        if ( form.cvv.value.length !==3) {
            newErrors.cvv = 'YOU FAILED'
        }

        if ( !legitDate){
            newErrors.date = 'WRONG MONTH'
        }

        if ( !legitFormat) {
            newErrors.date = 'WRONG FORMAT'
        }

        if ( !legitDateRange){
            newErrors.date = 'WRONG YEAR'
        }

        setErrors(newErrors)

        if ( Object.keys(newErrors).length ===0 ){
            useNavigate('/')
        }
    }


    return (
        <>
            <Header
                title='Checkout'
            />
            <div>
                <div>
                    <h2>Payment Method</h2>
                    <p>Change</p>
                </div>
                <img src={Card} alt="" />
            </div>
            <section>
                <h2>Payment Details</h2>
                <form onSubmit={validateForm}>
                    <div><label htmlFor="email">Your Email</label><input placeholder="example@example.com" type="text" name="email" /></div>
                    <div><label htmlFor="name">Cardholder Name</label><input placeholder="Jane Doe" type="text" name="name" /></div>
                    <div><label htmlFor="card">Card Number</label><input placeholder="**** **** **** 51446" type="number" name="card" /></div>

                    <div>
                        <div>
                            <label htmlFor="date">Date</label>
                            <input placeholder="mm/yy" type="text" name="date" />
                        </div>
                        <div>
                            <label htmlFor="cvv">CVV</label>
                            <input placeholder="123" type="number" name="cvv" />
                        </div>
                    </div>
                    <button type="submit">Pay</button>
                </form>
            </section>


        </>
    );
}

export default Checkout;