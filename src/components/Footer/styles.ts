import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  padding: 1rem;
  background-color: ${(props) => props.theme.black};
  flex: 1;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (min-width: 768px) {
    justify-content: center;


    img {
      height: 3rem;
    }
  }

  h3 {
    margin: 2rem 0 1.25rem;
    color: ${(props) => props.theme.white};
  }

  p {
    color: ${(props) => props.theme.white};
    margin-bottom: 0.75rem;
  }

  img {
    max-width: 50%;
    margin: 1rem auto;
    max-height: 5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 1rem;
    }
  }
`;