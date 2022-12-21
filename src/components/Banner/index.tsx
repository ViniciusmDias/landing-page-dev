import * as S from './styles';
import img from '../../assets/img.png'
import Image from 'next/image';

export function Banner() {
return (
  <S.Container>
    <Image src={img} alt="logo" />
    <h1>
      Seja avisado das aulas onde eu mostro os bastidores dos meus lançamentos
      de múltiplos 7 dígitos.
    </h1>
    <S.Form>
      <input type="text" />
      <button>Entrar no grupo agora</button>
    </S.Form>
  </S.Container>
);
}