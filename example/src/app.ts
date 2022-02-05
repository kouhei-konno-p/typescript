import express = require('express')
import * as indexRouter from "./routes/index";
import * as usersRouter from "./routes/users";

const app = express();
app.use('/', indexRouter.index);
app.use('/users', usersRouter.index);

export default app;