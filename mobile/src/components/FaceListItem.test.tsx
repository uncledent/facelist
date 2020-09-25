import * as React from 'react';
import { FaceListItem } from './FaceListItem';
import { FaceItem } from '../interfaces/faceItem.interface';
import { render } from 'react-native-testing-library';

const mockedItem: FaceItem = { id: '1', avatar: 'avatar', name: 'SomeName' };

describe('FaceListItem', () => {
  const el = render(<FaceListItem item={mockedItem} />);
  it('should render a welcome', () => {
    expect(el.getByText('SomeName')).toBeDefined();
  });
});
