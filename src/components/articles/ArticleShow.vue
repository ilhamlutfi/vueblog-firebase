<template>
    <router-link :to="{ name: 'ShowArticle', params: { id: showArticle.id } }">
        <h2 class="post-title">
            {{ showArticle.title }}
        </h2>

        <h3 class="post-subtitle">
            {{ snippet }}
        </h3>
    </router-link>

    <span v-for="tag in showArticle.tags" :key="tag" class="post-meta">
       #{{ tag }}
    </span>
</template>

<script>
    import {
        computed
    } from 'vue'
    export default {
        props: ['showArticle'],

        setup(props) {
            const snippet = computed(() => {
                return props.showArticle.content.substring(0, 50) + '...'
            })

            return {
                snippet
            }
        },
    }
</script>
