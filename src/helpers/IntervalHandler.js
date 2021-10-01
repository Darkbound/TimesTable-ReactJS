export class Interval {
  #id;
  #speed;
  #callback;
  counter = 0;

  constructor(speed, callback) {
    this.#speed = speed;
    this.#callback = callback;
  }

  setOptions(options) {
    this.#speed = options.speed || this.#speed;
    this.#callback = options.callback || this.#callback;

    this.#id
      ? (() => {
          this.destroy();
          this.create();
        })()
      : this.create();
  }

  create() {
    this.#id && clearInterval();
    this.#id = this.#callback && this.#speed && setInterval(this.#callback, this.#speed);
  }

  setSpeed(speed) {
    clearInterval(this.#id);
    this.#speed = speed;

    this.create();
  }

  setCallback(callback) {
    clearInterval(this.#id);
    this.#callback = callback;

    this.create();
  }

  destroy() {
    this.#id && clearInterval(this.#id);
  }
}
