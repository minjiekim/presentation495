'use strict';

(function() {
  window.addEventListener("load", init);
  /**
   * Once the page loads it adds event listeners to all specified elements
   */
  function init() {
    qs("button").addEventListener("click", calculator);
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {HTMLElement} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   *Returns the element that match the given CSS selector
   * @param {string} selector CSSquery selector
   * @returns {object}- DOM object associated selector
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {HTMLElement} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();


const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const rndCol = chroma.random();
  document.body.style.backgroundColor = rndCol;
});