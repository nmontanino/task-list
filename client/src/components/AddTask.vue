<template>
  <div class="tasks">
    <h1>Add Task</h1>
      <div class="form">
        <div>
          <input type="text" name="name" placeholder="TASK NAME" v-model="name">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="TASK DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <button class="addtask_btn" @click="addTask">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import TasksService from '@/services/TasksService'
export default {
  name: 'NewTask',
  data () {
    return {
      name: '',
      description: ''
    }
  },
  methods: {
    async addTask () {
      await TasksService.addTask({
        name: this.name,
        description: this.description
      })
      this.$router.push({ name: 'Tasks' })
    }
  }
}
</script>

<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.addtask_btn {
  background: #1cdd6c;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
