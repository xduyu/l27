const goToTestBtn = document.getElementById('goToTestBtn');
const overlay = document.getElementById('overlay');
const modelGoTest = document.getElementById('model__go-test');
const goTestBtnModel = document.getElementById('go__test-btn__model');
const wrapper = document.getElementById('wrapper');
const wrapperMenu = document.getElementById('wrapper-menu');
const closeBtnWrpMenu = document.getElementById('close__btn-wrp-menu');
const burgerMenu = document.getElementById('burger-menu');


burgerMenu.addEventListener('click', () => {
    wrapper.style.display = 'none'
    wrapperMenu.style.display = 'block'
})

closeBtnWrpMenu.addEventListener('click', () => {
    wrapper.style.display = 'block'
    wrapperMenu.style.display = 'none'
})

goToTestBtn.addEventListener('click', () => {
    overlay.style.display = 'flex'
    modelGoTest.style.display = 'block'
})

overlay.addEventListener('click', () => {
    overlay.style.display = 'none'
    modelGoTest.style.display = 'none'
})

goTestBtnModel.addEventListener('click', () => {
    overlay.style.display = 'none'
    modelGoTest.style.display = 'none'
})