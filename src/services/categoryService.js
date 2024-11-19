class CategoryService {
    constructor(repository) {
        this.repository = repository;
    }

    async createCategory (category) {
        const response = await this.repository.createCategory(category.name, category.description);
        return response;
    }
};


module.exports = CategoryService;