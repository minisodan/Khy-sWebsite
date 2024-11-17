import { createFlickr } from "flickr-sdk";
import { useEffect } from 'react';


const Portfolio = () => {
    const { flickr } = createFlickr("a4d4d47e4eaa02f8ca992fb204ea210b")
    useEffect(() => {
        async function testFlickr() {
            flickr('flickr.photos.search', {user_id: 'mylesmasonn'})
                .catch(err => console.log(err))
        }
        testFlickr()
    }, [])    
    return <div></div>
}

export default Portfolio;