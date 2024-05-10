import { useContext } from "react";
import ReportData from "../data/ReportData";
import "./ReportComponent.css";

function ReportComponent() {

    const { income, expenses } = useContext(ReportData);
    const balance = income - expenses;
    const formatNumber = (number) => {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }

    return (
        <div className="report-container">
            <div className="balance-container">
                <p>ยอดเงินคงเหลือ</p>
                <p>฿ {formatNumber(balance)}</p>
            </div>
            <div className="income-and-expenses-container">
                <div>
                    <p>รายรับทั้งหมด</p>
                    <p>฿ {formatNumber(income)}</p>
                </div>
                <div>
                    <p>รายจ่ายทั้งหมด</p>
                    <p>฿ {formatNumber(expenses)}</p>
                </div>
            </div>
        </div>
    );
}

export default ReportComponent;