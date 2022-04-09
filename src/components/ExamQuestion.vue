<template>
  <div class="questionAnswers">
    <div class="question">
      <label class="label">Question</label>
      <input class="questionInput" v-model="update.question" />
    </div>
    <div class="choicesWrapper">
      <label class="label">Answers</label>
      <div v-for="a in this.update.answers" :key="a.id">
        <QuestionChoices
          :answer="a"
          @on-change-checkbox="onChangeCheckbox"
          @on-change-text="onChangeText"
        />
      </div>
      <button class="addAnswers" @click="onAddAnswer" v-if="save === false">
        Add Answer
      </button>
    </div>
  </div>
</template>

<script>
import QuestionChoices from "./QuestionChoices.vue";
export default {
  name: "ExamQuestion",
  components: { QuestionChoices },

  data() {
    return {
      count: 0,
      update: this.examQuestion,
      save: false,
      disable: false,
    };
  },
  props: {
    examQuestion: Object,
  },

  methods: {
    onAddAnswer() {
      this.count = this.count + 1;
      this.update.answers.push({
        id: this.count,
        answer: "",
        status: false,
      });
    },

    onChangeText(updatedAnswer) {
      let foundIndex = this.update.answers.findIndex(
        (answer) => answer.id === updatedAnswer.id
      );
      this.update.answers[foundIndex] = updatedAnswer;
      this.$emit("on-save", this.update);
    },
    onChangeCheckbox(updatedAnswer) {
      let foundIndex = this.update.answers.findIndex(
        (answer) => answer.id === updatedAnswer.id
      );
      this.update.answers[foundIndex] = updatedAnswer;
      this.$emit("on-save", this.update);
    },
    onSaveBtn() {
      if (this.save === false) {
        this.save = true;
      }
      //this.$emit("on-save", this.update);
    },
  },
};
</script>
<style scoped>
.addAnswers:hover {
  background-color: #dfdfdf;
  color: #35495e;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.questionAnswers {
  min-height: 15vh;
  background: #184e77;
  color: white;
  font-weight: bold;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: left;
  row-gap: 1em;
  max-width: 100%;
  margin-bottom: 2em;
}
.choicesWrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
}

.question {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
.questionInput {
  width: 90em;
  margin-right: 3em;
}

.label {
  width: 6em;
  font-size: 1.2rem;
}
</style>
