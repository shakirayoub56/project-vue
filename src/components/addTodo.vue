<template>
  <Header/>
  <div class="card card-primary mt-4">
    <div class="card-header">
      <h3 class="card-title">Add Todo</h3>
    </div>
    <div class="card-body">
      <Form @submit="onSubmit">
        <!--      <Field type="text" class="Form-control" placeholder="Enter todo" v-model="title" name="title" :rules="validateForm" data-test="todo" />-->
        <Field type="text" :rules="validateForm" name="title" id="title" data-test="todo"
               placeholder="Title" v-model="title" class="form-control"/>
        <ErrorMessage class="text-red mr-2" name="title"/>
        <br>
        <input type="submit" data-test="todo" class="btn btn-primary mt-2" value="Add Todo">
        <input type="submit" data-test="todo" @click="cancelFunc" class="btn btn-secondary mt-2 float-right"
               value="Cancel">
      </Form>
    </div>
  </div>

</template>

<script>
// import axios from "axios";
import Header from "@/components/Header.vue";
import {Form, Field, ErrorMessage} from "vee-validate";
import {mapActions} from "vuex";

export default {
  data() {
    return {
      title: '',
      loading: false
    }
  },
  components: {Header, Form, Field, ErrorMessage},
  methods: {
    cancelFunc() {
      this.$router.push('/homepage')
    },
    ...mapActions(["addTodo"]),
    onSubmit() {
      // event.preventDefault();
      this.addTodo(this.title);
      this.title = ''
      this.$swal({
        icon: 'success',
        title: 'Todo Added',
      });
      this.$router.push('/homepage')

    },
    validateForm(value) {

      if (!value) {

        return 'This field is required';

      } else {

        return title;

      }
    }
  },
}
</script>

<style scoped>
.card {
  width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.card-body {
  width: 400px;
  margin: auto;
}


h2 {
  text-align: center;
}

button {
  height: 40px;
  width: 260px;
  margin-left: 89px;
}

</style>