import React from "react";
import LabelAtom from "../atoms/Label/LabelAtom";
import styles from './DropdownMenuAtom.module.css'

interface DropdownMenuAtomProps {
  options: string[];
  selectedOption: string;
  onOptionSelected: (option: string) => void;
  label: string;
}

const DropdownMenuAtom: React.FC<DropdownMenuAtomProps> = ({
  options,
  selectedOption,
  onOptionSelected,
  label,
}) => {
  const handleOptionSelected = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onOptionSelected(event.target.value);
  };

  return (
    <div className={styles.container}>
      <LabelAtom text={label} htmlFor={selectedOption}></LabelAtom>
      <select
        className={styles.input}
        value={selectedOption}
        onChange={handleOptionSelected}
      >
        {options?.map((option) => (
          <option key={option} value={option} className={styles.option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenuAtom;
