<template>
  <div class="effect">
    <h1>{{ msg }}</h1>
    <div class="content" ref="contentZqs">
         <ul class="item left" ref="ulLeft">
         </ul>
         <ul class="item middle" ref="ulMiddle">
         </ul>
         <ul class="item right" ref="ulRight">
         </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '基于vue2.0的瀑布流效果',
        pictures: [],
        cols: []
      };
    },
    created () {
      this.$http.get('/api/pic').then((response) => {
        this.pictures = response.body.data;
        this.$nextTick(() => {
          this.cols = this.$refs.contentZqs.children;
          console.log(this.pictures);
          this.initImg();
        });
      });
    },
    methods: {
       initImg: function () {
         var count = 1;
         console.log(count);
         for (var i = 0; i < this.pictures.length; i++) {
           var img = new Image();
           img.src = this.pictures[i];
           count++;
           if (count === this.pictures.length) {
              console.log(count);
              this.createImg();
           };
         }
       },
       createImg: function () {
         for (var i = 0; i < this.pictures.length; i++) {
           var oImg = document.createElement('img');
           oImg.src = this.pictures[i];
           oImg.width = 200;
           var minH = this.cols[0].offsetHeight;
           var index = 0;
           for (var j = 0; j < this.cols.length; j++) {
             if (this.cols[j].offsetHeight < minH) {
               minH = this.cols[j].offsetHeight;
               index = j;
             }
           }
           this.cols[index].appendChild(oImg);
         }
       }
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
   margin: 0 10%;
 }
  .item{
    width: 30%;
    float: left;
  }
  .item img{
    vertical-align: bottom;
  }
</style>
