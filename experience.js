function updateAllExperiences() {
  const elements = document.querySelectorAll('.experience-duration');
  const now = new Date();

  elements.forEach(el => {
    const dateString = el.getAttribute('data-start');
    if (!dateString) return;

    const parts = dateString.split('-');
    const startYear = parseInt(parts[0], 10);
    const startMonth = parseInt(parts[1], 10) - 1;
    const startDay = parseInt(parts[2], 10);
    
    const startDate = new Date(startYear, startMonth, startDay);

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    if (now.getDate() < startDate.getDate()) {
      months--;
      if (months < 0) {
        years--;
        months += 12;
      }
    }

    const yrText = years === 1 ? 'yr' : 'yrs';
    const moText = months === 1 ? 'mo' : 'mos'; // Fixed: handles "mos" for plural

    let outputString = '';
    if (years > 0) {
      outputString += `${years} ${yrText} `;
    }
    if (months > 0 || years === 0) {
      outputString += `${months} ${moText}`;
    }


    el.innerHTML = outputString.trim();
  });
}

updateAllExperiences();