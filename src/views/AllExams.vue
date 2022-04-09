<template>
  <div class="wrapper">
    <header>Exams: {{ this.$store.state.exams.length }}</header>
    <main>
      <div v-for="exam in this.$store.state.exams" :key="exam.id" class="exam">
        <button class="exam" @click="onClick(exam.id)">
          <h2>Exam: {{ exam.id }}</h2>
        </button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "AllExams",
  components: {},

  methods: {
    onClick(id) {
      this.$router.push(`/student/exam/${id}`);
    },
  },
};
</script>
<style scoped>
.wrapper {
  padding: 1em;
}
.exam {
  width: 20em;
}
header {
  font-weight: bold;
}
main {
  display: flex;
  flex-direction: row;
  column-gap: 2em;
  margin-top: 1em;
  flex-wrap: wrap;
}
</style>
