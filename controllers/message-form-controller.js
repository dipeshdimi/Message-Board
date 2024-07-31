const getForm = async (req, res) => {
    res.send("Form");
}

const postForm = async (req, res) => {
    res.send("Form Post");
}

module.exports = {getForm, postForm};