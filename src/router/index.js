import { createRouter, createWebHashHistory } from "vue-router";
import CreateExam from "../views/CreateExam.vue";
import Home from "../views/Home.vue";
import ExamPreview from "../views/ExamPreview.vue";
import StudentExam from "../views/StudentExam.vue";
import AllExams from "../views/AllExams.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/preview",
    name: "preview",
    component: ExamPreview,
  },
  {
    path: "/teacher/exam/create",
    name: "create",
    component: CreateExam,
  },
  {
    path: "/student/exam/:id",
    name: "exam",
    component: StudentExam,
  },
  {
    path: "/all/exams",
    name: "exams",
    component: AllExams,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
