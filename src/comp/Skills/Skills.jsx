const skills = ['Chemistry', 'Blue', 'Cancer'];

const Skills = () => {
    return (
        <ul>
            {
                skills.map((skill)=> {
                    return(
                        <li>{skill}</li>
                    )
                })
            }
        </ul>
    )
}

export default Skills;