import PropTypes from 'prop-types';
import "./Item.css"

function Item(props) {

    const { id, list, amount, deleteItem } = props;

    const status = amount > 0 ? "income" : "expenses";

    return (
        <div className={`item-container ${status}`}>
            <ul>
                <li>{list}</li>
                <li>{amount < 0 ? `- ${(-1) * amount}` : `+ ${amount}`} บาท</li>
                <li><button onClick={() => deleteItem(id)}>ลบรายการ</button></li>
            </ul>
        </div>
    );
}

Item.propTypes = {
    list: PropTypes.string,
    amount: PropTypes.number
}

export default Item;