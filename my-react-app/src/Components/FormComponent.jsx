import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./FormComponent.css"

function FormComponent(props) {

    const [list, setList] = useState("");
    const [amount, setAmount] = useState(0);
    const [validation, setValidation] = useState(false);

    useEffect(() => {
        const checkData = (list.trim().length > 0) && (amount != 0);
        if (checkData) {
            setValidation(true);
        }
        else {
            setValidation(false);
        }
    }, [list, amount, validation])

    const inputList = (e) => {
        setList(e.target.value);
    };

    const inputAmount = (e) => {
        setAmount(e.target.value);
    };

    const addTransaction = (e) => {
        e.preventDefault();

        props.addTransaction({
            id: uuidv4(),
            list,
            amount: Number(amount)
        });

        setList("");
        setAmount(0);
        setValidation(false);
    };

    return (
        <form onSubmit={addTransaction}>
            <div className="form-control">
                <label htmlFor="">ชื่อรายการ</label>
                <input onChange={inputList} value={list} type="text" placeholder="ระบุชื่อรายการ" />
            </div>
            <div className="form-control">
                <label htmlFor="">จำนวนเงิน</label>
                <input onChange={inputAmount} value={amount} type="number" placeholder="ระบุจำนวนเงิน" />
            </div>
            <div>
                <button type="submit" disabled={!validation}>เพิ่มรายการ</button>
            </div>
        </form>
    );
}



export default FormComponent;