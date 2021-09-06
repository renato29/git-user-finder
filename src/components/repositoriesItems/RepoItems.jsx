import React from 'react'

const RepoItems = ({name, linkToRepo, fullName, desciption}) => {
    return (
        <div>
            <h2>Repositorie Name: {name} </h2><br />
            <h2>Repositorie FullName: {fullName} </h2><br/>
            <span>Link:</span> <a href= {linkToRepo} target='_blank'  rel='noreferrer'>{name}</a> <br />
            <h2>Description: {desciption}</h2>
        </div>
    )
}

export default RepoItems
