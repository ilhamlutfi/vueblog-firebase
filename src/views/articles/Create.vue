<template>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/contact-bg.jpg')">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="page-heading">
                        <h1>Create Article</h1>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content-->
    <main class="mb-4">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">

                    <div class="my-5">

                        <form @submit.prevent="handleCreate">
                            <div class="form-floating">
                                <input class="form-control" id="name" type="text" placeholder="Enter article title..."
                                    v-model="title">

                                <label for="title">Title</label>
                            </div>

                            <div class="form-floating">
                                <textarea class="form-control" id="content" placeholder="Enter your content here..."
                                    style="height: 12rem" v-model="content"></textarea>

                                <label for="content">Content</label>
                            </div>

                            <div class="form-floating">
                                <input class="form-control" id="tags" type="text" placeholder="Enter article tags..."
                                    v-model="tag" @keydown.enter.prevent="handleKeydown">

                                <label for="tags">Tags</label>
                            </div>

                            <br />

                            <p>
                                <span v-for="tag in tags" :key="tag">
                                    #{{ tag }}
                                </span>
                                {{ title }} <br>
                                {{ content }} <br>
                            </p>

                            <!-- Submit Button-->
                            <button class="btn btn-primary text-uppercase" type="submit">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const router = useRouter()
        const title = ref('')
        const content = ref('')
        const tag = ref('')
        const tags = ref([])

        const handleKeydown = () => {
            if (!tags.value.includes(tag.value)) {
                tag.value = tag.value.replace(/\s/g, '')
                tags.value.push(tag.value)
            }

            tag.value = ''
        }

        const handleCreate = async () => {
            const article = {
                title: title.value,
                content: content.value,
                tags: tags.value
            }

            await fetch('http://localhost:3000/articles', {
                method: 'POST',
                headers: { 'Content-TYpe': 'application/json' },
                body: JSON.stringify(article)
            })

            router.push({
                name: 'home'
            })
        }

        return { title, content, tag, tags, handleKeydown, handleCreate }
    }
}
</script>

<style>

</style>
