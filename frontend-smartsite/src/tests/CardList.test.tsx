import { render } from "@testing-library/react";
import { vi } from 'vitest';
import { allUnitsMocks } from "./mocks";
import App from "../App";

describe('Testing card rendering', () => {
  afterEach(() => vi.clearAllMocks());

  it('Testing the rendering of all cards', async () => {
    const MOCK_RESPONSE = {
      current_country_id: 1,
      success: true,
      total: 5,
      wp_total: 5,
      location: allUnitsMocks,
    };

    global.fetch = vi.fn(() => Promise.resolve({
      json: () => Promise.resolve(MOCK_RESPONSE),
    } as Response));

    render(<App />);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://test-frontend-developer.s3.amazonaws.com/data/locations.json')
  });
});
