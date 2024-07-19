import { ref } from 'vue'

const getArticles = () => {
    const articles = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })
            let data = await fetch('http://localhost:3000/articles')

            if (!data.ok) {
                throw Error('No data available')
            }

            articles.value = await data.json()
        } catch (err) {
            error.value = err.message
        }
    }

    return { articles, error, load }
}

export default getArticles

