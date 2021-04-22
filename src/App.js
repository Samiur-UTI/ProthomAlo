import React,{useState,useEffect} from 'react';
import News from './components/news/news.component';
import './App.scss';
export default function App() {
    const [data,setData] = useState([]);
    async function bringData (){
        try {
            const response = await fetch('./data.json');
            const data = await response.json();
            const value = await data;
            return value;
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
       const changeData = async () => {
            const response = await bringData();
            setData(response)
        };
       changeData();
    },[]);
    return (
        <div className='root'>
            <div className="logo"></div>
                <div className="content">
                    <News data={data}/>
                </div>
            <div className="footer"></div>            
        </div>
    )
}
