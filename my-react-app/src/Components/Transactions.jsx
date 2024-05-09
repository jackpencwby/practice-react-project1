import Item from "./Item.jsx";

function Transactions(props) {

    const { transactions, deleteItem } = props;

    return (
        <div style={{marginTop: "24px"}}>
            {transactions.map(t => {
                return (
                    <Item {...t} deleteItem={deleteItem} key={t.id}/>
                );
            })}
        </div>

    );
}

export default Transactions;

