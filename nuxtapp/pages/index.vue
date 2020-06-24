<template>
<div>
<div>
  <indexcomp  class="index_comp1"/>
</div>
  <div class="image-box">

      <div class="image" >

        <h1>hi</h1>


      </div>



  </div>
  

</div>
</template>

<script>

import indexcomp from"../components/indexcomp"
export default {
  name:"images",
  components:{
    indexcomp
    
  },
// 

  

  
  
  
  
  }
</script>
<style >

.image-box{

border:1px solid black;
width:100%;
height: auto;

}

.image{
  border:1px solid black;
  background-color: red;
  height: 20vh;
  width: 20%;
  margin-left: 5px;
}

</style>