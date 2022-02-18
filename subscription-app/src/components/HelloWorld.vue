<template>
  <div class="hello">
    <h1>{{ state.msg }}</h1>
  </div>
</template>

<script>
import { reactive } from "vue";

  export default {
    props: {
      msg: String
    },
    setup(props) {
        const state = reactive({
            'msg': props.msg,
        })

        return {
            state,
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
