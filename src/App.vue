<template>
    <router-view></router-view>
</template>

<script>
  export default{
    components:{
      
    },
    data(){
        return{

        }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>

<style>
body{
  background-color: var(--background-color);
}
/* 滚动条的宽度和轨道样式 */
body::-webkit-scrollbar {
  width:4px;
}
/* 滚动条轨道 */
body::-webkit-scrollbar-track {
  background: var(--background-color);
}

/* 滚动条手柄 */
body::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb); 
  border-radius: 4px;
}

/* 滚动条手柄悬停效果 */
body::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb);
}
html{
  scroll-behavior: smooth;
}
</style>