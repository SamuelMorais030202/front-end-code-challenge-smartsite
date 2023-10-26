import { screen, render } from "@testing-library/react";
import Footer from "../components/Footer";

describe('Testing the Footer component', () => {
  it('Testing whether all elements are being rendered correctly', () => {
    render(<Footer />);

    const logo = screen.getByRole('img', {
      name: /logo smart fit/i
    });
    expect(logo).toBeInTheDocument();

    const paragraph = screen.getByTestId('footer-paragraph');
    expect(paragraph).toBeInTheDocument();  
  });
});