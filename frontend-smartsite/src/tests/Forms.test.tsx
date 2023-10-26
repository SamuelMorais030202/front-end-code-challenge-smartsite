import { screen, render } from "@testing-library/react";
import Forms from "../components/Forms";

describe('Testing the Forms component', () => {
  it('Testing whether all elements are being rendered correctly', () => {
    render(<Forms />);

    const iconHour = screen.getByRole('img', { name: /ícon hour/i });
    expect(iconHour).toBeInTheDocument();

    const textHour = screen.getByTestId('forms-hours');
    expect(textHour).toBeInTheDocument();

    const textDescription = screen.getByRole('heading', {
      name: /qual período quer treinar\?/i
    });
    expect(textDescription).toBeInTheDocument();

    const inputMoring = screen.getByText(/manhã/i);
    expect(inputMoring).toBeInTheDocument();

    const hourMorning = screen.getByText(/06:00 ás 12:00/i);
    expect(hourMorning).toBeInTheDocument();

    const inputAfternoon = screen.getByText(/tarde/i);
    expect(inputAfternoon).toBeInTheDocument();

    const houtAfterroon = screen.getByText(/12:01 ás 18:00/i);
    expect(houtAfterroon).toBeInTheDocument();

    const inputEvening = screen.getByText(/noite/i);
    expect(inputEvening).toBeInTheDocument();

    const hourEvening = screen.getByText(/8:01 ás 21:00/i);
    expect(hourEvening).toBeInTheDocument();

    const unitsClosed = screen.getByText(/exibir unidades fechadas/i);
    expect(unitsClosed).toBeInTheDocument();

    const btnSearchUnits = screen.getByRole('button', {
      name: /encontrar unidade/i
    });
    expect(btnSearchUnits).toBeInTheDocument();

    const btnClearFilters = screen.getByRole('button', {
      name: /limpar/i
    });
    expect(btnClearFilters).toBeInTheDocument();
  });
});