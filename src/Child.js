import React, { useContext } from 'react'
import { themeContext } from './App'

const Child = () => {

    const useCont = useContext(themeContext);
    console.log(useCont)

    return (
    <div className='Child'>
        {useCont==="Light"?<h1> This is {useCont} Theme </h1>:<h1> This is {useCont} Theme </h1>}
    </div>
    )
}

export default Child
