<template>
  <div class="home">
    <main class="mainContent">
      <div v-for="q in this.questions" :key="q.id">
        <ExamQuestion :examQuestion="q" @on-save="onSaveQuestion" />
      </div>
    </main>
    <div class="addQuestionWrapper">
      <button class="addQuestion" @click="onAddQuestion" v-if="save === false">
        Add Question
      </button>
      <button class="preview" @click="onPreview" v-if="save === true">
        Preview
      </button>
      <button
        v-if="this.questions.length !== 0"
        :class="[save ? 'savedBtn' : 'saveBtn']"
        @click="onSaveExam"
      >
        {{ save ? "Saved Exam" : "Save Exam" }}
      </button>
    </div>
  </div>
</template>

<script>
import ExamQuestion from "@/components/ExamQuestion.vue";

export default {
  name: "CreateExam",
  components: {
    ExamQuestion,
  },

  data() {
    return {
      count: 0,
      questions: [],
      save: false,
    };
  },
  methods: {
    onAddQuestion() {
      this.count = this.count + 1;
      this.questions.push({
        question: "",
        id: this.count,
        answers: [],
      });
    },
    onSaveQuestion(updatedQuestion) {
      let foundIndex = this.questions.findIndex(
        (question) => question.id === updatedQuestion.id
      );
      this.questions[foundIndex] = updatedQuestion;
    },
    onPreview() {
      this.$router.push({ path: "/preview" });
    },
    onSaveExam() {
      if (this.save === false) {
        this.save = true;
      }
      const examId = (Math.random() + 1).toString(36).substring(7);
      this.$store.dispatch("addExam", {
        id: examId,
        questions: this.questions,
      });
    },
  },
};
</script>
<style scoped>
.home {
  padding: 2em;
}
.preview {
  color: white;
  background-color: rgb(1, 202, 135);
  float: right;
}

.saveBtn {
  background-color: #e76f51;
  color: white;
  float: left;
}
.addQuestion {
  color: white;
  float: right;
  background-color: rgb(4, 168, 114);
}
.addQuestion:hover,
.saveBtn:hover,
.savedBtn:hover,
.preview:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.preview:hover {
  background-color: rgb(4, 168, 114);
}
.addQuestionWrapper {
  width: 100%;
  height: 5em;
}
.savedBtn {
  background-color: lightgray;
  color: rgba(0, 0, 0, 0.63);
  float: left;
}
</style>
