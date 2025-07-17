export function renderFooter() {
    const template = document.createElement('template');
  
    template.innerHTML = `
      <footer class="footer">
       
      </footer>
    `.trim();
  
    return template.content.firstChild;
  }