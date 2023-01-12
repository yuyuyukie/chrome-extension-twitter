/**
 * Currently changes to the chat component doesn't work.
 * No elements may be found even if correct selectors had been given.
 */
const changeStyleForStream = (): void => {
  const items = document.querySelector('#items-offset > #items');
  if (items) {
    items.childNodes.forEach((value) => {
      if (value instanceof HTMLElement) {
        value.style.padding = '0 24px';
      }
    });
  }
  const ticker = document.querySelector('#ticker');
  if (ticker instanceof HTMLElement) {
    ticker.remove();
  }
  const header = document.querySelector('#masthead-container');
  if (header instanceof HTMLElement) {
    header.remove();
  }
  const primaryContent = document.getElementById('primary-content');
  if (primaryContent instanceof HTMLElement) {
    const chatHeader = primaryContent.parentElement;
    if (chatHeader) {
      chatHeader.remove();
    }
  }
  const chat = document.querySelector('#chat');
  if (chat instanceof HTMLElement) {
    chat.style.margin = '0';
  }
  const survey = document.getElementById('action-panel');
  if (survey) {
    survey.remove();
  }
  document.querySelectorAll('div').forEach((value) => {
    if (value.id === 'trigger') {
      value?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.remove();
    }
  });
};

export const styleForHalfWindow = (): void => {
  // change to theater mode
  const sizeButton = document.querySelector('button.ytp-size-button');
  if (
    sizeButton instanceof HTMLElement &&
    sizeButton.title === 'シアター モード（t）'
  ) {
    sizeButton.click();
  }
  window.scrollTo({ top: 56, behavior: 'smooth' });
  changeStyleForStream();
};
