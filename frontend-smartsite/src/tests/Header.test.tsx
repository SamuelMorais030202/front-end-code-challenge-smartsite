import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe('Testing the Header component', () => {
  it('Testing whether all elements are being rendered correctly', () => {
    render(<Header />);

    const logo = screen.getByRole('img', { name: /logo smart fit/i });
    expect(logo).toBeInTheDocument();

    const tilte = screen.getByRole('heading', {
      name: /reabertura smart fit/i
    });
    expect(tilte).toBeInTheDocument();

    const paragraph = screen.getByTestId('header-paragraph');
    expect(paragraph).toBeInTheDocument();
  });
});