import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [
      {
        id: 1,
        image: "https://randomuser.me/api/portraits/men/15.jpg",
        username: 'dishant_rai',
        caption: "This is a caption",
        likes: 1232,
        isLiked: false,
        Comments: [
          
            "blah blah",
          
        
            "Nice pic dear",
          
          
            "I love this post"
        
        ]
      },
      {
        id: 2,
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        username: 'devsaurabh',
        caption: 'This is a caption', 
        likes: 1654,
        isLiked: false,
        Comments: [
          {
            content: "This is a"
          },
          {
            content: "Nice pic dear"
          },
          {
            content: "I love this post"
          }
        ]
      },
      {
        id: 3,
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        username: 'notreallyaarifa',
        caption: "this is a caption",
        likes: 6754,
        isLiked: false,
        Comments: [
          {
            content: "blah blah"
          },
          {
            content: "Nice pic dear"
          },
          {
            content: "I love this post"
          }
        ]
      },
      {
        id: 4,
        image: "https://randomuser.me/api/portraits/women/76.jpg",
        username: 'ohreeba',
        caption: "This is a caption",
        likes: 765,
        isLiked: false,
        Comments: [
          {
            content: "blah blah"
          },
          {
            content: "Nice pic dear"
          },
          {
            content: "I love this post"
          }
        ]
      },
      {
        id: 5,
        image: "https://randomuser.me/api/portraits/men/87.jpg",
        username: 'agyat_sunet',
        caption: "This is a caption",
        likes: 654,
        isLiked: false,
        Comments: [
          {
            content: "blah blah"
          },
          {
            content: "Nice pic dear"
          },
          {
            content: "I love this post"
          }
        ]
      } 
    ]
  },
  getters: {
    allPosts: (state) => state.posts

  },
  mutations: {
    INCREMENT(state , post) {
      const index =  state.posts.findIndex((search) => search.id == post.id)

      if(index !== -1){
        if(post.isLiked === false) {
          post.likes++
          post.isLiked = !post.isLiked
        } else {
          post.likes--
          post.isLiked = !post.isLiked
        }
      }
    },
    ADD_COMMENT(state, payload) {
      const index = state.posts.findIndex((search) => search.id == payload.id)

      if(index !== null){
        const item = state.posts[index].Comments;
        item.push(payload.title);
        
        console.log("state",state.posts[index])
      }
    }
  },
  actions: {
    // likeIncrement({commit}) {
    //   this.posts.likes++
    //   commit('likeIncrement');
    // }

    increaseLike: ({ commit }, payload) => commit('INCREMENT', payload),
    addComment: ({ commit }, payload) => commit('ADD_COMMENT', payload)
  },
  modules: {
  }
})
