<template>
<!--    <input type="text" class="form-control mt-4" v-model="search" placeholder="search here..">-->
<!--    <select v-on:change="filterTodos($event)">-->
<!--      <option>select</option>-->
<!--      <option value="5">5</option>-->
<!--      <option value="10">10</option>-->
<!--      <option value="20">20</option>-->
<!--      <option value="50">50</option>-->
<!--      <option value="100">100</option>-->
<!--      <option value="200">200</option>-->
<!--    </select>-->
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'FilterTodos',
  data(){
    return{
      search: '',
    }
  },
  methods: {
    ...mapActions(['filterTodos']),
  }


}
</script>

<style scoped>
select {
  margin-bottom: 10px;

}

</style>