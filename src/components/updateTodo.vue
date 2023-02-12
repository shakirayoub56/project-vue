<template>
  <Header/>
  <div class="card card-primary mt-4">
    <div class="card-header">
      <h3 class="card-title">Update Todo</h3>
    </div>
    <form>
      <div class="card-body">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Enter title" v-model="todolist.title" name="title">
        </div>

      </div>
      <!-- /.card-body -->

      <div class="card-footer">
        <button type="submit" class="btn btn-secondary " v-on:click="cancelTodo"><i class="fas fa-times"></i> Cancel
        </button>
        <button type="submit" class="btn btn-primary" @click.prevent="updateTodo"><i class="fas fa-pencil-alt"></i>
          Update
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import {mapActions} from "vuex";

export default {
  components: {Header},
  data() {
    return {
      todolist: {
        title: '',
      }
    }
  },
  methods: {
    // ...mapActions(['updateTodo']),
    cancelTodo() {
      this.$router.push('/homepage')
    },
    async updateTodo() {
        const result = await axios.put('http://localhost:3000/todolist/' + this.$route.params.id, {
          id: this.todolist.id,
          title: this.todolist.title,
          completed: false

        });
        // console.log(result)

        this.$swal({
          icon: 'success',
          title: 'Todo Updated',
          text: "Todo Updated Succesfully",
          timer: 1500
        });
        this.$router.push('/homepage')
        // console.warn('updated data', this.todolist)
      }
    },

    async mounted() {
      const result = await axios.get('http://localhost:3000/todolist/' + this.$route.params.id)
      this.todolist = result.data
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
  width: 120px;
  margin-left: 89px;
}
</style>