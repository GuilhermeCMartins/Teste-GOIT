import DropdownMenuAtom from "./molecules/DropdownMenu";
import styles from "./styles.module.css";
import {useState} from  'react'

const options = [
    'Português',
    'Inglês'
]

const temas = [
    'Dark Theme',
    'Light Theme'
]

const moeda = [
    'R$ - Real',
    'U$ - Dolár'
]

function Preferences() {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleOptionSelected = (option: string) => {
        setSelectedOption(option);
        console.log(option)
    }
    
  return (
    <>
      <div className={styles.container}>
        <h2>Preferências</h2>
        <div>
          <div className={styles.container_dd}>
            <div className={styles.tema}>
              <DropdownMenuAtom label="Idioma da Plataforma" options={options} key={1} onOptionSelected={handleOptionSelected} selectedOption={selectedOption}></DropdownMenuAtom>
            </div>
            <div className={styles.tema}>
              <DropdownMenuAtom label="Moeda Padrão" options={moeda} key={1} onOptionSelected={handleOptionSelected} selectedOption={selectedOption}></DropdownMenuAtom>
            </div>
          </div>
          <div className={styles.tema}>
              <DropdownMenuAtom label="Tema" options={temas} key={1} onOptionSelected={handleOptionSelected} selectedOption={selectedOption}></DropdownMenuAtom>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preferences;
