import Image from 'next/image';
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  z-index: 2;
  padding: 1rem;

  h1 {
    color: ${(props) => props.theme.yellow};
    text-align: center;
    margin-top: 1.5rem;
    margin-bottom: 1.25rem;
  }

  input {
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    min-height: 2.5rem;
    color: ${(props) => props.theme["gray-700"]};
    font-size: 1.125rem;
    margin: 0.625rem;
    border: 1px solid ${(props) => props.theme["gray-800"]};
  }

  @keyframes textura {
    from {
      background-image: linear-gradient(
        45deg,
        ${(props) => props.theme["green-130"]},
        ${(props) => props.theme["green-140"]},
        ${(props) => props.theme["green-130"]},
        ${(props) => props.theme["green-140"]}
      );
    }
    to {
      background-image: linear-gradient(
        45deg,
        ${(props) => props.theme["green-130"]},
        ${(props) => props.theme["green-140"]},
        ${(props) => props.theme["green-130"]},
        ${(props) => props.theme["green-140"]}
      );
    }
  }

  button {
    margin: 0.625rem;
    border-radius: 0.25rem;
    min-height: 2.5rem;
    padding: 0.75rem 2rem;
    text-transform: uppercase;
    white-space: nowrap;
    color: ${(props) => props.theme.white};
    font: 700 1.25rem "Poppins", sans-serif;
    border: 1px solid ${(props) => props.theme["green-130"]};
    animation: 3.4s cubic-bezier(0.2, 0.5, 0.9, 0.6) 2s infinite normal none
      running textura;
    background-image: linear-gradient(
      45deg,
      ${(props) => props.theme["green-130"]},
      ${(props) => props.theme["green-140"]},
      ${(props) => props.theme["green-130"]},
      ${(props) => props.theme["green-140"]}
    );
    transition: background 1.6s cubic-bezier(0.55, 0.1, 0.47, 0.94) 0s;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 85%;
    height: 25vw;
  }
`