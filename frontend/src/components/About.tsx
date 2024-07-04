import './About.css'
type AboutProps = {
    id : string;
}

function About(props : AboutProps) {
    const data = {
        name: "Manuel Díaz",
        description: "This is the text about my life my bro panacota"
    }

    return (
        <div id={props.id} className='userData'>
            <div className='profilePic'>
                <img src="avatar.jpg" alt="Avatar"></img>
                <h1 className='name'>{data.name}</h1>
            </div>
            <p>{data.description}</p>
        </div>
    )
}

export default About