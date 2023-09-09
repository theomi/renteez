const express = require('express');
const app = express();
const port = 4000;

const aboutRouter = require('./routers/about');
const browseRouter = require('./routers/browse');
const contactRouter = require('./routers/contact');
const detailsRouter = require('./routers/details');
//const homeRouter = require('./routers/home');
//const postListingRouter = require('./routers/postListing');
//const signinRouter = require('./routers/signin');
//const signupRouter = require('./routers/signup');
//const userDetailsRouter = require('./routers/userDetails');
//const usersRouter = require('./routers/users');

app.use(express.json());


// Configure user routes
app.use('/api/about', aboutRouter);
app.use('/api/browse', browseRouter);
app.use('/api/contact', contactRouter);
app.use('/api/details', detailsRouter);
//app.use('/api/home', homeRouter);
//app.use('/api/postListing', postListingRouter);
//app.use('/api/signin', signinRouter);
//app.use('/api/signup', signupRouter);
//app.use('/api/userDetails', userDetailsRouter);
//app.use('/api/users', usersRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});