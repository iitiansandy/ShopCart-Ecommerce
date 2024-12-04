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
            const response = await repository.createCategory('Education', 'Education category');
        } catch (error) {
            expect(error).toBe(mockError);
        }
    })
});

describe('Tests for category repository get category', () => {
    test('should get one category', async() => {
        // Prepare
        const repository = new CategoryRepo();
        jest.spyOn(Category, 'findByPk').mockImplementation(() => mockCategory);

        // Act
        const response = await repository.getCategory(1);
        // Expect / Assert
        expect(response.name).toBe('Education');
        expect(response.description).toBe('Education category');
    });

    test('should not get a category and throws an exception', async() => {
        // Prepare
        const repository = new CategoryRepo();
        jest.spyOn(Category, 'findByPk').mockImplementation(() => {
            throw mockError;
        });

        // Act
        try {
            const response = await repository.getCategory(1);
        } catch (error) {
            expect(error).toBe(mockError);
        }
    })
});

describe('Tests for category repository get categories', () => {
    test('should get all categories', async() => {
        // Prepare
        const repository = new CategoryRepo();
        jest.spyOn(Category, 'findAll').mockImplementation(() => [mockCategory]);

        // Act
        const response = await repository.getCategories();
        // Expect / Assert
        expect(response).toHaveLength(1);
        expect(response).toContain(mockCategory);
    });

    test('should not get all categories and throws an exception', async() => {
        // Prepare
        const repository = new CategoryRepo();
        jest.spyOn(Category, 'findAll').mockImplementation(() => {
            throw mockError;
        });

        // Act
        try {
            const response = await repository.getCategories();
        } catch (error) {
            expect(error).toBe(mockError);
        }
    });
});

describe('Tests for category repository destroy category', () => {
    test('should delete one category', async() => {
        // Prepare
        const repository = new CategoryRepo();
        jest.spyOn(Category, 'destroy').mockImplementation(() => 1);

        // Act
        const response = await repository.destroyCategory(1);
        // Expect / Assert
        expect(response).toBe(1);
    });

    test('should not delete category and throws an exception', async() => {
        // Prepare
        const repository = new CategoryRepo();
        jest.spyOn(Category, 'destroy').mockImplementation(() => {
            throw mockError;
        });

        // Act
        try {
            const response = await repository.destroyCategory(1);
        } catch (error) {
            expect(error).toBe(mockError);
        }
    });
});