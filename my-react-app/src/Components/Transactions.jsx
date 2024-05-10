import Item from "./Item.jsx";

function Transactions(props) {

    const { transactions, deleteTransaction } = props;

    return (
        <div style={{ marginTop: "24px" }}>
            {transactions.map(t => {
                return (
                    <Item {...t} deleteTransaction={deleteTransaction} key={t.id} />
                );
            })}
        </div>

    );
}

export default Transactions;

