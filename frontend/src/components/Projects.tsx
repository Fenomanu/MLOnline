import ProjectCard from "./ProjectCard"
import './Projects.css'

type ProjectsProps = {
    id: string;
}

function Projects({id} : ProjectsProps){
    const items = [
        {
            id:1,
            name: "Project1",
            description: "Description1",
            techs: ["1", "2"]
        },
        {
            id: 2,
            name: "Project2",
            description: "Description2",
            techs: ["3", "4"]
        },
    ]

    return(
        <section className='projects' id={id}>
            <h1>Projects</h1>
            <div>
                {items.map(x => 
                    <ProjectCard 
                        key={x.id}
                        id={x.id}
                        name={x.name} 
                        description={x.description}
                        techs={x.techs}/>
                )}
            </div>
        </section>
    )
}

export default Projects