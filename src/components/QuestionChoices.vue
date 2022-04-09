<template>
  <div class="choices">
    <input v-model="update.answer" @change="onChangeText" />
    <input
      class="status"
      type="checkbox"
      v-model="update.status"
      @change="onChangeChackbox"
    />
    <span class="checkboxLabel">{{
      update.status ? "Correct" : "Incorrect"
    }}</span>
  </div>
</template>

<script>
export default {
  name: "QuestionChoices",
  components: {},

  props: {
    answer: Object,
  },

  data() {
    return {
      update: this.answer,
    };
  },

  methods: {
    onChangeText() {
      this.$emit("on-change-text", this.update);
    },
    onChangeCheckbox() {
      this.$emit("on-change-checkbox", this.update);
    },
  },
};
</script>
<style scoped>
.choices {
  height: 3em;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 1em;
  width: 100%;
}
.status {
  padding: 1em;
  width: 1em;
  height: 1em;
}
.checkboxLabel {
  min-width: 5em;
}
</style>
