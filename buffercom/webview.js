import path from 'path';

module.exports = (Franz) => {
  // Hide extension message
  Franz.injectCSS(path.join(__dirname, 'service.css'));
};
