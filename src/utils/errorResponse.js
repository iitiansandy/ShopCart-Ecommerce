function errorResponse (message, error) {
    let errorObj = {
        success: false,
        message,
        data: {},
        error 
    }
    return errorObj;
};

module.exports = { errorResponse };