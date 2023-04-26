import React from 'react';
import styles from './styles.module.css';

interface LabelAtomProps {
  htmlFor: string;
  text: string;
  isRequired?: boolean;
}

const LabelAtom: React.FC<LabelAtomProps> = ({ htmlFor, text, isRequired = false }) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {text}
      {isRequired && <span className="label-required">*</span>}
    </label>
  );
};

export default LabelAtom;
