const body = document.querySelector('body')
const modalDemoBtn = document.querySelector('#modalDemoBtn')
const modal = document.querySelector('.modal')

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
modalDemoBtn.addEventListener('click', () => {
    modal.style.visibility = 'visible'
    modal.style.opacity = '1'
    body.style.overflow = 'hidden'
})

body.addEventListener('click', (e) => {
    console.log(e)
    if (e.target === modal) {
        modal.style.visibility = 'hidden'
        modal.style.opacity = '0'
        body.style.overflow = 'auto'
    }
})
