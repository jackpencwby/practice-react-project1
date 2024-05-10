import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Transactions from "./Components/Transactions.jsx";
import FormComponent from "./Components/FormComponent.jsx";
import ReportComponent from "./Components/ReportComponent.jsx";
import ReportData from "./data/ReportData.jsx";

function App() {

	const [transactions, setTransaction] = useState([]);
	const [income, setIncome] = useState(0);
	const [expenses, setExpense] = useState(0);

	const addTransaction = (t) => {
		setTransaction(transactions => [...transactions, t]);
	}

	const deleteTransaction = (id) => {
		setTransaction(transactions => transactions.filter(t => t.id != id));
	}

	useEffect(() => {
		const amount = transactions.map(t => t.amount);
		const i = amount.filter(amount => amount > 0).reduce((total, element) => total += element, 0);
		const e = ((amount.filter(amount => amount < 0).reduce((total, element) => total += element, 0))) * (-1);
		setIncome(i);
		setExpense(e);
	}, [transactions, income, expenses]);

	return (
		<ReportData.Provider value={{
			income,
			expenses
		}}>
			<div>
				<h1 style={{ color: "white", textAlign: "center" }}>โปรเเกรมบัญชีรายรับ - รายจ่าย</h1>
				<Router>
					<div className="menu-container">
						<ul className="menu">
							<li><Link to="/">ข้อมูลบัญชี</Link></li>
							<li><Link to="/insert">บันทึกรายการ</Link></li>
						</ul>
					</div>
					<Routes>
						<Route path="/" element={<ReportComponent />} />
						<Route path="/insert"
							element={<>
								<FormComponent addTransaction={addTransaction} />
								<Transactions transactions={transactions} deleteTransaction={deleteTransaction} /></>} />
					</Routes>
				</Router>
			</div>
		</ReportData.Provider>
	)
}

export default App;
