<template>
    <div class="container">
        <form @submit.prevent="editSubscription">

            <div class="form-group">
                <label>Name: </label>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="subscription name" 
                    v-model="subscription.name"
                />
            </div>

            <div class="form-group">
                <label>Description: </label>
                <input  
                    type="text" 
                    class="form-control" 
                    placeholder="subscription description" 
                    v-model="subscription.description"
                />
            </div>

            <div class="form-group">
                <label>Currency: </label>
                <select class="form-control" v-model="subscription.currency">
                    <option>$</option>
                    <option>R</option>
                    <option>E</option>
                </select>
            </div>

            <div class="form-group">
                <label>Amount: </label>
                <input  
                    type="text" 
                    class="form-control" 
                    placeholder="subscription amount" 
                    v-model="subscription.amount"
                />
            </div>

           
            <div class="form-group"><br/>
                <button :disabled="!submittable" type="submit" class="btn btn-primary">Add</button>
            </div>
        </form>
    </div>
</template>
<script>
import useSubscriptions from '../composables/subscriptions';
import { onMounted, computed } from 'vue';

export default {
    props: {
       id: {
           required: true,
           type: String
       }
   },
    setup(props) {
        const { subscription, getSubscription, updateSubscription } = useSubscriptions()

        onMounted(() => getSubscription(props.id));

        const editSubscription = async () => {
            await updateSubscription(props.id);
        };

        const submittable = computed(() => {
            return subscription.name !== '' && subscription.description !== ''
            && subscription.amount !== 0 && subscription.currency !== '';
        });

        return {
            subscription,
            editSubscription,
            submittable
        }
    }
}
</script>