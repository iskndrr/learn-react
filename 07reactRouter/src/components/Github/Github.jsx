import React from 'react'
import {useLoaderData} from "react-router-dom";

function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/iskndrr`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // })

    const data = useLoaderData();
    return (


        <div className='flex justify-center gap-x-2 w-full'>
            <div>
                <h1 >Name: <span className='bg-orange-500 px-1'>{data.name}</span></h1>
                <h2>Followers: <span className='bg-orange-500 px-1 '>{data.followers}</span></h2>
                <h3>Public Repo: <span className='bg-orange-500 px-1 '>{data.public_repos}</span></h3>
            </div>
            <img src={data.avatar_url} alt='' className='' width='200px' height='200px'/>
        </div>

    )
}

export const githubInfo = async () => {
    const res = await fetch(`https://api.github.com/users/iskndrr`)
    return res.json()

}
export default Github
