

const mongoose = require('mongoose');
const app = require('./app');
const config = require("./config");



//mongoose.connect('mongodb+srv://omora:bGCFJyqyYtzbtJrj@cluster0-fcce8.mongodb.net/', {dbName: 'test'});

/*
mongoose.connect('mongodb+srv://omora:bGCFJyqyYtzbtJrj@cluster0-fcce8.mongodb.net/test', (err, res)=>{
  if(err){
    console.log(`error al conectar a la bd ${err}`);
  }
  console.log(`Conexion establecida....`);
  app.listen(config.port, ()=>{
    console.log(`API REST corriendo en http://localhost:3001`);
  })
}
);
*/


mongoose.connect('mongodb+srv://omora:bGCFJyqyYtzbtJrj@cluster0-fcce8.mongodb.net/test', function(err){
  if(err){
    console.log(err);
  }else {
    console.log("Conected to DataBase.");
    app.listen(config.port, ()=>{
      console.log(`API REST corriendo en http://localhost:3001`);
    })
  }
});

