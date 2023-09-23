import  express  from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import booksRoute from "./routes/booksRoute.js";

const app = express();

//middleware for parsing request body
app.use(express.json());


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to MERN stack tutorial");
})

app.use('/books', booksRoute);


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App listening to port ${PORT}`);
    })
  })    
  .catch((error) => {
    console.log(error);
  })