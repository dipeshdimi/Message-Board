const express = require('express');
const app = express();
const path = require('path');

const messageBoardRoute = require('./routes/message-board-route');
const messageFormRoute = require('./routes/message-form-route');
const passMessagesMiddleware = require('./middleware/pass-messages-middleware');

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

app.use(passMessagesMiddleware(messages));
app.use('/', messageBoardRoute);
app.use('/new', messageFormRoute);

const PORT = 5000;
app.listen(PORT, async (req, res) => {
        try {
            console.log(`Server Started Successfully at ${PORT}`)
        } catch {
            alert("There was issue in starting the server!!");
            console.log(res);
        }
    }
)