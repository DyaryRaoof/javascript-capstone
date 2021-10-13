import { JSDOM } from 'jsdom';
import { episodeCount, seasonCount } from '../src/js/item-count.js';

describe('episodeCount function', () => {
  const dom = new JSDOM();
  global.document = dom.window.document;
  global.window = dom.window;
  test('Check if episode counter return the right amount', () => {
    document.body.innerHTML = '<div class"container">'
      + '<div class="episode">a</div>'
      + '<div class="episode">a</div>'
      + '<div class="episode">a</div>'
      + '<div class="episode">a</div>'
    + '</div>';
    expect(episodeCount()).toBe(4);
  });
});

describe('seasonCount function', () => {
  test('Check if season counter return the right amount', () => {
    document.body.innerHTML = '<ul id="bottom-header">'
    + '<li>Season 1</li>'
    + '<li>Season 2</li>'
    + '<li>Season 3</li>'
    + '<li>Season 4</li>'
    + '</ul>';
    expect(seasonCount()).toBe(4);
  });
});