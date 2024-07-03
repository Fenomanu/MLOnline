type SkillsProps = {
    id : string;
}

function Skills(props : SkillsProps) {
    return(
        <section id={props.id}>
            <h1>Skills</h1>
            <ul>
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
                <li>Skill 4</li>
                <li>Skill 5</li>
            </ul>
        </section>
    )
}
export default Skills