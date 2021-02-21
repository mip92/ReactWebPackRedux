import React, {useEffect, useState} from 'react';
import './main.less'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repo from "./repo/Repo";
import {setCurrentPage} from "../../reducers/reposReducer";
import {createPages} from "../../utils/pagesCreator";
import {Redirect} from "react-router-dom";

const Main = () => {
    const dispatch = useDispatch();
    const repo = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const perPage = useSelector(state => state.repos.perPage)
    const totalCount = useSelector(state => state.repos.totalCount)
    const isFetchError = useSelector(state => state.repos.isFetchError)
    const [searchValue, setSearchValue]=useState('')
    const pageCount=Math.ceil(totalCount/perPage)
    const page= []
    createPages(page, pageCount, currentPage)
    useEffect(() => {
        dispatch(getRepos(searchValue,currentPage,perPage))
    }, [currentPage])

    function searchHandler() {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue,currentPage,perPage))
    }
   /* if(isFetchError==true){
        return <Redirect to={`/error`}/>
    }*/

    return (
        <div>
            {
                !!isFetchError &&<div className="alert alert-danger" role="alert">
                    Ахтунг, ошибка, обновите страницу
                </div>
            }
            <div className="search">
                <input value= {searchValue} onChange={(e)=>setSearchValue(e.target.value)} type='text' placeholder='input repo name' className='searchInput'/>
                <button onClick={()=>searchHandler()} className='searchBtn'>Search</button>
            </div>
            {
                !isFetching
                    ?
                    repo.map((r, key )=> <Repo key={key} repo={r}/>)
                    :
                    <div className='center'>
                        <div className='fetching'></div>
                    </div>
            }
            <div className='pages'>
                {page.map((p,index)=>
                    <span onClick={()=>dispatch(setCurrentPage(p))} className={currentPage-1==index? "currentPage" :'page'} key={p+'page'}>{p}</span>)}
            </div>
        </div>
    );
};

export default Main;