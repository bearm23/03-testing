import React from 'react';
import { render } from '@testing-library/react';
import { usePromiseTracker } from 'react-promise-tracker';
import { SpinnerComponent } from './spinner.component';

jest.mock('react-promise-tracker');

describe('common/components/spinner/spinner.component specs', () => {
	it('should render the SpinnerComponent', () => {
		// Arrange
		(usePromiseTracker as jest.Mock).mockImplementation(() => ({
			promiseInProgress: true,
		}));

		// Act
		const { getByRole } = render(<SpinnerComponent />);

		// Assert
		expect(getByRole('presentation')).toBeInTheDocument();
		expect(getByRole('presentation')).toBeVisible();
	});

	it('should not render the SpinnerComponent', () => {
		// Arrange
		(usePromiseTracker as jest.Mock).mockImplementation(() => ({
			promiseInProgress: false,
		}));

		// Act
		const { queryByTestId } = render(<SpinnerComponent />);

		// Assert
		expect(queryByTestId('spinner-component')).not.toBeInTheDocument();
	});
});
