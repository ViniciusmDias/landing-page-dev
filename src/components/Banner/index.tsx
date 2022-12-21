import * as S from './styles';
import img from '../../assets/img.png'
import Image from 'next/image';
import BackgroundImage from '../BackgroundImage';

export function Banner() {
return (
  <S.Container>
    <S.Form>
      <S.Logo>
        <Image src={img} alt="logo" />
      </S.Logo>
      <h1>
        Seja avisado das aulas onde eu mostro os bastidores dos meus lançamentos
        de múltiplos 7 dígitos.
      </h1>
      <input type="text" placeholder="Digite seu melhor e-mail" />
      <a href="https://joinzap.app/bastidores-7-digitos">
        Entrar no grupo agora
      </a>
    </S.Form>
    <BackgroundImage />
  </S.Container>
);
}