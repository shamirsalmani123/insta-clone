<template>
  <div>
    <sidebar />
      
    <Post v-if="post" :post = 'post'/>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Post from '@/components/Post.vue';
import { computed } from 'vue';
import { mapGetters } from 'vuex';
export default {
  name: "SinglePostView",
components: {
    Sidebar,
    Post
  },
  data: () => ({
    post: null
  }),
  computed: {
    posts() {
      return this.$store.getters['allPosts']
    }
  },

  mounted() {
    console.log(this.posts)
    const item = this.posts.find((search) => search.id == this.$route.params.slug)
    if(item !== null){
      this.post = item
      
    }
    console.log(this.$route.params.slug)

  }


}
</script>

<style scoped>
.single-post {
  margin-left: 300px;
}
</style>