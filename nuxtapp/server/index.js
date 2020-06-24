const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express();
const bodyParser=require('body-parser');
const cors=require('cors')
const MongoClient = require('mongodb').MongoClient;
const multer=require("multer");
const fs=require("fs");
const storage=multer.memoryStorage();
const upload=multer({storage:storage})
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());




// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'


async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  const serve=app.listen(port, host)


const io=require('socket.io')(serve);
var count=0;
var nsp=io.of('/About');
nsp.on('connection',(socket)=>{

  count++;

  
  console.log('someone is connected');

  io.of('About').emit('usersno',count);
  
  


//hearing on usermsg event
  socket.on('usermsg',(data)=>{
    console.log(data);
    // io.of('About').emit('msg',data);
    socket.broadcast.emit('msg', data);
  })

//disconnect basic
  socket.on('disconnect',(socket)=>{
    console.log('User is disconnected');
    count--
  })









  

});



  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
app.post('/user',(req,res)=>{
  console.log("this is form the happy portion");
const userinfo=req.body;
  

const uri = "mongodb+srv://Kapil:Kapil@123@nuxt1.cl5ei.mongodb.net/Userdata?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("Userdata").collection("Signininfo");
  // perform actions on the collection object
  collection.insertOne(userinfo);
  // collection.findOne({_id:"1"},function(err,result){
  //   if(err) throw err;
  //   console.log(result);
    client.close();
  // });
  

});
console.log(userinfo,"this is ip adderss");

  
})

app.post("/url",upload.single("userImage"),(req,res)=>{
  console.log("this is from the url");
console.log(req.body.userName,req.file);
const base64img=req.file.buffer.toString('base64');
console.log(base64img);
const img=base64img .toFormat('jpeg');

fs.writeFile("./multer/multer2",img,{encoding:'base64'},function(e){
  if(e){
    console.log(`error occured ${e}`);
  }
  else{
    
    console.log('file is created');
  }
})

 


  res.send("hi");
})

start()

