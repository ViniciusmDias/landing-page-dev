import { render, screen } from '@testing-library/react';
import BackgroundImage from '.';
import backgroundImage from "../../assets/background.webp";


describe('BackgroundImage component', () => {
  it('renders correctly', () => {
    render(
      <BackgroundImage src={backgroundImage} alt="background" data-testid="background-image"/>,
    );

    expect(screen.getByTestId('background-image')).toBeInTheDocument();
  });
});
