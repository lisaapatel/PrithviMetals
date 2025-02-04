exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  // Handle 404 page separately
  if (page.path === '/404/') {
    const oldPage = { ...page };
    page.matchPath = '/404/*';
    createPage({
      ...oldPage,
      path: '/404.html',
    });
  }
}; 