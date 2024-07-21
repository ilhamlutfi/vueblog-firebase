<template>
    <div v-if="error">{{ error }}</div>

    <div v-if="singleArticle">
        <!-- Page Header-->
        <header class="masthead" style="background-image: url('/img/post-bg.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>{{ singleArticle.title }}</h1>
                            <span v-for="tag in singleArticle.tags" :key="tag" class="meta-post">
                                #{{ tag }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Post Content-->
        <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <p>
                            {{ singleArticle.content }}
                        </p>
                        
                        <button class="btn btn-danger" @click="handleDelete">Delete</button>

                        <router-link :to="{ name: 'home'}">
                            <button class="btn btn-primary m-1">Back</button>
                        </router-link>
                    </div>
                </div>
            </div>
            
        </article>
        
    </div>

    <div v-else>
        <Loading />
    </div>

</template>

<script>
    import getArticle from '@/composables/getArticle'
    import Loading from '@/components/Loading.vue'
    import { deleteDoc, doc } from 'firebase/firestore';
    import { projectFirestore } from '@/firebase/config';
import router from '@/router';
    export default {
        props: ['id'],
        components: {
            Loading
        },
        setup(props) {
            const {
                article,
                error,
                load
            } = getArticle(props.id)

            const singleArticle = article

            const handleDelete = async () => {
                const res = doc(projectFirestore, 'articles', props.id)

                await deleteDoc(res)

                router.push({
                    name: 'home'
                })
            }

            load()

            return {
                article,
                singleArticle,
                error,
                handleDelete
            }
        },
    }
</script>

<style>

</style>
