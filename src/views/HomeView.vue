<template>
  <!-- Page Header-->
  <header class="masthead" style="background-image: url('img/home-bg.jpg')">
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="site-heading">
            <h1>Clean Blog</h1>
            <span class="subheading">A Blog Theme by Start Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content-->
  <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">

        <router-link :to="{ name: 'CreateArticle' }">
          <button class="btn btn-primary float-end">Create Article</button>
        </router-link>

        <div v-if="error">{{ error }}</div>

        <div v-if="showArticles.length">
          <ArticleList v-if="showArticles" :dataArticles="articles" />
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
  export default {
    name: 'HomeView',
    components: {
      ArticleList,
      Loading
    },
    setup() {
      const {
        articles,
        error,
        load
      } = getArticles()

      const showArticles = articles

      load()

      return {
        articles,
        showArticles,
        error
      }
    }
  }
</script>
