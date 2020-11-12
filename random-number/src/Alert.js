import React, { Fragment } from 'react';

const Alert = ({alert}) => {

    if(alert !== null) {
        return (
            <div className='alert'>
                <p>{alert.msg}</p>        
            </div>
        )
    } else {
        return <Fragment></Fragment>
    }
}

export default Alert;
