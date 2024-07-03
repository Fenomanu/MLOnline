type ProjectCardData = {
    name: string,
    description: string,
    techs : string[]
}
function ProjectCard(props : ProjectCardData) {
    return (
        <div>
            <div>
                {props.techs.map(x => 
                    <div>{x}</div>
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