import styled from 'styled-components';

export const StyledToolBar = styled.div`
  width: 70%;
  margin: 30px auto;
  text-align: center;
`;

export const StyledToolBarContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  grid-gap: 20px;
  position: relative;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(100px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(100px, 1fr));
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
