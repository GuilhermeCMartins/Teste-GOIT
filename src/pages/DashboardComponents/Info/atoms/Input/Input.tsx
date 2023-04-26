import React from 'react';
import styles from './styles.module.css'

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<Props> = ({ label, value, onChange }) => {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default Input;