import React from 'react';

const ProjectSummary = ({project}) => {
    return (
        <div className='card z-depth-0'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>{project.title}</span>
                <p>Posted by user</p>
                <p className='grey-text'>23rd Sept, 5PM</p>
            </div>
        </div>
    )
}

export default ProjectSummary;