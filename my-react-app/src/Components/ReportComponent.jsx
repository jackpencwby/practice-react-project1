import { useContext } from "react";
import ReportData from "../data/ReportData";
import "./ReportComponent.css";

function ReportComponent() {

    const { revenue, expenses } = useContext(ReportData);
    const balance = revenue - expenses;

    return (
        <div className="report-container">
            <div className="balance-container">
                <p>ยอดเงินคงเหลือ</p>
                <p>{balance}</p>
            </div>
            <div className="income-and-expenses-container">
                <div>
                    <p>รายรับทั้งหมด</p>
                    <p>{revenue}</p>
                </div>
                <div>
                    <p>รายจ่ายทั้งหมด</p>
                    <p>{expenses}</p>
                </div>
            </div>
        </div>
    );
}

export default ReportComponent;