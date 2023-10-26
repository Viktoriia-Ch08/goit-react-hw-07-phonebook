import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  margin-bottom: 45px;
`;

const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export { FilterLabel, FilterContainer };
