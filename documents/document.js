function myFunction() {
    let input, filter, main, section, i, error
    input = document.getElementById('myInput')
    filter = input.value.toUpperCase()
    main = document.getElementById('myMain')
    section = main.getElementsByTagName('section')
    error = document.getElementById('errorMsg')

    for (i = 0; i < section.length; i++) {
        txtValue = section[i].textContent || section[i].innerText
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            section[i].style.display = ''
            window.scrollTo(0, 0)
        } else {
            section[i].style.display = 'none'
            error.style.display = 'block'
        }
    }
}

// To the top
function toTop() {
    window.scrollTo(0, 0)
}

// Modal Demo Button
const body = document.querySelector('body')
const modalDemoBtn = document.querySelector('#modalDemoBtn')
const modal = document.querySelector('.modal')

modalDemoBtn.addEventListener('click', () => {
    modal.style.visibility = 'visible'
    modal.style.opacity = '1'
    body.style.overflow = 'hidden'
})

body.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.visibility = 'hidden'
        modal.style.opacity = '0'
        body.style.overflow = 'auto'
    }
})

// Snackbar
const snackbarDemoBtn = document.getElementById('snackbarDemoBtn')
const snackbar = document.querySelector('.snackbar')

snackbarDemoBtn.addEventListener('click', showSnackBar)

function showSnackBar() {
    snackbar.style.display = 'block'

    setTimeout(() => {
        snackbar.style.display = 'none'
    }, 1500)
}
