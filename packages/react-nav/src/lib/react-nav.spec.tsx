import { render } from '@testing-library/react';

import ReactNav from './react-nav';

describe('ReactNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactNav />);
    expect(baseElement).toBeTruthy();
  });
});
