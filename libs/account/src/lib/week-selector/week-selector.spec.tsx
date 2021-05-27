import { render } from '@testing-library/react';

import WeekSelector from './week-selector';

describe('WeekSelector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WeekSelector />);
    expect(baseElement).toBeTruthy();
  });
});
