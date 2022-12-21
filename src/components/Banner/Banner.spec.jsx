import { render, screen } from '@testing-library/react';
import { Banner } from '.';


describe('Bannercomponent', () => {
  it('renders correctly', () => {
    render(
      <Banner />,
    );

    expect(screen.getByText('Entrar no grupo agora')).toBeInTheDocument();
  });
});
