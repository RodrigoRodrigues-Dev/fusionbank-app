document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('[data-faq-question]');

    questions.forEach((item) => {
        item.addEventListener('click', abreOuFechaResposta);
    });
});

const abreOuFechaResposta = (elemento) => {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
};