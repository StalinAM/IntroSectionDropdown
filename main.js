function changeIconArrow(selector, nameAttribute) {
    if (selector.getAttribute(nameAttribute) == './images/icon-arrow-down.svg') {
        selector.setAttribute(nameAttribute, './images/icon-arrow-up.svg')
    } else {
        selector.setAttribute(nameAttribute, './images/icon-arrow-down.svg')
    }
}
//Open and close the mobile menu
const iconOpenMobileMenu = document.querySelector(".mobile-menu-icon")
const iconCloseMobileMenu = document.querySelector(".icon-close-menu")
const mobileMenu = document.querySelector(".mobile-menu-container")

iconOpenMobileMenu.addEventListener('click', () => { mobileMenu.classList.toggle('inactive') });
iconCloseMobileMenu.addEventListener('click', () => { mobileMenu.classList.toggle('inactive') })

//Open and close the features submenu
const openFeatures = document.querySelector("#open-features")
const featuresSubmenu = document.querySelector(".features-submenu")

openFeatures.addEventListener('click', () => {
    changeIconArrow(openFeatures, 'src')
    featuresSubmenu.classList.toggle('inactive')
})

//Open and close the company submenu
const openCompany = document.querySelector("#open-company")
const companySubmenu = document.querySelector('.company-submenu')

openCompany.addEventListener('click', () => {
    changeIconArrow(openCompany, 'src')
    companySubmenu.classList.toggle('inactive')
})