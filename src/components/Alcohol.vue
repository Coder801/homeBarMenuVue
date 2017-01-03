<template id="alcohol">
  <div class="header">
    <h1>Hello</h1>
    <ul>
      <li v-for="post in posts">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Alcohol',
  data () {
    return {
      endpoint: 'https://jsonplaceholder.typicode.com/todos/',
      posts: []
    }
  },
  methods: {
    getPosts () {
      const options = {
        params: {
          _start: 10,
          _limit: 5
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }

      this.$http.get(this.endpoint, options).then((response) => {
        this.posts = response.data
      }, (error) => {
        console.log(error)
      })
    }
  },
  created () {
    this.getPosts()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
