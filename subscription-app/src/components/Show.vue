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
                <tr>
                    <td>{{subscription.name}}</td>
                    <td>{{subscription.description}}</td>
                    <td>{{ subscription.currency}}{{ subscription.amount}}</td>
                </tr>
            </tbody>
            </table>
    </div>
</template>
<script>
import useSubscriptions from '../composables/subscriptions';
import { onMounted } from 'vue';

export default {
    props: {
       id: {
           required: true,
           type: String
       }
   },
    setup(props) {
        const { subscription, getSubscription } = useSubscriptions()

        onMounted(() => getSubscription(props.id));

        return {
            subscription
        }
    }
}
</script>