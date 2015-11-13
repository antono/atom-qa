'use babel';

export default class AtomQaView {
  // serializedState passed in constructor
  constructor() {
    var message;

    this.element = document.createElement('div');
    this.element.classList.add('atom-qa');
    message = document.createElement('div');
    message.textContent = `The AtomQa package is Alive! It's ALIVE!`;
    message.classList.add('message');

    this.element.appendChild(message);
  }

  serialize() {
  }

  destroy() {
    return this.element.remove();
  }

  getElement() {
    return this.element;
  }
}
