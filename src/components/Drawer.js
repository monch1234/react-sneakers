function Drawer() {
    return (
        <div className='overlay' style={{ display: 'none' }}>
            <div className='drawer'>
                <h2 className='d-flex justify-between mb-30'>
                    Корзина
                    <img src='/img/btn-remove.svg' alt='remove' className='cu-p' />
                </h2>
                <div className='items'>
                    <div className='cartItem d-flex mb-20'>
                        <div style={{ backgroundImage: 'url(/img/sneakers/sneakers1.jpg)' }} className='cartItemImg'>
                        </div>
                        <div className='mr-20 flex'>
                            <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className='remove-btn' src='/img/btn-remove.svg' alt='remove' />
                    </div>
                </div>
                <div className='cartTotalBlock'>
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>

                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className='greenButton'>Оформить заказ <img src='/img/arrow.svg' alt='Arrow' /> </button>
                </div>
            </div>
        </div>
    )
}

export default Drawer