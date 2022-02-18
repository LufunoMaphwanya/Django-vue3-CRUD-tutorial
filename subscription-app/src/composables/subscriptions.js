import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

const base_uri = 'http://localhost:8000';

export default function useSubscriptions() {
    const subscriptions = ref([])
    const subscription = ref([])
    const router = useRouter()
    const errors = ref('')

    const getSubscriptions = async () => {
        let response = await axios.get(`${base_uri}/api/subscriptions`);
        subscriptions.value = response.data;
    }

    const getSubscription = async (id) => {
        let response = await axios.get(`${base_uri}/api/subscriptions/` + id)
        subscription.value = response.data;
    }

    const storeSubscription = async (data) => {
        errors.value = ''
        try {
            await axios.post(`${base_uri}/api/subscriptions/`, data)
            await router.push({name: 'index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateSubscription = async (id) => {
        errors.value = ''
        try {
            await axios.put(`${base_uri}/api/subscriptions/` + id, subscription.value)
            await router.push({name: 'index'})
        } catch (e) {
            if (e.response.status === 422) {
               errors.value = e.response.data.errors
            }
        }
    }

    const destroySubscription = async (id) => {
        await axios.delete(`${base_uri}/api/subscriptions/` + id)
    }


    return {
        subscriptions,
        subscription,
        errors,
        getSubscription,
        getSubscriptions,
        storeSubscription,
        updateSubscription,
        destroySubscription
    }
}
