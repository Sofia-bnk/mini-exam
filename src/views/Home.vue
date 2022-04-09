<template>
  <div class="home">
    <main class="mainContent">
      <button class="startBtn" @click="onCreateExam">Create Exam</button>
      <button
        class="startBtn"
        @click="onTakeExam"
        :disabled="exams.length === 0"
      >
        Take Exam
      </button>
    </main>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},

  data() {
    return {
      exams: this.$store.state.exams,
    };
  },
  methods: {
    onTakeExam() {
      this.$router.push({ path: "/all/exams" });
    },
    onCreateExam() {
      this.$router.push({ path: "/teacher/exam/create" });
    },
  },
};
</script>
<style scoped>
.home {
  display: flex;
  justify-content: center;
  height: 20em;
  align-items: center;
}

.mainContent {
  display: flex;
  gap: 2em;
}

.startBtn {
  color: white;
  float: left;
  background-color: #184e77;
  height: 5em;
}
.startBtn:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.startBtn:hover {
  background-color: #1c5a8a;
}
.addQuestionWrapper {
  width: 100%;
  height: 5em;
}
</style>
