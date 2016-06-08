'use strict';

document.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('click', e => {
		if (!e.target.classList.contains('globalNotifications_count')) {
			return;
		}

		e.preventDefault();

		// fetchを1秒待つ
		setTimeout(() => {
			const items = document.querySelectorAll('.globalNotificationContents_itemText');
			if (items.length === 0) {
				return;
			}

			for (const item of items) {
				const nameEl = item.querySelector('.bold');
				const name = nameEl.textContent;
				nameEl.innerHTML = `<a style="color: #337ab7;" href="/${name}">${name}</a>`;
			}
		}, 1000);
	}, false);
});
