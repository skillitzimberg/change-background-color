import { sum } from './index.js';
// Basic test to check that Jest is set up.
describe('Basic unit test passes', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('HTML elements are found', () => {
  document.body.innerHTML = '<body>' + '<button id="myButton" />' + '</body>';
  test('body element is found', () => {
    let body: HTMLElement | null = document.querySelector('body');
    let isNotNull = Boolean(body);
    expect(isNotNull).toBe(true);
  });

  test('button element is found', () => {
    let button: HTMLButtonElement | null = document.querySelector('button');
    let isNotNull = Boolean(button);
    expect(isNotNull).toBe(true);
  });
});
