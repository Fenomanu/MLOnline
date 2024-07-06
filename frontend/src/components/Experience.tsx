import './Experience.css'

type ExperienceProps = {
    id : string;
}

function Experience({id} : ExperienceProps) {
    const items = [
        {
            id: 1,
            name: "Name 1",
            description: "Description 1"
        },
        {
            id: 2,
            name: "Name 2",
            description: "Description 2"
        }
    ]

    return (
        <section className='experience' id={id}>
            <h1>Experience</h1>
            <div className="wrapper">
                {items.map(x => 
                    <div className='experience-item' key={x.id}>
                        <h3>{x.name}</h3>
                        <p>{x.description}</p>
                    </div>
                )}
            </div>
        </section>
    )
}
export default Experience