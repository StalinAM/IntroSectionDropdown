function changeIconArrow(selector, nameAttribute,index) {
    if (selector[index].getAttribute(nameAttribute) == './images/icon-arrow-down.svg') {
        selector[index].setAttribute(nameAttribute, './images/icon-arrow-up.svg')
    } else {
        selector[index].setAttribute(nameAttribute, './images/icon-arrow-down.svg')
    }
}

const iconChange = document.querySelectorAll(".changeIcon")
//Open and close the mobile menu
const iconOpenMobileMenu = document.querySelector(".mobile-menu-icon")
const iconCloseMobileMenu = document.querySelector(".icon-close-menu")
const mobileMenu = document.querySelector(".mobile-menu-container")

iconOpenMobileMenu.addEventListener('click', () => { mobileMenu.classList.toggle('inactive') });
iconCloseMobileMenu.addEventListener('click', () => { mobileMenu.classList.toggle('inactive') })

//Open and close the features submenu
const openFeatures = document.querySelectorAll(".open-features")
const featuresSubmenu = document.querySelectorAll(".features-submenu")

openFeatures[0].addEventListener('click', () => {
    changeIconArrow(iconChange, 'src', 0)
    featuresSubmenu[0].classList.toggle('inactive')
})
openFeatures[1].addEventListener('click', () => {
    changeIconArrow(iconChange, 'src', 2)
    featuresSubmenu[1].classList.toggle('inactive')
})
//Open and close the company submenu
const openCompany = document.querySelectorAll(".open-company")
const companySubmenu = document.querySelectorAll('.company-submenu')

openCompany[0].addEventListener('click', () => {
    changeIconArrow(iconChange, 'src', 1)
    companySubmenu[0].classList.toggle('inactive')
})
openCompany[1].addEventListener('click', () => {
    changeIconArrow(iconChange, 'src', 3)
    companySubmenu[1].classList.toggle('inactive')
})

console.log(openFeatures)