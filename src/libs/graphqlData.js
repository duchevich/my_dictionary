export const API_URL = 'https://dtm.in.ua/graphql'

export const queries = new Map([
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
