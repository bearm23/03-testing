describe('Login specs', () => {
	it('visit the login page', () => {
		cy.visit('/');
	});

	it('should user input has the focus when it clicks on it', () => {
		// Arrange

		// Act
		cy.visit('/');
		cy.get('input[name="user"]').as('userInput');
		cy.get('@userInput').click();

		// Assert
		cy.get('@userInput').should('have.focus');
	});

	it('should show a snackbar alert with a message when type invalid credentials', () => {
		// Arrange
		const user = 'admin';
		const password = 'wrong password';

		// Act
		cy.visit('/');

		cy.get('input[name="user"]').as('userInput');
		cy.get('input[name="password"]').as('passwordInput');

		cy.get('@userInput').type(user);
		cy.get('@passwordInput').type(password);
		cy.get('button', { type: 'submit' }).click();

		// Assert
		cy.get('@userInput').should('have.value', user);
		cy.get('@passwordInput').should('have.value', password);
		cy.get('[data-cy="snackbar"]').should('exist').should(
			'have.text',
			'Usuario y/o password no válidos'
		);
	});

	it('should navigate to submodule-list url when type valid credentials', () => {
		// Arrange
		const user = 'admin';
		const password = 'test';

		// Act
		cy.visit('/');
		cy.get('input[name="user"]').as('userInput');
		cy.get('input[name="password"]').as('passwordInput');

		cy.get('@userInput').type(user);
		cy.get('@passwordInput').type(password);
		cy.get('button', { type: 'submit' }).click();

		// Assert
		cy.url().should('eq', 'http://localhost:8080/#/submodule-list');
	});
});