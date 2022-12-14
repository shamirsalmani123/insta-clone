<template>
  <div class="d-flex flex-row justify-space-between align-center mt-10">
    <div
      v-for="(item, index) in items" :key="index"
      class="d-flex flex-column align-center justify-center mx-2">
      <v-avatar
       width="60"
       height="60"
      >
        <img
          :src="item.url"
          alt="John"
          class="border"
        >
      </v-avatar>
      <p class="text pt-1">
        {{ item.username }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stories",
  data: () => ({
    items: [
      {
        username: 'dishant_rai',
        url: 'https://cdn.vuetifyjs.com/images/john.jpg'
      },
      {
        username: 'swati_yadav',
        url: 'https://randomuser.me/api/portraits/women/5.jpg'
      },
      {
        username: 'devsaurabh',
        url: 'https://randomuser.me/api/portraits/men/5.jpg'
      },
      {
        username: '_.gupta_kajal',
        url: 'https://randomuser.me/api/portraits/women/4.jpg'
      },
      {
        username: 'Kuky_singh',
        url: 'https://randomuser.me/api/portraits/women/7.jpg'
      },
      {
        username: 'mostlysane',
        url: 'https://randomuser.me/api/portraits/men/10.jpg'
      }
    ]
  })
}
</script>

<style scoped>

.border {
  border: 2px solid red;
}
.text {
  font-size: 12px;
}
</style>