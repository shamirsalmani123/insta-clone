<template>
  <div>
    <!-- Post Container -->
    <v-card 
      v-for="post in allPosts" :key="post.id"
      class="d-flex flex-column px-4 py-4 mt-8 border border-black">
      <!-- Post Header -->
      <div class="d-flex flex-row justify-space-between align-center">
        <div class="d-flex flex-row">
          <v-avatar
           width="30"
           height="30"
          >
            <img 
              :src= "post.image"
            />
          </v-avatar>
          <p class="pt-1 text font-weight-medium">{{ post.username }}</p>
          <p class="px-2 grey--text font-weight-black">.</p>
          <p class="grey--text text pt-1">14 min</p>
        </div>

        <div>
          <p class="font-weight-black">...</p>
        </div>
      </div>

      <!-- Post Image -->
      <div
        v-on:dblclick="increment(post)"
      >
        <v-avatar
         tile
         size="475"
        >
          <img 
           :src="post.image" alt=""
          />
        </v-avatar>
      </div>

      <!-- Post Footer -->
      <div class="d-flex flex-row justify-space-between">
        <!-- Like, Comment, Share Icon -->
        <div class="d-flex flex-row mt-2">
          <div>
            <span
              v-if="post.isLiked == false"
             @click="increment(post)" class="material-icons pr-2 pointer">
              favorite_border
            </span>
            <span
              v-if="post.isLiked == true"
             @click="increment(post)" class="material-icons red--text pr-2 pointer">
              favorite
            </span>
          </div>

          <div>
            <span class="material-icons pr-2">
              chat_bubble_outline
            </span>
          </div>

          <div>
            <span class="material-icons">
              send
            </span>
          </div>
        </div>
        <!-- Save Icon -->
        <div class="mt-2">
          <div>
            <span class="material-icons">
              bookmark
            </span>
          </div>
        </div>
      </div>

      <!-- Captions and Comments -->
      <div class="d-flex flex-row">
        <v-avatar
          size="15"
          class="mt-1"
        >
          <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="">
        </v-avatar>
        <v-avatar
          size="15"
          class="mt-1"
        >
          <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="">
        </v-avatar>

        <p class="pl-2 like">Liked by <span class="font-weight-bold">daaniyalmerijaan</span> and <span class="font-weight-bold">{{post.likes}} others</span></p>
      </div>

      <div class="d-flex flex-row ">
        <p class="font-weight-medium like">{{ post.username }}</p> 
        <p class="pl-1 like">{{ post.caption }}</p>
      </div>

      <div>
        <router-link
          :to="{name: 'SinglePostView', params: { slug: post.id} }"
        >
          <p 
            class="grey--text mt-0" 
          >
            View all 15 comments
          </p>
        </router-link>
        
      </div>

      <!-- Comment Input -->
      <v-form

      >
        <v-text-field
         placeholder="Add Comment"
         onkeyup=""
         v-model="title"
        >

        </v-text-field>

        <v-btn
          @click="addComment(post.id)"
        >
          Add
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "Posts",
  data() {
    return {
      title: ""
    }
  },
  methods: {
    increment(post) {
      this.$store.dispatch('increaseLike', post)
    },
    addComment(item) {
      console.log("hey", item)
      if(!this.title) {
        alert("Please add a Comment")
      }

      const newComment = { title: this.title,
        id: item
      }
    console.log("comment",newComment)
      this.$store.dispatch('addComment', newComment)
      
      this.title = ""

    }
  },
  computed: mapGetters(['allPosts'])
}
</script>

<style scoped>
.text {
  font-size: 15px;
}

.like {
  font-size: 15px;
}

.pointer {
  cursor: pointer;
}

</style>