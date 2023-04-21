import { useState } from 'react';
import styles from './Styles.module.css'

interface CounterProps {
  initialValue: number;
}

export default function Counter(props: CounterProps) {
  const [value, setValue] = useState(props.initialValue);

  function sub(){
    if(value == 0){
        return;
    }
    setValue(value - 1);
  }

  function plus() {
    setValue(value + 1);
  }

  return (
    <div className={styles.container}>
      <button onClick={sub}>-</button>
      <p>{value}</p>
      <button  onClick={plus}>+</button>
    </div>
  );
}
