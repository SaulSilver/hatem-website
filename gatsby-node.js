const projectTypes = ['fulltime', 'freelance', 'open-source'];

// exports.onCreatePage = data => {
//   console.log('data', data);
//   const {
//     actions: { createPage, deletePage },
//     page
//   } = data;

//   if (page.path.includes('category-projects')) {
//     const oldPage = Object.assign({}, page);
//     // Remove trailing slash unless page is /
//     const projectType = projectTypes[projectTypes.lastIndexOf()];
//     page.path = page.path.replace('category-projects', projectType);
//     projectTypes.pop();
//     deletePage(oldPage);
//     createPage(page);
//   }
// };
