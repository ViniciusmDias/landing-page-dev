import { render, screen } from '@testing-library/react';
import { Footer } from '.';


describe('Footercomponent', () => {
  it('renders correctly', () => {
    render(
      <Footer />,
    );

    expect(screen.getByText('Política de Privacidade & Termos de Uso')).toBeInTheDocument();
  });
});
