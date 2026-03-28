function injectHTML(element, html) {
  element.innerHTML = html;
  element.querySelectorAll('script').forEach(oldScript => {
    const newScript = document.createElement('script');
    newScript.textContent = oldScript.textContent;
    oldScript.replaceWith(newScript);
  });
}
