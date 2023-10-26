import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  .icon {
    height: 20px;
    width: 20px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  text-transform: capitalize;
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  border-radius: 50px;
  border: 2px solid rgba(82, 82, 91, 1);
  background-color: transparent;
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
export { ButtonWrapper, List, Item, DeleteButton };
