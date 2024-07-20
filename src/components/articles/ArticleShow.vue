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
        <router-link :to="{ name: 'ArticleTag', params: { tag: tag }}">
            <span :class="activeTag(tag)" id="tag">
                #{{ tag }}
            </span>
        </router-link>
    </span>
</template>

<script>
    import {
        computed
    } from 'vue'
    import { useRoute } from 'vue-router';
    export default {
        props: ['showArticle'],

    setup(props) {
            const route = useRoute()
            const snippet = computed(() => {
                return props.showArticle.content.substring(0, 50) + '...'
            });

            const activeTag = (tag) => {
                return route.params.tag === tag ? 'active-tag' : ''
            }

            return {
                snippet,
                activeTag
            }
        }
    }
</script>

<style>
    .active-tag {
        color: #42b983;
        font-weight: bold;
    }
</style>
