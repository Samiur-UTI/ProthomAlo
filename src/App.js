import React,{useState,useEffect} from 'react';
import NewsItem from './components/news-item/newsItem.component';
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
                {data.slice(0,9).map(item => (
                    <NewsItem {...item}/>
                ))}
            </div>
            <div className="footer"></div>            
        </div>
    )
}
