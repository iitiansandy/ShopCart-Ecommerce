const { CategoryRepo } = require('../../src/repositories/index');
const { Category  } = require('../../src/models');

const mockCategory = {
    id: 1,
    name: 'Education',
    description: 'Education category',
    createdAt: "2024-01-05T16:10:56.000Z",
    updatedAt: "2024-01-05T16:10:56.000Z"
};

const mockError = {error: 'sample error'};

describe('Tests for category repository category creation', () => {
    test('should create a new category', async() => {
        // Prepare
        const repository = new CategoryRepo();
        jest.spyOn(Category, 'create').mockImplementation(() => mockCategory);

        // Act
        const response = await repository.createCategory('Education', 'Education category');

        // Expect / Assert
        expect(response.name).toBe('Education');
        expect(response.description).toBe('Education category');
    });

    test('should not create a new category and throws an exception', async() => {
        // Prepare
        const repository = new CategoryRepo();
        jest.spyOn(Category, 'create').mockImplementation(() => {
            throw mockError;
        });

        // Act
        
        try {
            //  expect(async () => await repository.createCategory('Education', 'Education category')).toThrow();
            const response = await repository.createCategory('Education', 'Education category');
        } catch (error) {
            expect(error).toBe(mockError);
        }

        // Expect / Assert
       
        // expect(response.description).toBe('Education category');
    })
})