const onPanelModal = document.getElementById('on-panel-modal')
const panelModal = document.getElementById('panel-modal')
const closePanelModal = document.getElementById('close-panel-modal')

const onCvModal = document.getElementById('on-cv-modal')
const cvModal = document.getElementById('cv-modal')
const closeCvModal = document.getElementById('close-cv-modal')

const toggleModal = (el: HTMLElement | null) => {
  el?.setAttribute(
    'aria-hidden',
    `${el.ariaHidden === 'true' ? 'false' : 'true'}`
  )

  el?.classList.toggle('hidden')
}

onPanelModal?.addEventListener('click', () => toggleModal(panelModal))
closePanelModal?.addEventListener('click', () => toggleModal(panelModal))

onCvModal?.addEventListener('click', () => toggleModal(cvModal))
closeCvModal?.addEventListener('click', () => toggleModal(cvModal))

export {}
