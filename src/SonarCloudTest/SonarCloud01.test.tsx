import { describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import SonarCloud01 from './SonarCloud01';

describe('<SonarCloud01 />', () => {
	it('should render test', () => {
		render(<SonarCloud01 />);
		expect(screen.getByText('SonarCloud01')).toBeInTheDocument();
	});
});
