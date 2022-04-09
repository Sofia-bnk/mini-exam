<template>
  <div class="preview">
    <header>Exams: {{ exams.length }}</header>
    <div v-for="exam in exams" :key="exam.id" class="exam">
      <h1>Exam: {{ exam.id }}</h1>
      <div v-for="q in exam.questions" :key="q.id">
        <h2>{{ q.id }}. {{ q.question }}</h2>
        <div class="choicesWrapper">
          <p v-for="a in q.answers" :key="a.id">
            <span>{{ a.answer }}</span>
            <input
              type="checkbox"
              disabled
              :checked="a.status ? true : false"
            />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExamPreview",
  components: {},

  data() {
    return {
      exams: this.$store.state.exams,
    };
  },
};
</script>

<style scoped>
header {
  font-weight: bold;
}
h2 {
  margin-bottom: 0;
}
.preview {
  padding: 1em;
}
.exam {
  background-color: white;
  padding: 1em;
  margin-top: 00.5em;
}
.choicesWrapper {
  display: flex;
  flex: row;
  column-gap: 2em;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
}
input[type="checkbox"] {
  transform: scale(1.5);
}
</style>
