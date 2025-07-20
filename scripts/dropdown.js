export function setupDropdowns() {
  const buttons = document.querySelectorAll('.dropdown-btn');

  buttons.forEach(btn => {
    const sectionId = btn.getAttribute('aria-controls');
    const section = document.getElementById(sectionId);

    btn.addEventListener('click', () => {
      const isOpen = section.classList.contains('show');

      // Close all dropdowns
      document.querySelectorAll('.dropdown-content').forEach(drop => 
        drop.classList.remove('show'));
      buttons.forEach(b => b.setAttribute('aria-expanded', 'false'));

      // Open the selected one
      if (!isOpen) {
        section.classList.add('show');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
