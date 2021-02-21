import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {getContributors, getCurrentRepo} from "../actions/repos";
import './card.less'

const Card = (props) =>{
    const{username,reponame}=useParams()
    const[repo,setRepo]=useState({owner:{}})
    const[contributors,setContributors]=useState([])
    useEffect(()=>{
        getCurrentRepo(username,reponame,setRepo)
        getContributors(username,reponame,setContributors)
    },[])
    return (
        <div>
            <button onClick={()=>props.history.goBack()} className='backBtn'>Back</button>
            <div className='card'>
                <img src={repo.owner.avatar_url} alt='avatar'/>
                <div className='repoName'>{repo.name}</div>
                <div className='stars'>{repo.stargazers_count}</div>
            </div>
            <div>
                {contributors.map((c, index)=><div key={c+'con'+index}>{`${index} ${c.login}`}</div>)}
                {/*{contributors.map(c=>{<div>{c}</div>})}*/}
            </div>
        </div>
    );
};

export default Card;