import { render } from '@testing-library/react';

import ClubJoin from './club-join';

describe('ClubJoin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClubJoin />);
    expect(baseElement).toBeTruthy();
  });
});
