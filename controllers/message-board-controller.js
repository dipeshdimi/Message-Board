const getMessages = async (req, res) => {
    res.render("message-board", {messages: res.locals.messages});
}

module.exports = getMessages;