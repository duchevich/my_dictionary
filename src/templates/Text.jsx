const Text = ({ data }) => {
    console.log(data.content)

    return (
        <div className='text'>
            <div className='container'>
                <h1>{data.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
        </div>
    )
}
export default Text
