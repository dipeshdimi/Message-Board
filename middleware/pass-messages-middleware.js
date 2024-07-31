const passMessagesMiddleware = (myMessages) => {
    return (req, res, next) => {
        try {
            res.locals.messages = myMessages;
            next();
        } catch {
            console.log('Pass Messages Middleware');
        }
    };
}

module.exports = passMessagesMiddleware;