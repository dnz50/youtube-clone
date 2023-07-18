import React, { useContext } from 'react'
import { categories } from '../utils/contants'
import { Context } from '../context/context'


const LeftNav = () => {
    const {selectedCategory, setSelectedCategory} =useContext(Context)
    return (
        <div className='bg-dark text-light p-3 d-flex flex-column gap-4'>
            {categories.map((item, index) => (
                <>
                    <div className={`p-2 ${selectedCategory === item.name &&
                     'left-btn bg-secondary rounded pe-auto'}`}
                     key={index} onClick={()=>setSelectedCategory(item.name)}>
                        <span className='mx-1'>{item.icon}</span>
                        <span className='mx-1'>{item.name}</span>
                    </div>
                    {item.divider && <hr className='"my-4' />}
                </>
            ))}
        </div>
    )
}

export default LeftNav