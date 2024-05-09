import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Transactions from "./Components/Transactions.jsx";
import FormComponent from "./Components/FormComponent.jsx";
import ReportComponent from "./Components/ReportComponent.jsx";
import ReportData from "./data/ReportData.jsx";

function App() {

	const initTransactions = [
		{ id:uuidv4(), list: "เงินเดือน", amount: 50000 }
	];

	const [transactions, setTransaction] = useState(initTransactions);
	const [revenue, setRevenue] = useState(0);
	const [expenses, setExpense] = useState(0);

	const addTransaction = (t) => {
		setTransaction(transactions => [...transactions, t]);
	}

	const deleteItem = (id) => {
		setTransaction(transactions => transactions.filter(t => t.id != id));
	}

	useEffect(() => {
		const amount = transactions.map(t => t.amount);
		const r = amount.filter(amount => amount > 0).reduce((total, element) => total += element, 0);
		const e = ((amount.filter(amount => amount < 0).reduce((total, element) => total += element, 0))) * (-1);
		setRevenue(r);
		setExpense(e);
	}, [transactions, revenue, expenses])

	return (
		<ReportData.Provider value={{
			revenue,
			expenses
		}}>
			<div className="container">
				<h1 style={{ color: "white" , textAlign: "center"}}>โปรเเกรมบัญชีรายรับ - รายจ่าย</h1>
				<ReportComponent />
				<FormComponent addTransaction={addTransaction}/>
				<Transactions transactions={transactions} deleteItem={deleteItem}/>
			</div>
		</ReportData.Provider>
	)
}

export default App;
