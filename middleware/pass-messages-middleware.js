const passMessagesMiddleware = (myMessages) => {
    return (req, res, next) => {
        try {
            res.locals.messages = myMessages;
            next();
        } catch(err) {
            res.send("Couldn't share the default message array with res.locals!");
            console.log('Error in Pass Messages Middleware: ', err);
        }
    };
}

module.exports = passMessagesMiddleware;