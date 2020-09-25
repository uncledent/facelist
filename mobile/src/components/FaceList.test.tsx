import React from 'react';

import { FaceList } from './FaceList';
import { render } from '../lib/test-utils';
import * as actions from '../redux/actions/facelist.actions';

describe('FaceList', () => {
  it('FaceList should render with list items', async () => {
    jest
      .spyOn(actions, 'fetchFaceList')
      .mockReturnValue(() => Promise.resolve());
    const component = render(<FaceList />, {
      initialState: {
        faceList: {
          fetching: false,
          items: {
            '1': {
              id: '1',
              name: 'FaceName1',
              avatar: 'avatar1',
            },
            '2': {
              id: '2',
              name: 'FaceName2',
              avatar: 'avatar2',
            },
          },
        },
      },
    });
    expect(await component.findByText('FaceName1')).toBeDefined();
    expect(await component.findByText('FaceName2')).toBeDefined();
  });
  it('FaceList should render facelist with empty state', async () => {
    jest
      .spyOn(actions, 'fetchFaceList')
      .mockReturnValue(() => Promise.resolve());
    const component = render(<FaceList />, {
      initialState: {
        faceList: {
          fetching: false,
          items: {},
        },
      },
    });
    expect(await component.findByText('No data yet')).toBeDefined();
  });
  it('FaceList should show loading state', async () => {
    jest
      .spyOn(actions, 'fetchFaceList')
      .mockReturnValue(() => Promise.resolve());
    const component = render(<FaceList />, {
      initialState: { faceList: { fetching: true, items: {} } },
    });
    expect(await component.getByTestId('faceFlatList').props.refreshing).toBe(
      true
    );
    // expect(await component.findByText('Error happened')).toBeDefined();
  });
  it('FaceList should show error', async () => {
    global.alert = jest.fn();
    jest
      .spyOn(actions, 'fetchFaceList')
      .mockReturnValue(() => Promise.resolve());
    render(<FaceList />, {
      initialState: {
        faceList: {
          fetching: false,
          items: {},
          errorMessage: 'Error happened',
        },
      },
    });
    expect(global.alert).toHaveBeenCalledWith('Error happened');
  });
});
