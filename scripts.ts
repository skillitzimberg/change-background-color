let root: HTMLElement | null = document.documentElement;

let button: HTMLButtonElement | null = document.querySelector('button');

if (button) {
  button.addEventListener('click', handleClick);
}

function handleClick(): void {
  let color: string = '#000000'.replace(/0/g, function() {
    return Math.floor(Math.random() * 16).toString(16);
  });
  if (root) {
    root.style.setProperty('--bg-color', color);
  }
}
const sum = (a: number, b: number) => {
  return a + b;
};

// ES2015 (ES6) Module export syntax is transpiled to CommonJS (NodeJS) export syntax
export { sum, root, handleClick };
