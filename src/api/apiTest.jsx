import {useState, useEffect} from 'react'
import axios from 'axios'


const ApiTest = () => {

    const [data, setData] = useState([])
    const [callback, setCallback] = useState(false)
    
    useEffect(() => {
        const getdata = async()=>{
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setData(response.data.slice(0, 6));
            })
            .catch(error => {
                console.error(error);
            });
        }
        getdata()

    }, [callback])

    return {
        TestData: [data, setData],
    }
}

export default ApiTest