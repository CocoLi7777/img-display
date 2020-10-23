import styled from 'styled-components';

export const StyledGrid = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  background-color: #ebf5f4;
  border-radius: 10px;
  font-family: 'Open Sans', sans-serif;

  h1 {
    font-size: 25px;
    text-align: left;
    margin-left: 10px;
    padding-top: 10px;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const StyledGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 20px;
  position: relative;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
