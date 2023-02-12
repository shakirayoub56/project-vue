<template>
  <div class="box "  >
    <router-link class="btn btn-info" to="/homePage">Home</router-link>
    <router-link class="btn btn-success"  to="/addTodo">Add Todo</router-link>
<!--    <router-link class="btn btn-outline-danger" to="/updateTodo">Update Todo</router-link>-->
  </div>
</template>

<script>
export default {
  name:'Header',
}
</script>

<style  scoped>
.box{
  display: flex;

  gap:30px

}
</style>