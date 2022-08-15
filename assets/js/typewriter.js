// Idea from: https://css-tricks.com/snippets/css/typewriter-effect/
class Typewriter {
  constructor(elt, rotate, period) {
    this.rotate = rotate;
    this.elt = elt;
    this.counter = 0;
    this.period = parseInt(period, 10) || 2000;
    this.text = "";
    this.tick();
    this.isDeleting = false;
  }
  tick() {
    let i = this.counter % this.rotate.length;
    let fullText = this.rotate[i];

    // If in deletion mode, the full text continually subtracts, otherwise it adds a letter to the phrase
    this.text = this.isDeleting
      ? fullText.substring(0, this.text.length - 1)
      : fullText.substring(0, this.text.length + 1);

    // Returns the growing text between the <span> tags in the HTML doc
    this.elt.innerHTML = `<span class="typewriter-text"> ${this.text} </span>`;

    // Alias for 'this' to allow me to keep referring to it; delta for speed
    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) delta /= 2;

    // If we've reached end of the phrase, set to deletion and continuous deletion speed. Otherwise we're at a new phrase.
    if (this.text === fullText) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.text === "") {
      this.isDeleting = false;
      this.counter++;
      delta = 500;
    }

    // Displays the tick after delta seconds (variable display)
    setTimeout(function () {
      that.tick();
    }, delta);
  }
}

window.addEventListener("load",() => {
    // Get data from HTML document
    let elts = document.getElementsByClassName('typewrite');
    // Cycle through typing out elements
    let rotate, period;
    for (let elt of elts) {
        rotate = [elt.getAttribute('phraseOne'),elt.getAttribute('phraseTwo'),elt.getAttribute('phraseThree')];
        period = elt.getAttribute('data-period');
        if (rotate) new Typewriter(elt, rotate, period);
    }
    let color = getRandomColor();
    // Inject CSS for blinking cursor color, add cursor
    let cursor_color = document.createElement("style");
    cursor_color.innerHTML = `.typewrite > .typewriter-text { border-right: 2.2px solid ${color};}`;
    document.body.appendChild(cursor_color);

    // Inject CSS for hovering colors
    let hover_color = document.createElement("style");
    hover_color.innerHTML = `a:hover { color: ${color};}`;
    document.body.appendChild(hover_color);
});
        
      