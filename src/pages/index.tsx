import styled from 'styled-components'
import { Banner } from '../components/Banner';
import { Footer } from '../components/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props) => props.theme.black};
`;


export default function Home() {
  return (
    <Container>
      <Banner />
      <Footer />
    </Container>
  )
}
