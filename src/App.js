import React,{useState,useEffect} from 'react';
import News from './components/news/news.component';
import './App.scss';
import Ads from './components/ads/ads.component';
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
    if(data.length !== 0){
        return (
            <div className='root'>
                <div className="logo"></div>
                    <div className="content">
                        <News data={data}/>
                        <Ads/>
                    </div>
                <div className="footer"></div>            
            </div>
        )
    }
    return(
            <div className='root'>
                <div className="logo"></div>
                    <div className="content">
                        <h2 className='loading'>News</h2>
                    </div>
                <div className="footer">

                </div>            
            </div>
    )
}
