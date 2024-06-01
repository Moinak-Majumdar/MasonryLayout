import bg from '../assets/svg/waves-2.svg'

const Background = () => {
    return (
        <div className='fixed bottom-0 left-0 right-0'>
            <img 
                src={bg}
                alt='background-svg'
                loading='eager'
                property={true}
                width='100%'
                height=''
                style={{objectFit: 'contain', objectPosition: "center",}}
            />
            <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-black'></div>
        </div>
    )
}

export default Background