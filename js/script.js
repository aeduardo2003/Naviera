/**************************************************************** */




/************ ****----FUNCIONES DEL MODAL-------*********************
 * 
 


function setupModal() {
const modal = document.querySelector('.modalDialog');
const closeModal = document.querySelector('.modal__close');
const modalTitle = modal.querySelector('.modal__title');
const modalParagraph = modal.querySelector('.modal__paragraph');
const modalImage = modal.querySelector('#modalImage');
const modalButtons = document.querySelectorAll('.btn_modal');
const swiperContainer = document.querySelector('.swiper-container'); // Selecciona el contenedor de Swiper


modalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Obtener la información del atributo data-*
        const title = button.dataset.title;
        const info = button.dataset.info;
        const imgSrc = button.dataset.img;
        const imgAlt = button.dataset.imgAlt;

        // Actualizar el contenido del modal
        modalTitle.textContent = title;
        modalParagraph.textContent = info;
        modalImage.src = imgSrc; // Establecer la nueva fuente de la imagen
        modalImage.alt = imgAlt; // Establecer el texto alternativo de la imagen


        modal.classList.add('modal--show');
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('modal--show');
});
}

setupModal();*/