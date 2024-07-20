<template>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="site-heading">
                        <h1>Clean Blog</h1>
                        <span class="subheading">Article By Tag: {{ $route.params.tag }}</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <div v-if="error">{{ error }}</div>

                <div v-if="articleByTag.length">
                    <ArticleList v-if="articleByTag" :dataArticles="articleByTag" />
                </div>

                <div v-else>
                    <Loading />
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import ArticleList from '@/components/articles/ArticleList.vue'
import getArticles from '@/composables/getArticles.js'
import Loading from '@/components/Loading.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
export default {
    name: 'Tag',
    components: {
        ArticleList,
        Loading
    },
    setup() {
        const route = useRoute() 
        const {
            articles,
            error,
            load
        } = getArticles()

        load()

        const articleByTag = computed(() => {
            return articles.value.filter((data) => data.tags.includes(route.params.tag))
        })

        return {
            articles,
            error,
            articleByTag
        }
    }
}
</script>
