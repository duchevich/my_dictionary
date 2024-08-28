export const API_URL = 'https://dtm.in.ua/graphql'

export const queries = new Map([
    [
        'about',
        `
			{
				page(id: "cG9zdDo4OA==") {
					title
					content
				}
			}
		`,
    ],
    [
        'terms',
        `
			{
				page(id: "cG9zdDo5Mg==") {
					title
					content
				}
			}
		`,
    ],
    [
        'privacy',
        `
			{
				page(id: "cG9zdDo5NA==") {
					title
					content
				}
			}
		`,
    ],
    [
        'copyright',
        `
			{
				page(id: "cG9zdDo5OA==") {
					title
					content
				}
			}
		`,
    ],
])
