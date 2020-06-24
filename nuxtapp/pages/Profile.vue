<template>
<div>
<h1>Your Profile</h1>
<div class="updateProfile">
    <form action="/url" method="POST" enctype="multipart/form-data">
<input type="text" placeholder="Enter your name"  name="userName">
<br><br><br>
<input type="password" placeholder="Enter your password"  name="userPassword">
<br><br><br>
<input type="file" name="userImage">
<br>
<!-- <button type="button" @click="axiosconn" >Submit</button> -->
<button type="submit" >submit</button>
    </form>


</div>
<div class="demo">
   Dummy text: <input type="text" placeholder="Enter the text">
    <button type="button">Submit</button>
    <br><br><br>
    
    <nuxt-link to="/Profiles/user"> click here</nuxt-link>
    <button @click="fun2()">Takes to another route</button>
</div>




</div>
    
</template>
<script>
import axios from"axios";
// import multer from"multer";

export default {
    
    data(){
        return{
            username:"",
            userpassword:"",
            dummy:""

        }
    },
  

methods:{

    postdata(){
        var userData={
            name:this.username,
            password:this.userpassword
        }
        
        this.$axios.post('http://localhost:3000/us')
        .then(function(res){
            console.log('this is from the then part'+res)
        })
        .catch(function(e){
            console.log("this is an error "+e)
        })
        
    },
    axiosconn(){
           var userData={
            name:this.username,
            password:this.userpassword
        }
        
        console.log('this is from the axios conn');
        axios.post('/us',userData)
        .then(function(){
            console.log('this is from the then part');
        })
        .catch(function(e){
            console.log(e +" "+ 'this is an error')
        })
        .finally(()=>{
            console.log('this is from finally')
        })
    },
//     mongofun(){
//         const value=this.dummy;

        
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Kapil:Kapil@123@nuxt1.cl5ei.mongodb.net/Userdata?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("Userdata").collection("Signininfo");
//   // perform actions on the collection object
//   collection.insertOne(value);
//   client.close();
// });

//     }

fun2(){
    
    const data={name:"kapil",sirname:"chauhan",
    _id:'1'}
    axios.post('http://localhost:3000/user',data)
    .then(function(res){
        console.log("hi this is from the axios then");
        

    })
    .catch(function(e){
        console.log("this is from the error",+e);

    })
    console.log("hi");

}


},
// asyncData({res}) {
//     // alert("this is from the asyncdata");
//     console.log("hello");
//     console.log({res});
//     console.log("hi");
    
// },

}
</script>
<style scoped>
h1{
    position: relative;
    top:180px;
}
.updateProfile{
    position: relative;
    top:200px;
}
.demo{
    position:relative;
    top:600px;
    left:400px;
}

</style>