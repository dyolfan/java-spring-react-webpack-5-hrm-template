const express = require('express');
const path = require('path');
const app = express();
const portNumber = 4200;
const sourceDir = 'dist';

app.use(express.static(sourceDir));

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname + '/' + sourdeDir + '/' + 'index.html'));
});

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
