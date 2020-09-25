import React from 'react';
import { render } from 'react-native-testing-library';
import App from './App';
import fetchMock from 'fetch-mock';

describe('App', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('App should render facelist with list items', async () => {
    fetchMock.getOnce('', {
      body: [
        { id: '1', name: 'FaceName1', avatar: 'avatar1' },
        { id: '2', name: 'FaceName2', avatar: 'avatar2' },
      ],
      headers: { 'content-type': 'application/json' },
    });
    const component = render(<App />);
    expect(await component.findByText('FaceName1')).toBeDefined();
    expect(await component.findByText('FaceName2')).toBeDefined();
  });
  it('App should render facelist with empty state', async () => {
    fetchMock.getOnce('', {
      body: [],
      headers: { 'content-type': 'application/json' },
    });
    const component = render(<App />);
    expect(await component.findByText('No data yet')).toBeDefined();
  });
});
