import * as S from './styles'
import backgroundImage from "../../assets/background.webp";


export function BackgroundImage ()  {
  return (
    <S.Background
      src={backgroundImage}
      alt="background"
      data-testid="background-image"
      width={2560}
      height={1182}
    />
  );
}

export default BackgroundImage;
