import styled from 'styled-components';

const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  font-size: 10px;
`;

const Input = styled.input`
  width: 250px;
  height: 30px;
  padding: 5px 18px;

  box-shadow: none;
  border-radius: 20px;
  border: 2px solid rgba(82, 82, 91, 1);
  transition: box-shadow 300ms linear;
  &:focus-within {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const RadioLabel = styled.label`
  display: flex;
  gap: 5px;
  align-items: baseline;

  text-transform: capitalize;
`;

const FormButton = styled.button`
  width: 150px;
  height: 40px;
  margin-bottom: 30px;

  font-weight: 700;
  text-transform: uppercase;

  border-radius: 20px;

  box-shadow: none;
  background-color: transparent;
  border: 2px solid rgba(82, 82, 91, 1);
  transition: box-shadow 300ms linear, background-color 300ms linear,
    border 300ms linear;

  &:hover,
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    background-color: rgba(104, 105, 117, 0.9);
    border: 2px solid black;
  }
`;

export { FormElement, Label, Input, RadioWrapper, RadioLabel, FormButton };
