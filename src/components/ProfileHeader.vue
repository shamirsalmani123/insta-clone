<template>
    <div class="d-flex flex-row justify-space-between align-center mt-8">
      <!-- Profile Image -->
      <div>
        <v-avatar
          size="175"
        >
          <img src="https://randomuser.me/api/portraits/women/5.jpg" alt="">
        </v-avatar>
      </div>
      
      <!-- Details section -->
      <div class="d-flex flex-column mx-16">
        <div class="d-flex flex-row justify-space-between align-center">
          <h2 class="font-weight-medium">sameeer_salmani</h2>
          <v-btn
            class="ma-2 px-1"
            outlined
            
          >
            Edit profile
          </v-btn>
          <span class="material-icons">
            settings_border
          </span>
        </div>

        <div class="d-flex flex-row justify-space-between align-center my-3">
          <div class="">16 posts</div>
          <div>357 followers</div>
          <div>918 following</div>
        </div>

        <div class="d-flex flex-column mt-3">
          <h4 class="font-weight-medium">Sameer Salmani</h4>
          <p>This is my bio</p>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "ProfileHeader"
}
</script>

<style scoped>

</style>