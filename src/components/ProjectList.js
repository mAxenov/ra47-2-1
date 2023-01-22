import React from "react";

function ProjectList({ project }) {

    return (
        <div className="container-image">

            {project.map(item => {
                return (<div className="img-wrapper">
                    <img src={item.img} />
                </div>);
            })}


        </div>
    );
}

export default ProjectList;