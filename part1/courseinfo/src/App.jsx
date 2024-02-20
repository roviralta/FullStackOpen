const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    );
};
const Content = (props) => {
    return (
        <div>
            <p>
                {props.parts[0]} {props.exercicies[0]}
            </p>
            <p>
                {props.parts[1]} {props.exercicies[1]}
            </p>
            <p>
                {props.parts[2]} {props.exercicies[2]}
            </p>
        </div>
    );
};
const Total = (props) => {
    return (
        <div>
            <p>{props.total}</p>
        </div>
    );
};

const App = () => {
    const course = "Half Stack application development";
    const part1 = "Fundamentals of React";
    const part2 = "Using props to pass data";
    const part3 = "State of a component";

    const exercises1 = 10;
    const exercises2 = 7;
    const exercises3 = 14;

    const exercicies = [exercises1, exercises2, exercises3];
    const total = exercises1 + exercises2 + exercises3;
    const parts = [part1, part2, part3];

    return (
        <div>
            <Header course={course}></Header>
            <Content parts={parts} exercicies={exercicies} />
            <Total total={total} />
        </div>
    );
};

export default App;
