const express = require('express')
const port = process.env.PORT || 3000;
const path = require('path')
const {db} = require('./db')
// const cors = require('cors')
// const volleyball = require('volleyball')
const app = express()

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

// app.use(cors())
// app.use(volleyball)
app.use(express.json());

//this is where some things should go
app.use('/api', require('./api'))


app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
  });

  const init = async () => {
    await db.sync();
    app.listen(port, () => console.log(`listening on port ${port}`));	
  };
  
  init();


module.exports = app;

