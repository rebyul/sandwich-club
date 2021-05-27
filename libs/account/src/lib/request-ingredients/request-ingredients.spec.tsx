import { render } from '@testing-library/react';

import RequestIngredients from './request-ingredients';

describe('RequestIngredients', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RequestIngredients />);
    expect(baseElement).toBeTruthy();
  });
});
