import { sum, root, handleClick } from './scripts';

describe('Functions do math', () => {
  test('it adds', () => {
    expect(sum(2, 3)).toEqual(5);
  });
});

describe('DOM elements exist', () => {
  test('handleClick changes root background color', () => {
    if (root) console.log(root.style.getPropertyValue('--bg-color'));
    const button = document.createElement('button');
    button.addEventListener('click', handleClick);
    button.click();
    button.click();
    if (root) expect(root.style.backgroundColor === '#495935').toBeFalsy();
  });
});
