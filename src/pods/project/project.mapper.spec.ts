import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('pods/project/project.mapper specs', () => {
	it('should return expected result when values are correct', () => {
		// Arrange
		const project: apiModel.Project = {
			id: 'id',
			name: 'name',
			externalId: 'externalId',
			comments: 'comments',
			isActive: true,
			employees: [
				{
					id: 'employee id',
					isAssigned: true,
					employeeName: 'employee name',
				},
			],
		};

		const expectedResult: viewModel.Project = {
			id: 'id',
			name: 'name',
			externalId: 'externalId',
			comments: 'comments',
			isActive: true,
			employees: [
				{
					id: 'employee id',
					isAssigned: true,
					employeeName: 'employee name',
				},
			],
		};

		// Act
		const result = mapProjectFromApiToVm(project);

		// Assert
		expect(result).toEqual(expectedResult);
	});

	it('should return empty project if project is undefined', () => {
		// Arrange
		const employee = undefined;

		// Act
		const result = mapProjectFromApiToVm(employee);

		// Assert
		expect(result).toEqual(viewModel.createEmptyProject());
	});

	it('should return empty project if project is null', () => {
		// Arrange
		const project = null;

		// Act
		const result = mapProjectFromApiToVm(project);

		// Assert
		expect(result).toEqual(viewModel.createEmptyProject());
	});

	it('should return expected result when employees is undefined', () => {
		// Arrange
		const project: apiModel.Project = {
			id: 'id',
			name: 'name',
			externalId: 'externalId',
			comments: 'comments',
			isActive: true,
			employees: undefined,
		};

		const expectedResult: viewModel.Project = {
			id: 'id',
			name: 'name',
			externalId: 'externalId',
			comments: 'comments',
			isActive: true,
			employees: [],
		};

		// Act
		const result = mapProjectFromApiToVm(project);

		// Assert
		expect(result).toEqual(expectedResult);
	});

	it('should return expected result when employees is null', () => {
		// Arrange
		const project: apiModel.Project = {
			id: 'id',
			name: 'name',
			externalId: 'externalId',
			comments: 'comments',
			isActive: true,
			employees: null,
		};

		const expectedResult: viewModel.Project = {
			id: 'id',
			name: 'name',
			externalId: 'externalId',
			comments: 'comments',
			isActive: true,
			employees: [],
		};

		// Act
		const result = mapProjectFromApiToVm(project);

		// Assert
		expect(result).toEqual(expectedResult);
	});
});
