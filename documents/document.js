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

function toTop() {
    window.scrollTo(0, 0)
}
