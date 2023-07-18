<template>
  <div class="post-list">
    <div v-for='post in posts' :key="post.id">
        <!-- <p>{{post.title}}</p>
        <p>{{post.body}}</p> -->
    <SinglePost :post="post"/>
    </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue';

export default {
    props:['posts'],
    components:{SinglePost},
    setup(props){

    }
}
</script>

<style>

</style>