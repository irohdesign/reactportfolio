import React from "react";

function ProjectBox(props) {
    return(
        <div className="card">
            <div className="img-container">
                <div className="image" style={{height:"400px", width:"100%", background:`url(${props.image})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
            </div>

            <div className="information">
                <h2>{props.name}</h2>
                <ul id="project-ul">
                    {props.tech.map((item, index) => (
                        <li key="index" item="item">{item}</li>
                    ))}
                </ul>
                {props.description}
            </div>
        </div>
    )
}

export default ProjectBox;