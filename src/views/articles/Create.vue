<template>
    <div>
        <form @submit.prevent="handleCreate">
            <div>
                <label for="title">Title</label>
                <input type="text" v-model="title">
            </div>

            <div>
                <label for="content">Content</label>
                <textarea id="content" cols="30" rows="10" v-model="content"></textarea>
            </div>

            <div>
                <label for="tags">Tags</label>
                <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown">
            </div>

            <button type="submit">Create</button>
        </form>

        <div v-for="tag in tags" :key="tag">
            #{{ tag }}
        </div>
        {{ title }}
        {{ content }}
    </div>
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
