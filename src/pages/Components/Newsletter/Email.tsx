import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const EmailInput = styled.input`
  padding: 0.5rem 1rem 0.5rem 2.1rem;
  border-radius: 0.375rem;
  border: 1px solid #164092;
  font-size: 13px;
  background-color: #0D102D;
  width: 570px;
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
 

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 1px #6366f1;
    outline: none;
  }

  ::placeholder{
    color: #00E4FF;
  }
`;

const EmailIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 0.75rem;
  height: 0.75rem;
  width: 0.75rem;
  color: #00E4FF;
`;

const Email = () => {
  return (
    <EmailContainer>
      <EmailInput type="text" placeholder="Endereço de e-mail" aria-label="Email" />
      <EmailIcon icon={faArrowRight}></EmailIcon>
    </EmailContainer>
  );
};

export default Email;
