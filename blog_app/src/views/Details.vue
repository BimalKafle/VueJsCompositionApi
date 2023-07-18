<template>
  <div class="container">
    <div v-if="error">{{error}}</div>
    <div class="post" v-if="post">
                <h1>{{post.title}}</h1>
                <p>{{post.body}}</p>
                <span v-for="tag in post.tags" :key="tag">
                    #{{tag}}    
                </span> 
    </div>

  </div>
</template>

<script>
import getPostDetail from '../composables/Posts/getPostDetail'
export default {
props:['id'],
setup(props){
    const {post,error,load}=getPostDetail(props.id);
    load();
    return {post,error};
    }
}
</script>

<style>

</style>