require("dotenv").config()
const express = require('express');
const path = require('path');

const messageBoardRoute = require('./routes/message-board-route');
const messageFormRoute = require('./routes/message-form-route');
const passMessagesMiddleware = require('./middleware/pass-messages-middleware');

const app = express();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));

app.use(passMessagesMiddleware(messages));
app.use('/', messageBoardRoute);
app.use('/new', messageFormRoute);

const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
        try {
            console.log(`Server Started Successfully at ${PORT}`)
        } catch(err) {
            res.send("There was issue in starting the server!!");
            console.log(err);
        }
    }
)