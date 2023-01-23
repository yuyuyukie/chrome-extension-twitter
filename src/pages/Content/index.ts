import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

document.addEventListener('DOMContentLoaded', () => {
  const followingButton = document.querySelector(
    "div[data-testid='ScrollSnap-List'] > div:last-child"
  );
  if (followingButton instanceof HTMLElement) {
    followingButton.click();
  }
});
