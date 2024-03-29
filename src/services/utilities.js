function dateFormat(dateString) {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	// Split the date string into year, month, and day components
	const [year, month, day] = dateString.split('-').map(Number);

	// Create a new Date object
	const date = new Date(year, month - 1, day); // Note: month is 0-indexed in JavaScript Date

	// Get the month name
	const monthName = months[date.getMonth()];

	// Return the formatted day string
	return `${monthName}, ${day}, ${year}`;
}

export { dateFormat };
