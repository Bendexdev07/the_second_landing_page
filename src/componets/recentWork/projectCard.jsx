import "./projectCard.css";

export default function ProjectCard({ title,  imgSRC }) {
    return(
    <>
    <div className="projectCard">
        <img src={imgSRC} alt="project" />
        <p>{title}</p>

    </div>

    
    
    
    </>




    )

}