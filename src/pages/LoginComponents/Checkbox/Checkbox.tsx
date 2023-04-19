import { useState } from 'react';
import Image from 'next/image'
import style from './Checkbox.module.css'

type CheckboxImageProps = {
  id: string;
  src: string;
  width: number;
  height: number;
};

export default function CheckboxImage({ src,width,height, id }: CheckboxImageProps) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    console.log(checked)
  };

  return (
  <>
   <div className={checked ? style.container : style.containeractive }>
      <label htmlFor={id}>
        <Image
        src={src}
        width={width}
        height={height}
        alt="Checkbox Image"
        />
      </label>
      <input
        type="checkbox"
        id={id}
        className={style.checkbox}
        checked={checked}
        onChange={handleCheckboxChange}
      ></input>
    </div>
    <h3>{id}</h3>
    </>
  );
}
