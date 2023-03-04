import * as React from 'react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('common/components/confirmation-dialog/confirmation-dialog.component specs', () => {
	it('should render correctly passing it the required properties', () => {
		// Arrange
		const props = {
			isOpen: true,
			onAccept: () => { },
			onClose: () => { },
			title: 'test title',
			labels: {
				closeButton: 'test close button',
				acceptButton: 'test accept button',
			},
			children: <h1>Test children</h1>,
		};

		// Act
		const { getByText, getByLabelText } = render(
			<ConfirmationDialogComponent {...props} />
		);

		// Assert
		expect(getByText(props.title)).toBeInTheDocument();
		const childrenH1Element = screen.getByRole('heading', { level: 1 });
		expect(childrenH1Element).toBeInTheDocument();
	});

	it('should execute accept and close functions when click button primary', async () => {
		// Arrange
		const props = {
			isOpen: true,
			onAccept: jest.fn(),
			onClose: jest.fn(),
			title: 'test title',
			labels: {
				closeButton: 'test close button',
				acceptButton: 'test accept button',
			},
			children: <h1>Test children</h1>,
		};

		// Act
		render(<ConfirmationDialogComponent {...props} />);
		const buttonPrimaryElement = screen.getByRole('button', {
			name: props.labels.acceptButton,
		});
		await userEvent.click(buttonPrimaryElement);

		// Assert
		expect(props.onAccept).toHaveBeenCalled();
		expect(props.onClose).toHaveBeenCalled();
	});
});
