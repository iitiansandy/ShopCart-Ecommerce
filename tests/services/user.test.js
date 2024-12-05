const bcrypt = require('bcrypt');

const { UserRepo, CartRepo } = require('../../src/repositories');
const AuthUtils = require('../../src/utils/auth');
const UserService = require('../../src/services/userService');
jest.mock('../../src/repositories/userRepo');
jest.mock('../../src/repositories/cartRepo');
jest.mock('../../src/utils/auth');


const mockUser = {
    id: 1,
    email: 'a@b.com',
    password: 'Pass@123',
    createdAt: '2022-12-12',
    updatedAt: '2022-12-12'
}

describe('Test for user service signin user', () => {

    beforeAll(() => {
        jest.clearAllMocks();
    })

    test('should return valid jwt token', async () => {
        // Prepare. 
        UserRepo.mockImplementation(() => {
            return {
                getUserByEmail: (email) => {
                    return mockUser;
                },
                getUsers: () => {
                    return [mockUser];
                },
                getUser: (id) => {  
                    return mockUser;
                },
            }
        });

        AuthUtils.generateJWT.mockImplementation(() => 'token');
        console.log(AuthUtils.generateJWT());
        jest.spyOn(bcrypt, 'compareSync').mockImplementation(() => true);
        const userService = new UserService(new UserRepo(), new CartRepo());
        
        // Act.
        const response = await userService.signInUser({email: 'a@b.com', password: '12345'});

        // Assert.
        expect(response).toBe('token');
    });

    test('should throw UnauthorizedError for password mismatch', async () => {
        // Prepare. 
        UserRepo.mockImplementation(() => {
            return {
                getUserByEmail: (email) => {
                    return mockUser;
                },
                getUsers: () => {
                    return [mockUser];
                },
                getUser: (id) => {  
                    return mockUser;
                },
            }
        });

        AuthUtils.generateJWT.mockImplementation(() => 'token');
        jest.spyOn(bcrypt, 'compareSync').mockImplementation(() => false);
        const userService = new UserService(new UserRepo(), new CartRepo());
        
        try {
            // Act.
            const response = await userService.signInUser({email: 'a@b.com', password: '12345'});
        } catch(error) {
            expect(error.name).toBe("UnauthorizedError")
        }
    });

    test('should throw NotFoundError for invalid user', async () => {
        // Prepare. 
        UserRepo.mockImplementation(() => {
            return {
                getUserByEmail: (email) => {
                    return undefined;
                },
                getUsers: () => {
                    return [];
                },
                getUser: (id) => {  
                    return undefined;
                },
            }
        });

        AuthUtils.generateJWT.mockImplementation(() => 'token');
        jest.spyOn(bcrypt, 'compareSync').mockImplementation(() => true);
        const userService = new UserService(new UserRepo(), new CartRepo());
        
        try {
            // Act.
            const response = await userService.signInUser({email: 'a@b.com', password: '12345'});
        } catch(error) {
            expect(error.name).toBe("NotFound")
        }
    });
}) 