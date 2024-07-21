import { projectFirestore } from '@/firebase/config'
import { doc, getDoc } from 'firebase/firestore';
import {
    ref
} from 'vue'
import { useRouter } from 'vue-router'

const getArticle = (id) => {
    const router = useRouter()
    const article = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            // Create a reference to the specific document
            const res = doc(projectFirestore, 'articles', id);

            // Fetch the document
            const queryGetSingle = await getDoc(res);

            if (queryGetSingle.exists()) {
                // Document data exists, assign it to the article
                article.value = {
                    ...queryGetSingle.data(),
                    id: queryGetSingle.id
                };
            } else {
                // No such document exists
                throw Error('No data available');
            }
        } catch (err) {
            error.value = err.message
            setTimeout(() => {
                router.push({
                    name: 'home'
                })
            }, 2000)
        }
    }

    return {
        article,
        error,
        load
    }
}

export default getArticle
