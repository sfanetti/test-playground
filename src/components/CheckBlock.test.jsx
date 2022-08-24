import { render, screen } from '@testing-library/react';
import CheckBlock from './CheckBlock';

test('it renders the checkblock input', () => {
    const {container} = render(<CheckBlock/>)

    const checkbox = container.querySelector('[data-test-checkblock-input]')
    expect(checkbox).toBeInTheDocument();
});