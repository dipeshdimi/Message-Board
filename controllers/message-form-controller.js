const getForm = (req, res) => {
    try {
        res.render("new-message-form");
    } catch(err) {
        res.send("Couldn't fetch the form!");
        console.log(err);
    }
}

const postForm = (req, res) => {
    try {
        const { text, user } = req.body;
        
        res.locals.messages.push({
            text: text, 
            user: user, 
            added: new Date()
        });
        
        res.redirect("/");
    } catch(err) {
        res.send("Failed to add the message to the message board!");
        console.log(err);
    }
}

module.exports = {getForm, postForm}; 