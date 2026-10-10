document.addEventListener('click', (event) => {
  const openDetails = document.querySelectorAll('details[open]');

  openDetails.forEach((details) => {
    if (!details.contains(event.target)) {
      details.removeAttribute('open');
    }
  });
});

document.addEventListener("click", (event) => {
      const clickedLink = event.target.closest("a");

      document.querySelectorAll("details[open]").forEach((dropdown) => {
        if (clickedLink || !dropdown.contains(event.target)) {
          dropdown.removeAttribute("open");
        }
      });
    });