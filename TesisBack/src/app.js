const express = require('express');
const app = express();
console.log("Hola Mundo");
app.listen(3001,()=>{
    console.log("Server running on port 3001");
});