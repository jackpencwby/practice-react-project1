import PropTypes from 'prop-types';
import "./Item.css"

function Item(props) {

    const { id, list, amount, deleteTransaction } = props;

    const status = amount > 0 ? "income" : "expenses";

    const formatNumber = (number) => {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }

    return (
        <div className={`item-container ${status}`}>
            <ul>
                <li>{list}</li>
                <li>{amount < 0 ? `- ${formatNumber((-1) * amount)}` : `+ ${formatNumber(amount)}`} บาท</li>
                <li><button onClick={() => deleteTransaction(id)}>ลบรายการ</button></li>
            </ul>
        </div>
    );
}

Item.propTypes = {
    list: PropTypes.string,
    amount: PropTypes.number
}

export default Item;