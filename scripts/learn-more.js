document.addEventListener('DOMContentLoaded', function () {
    function updateLink(event) {
        event.preventDefault();  // Prevent the default link behavior

        const currentDate = new Date();
        const fullYear = currentDate.getFullYear();
        const currentYear = fullYear.toString().slice(-2);  // Get the last two digits of the year
        const currentMonth = currentDate.getMonth();

        let semester = '';
        if (currentMonth >= 1 && currentMonth < 5)  // January to April
            semester = 'SP' + (currentMonth < 3 ? currentYear : parseInt(currentYear, 10).toString());
        else if (currentMonth >= 5 && currentMonth < 8)  // May to July
            semester = 'SU' + currentYear;
        else if (currentMonth >= 8 && currentMonth < 12)  // August to November
            semester = 'FA' + currentYear;
        else  // December
            semester = 'WI' + (parseInt(currentYear, 10) + 1).toString();
        const clickedLink = event.currentTarget;
        const newUrl = clickedLink.href.replace(/\/roster\/[A-Z]{2}\d{2}\//, `/roster/${semester}/`);
        window.open(newUrl, '_blank');
    }
    
    const links = document.getElementsByClassName('learn-more');
    for (let i = 0; i < links.length; i++)
        links[i].addEventListener('click', updateLink);
});