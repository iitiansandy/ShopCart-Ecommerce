class BadReques extends Error {
    constructor(message) {
        super(message)
        this.statusCode = 400;
        this.message = message;
    }
};

module.exports = BadReques;