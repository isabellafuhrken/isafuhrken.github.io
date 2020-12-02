document.addEventListener('DOMContentLoaded', function() {
    body = document.querySelector('body')

    img = document.querySelector('.menu-burguer')

    nav = document.querySelector('nav')

    console.log(img)

    body.addEventListener('click', function(event) {
        nav.style.display = 'none'
        console.log('Olá')
    })

    var hamburguerActivated = false

    img.addEventListener('click', function(event) {
        event.stopPropagation()
        
        if (hamburguerActivated) {
            nav.style.display = 'none'
            hamburguerActivated=false

        } else {
            nav.style.display = 'flex'
            hamburguerActivated=true
        }
        
    })

})