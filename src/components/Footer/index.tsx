import * as S from './styles';
import logo from "../../assets/logo.webp";
import Image from 'next/image';

export function Footer() {
return (
  <S.Container>
    <S.Column>
      <h3>Agência XFlow</h3>
      <p>
        Rua Francisco José Ferreira Sampaio, nº 50, sala nº 201. “CONDOMINIO
        TORRE INC 50”.
        <br />
        Bairro: Itu Novo Centro - Itu/Sp CEP: 13.303.5360
        <br />
        Telefone: (19) 8204-9190
      </p>
      <p>CNPJ: 33.209.915/0001-60</p>
      <p>Copyright - 2022 © Todos os Direitos Reservados</p>
    </S.Column>
    <S.Column>
      <Image src={logo} alt="logo" width={300} height={89} />
    </S.Column>
    <S.Column>
      <a href="https://mentoriaxflow.com.br/politica-de-privacidade/">
        <p>Política de Privacidade & Termos de Uso</p>
      </a>
    </S.Column>
  </S.Container>
);
}