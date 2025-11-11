let show = true
const menu = document.querySelector('.menu')
const btnToggle = menu.querySelector('.toggle')

btnToggle.addEventListener('click', () => {
    document.body.style.overflow = show ? 'hidden' : 'initial'
    menu.classList.toggle('active', show)
    show = !show
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })

        menu.classList.remove('active')
        document.body.style.overflow = 'initial'
        show = true
    })
})