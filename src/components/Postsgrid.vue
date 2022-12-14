<template>
  <div>
    <v-container
      v-for="post in allPosts"
      :key="post.id"
      class=""
    >
      <v-row>
        <v-col
          v-for="n in 3"
          :key="n"
        >
          <v-card
            class="pa-2"
            tile
            elevation="0"
          >
            <v-avatar
              tile
              size="250"
            >
              <img 
              :src="post.image" alt=""
              />
            </v-avatar>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Postgrid",
  computed: mapGetters(['allPosts'])
}
</script>

<style scoped>

</style>