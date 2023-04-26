import { useAuth } from "@/hooks/AuthProvider";
import styles from "./Styles.module.css";
import Input from "./atoms/Input/Input";
import { useState } from 'react'

const Info = () => {
  const { user } = useAuth();
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <section className={styles.section}>
      <h2>Informações da conta</h2>
      <div className={styles.container}>
        <div className={styles.left_container}>
          <Input label="Email principal:" value={user?.email} onChange={handleChange} ></Input>
          <Input label="Número de telefone:" value={user?.phone} onChange={handleChange} ></Input>
          <Input label="CPF:" value={value} onChange={handleChange} ></Input>
        </div>
        <div className={styles.right_container}>
          <Input label="Email secundário:" value={value} onChange={handleChange} />
          <Input label="Nacionalidade:" value={user?.address.country} onChange={handleChange} ></Input>
          <Input label="RG:" value={user?.document} onChange={handleChange} ></Input>
        </div>
      </div>
    </section>
  );
};

export default Info;
