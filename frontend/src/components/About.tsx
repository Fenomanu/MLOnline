type AboutProps = {
    id : string;
}

function About(props : AboutProps) {
    const data = {
        name: "Manuel Díaz",
        description: "This is the text about my life my bro panacota"
    }
    return (
        <div id={props.id}>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
        </div>
    )
}

export default About