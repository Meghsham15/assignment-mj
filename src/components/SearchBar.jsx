import { useEffect, useState } from 'react';
import CountryNames from './CountryNames';
import GenreList from './GenreList';
import LanguageList from './LanguageList';
import FilterClass from './FilterClass';

function SearchBar(props) {
    const [valueText, setValue] = useState("");
    const [languageState, setLanguage] = useState("");
    const [genreState, setGenre] = useState("");
    const [countryState, setCountry] = useState("");

    function handleChange(e,type) {
        let val =e.target.value;
        let list = FilterClass.filter(type,val);
        props.setFilteredMovies(list);
        if(type==="search"){
            setValue(val);
        }else if(type==="country"){
            setCountry(val);
        }else if(type==="genre"){
            setGenre(val);
        }else if(type==="language"){
            setLanguage(val);
        }   
    }

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search movies..."
                value={valueText}
                onChange={(e)=>{handleChange(e,"search")}}
            />
            <select className='select' value={languageState} onChange={(e)=>{handleChange(e,"language")}}>
                <option value="">All Languages</option>
                {LanguageList.map((ele)=>{
                   return <option value={ele}>{ele}</option>
                })}
            </select>
            <select className='select' value={genreState} onChange={(e)=>{handleChange(e,"genre")}}>
                <option value="">All Genres</option>
                {GenreList.map((ele)=>{
                   return <option value={ele}>{ele}</option>
                })}
            </select>

            <select className='select' value={countryState} onChange={(e)=>{handleChange(e,"country")}}>
                <option value="">All Countries</option>
                {CountryNames.map((ele)=>{
                   return <option value={ele}>{ele}</option>
                })}
            </select>
        </div>
    );
}

export default SearchBar;
