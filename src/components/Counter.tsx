import {useState} from "react";
import styles from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount( prev => prev + 1)
    }
    const decrement = () => {
        setCount( prev => prev - 1)
    }
    return (
        <div className={styles.counter}>
            <button onClick={decrement}>-</button>
            <div>{count}</div>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default Counter;