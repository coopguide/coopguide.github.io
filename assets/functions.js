function toggleSpoiler(element) {
	const style = window.getComputedStyle(element);
	if (parseInt(style.height) < 42) {
		let spoilerHeight = style.height
		element.style.height = 'auto'
		element.style.cursor = 'default'
		let actualSpoiler = element
		if (element.classList.contains('a')) {
			actualSpoiler = element.firstChild
		}
		actualSpoiler.style.color = 'inherit'
		actualSpoiler.style.background = 'inherit'
		actualSpoiler.style.backgroundClip = 'inherit'
		actualSpoiler.style.webkitBackgroundClip = 'inherit'

		const newSpan = document.createElement('span')
		newSpan.classList.add('button')
		newSpan.textContent = '[RIDUCI]'
		newSpan.style.marginLeft = '16px'
		newSpan.addEventListener('click', (event) => {
			event.currentTarget.parentElement.style.height = spoilerHeight
			event.currentTarget.parentElement.style.cursor = 'pointer'
			let actualSpoiler = event.currentTarget.parentElement
			if (event.currentTarget.parentElement.classList.contains('a')) {
				actualSpoiler = event.currentTarget.parentElement.firstChild
			}
			actualSpoiler.style.color = 'transparent'
			actualSpoiler.style.background = 'linear-gradient(to right, #999259 0%, #999259 70%, #e8e09c 95%)'
			actualSpoiler.style.backgroundClip = 'text'
			actualSpoiler.style.webkitBackgroundClip = 'text'
			history.replaceState(null, null, window.location.pathname + window.location.search)
			window.location.hash = '#' + event.currentTarget.parentElement.id
			event.currentTarget.remove()
			event.stopPropagation()
		})
		element.appendChild(newSpan)
	}
}