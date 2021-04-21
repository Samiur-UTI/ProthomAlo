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
                <div className='content-item-news'>
                    <div className='news-item-important'>
                        <div className='breaking-news'>

                        </div>
                        <div className='notso-breaking-news'>

                        </div>

                    </div>
                    <div className='news-item'>
                        {data.slice(0,9).map(item => (
                             <div className='news-general'>
                                 <NewsItem {...item}/>
                             </div>
                        ))}
                    </div>
                </div>
                <div className='content-item-add'>
                    <div className='add'>
                            
                    </div>
                    <div className='add'>
                            
                    </div>
                    <div className='add'>
                            
                    </div>
                </div>
            </div>
            <div className="footer"></div>            
        </div>
    )
}
