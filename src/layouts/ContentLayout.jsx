import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Text from '../templates/Text'
import { graphqlGetPage } from '../libs/graphqlApi'

const Content = ({ query, template }) => {
    const [data, setData] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        graphqlGetPage(query)
            .then((res) => res.json())
            .then((res) => {
                setData(res.data.page)
            })
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false))
    }, [query])

    if (isLoading) return <Loading />
    if (error) return <Error />

    if (template === 'text') return <Text data={data} />

    return <div data={data}>No Template</div>
}
export default Content
