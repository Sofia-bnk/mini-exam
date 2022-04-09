<template>
  <div class="main">
    <h1>Exam: {{ exam.id }}</h1>
    <div
      v-for="q in exam.questions"
      :key="q.id"
      :class="this.incorrectsAnswers.includes(q.id) ? 'incorrect' : 'question'"
    >
      <h2>{{ q.id }}. {{ q.question }}</h2>
      <div class="choicesWrapper">
        <p v-for="a in q.answers" :key="a.id">
          <span>{{ a.id }}. {{ a.answer }}</span>
          <input
            type="checkbox"
            @change="(e) => onChange(q.id, a.id, e.target.value === 'on')"
          />
          <span class="correctAnswers" v-if="this.show && a.status === true">{{
            a.status
          }}</span>
        </p>
      </div>
    </div>
    <footer>
      <div class="score" v-if="this.show">
        <p>Correct Answers: {{ this.correct }}</p>
        <p>
          Incorrect Answers:
          {{ this.incorrect }}
        </p>
      </div>
      <button class="submitBtn" @click="onSubmit">Submit</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "StudentExam",
  components: {},

  data() {
    return {
      exam: {},
      answers: new Map(),
      incorrect: 0,
      correct: 0,
      show: false,
      incorrectsAnswers: [],
    };
  },
  async mounted() {
    this.exam = this.$store.state.exams.find(
      (exam) => exam.id === this.$route.params.id
    );
  },
  methods: {
    onChange(questionId, answerId, answer) {
      const key = questionId + "-" + answerId;
      this.answers.set(key, answer);
    },
    /*     getAnswer(id) {
      return this.answers.has(id) && this.answers.get(id);
    },
    correctingAnswers(id, correctAnswer, question) {
      if (this.getAnswer(id) === correctAnswer) {
        this.correct = this.correct + 1;
      } else {
        this.incorrect = this.incorrect + 1;
        this.incorrectsAnswers.push(question);
      }

      return console.log(
        `correct :${this.correct} incorrect:${this.incorrect}`
      );
    }, */
    correctingAnswers(id, correctAnswer, question) {
      if (correctAnswer) {
        if (this.answers.get(id)) {
          this.correct = this.correct + 1;
        }
        this.incorrect = this.incorrect + 1;
        this.incorrectsAnswers.push(question);
      }
      null;
    },
    onSubmit() {
      this.exam.questions.map((q) => {
        q.answers.map((a) => {
          this.correctingAnswers(q.id + "-" + a.id, a.status, q.id);
        });
      });

      this.show = true;
    },
  },
};
</script>
<style scoped>
.question {
  padding: 1em;
}
.incorrect {
  background-color: rgba(255, 0, 0, 0.164);
  padding: 1em;
}
.correctAnswers {
  color: #962407;
}
.score {
  background-color: white;
  width: 15em;
  padding: 0.5em;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin: 1em;
  font-weight: bolder;
  text-align: center;
}
.main {
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  row-gap: 1em;
}
h2 {
  margin-bottom: 0;
}
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  margin-top: 3em;
}
.submitBtn:hover {
  background-color: #ce5e42;
}
.submitBtn {
  background-color: #e76f51;
  color: white;
  min-width: 40em;
}
header {
  font-weight: bold;
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
}
</style>
