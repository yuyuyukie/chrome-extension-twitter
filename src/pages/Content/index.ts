import {printLine} from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

const clickFollowing = () => {
  const followingButton = document.querySelector(
    "div[data-testid='ScrollSnap-List'] > div:last-child > a"
  );
  if (followingButton instanceof HTMLElement) {
    followingButton.click();
    clearInterval(interval)
  }
}

let interval = setInterval(clickFollowing, 1000)
