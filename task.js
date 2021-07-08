//аккордион
document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        
        if (parent.classList.contains('accordion-item--active')) {
            parent.classList.remove('accordion-item--active');
        } else {
            document.querySelectorAll('.accordion-item').forEach((child) =>
                child.classList.remove('accordion-item--active'))
            
            parent.classList.toggle('accordion-item--active');
        }
    })
)
//открытие модального окна
let buttonOrder = document.querySelector("button.header__button");
let form = document.querySelector('form.form-popup');
let closeForm = document.querySelector('span.popup-header__close');
buttonOrder.onclick = function () {
    form.style.display="flex"
}
// закрытие модального окна по клику на крестик
closeForm.onclick = function () {
    form.style.display = 'none';
}
//валидация
// 1)определяем элементы с HTML
let name = document.getElementById('popup__text'); 
let phone = document.getElementById('popup__tel');
let buttonPopup = document.getElementById('popup__button');

let alertFolseName = document.querySelector('.alertFolseName');
let alertFolsePhone = document.querySelector('.alertFolsePhone');

jQuery(function ($) {
    //создаем свою маску для номера телефона
    $("#number").mask("+375(99) 999-99-99")
})

buttonPopup.addEventListener('click', checkValid);
function checkValid(event) {
    event.preventDefault;
    if (name.value == '') {      
        alertFolseName.innerHTML = 'Обязательное поле';
        
    } else if (phone.value == '') {
        alertFolsePhone.innerHTML = 'Обязательное поле';
    }
}

console.log (form)