import { createStore } from "vuex";

export default createStore({
  state: {
    exams: [],
  },
  getters: {},
  mutations: {
    addExam(state, exam) {
      state.exams.push(exam);
    },
  },
  actions: {
    addExam(context, exam) {
      context.commit("addExam", exam);
    },
  },
  modules: {},
});
