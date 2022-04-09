<template>
  <div class="choices">
    <input v-model="update.answer" @change="onChangeText" />

    <label class="checkboxLabel">
      <input
        class="status"
        type="checkbox"
        v-model="update.status"
        @change="onChangeChackbox"
      />
      {{ update.status ? "Correct" : "Incorrect" }}
    </label>
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
.checkboxLabel {
  min-width: 8em;
}
</style>
