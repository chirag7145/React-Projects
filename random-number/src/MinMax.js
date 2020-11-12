import React from 'react';

const MinMax = ({min,max,getMin,getMax}) => {

    const onChangeMin = async (e) => {
        getMin(e.target.value);
    }

    console.log(min);


    const onChangeMax = (e) => {
        console.log(e.target.value);
        getMax(e.target.value);
    }
    
    return (
        <div>
            <input type='number' id='min' value={min === '' ? '' : min} placeholder='Enter the minimum number' onChange={onChangeMin}/>
            <input type='number' id='max' value={max === '' ? '' : max} placeholder='Enter the maximum number' onChange={onChangeMax}/>
        </div>
    )
}

export default MinMax;
