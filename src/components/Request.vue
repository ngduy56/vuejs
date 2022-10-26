<template>
    <ul v-if="posts && posts.length">
        <li v-for="post of posts" :key="post.title">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
        </li>
    </ul>
</template>

<script>
import axios from 'axios';
export default {
    name: 'request-ex',
    data() {
        return {
            posts: [],
        }
    },
    async created() {
        await axios.get(`http://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                this.posts = response.data
            })
            .catch(e => {
                this.errors.push(e)
            })
    },
}
</script>

<style>

</style>