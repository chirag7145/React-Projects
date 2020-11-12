import React from 'react';

const Result = ({min,max,getMin,getMax,getResult,getAlert}) => {

    const onClick = () => {
        min = parseInt(min);
        max = parseInt(max);
        console.log(min);
        console.log(max);
        if(isNaN(min) && isNaN(max)) {
            getMin('');
            getMax('');
            console.log('Pls enter valid min and max number');
            getResult('');
            getAlert('Pls enter valid min and max number','red');
        } else if(isNaN(min)) {
            getMin('');
            console.log('Pls enter valid min number');
            getResult('');
            getAlert('Pls enter valid min number','red');
        } else if(isNaN(max)) {
            getMax('');
            console.log('Pls enter valid max number');
            getResult('');
            getAlert('Pls enter valid max number','red');            
        } else if(min > max) {
            console.log('Pls enter max number greater than min number');
            getResult('');
            getAlert('Pls enter max number greater than min number','red');
        } else {
            const value = Math.floor(Math.random()*(max-min+1)+min);
            console.log(min,max,value);
            getResult(value);
        }
    }

    return (
        <div className='btn'>
            <button onClick={onClick}>Submit</button>
        </div>
    )
}


export default Result;
