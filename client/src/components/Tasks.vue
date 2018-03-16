<template>
  <div class="tasks">
    <h1>Tasks</h1>
    This page will contain all the tasks.
    <div v-for="(task, index) in tasks" :key="index">
      <p>
        <span><b>{{ task.name }}</b></span><br />
        <span>{{ task.description }}</span>
      </p>
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
      this.tasks = response.data
    }
  }
}
</script>
