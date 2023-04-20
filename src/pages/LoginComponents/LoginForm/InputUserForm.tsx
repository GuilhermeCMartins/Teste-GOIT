import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  
`;

const InputInput = styled.input`
  padding: 0.5rem 1rem 0.5rem 2.1rem;
  border-radius: 0.375rem;
  border: 1px solid #164092;
  font-size: 13px;
  background-color: #0D102D;
  width: 100%;
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
 

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 1px #6366f1;
    outline: none;
  }

  ::placeholder{
    color: #f4f6f7;
  }
`;

const InputIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 0.75rem;
  height: 0.75rem;
  width: 0.75rem;
  color: #ffffff;
`;

const InputUser = () => {
  return (
    <InputContainer>
      <InputInput type="text" placeholder="E-mail" aria-label="Email" />
      <InputIcon icon={faUser}></InputIcon>
    </InputContainer>
  );
};

export default InputUser;
