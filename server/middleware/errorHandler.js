const errorHandler = (error, req, res, next) => {
    const statusCode = err.statusCode = error.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        success: false,
        type: "ERROR",
        message
    })
}

module.exports = errorHandler;