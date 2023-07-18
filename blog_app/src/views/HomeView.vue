<template>
  <div class="home">
    <PostList :posts="posts"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '../components/PostList.vue'
import getPosts from '../composables/Posts/getPost'

export default {
  name: 'HomeView',
  components: {
    PostList
  },
  setup(props){
    const {posts,error,load}= getPosts();
    load();

    return {posts,error};
  }
}
</script>
