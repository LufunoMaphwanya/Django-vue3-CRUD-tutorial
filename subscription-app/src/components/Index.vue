<template>
    <div class="card" style="width: 100%; float: left; margin: 5px" >
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">#</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="subscription in subscriptions" :key="subscription.id">
                    <td>{{subscription.name}}</td>
                    <td>{{subscription.description}}</td>
                    <td>{{ subscription.currency}}{{ subscription.amount}}</td>
                    <td>
                        <router-link :to="{ name: 'show' , params: { id: subscription.id }}">
                            Show
                        </router-link>

                    </td>
                </tr>
            </tbody>
            </table>
    </div>
</template>
<script>
import useSubscriptions from '../composables/subscriptions';
import { onMounted } from 'vue';

export default {
    setup() {
        const { subscriptions, getSubscriptions } = useSubscriptions()
        onMounted(getSubscriptions)

        return {
            subscriptions
        }
    }
}
</script>