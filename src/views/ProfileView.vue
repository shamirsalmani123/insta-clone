<template>
  <v-main>
    <Sidebar />

    <div class="d-flex flex-column justify-center align-center">
      <div class="d-flex flex-row justify-center align-center">
        <ProfileHeader />
      </div>

      <Highlights />

      <!-- Posts Grid -->
      <Postsgrid />
    </div>
  </v-main>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import ProfileHeader from '@/components/ProfileHeader.vue'
import Highlights from '@/components/Highlights.vue';
import Postsgrid from '@/components/Postsgrid.vue';
export default {
  name: "ProfileView",

  components: {
    Sidebar,
    ProfileHeader,
    Highlights,
    Postsgrid
  }
}
</script>

<style scoped>

</style>