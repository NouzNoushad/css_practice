const selectBtn = document.querySelector('.select-btn');
const items = document.querySelectorAll('.item');

selectBtn.addEventListener('click', () => {
	selectBtn.classList.toggle('open');
})

items.forEach(item => {
	item.addEventListener('click', () => {
		item.classList.toggle('checked');

		let btnText = document.querySelector('.btn-text');
		let checked = document.querySelectorAll('.checked');


		if (checked && checked.length > 0) {
			btnText.innerText = `${checked.length} Selected`;
		} else {
			btnText.innerText = 'Select Language'
		}
	})
})