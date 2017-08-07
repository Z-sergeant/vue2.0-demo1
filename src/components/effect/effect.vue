<template>
  <div class="effect">
    <h1>{{ msg }}</h1>
    <div class="content">
         <ul class="item left">
           <li v-for="val in pictures" class="pic">
             <img :src="val" width="90%"/>
           </li>
         </ul>
         <ul class="item middle">
         </ul>
         <ul class="item right">
         </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '基于vue2.0的瀑布流效果',
        pictures: []
      };
    },
    created () {
      this.$http.get('/api/pic').then((response) => {
        this.pictures = response.body.data;
        console.log(this.pictures);
      });
    },
    methods: {

    }
  };
</script>


<style scoped>
  ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
.effect {
  height: 60px;
  margin: auto;
}
 .content{
   background-color: skyblue;
   width: 80%;
   min-height: 200px;
   margin: 0 10%;
   display: flex;
 }
  .item{
    flex: 1;
    padding: 5%;
  }
  .left{
    background-color: red;
  }
  .middle{
    background-color: orange;
  }
  .right{
    background-color: deepskyblue;
  }
  .pic{
    background-color: #ccc;
    border-radius: 5%;
    padding: 5%;
    margin:5%;
  }
</style>
