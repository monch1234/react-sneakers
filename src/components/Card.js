function Card() {
    return (
        <div className='card'>
            <div className='favorite'>
                <img src='/img/heart-unliked.svg' alt='unliked' />
            </div>

            <img width={153} height={142} src='/img/sneakers/sneakers1.jpg' alt='sneakers 1' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button className='button'><img width={11} height={11} src='/img/plus.svg' alt='plus' /></button>
            </div>
        </div>
    )
}

export default Card