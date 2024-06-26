const Header = ({ title }) => <h1>{title}</h1>

const Total = ({ parts }) => {
    const total = parts.reduce((acc, b) => { 
        return acc + b.exercises}, 0)

    return (<p><b>total of {total} exercises </b></p>)
}
// const Total = ({parts}) => {
//     let total = 0
//     for (let i = 0; i < parts.length; i++) {
//         total += parts[i].exercises
//     }
//     return (
//         <div>
//             <p><b>total of {total} exercises</b></p>
//         </div>
//     )
// }
const Content = ({ course }) => {
    return (
        <div>
            {course.map(part =>
                <Part key={part.id} part={part} />
            )}
        </div>
    )
}

const Part = ({ part }) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header title={course.name} />
            <Content course={course.parts} />
            <Total parts={course.parts} />
            
        </div>
    )
}


export default Course