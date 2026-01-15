// bij elke header >>> click >>toglle

// document.querySelectorAll('.footer-group h4').forEach(header => {
//     header.addEventListener('click', () => {
//         const group = header.parentElement;
//         group.classList.toggle('is-open');
//     });
// });



document.querySelectorAll('.footer-group h4').forEach(header => {
    header.addEventListener('click', () => {
        const group = header.parentElement;
        
        // Optioneel: sluit andere groepen als er een opent (voor iPhone SE overzicht)
        document.querySelectorAll('.footer-group').forEach(otherGroup => {
            if (otherGroup !== group) {
                otherGroup.classList.remove('is-open');
            }
        });

        group.classList.toggle('is-open');
    });
});