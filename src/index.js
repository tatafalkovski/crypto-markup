import "./main.scss";

var dropdowns = document.querySelectorAll('.js-dropdown');
console.log(dropdowns);

dropdowns.forEach(function(dropdown) {
    var trigger = dropdown.querySelector('.js-trigger');
    var target = dropdown.querySelector('.js-dropdown-target');

    trigger.addEventListener('click', function(e) {
        target.classList.toggle('visible');
        trigger.classList.toggle('active');
        trigger.textContent = trigger.textContent === 'Show more' ? 'Show less' : 'Show more';
    })
})