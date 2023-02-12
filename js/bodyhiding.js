(() => {
	const refs = {
		openModalBtn: document.querySelector('[open-data-modal]'),
		closeModalBtn: document.querySelector('[close-data-modal]'),
		modal: document.querySelector('[modal-data]')
	};

	const toggleModal = () => {
		const MenuOpen =
			openModalBtn.getAttribute('aria-expanded') === 'true' || false;
		closeModalBtn.setAttribute('aria-expanded', !MenuOpen);
		modal.classList.toggle('is-body-open');

		const scrollLockMethod = !MenuOpen
			? 'disableBodyScroll'
			: 'enableBodyScroll';
		bodyScrollLock[scrollLockMethod](document.body);
	};

	refs.openModalBtn.addEventListener('click', OpenModal);
	refs.closeModalBtn.addEventListener('click', OpenModal);

	function OpenModal() {
		refs.modal.classList.toggle('body-is-hidden');
		refs.modal.classList.toggle('body-is-show');
	}
})();
