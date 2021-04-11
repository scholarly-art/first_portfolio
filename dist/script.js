// copy the class anywhere to get an easy typing animation
// the plugin code 

class TypeIt {
  constructor(text, container, speed) {
    this.text = text;
    this.container = container;
    this.speed = speed;
    this.current = 0;
  }

  run() {
    const cont = document.querySelector(this.container);
    cont.append(this.text[this.current]);
    this.current++;
    if (this.current < this.text.length) {
      window.setTimeout(() => {
        this.run();
      }, this.speed);
    }
  }}


const demoText = new TypeIt(':~$ who_is(Wayne Logan); ', '.text .content', 100);
demoText.run();
