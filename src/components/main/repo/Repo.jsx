import React from 'react';
import './repo.less'
import {NavLink} from "react-router-dom";

const Repo = (props) => {
    const repo = props.repo
    return (
        <div className='repo'>
            <div className='repoHeader'>
                <div className='repoHeaderName'><NavLink to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink></div>
                <div className='repoHeaderStars'>{repo.stargazers_count}</div>
            </div>
            <div className='repoLastCommit'>{repo.updated_at}</div>
            <a href={repo.html_url} className='repoLink'>Ссылка на репозиторий: {repo.html_url}</a>
        </div>
    );
};

export default Repo;