import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'
import { collection, getDocs } from 'firebase/firestore'

const getArticles = () => {
    const articles = ref([])
    const error = ref(null)

    const load = async () => {
        try {
             // Reference to the articles collection
            const res = collection(projectFirestore, 'articles')

            // Get all the documents from the collection
            const queryGet = await getDocs(res)

            // Loop through the documents and push them to the articles array
            queryGet.forEach(doc => {
                articles.value.push({ ...doc.data(), id: doc.id })
                //  console.log(doc.id, " => ", doc.data());
            })
        } catch (err) {
            error.value = err.message
        }
    }

    return { articles, error, load }
}

export default getArticles

