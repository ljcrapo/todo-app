import mongoose from 'mongoose';
import * as db from '../models';

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reacttypescripttodo"
);

const todoSeed = [
  // TODO: add seed items
];

db.Todo
  .remove({})
  .then(() => db.Todo.collection.insertMany(todoSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
