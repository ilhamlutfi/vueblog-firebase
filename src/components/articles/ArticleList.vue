<template>
    <div v-for="article in dataArticles" :key="article.id" >
        <div class="post-preview">
            <ArticleShow :showArticle="article" />
        </div>
        <!-- Divider-->
        <hr class="my-4" />
    </div>
</template>

<script>
    import ArticleShow from '@/components/articles/ArticleShow.vue'
    import {
        onMounted,
        onUnmounted,
        onUpdated
    } from 'vue'
    export default {
        props: ['dataArticles'],
        components: {
            ArticleShow
        },

        setup(props) {
            onMounted(() => console.log('component mounted'))
            onUnmounted(() => console.log('component unmounted'))
            onUpdated(() => console.log('component updated'))
        }
    }
</script>
