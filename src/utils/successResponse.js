function successResponse (message, data) {
    let successObj = {
        success: true,
        message,
        data,
        error
    }
    return successObj;
};

module.exports = { successResponse };