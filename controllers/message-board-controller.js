const getMessages = (req, res) => {
    try {
        res.render("message-board", {messages: res.locals.messages});
    } catch(err) {
        res.send("There was an issue in fetching the messages!!");
        console.log(err);
    }
}

const getMessageDetails = (req, res) => {
    try {
        const activeMessage = res.locals.messages.find(msg => msg.user + '_' + msg.added.toUTCString() === req.query.id);
        res.render("message-details", {activeMessage: activeMessage});
    } catch(err) {
        res.send("There was issue in fetching the message details!");
        console.log(err);
    }
}

module.exports = {getMessages, getMessageDetails};