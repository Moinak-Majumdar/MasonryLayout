
const ImgGrid = () => {
    return (
        <ul className='w-fit columns-2 lg:columns-3 2xl:columns-4 mx-auto gap-4 mt-8' style={{zIndex: 1}}>
            {Array(100).fill().map((curr, i) => {
                return (
                    <li key={`img-${i}`} className="break-inside-avoid mb-4">
                        <img className="w-fit rounded-xl" src={`https://source.unsplash.com/random/?nature&${i}`} alt={`img-${i}`} loading="lazy" />
                    </li>
                )
            })}
        </ul>
    )
}

export default ImgGrid