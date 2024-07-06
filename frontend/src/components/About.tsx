import './About.css'

type AboutProps = {
    id : string;
}

function About(props : AboutProps) {
    const data = {
        name: "Your name",
        description: "This is the text about your life, just a short description" +
        "of what you have done up till now"
    }

    return (
        <section className='about' id={props.id}>
            <img className='profile-pic' src="avatar.jpg" alt="Avatar"></img>
            <h1 className='name'>{data.name}</h1>
            <p className='profile-info'>{data.description}</p>
        </section>
    )
}

export default About