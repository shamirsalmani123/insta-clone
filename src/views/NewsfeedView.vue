<template>
  <div>
    <Sidebar />

    <div class="d-flex flex-row justify-center align-center">
      <div>
        <!-- Stories -->
        <Stories />

        <!-- Posts -->
        <Posts />
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Stories from '@/components/Stories.vue';
import Posts from '@/components/Posts.vue';
export default {
  name: "NewsfeedView",

  components: {
    Sidebar,
    Stories,
    Posts
  }
}
</script>