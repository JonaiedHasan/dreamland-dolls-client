/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Tabs.css'
import CategoryToy from './CategoryToy';
const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('FashionDolls');
    const tabs = [
        {
            id: 1,
            tabTitle: 'FashionDolls',
            title: 'Title 1',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
        },
        {
            id: 2,
            tabTitle: 'ActionFigures',
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        },
        {
            id: 3,
            tabTitle: 'BabyDolls',
            title: 'Title 3',
            content: 'Contenido de tab 3.'
        }
    ];


    const [toys, setToys] = useState([]);
    useEffect( ()=>{
        fetch(`http://localhost:5000/categoryToys/${currentTab}`)
        // fetch('toys.json')
        .then(res => res.json())
        .then(data => setToys(data))
    },[currentTab])

    console.log(currentTab)

    const handleCategory = Category =>{
        setCurrentTab(Category)
        console.log(Category);
    }
    
    console.log(toys);
    return (
        <div className='container'>
            <div className='tabs flex'>
                {tabs.map((tab, i) =>
                    <button className='w-[33%]'
                     key={i} 
                     id={tab.id}
                     disabled={currentTab === `${tab.tabTitle}`}
                    //  onClick={(handleTabClick)}
                    onClick={()=>handleCategory(tab.tabTitle)}
                     >
                        {tab.tabTitle}</button>
                )}
            </div>
            
            <div className='content  md:flex '>
               
{
                   toys.slice(1,3).map(toy => <CategoryToy
                     key={toy._id}
                     
                     toy={toy}
                     ></CategoryToy>)
               }

               
              
            </div>
        </div>
    );
}

export default Tabs;