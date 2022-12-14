<template>
  <v-main>
    <h1>Explore</h1>
  </v-main>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Postsgrid from '@/components/Postsgrid.vue';
import { mapGetters } from 'vuex';

export default {
  name: "ExploreView",
  computed: mapGetters(["allPosts"]),
  components: {
    Sidebar,
    Postsgrid
  }
}
</script>

<style scoped>

</style>