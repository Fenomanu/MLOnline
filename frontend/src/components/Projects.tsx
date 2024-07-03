import ProjectCard from "./ProjectCard"

type ProjectsProps = {
    id: string;
}

function Projects({id} : ProjectsProps){
    const items = [
        {
            name: "Project1",
            description: "Description1",
            techs: ["1", "2"]
        },
        {
            name: "Project2",
            description: "Description2",
            techs: ["3", "4"]
        },
    ]

    return(
        <div id={id}>
            <h1>Projects</h1>
            <div>
                {items.map(x => 
                    <ProjectCard 
                        name={x.name} 
                        description={x.description}
                        techs={x.techs}/>
                )}
            </div>
        </div>
    )
}

export default Projects