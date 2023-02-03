import React, { useState, useEffect } from 'react';
import Data from '../components/Data'
const getFilterList = (searchData, categoryList) =>{
    if (!searchData){ 
        return categoryList;
    }
    return categoryList.filter((character) => character.name.toLowerCase().includes(searchData.toLowerCase()));
}
const HomePage = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [searchData, setSearchData] = useState('')
    const [clickedName, setclickedname] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [category, setCategory] = useState(['people', 'films', 'vehicles', 'starships', 'species', 'planets'])
    const [categoryListPos, setCategoryListPos] = useState(0)
    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch('https://swapi.dev/api/' + category[categoryListPos]);
            let data = await response.json();
            let resultsDataList = data.results
            while(data.next != null){
                response = await fetch(data.next);
                data = await response.json();
                resultsDataList = resultsDataList.concat(data.results)
            }

            setCategoryList(resultsDataList)
            setIsLoading(false);
        };
        fetchData();
    }, [categoryListPos]);
    
    const filterList = getFilterList(searchData, categoryList)
    return <>
        <div className="allContent">
            <div className="searchNBtn">
            <h1 className="categoryTitle">{category[categoryListPos]}</h1>
            <input 
            type="text" 
            placeholder="Search..." 
            className="search" 
            value={searchData} 
            onChange={(e) => setSearchData(e.target.value)}
            />
            <button className='btnB' onClick={() => {
                setSearchData('')
                setclickedname('')
                let nextpos = categoryListPos - 1;
                if(nextpos == -1){
                    setCategoryListPos(5)
                } else{
                    setCategoryListPos(nextpos)
                }
                setIsLoading(true);
            }}>back</button>

            <button className='btnN' onClick={() => {
                setSearchData('')
                setclickedname('')
                let nextpos = categoryListPos + 1;
                if(nextpos == 6){
                    setCategoryListPos(0)
                } else{
                    setCategoryListPos(nextpos)
                }
                setIsLoading(true);
            }}>next</button>
            </div>
            {isLoading ? <p className='categoryNamesList'>Loading...</p> : (
                <ul className='categoryNamesList'>
                    {filterList.map(result => {
                        if(category[categoryListPos] == 'films'){
                            return (
                                <li key={result.name}>
                                    <button onClick={() => setclickedname(result.title)}>{result.title}</button>
                                </li>
                            );
                        }
                        else{
                            return (
                                <li key={result.name}>
                                    <button onClick={() => setclickedname(result.name)}>{result.name}</button>
                                </li>
                            );
                        }
                        
                    })}
                </ul>
                )
            }
            
            {clickedName !== '' &&
                <Data name={clickedName} category={category[categoryListPos]}></Data>
            }
        </div>
    </>;
};

export default HomePage;

