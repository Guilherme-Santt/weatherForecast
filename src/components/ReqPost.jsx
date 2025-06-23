import { use, useEffect, useState } from "react"

function ReqPost(){
    const [resourceType, setResourceType] = useState("posts")
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchResources = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
            const data = await response.json()

            setItems(data)
        }   
        fetchResources()
        
    }, [resourceType])
    
    const changeResourceType = (resourceType) => {
        setResourceType(resourceType)
    };

    return(
        <div>
            <h1>{resourceType}</h1>
            <button onClick={() => changeResourceType('posts')}>POSTS</button>
            <button onClick={() => changeResourceType('comments')}>comments</button>
            <button onClick={() => changeResourceType('todos')}>todos</button>
            {items.map((item) => {
                return(
                    <p key={item.id}>{item.body}</p>
                )
            })}
        </div>
    )
}
export default ReqPost