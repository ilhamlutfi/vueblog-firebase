import {
    ref
} from 'vue'

const getArticle = (id) => {
    const article = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })
            let data = await fetch('http://localhost:3000/articles/' + id)

            if (!data.ok) {
                throw Error('No data available')
            }

            article.value = await data.json()
        } catch (err) {
            error.value = err.message
        }
    }

    return {
        article,
        error,
        load
    }
}

export default getArticle
