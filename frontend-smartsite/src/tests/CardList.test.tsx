import { render, screen } from "@testing-library/react";
import { vi } from 'vitest';
import { allUnitsMocks } from "./mocks";
import Card from '../components/Card';
import App from "../App";
import { DataResponseType } from "../types";

describe('Testing card rendering', () => {
  afterEach(() => vi.clearAllMocks());

  it('Testing whether the request is being made', async () => {
    const MOCK_RESPONSE = {
      current_country_id: 1,
      success: true,
      total: 5,
      wp_total: 5,
      location: allUnitsMocks,
    };

    let fetchedResponse : Response | null = null;

    global.fetch = vi.fn(async () => {
      const response = await Promise.resolve({
        json: async () => MOCK_RESPONSE,
      } as Response);
      fetchedResponse = response; // Armazena a resposta
      return response;
    });

    render(<App />)

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://test-frontend-developer.s3.amazonaws.com/data/locations.json');

    if (fetchedResponse !== null) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      await fetchedResponse.json().then((data : DataResponseType) => {
        expect(data).toEqual(MOCK_RESPONSE);
      });
    }

  });

  it('Testing whether cards are rendered', () => {

    allUnitsMocks.forEach((item) => {
      render(<Card { ...item } />);

      const open = screen.getByTestId(`card-open-${item.title}`);
      expect(open).toBeInTheDocument();
      expect(open).toHaveTextContent(item.opened ? 'Aberto' : 'Fechado');

      expect(screen.getByRole('heading', {
        name: item.title
      })).toBeInTheDocument();

      const address = screen.getByTestId(`card-address-${item.id}`);
      expect(address).toBeInTheDocument();
    });

  });

});
