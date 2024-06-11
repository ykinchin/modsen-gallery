export const generatePages = (
	currentPage: number,
	totalPages: number | null
): number[] => {
	if (!totalPages) return []

	const pagesToShow = [currentPage]
	for (let i = 1; i <= 3; i++) {
		const nextPage = currentPage + i
		if (nextPage <= totalPages) {
			pagesToShow.push(nextPage)
		}
	}
	return pagesToShow
}
