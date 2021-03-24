const { Plugin, Theme } = require('powercord/entities');
const { resolve } = require('path');

module.exports = class PeaceOfMind extends Plugin {
  async startPlugin () {
    this.zen = false;

    const zenTheme = new Theme('pom-zen', {
      effectiveTheme: resolve(__dirname, 'style.scss')
    }).apply();

    document.onkeydown = (e) => {
      if (e.ctrlKey && e.altKey && e.code === 'BracketLeft') {
        if (this.zen) {
          this.zen = false;
          document.body.classList.remove("zen-mode");
        } else {
          this.zen = true;
          document.body.classList.add("zen-mode");
        }
      }
    };
  }
};
