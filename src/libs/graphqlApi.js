import { API_URL, queries } from './graphqlData'

export const graphqlGetPage = async (query) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: queries.get(query),
        }),
    })
}
