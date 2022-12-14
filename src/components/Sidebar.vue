<template>
  <v-card
   width="250"
   outlined
   tile
   class="sidebar"
  >
    <div class="d-flex flex-column justify-space-around ml-6 pt-4">
      <v-img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
        max-width="125"
        class="mt-4"
      />

      <div class="links ">
        <div></div>
        <router-link
          to="/newsfeed"
        >
          <p class="font-weight-bold py-3">Home</p>
        </router-link>
        <p class="font-weight-regular py-3">Search</p>
        <p class="font-weight-regular py-3">Explore</p>
        <p class="font-weight-regular py-3">Messages</p>
        <p class="font-weight-regular py-3">Notification</p>
        <p class="font-weight-regular py-3">Create</p>
        <router-link
          to="/profile"
        >
          <p class="font-weight-regular py-3">Profile</p>
        </router-link>
        
      </div>

      <div class="logout">
        Logout
      </div>
    </div>
  
  </v-card>
</template>

<script>
export default {
  name: "sidebar"
}
</script>

<style scoped>
.sidebar{
  position: fixed;
  width: 300px;
  height: 100vh;
  top: 50%;
  transform: translateY(-50%);
}

.links {
  margin-top: 50px;
}

.logout {
  margin-top: 175px;
}
</style>