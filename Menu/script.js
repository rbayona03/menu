const navBarBtn = document.querySelector('.navbar_btn');
const navBarLinks = document.querySelector('.navbar_links');

navBarBtn.addEventListener('click', function () {
    let value = navBarLinks.classList.contains('navbar_collapse');

    if (value) {
        navBarLinks.classList.remove('navbar_collapse');
        navBarBtn.classList.remove('change')
    }
    else {
        navBarLinks.classList.add('navbar_collapse');
        navBarBtn.classList.add('change')


    }
});