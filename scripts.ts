let root: HTMLElement = document.documentElement;

let button: HTMLButtonElement = document.querySelector('button');
button.addEventListener('click', handleClick);

function handleClick(): void {
  let color: string = '#000000'.replace(/0/g, function() {
    return Math.floor(Math.random() * 16).toString(16);
  });
  root.style.setProperty('--bg-color', color);
}
