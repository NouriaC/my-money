import styles from './Home.module.css';
import { useFirestore } from '../../hooks/useFirestore';

export default function TransactionList({transactions}) {
    const { deleteDocument, response } = useFirestore('transactions');
    console.log(response);
    
    let sum = 0;
    transactions.forEach((transaction) => {
        let numTransac = parseInt(transaction.amount);
        sum += numTransac
    })

    return (
        <ul className={styles.transactions}>
         {transactions.map(transaction => (
             <li key={transaction.id}>
                 <p className={styles.name}>{transaction.name}</p>
                 <p className={styles.amount}>${transaction.amount}</p>
                 <button onClick={() => deleteDocument(transaction.id)}>x</button>
            </li>
         ))}
          <li className={styles.total}>
              <p className={styles.name}>TOTAL:</p>
              <p className={styles.amount}>${sum}</p>
          </li>
          
        </ul>
    )
}
