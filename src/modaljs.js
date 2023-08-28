
//модалка для чистого JS

export function Modal() {
    const dataBtnModal = document.querySelector('[data-btnModal]')
    const dataHidden = document.querySelector('[data-hidden]')
    const containerModalHidden = document.querySelector('.container__modal')
    const dataX = document.querySelector('[data-xPoint]')
    const hiddenModal = 'hidden__modal'

    const openModalClick = ((e) => {
        if (e.target === dataBtnModal) {
            dataHidden.classList.remove(hiddenModal)  
        }
    })

    const closestModalClick = ((e) => {
        if (e.target === dataX || e.key === 'Escape' || e.target === containerModalHidden) {
            dataHidden.classList.add(hiddenModal)
        }
    })

    document.addEventListener('keydown', closestModalClick)
    document.addEventListener('click', closestModalClick)
    document.addEventListener('click', openModalClick)  
}