import { render } from '@testing-library/react';

import CurrentIngredients from './current-ingredients';

describe('CurrentIngredients', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CurrentIngredients />);
    expect(baseElement).toBeTruthy();
  });
});
