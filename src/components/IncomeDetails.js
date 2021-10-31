import React, { useState } from "react";
import Income from "./Income";

const IncomeDetails = ({onIncomeSubmit}) => {

    const [income1, setIncome1] = useState(0);
    const [income2, setIncome2] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);


    const handleIncome1Change = (event) => {
        //console.log(event.target.value);
        const inval = parseInt(event.target.value);
        setIncome1(inval);
        setTotalIncome(inval + income2);
    }

    const handleIncome2Change = (event) => {
        //console.log(event.target.value);
        const inval = parseInt(event.target.value); // inval - input value integer
        setIncome2(inval);
        setTotalIncome(income1 + inval);
    }

    const handleIncomeSubmit = (event) => {
        event.preventDefault();
        const income1ToSubmit = income1.trim();
        const income2ToSubmit = income2.trim();
        if (!income1ToSubmit || !income2ToSubmit){
            return
        }

        onIncomeSubmit({
            income1: income1ToSubmit,
            income2: income2ToSubmit
        });

        //console.log("Incomes submit function called!!!")
        // setIncome1("");
        // setIncome2("");
    }

    return (    <>
                <h2>Welcome to the Mortgage Calculator</h2>
                <form className="mortgage-calc-form">
                    <label>
                        Income 1:
                        <input type="number"
                        placeholder="income1"
                        onChange={handleIncome1Change} />
                    </label>
                    <label>
                        Income 2:
                        <input type="number"
                        placeholder="income2"
                        onChange={handleIncome2Change} />
                    </label>
                    <label>
                        Total Income:
                        <div class="total-value">{totalIncome}</div>
                    </label>
                    <label>
                        Affordable Mortgage Amount:
                        <div class="affordable-value">{totalIncome*3}</div>
                    </label>
                </form>
            {/* <Income /> */}
            </>
    )
}

export default IncomeDetails;