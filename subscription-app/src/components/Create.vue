<template>
    <div class="container">
        <form @submit.prevent="saveSubscription">

            <div class="form-group">
                <label>Name: </label>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="subscription name" 
                    v-model="form.name"
                />
            </div>

            <div class="form-group">
                <label>Description: </label>
                <input  
                    type="text" 
                    class="form-control" 
                    placeholder="subscription description" 
                    v-model="form.description"
                />
            </div>

            <div class="form-group">
                <label>Currency: </label>
                <select class="form-control" v-model="form.currency">
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
                    v-model="form.amount"
                />
            </div>

           
            <div class="form-group"><br/>
                <button :disabled="!submittable" type="submit" class="btn btn-primary">Add</button>
            </div>
        </form>
    </div>
</template>

<script>
import useBooks from '../composables/subscriptions';
import { reactive, computed } from 'vue';

export default {
    setup() {
        const { errors, storeSubscription } = useBooks();

        const form = reactive({
            name: '',
            description: '',
            currency: '',
            amount: 0,
        })

        const submittable = computed(() => {
            return form.name !== '' && form.description !== ''
            && form.amount !== 0 && form.currency !== '';
        });


        const saveSubscription = async () => {
            await storeSubscription({ ...form })
        }

        return {
            form,
            errors,
            saveSubscription,
            submittable
        }
    }
}
</script>
