import React, { useEffect } from 'react'
import { useState } from 'react';

export const Counter = () => {
    const  [count,setCount] = useState(0);
useEffect(()=>{

    document.title = `Count: ${count}`;
});

const onHanleClick = () => {

    setCount(count + 1);
 }

    return (


    <div>Counter
    <button onClick={onHanleClick}>Add Count</button>
</div>
    
  )
}

