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
// let trigger = document.querySelectorAll('.accordion-item__trigger');
// trigger[0].classList.toggle('active');