import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { awaitExpression } from '@babel/types';

export const useData = (url, initValue) => {
    const [response, setResponse] = useState(initValue);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async function() {
            try {
                const theData = await axios.get(url)
                if (theData.status === 200) {
                    setResponse(theData.data);
                }
            } catch (error){
                setError(error)
            }
        }
        fetchData();
    }, [url]);

    return [response, error];
    
}

// class useData extends React.Component{
//     constructor() {
//         super();
//         this.state = {
//             response: [],
//             error: null
//         }

//     }

//     componentDidMount() {
//         const fetchData = async function() {
//             try {
//                 const theData = await axios.get(this.props.url)
//                 if (theData.status === 200) {
//                     this.setState({response: theData.data});
//                 }
//             } catch (error){
//                 this.setState({error: error})
//             }
//         }
//         fetchData();
//     }

//     render() {
//         return (
//             [this.state.response, this.state.error]
//         )
//     }
    
// }

// export default useData;