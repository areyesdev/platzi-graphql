const courses = [
  {
    _id: "anyid",
    title: "Curso de GraphQL",
    teacher: "Andres Reyes",
    description: "Aprenderas los nuevos estandares de GraphQL",
    topic: "Programacion",
  },
  {
    _id: "anyid2",
    title: "Curso de GraphQL Intermedio",
    teacher: "Andres Reyes",
    description: "Aprenderas los nuevos estandares de GraphQL",
    topic: "Programacion",
  },
  {
    _id: "anyid3",
    title: "Curso de GraphQL Avanzado",
    teacher: "Andres Reyes",
    description: "Aprenderas los nuevos estandares de GraphQL",
    topic: "Programacion",
  },
];

module.exports = {
  Query: {
    getCourses: () => {
      return courses;
    },
    getCourse: (root, args) => {
      const course = courses.filter((course) => course._id === args.id);
      return course.pop();
    },
  },
};
