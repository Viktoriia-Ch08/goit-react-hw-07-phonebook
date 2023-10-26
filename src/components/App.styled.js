import styled from 'styled-components';

const Container = styled.div`
  width: 360px;
  margin: 50px auto;
  margin-top: 50px;
  padding: 30px;

  background-image: linear-gradient(
    251deg,
    rgba(104, 105, 117, 0.9),
    rgba(244, 101, 12, 0.2)
  );
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const Headline = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export { Container, Headline, Title };
