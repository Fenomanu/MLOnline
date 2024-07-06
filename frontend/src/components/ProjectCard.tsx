import './ProjectCard.css'

type ProjectCardData = {
    id : number,
    name: string,
    description: string,
    techs : string[]
}

function ProjectCard(props : ProjectCardData) {
    return (
        <div className='project-card'>
            <div className='project-card-techs'>
                {props.techs.map(x => 
                    <div className='project-card-techs-item'>{x}</div>
                )}
            </div>
            <div>
                <h3>{props.name}</h3>
                <p>
                    {props.description}
                </p>                
            </div>
        </div>
    )
}

export default ProjectCard