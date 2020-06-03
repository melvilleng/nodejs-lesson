const express = require('express')

let app = express();

/*Routes*/
app.get('/',function(req,res){
    res.send("Hellow from Express")
})

/*END ROUTES*/


app.listen(3000,()=>{
    console.log("Server started")
})