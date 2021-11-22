const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    {
      SpaceX {
        launches(limit: 40) {
          id
        }
      }
    }
  `);
  data.SpaceX.launches.forEach(({ id }) => {
    actions.createPage({
      path: `/launch/${id}`,
      component: path.resolve("./src/templates/launch.js"),
      context: { id },
    });
  });
};
