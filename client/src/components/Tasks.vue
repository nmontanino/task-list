<template>
  <div class="tasks">
    <h1>Tasks</h1>
    <div v-if="tasks.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'AddTask' }" class="">Add Task</router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>{{ task.name }}</td>
          <td>{{ task.description }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditTask', params: { id: post._id } }">Edit</router-link> |
            <a href="#">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      You have not added any tasks yet. <br /><br />
      <router-link v-bind:to="{ name: 'AddTask' }" class="add_task_link">Add Task</router-link>
    </div>
  </div>
</template>

<script>
import TasksService from '@/services/TasksService'
export default {
  name: 'tasks',
  data () {
    return {
      tasks: []
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    async getTasks () {
      const response = await TasksService.fetchTasks()
      this.tasks = response.data.tasks
    }
  }
}
</script>

<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #1cdd6c;
  color: #fff;
}
a {
  color: #1cdd6c;
  text-decoration: none;
}
a.add_task_link {
  background: #1cdd6c;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
