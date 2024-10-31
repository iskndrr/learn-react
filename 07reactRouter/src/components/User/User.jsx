import React from 'react'

import {useParams} from "react-router-dom";

function User() {

    const {userId} = useParams();
    return (
        <div className='text-black bg-orange-500 text-center py-5 text-xl'>user: {userId}</div>
    )
}

export default User
