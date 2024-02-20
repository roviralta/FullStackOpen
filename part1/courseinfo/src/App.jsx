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
            <Part
                part={props.parts[0].name}
                number={props.parts[0].exercises}
            ></Part>
            <Part
                part={props.parts[1].name}
                number={props.parts[1].exercises}
            ></Part>
            <Part
                part={props.parts[2].name}
                number={props.parts[2].exercises}
            ></Part>
        </div>
    );
};

const Total = (props) => {
    return (
        <div>
            <p>
                {props.total[0].exercises +
                    props.total[1].exercises +
                    props.total[2].exercises}
            </p>
        </div>
    );
};

const Part = (props) => {
    return (
        <div>
            <p>
                {props.part} {props.number}
            </p>
        </div>
    );
};

const App = () => {
    const course = "Half Stack application development";
    const part1 = {
        name: "Fundamentals of React",
        exercises: 10,
    };
    const part2 = {
        name: "Using props to pass data",
        exercises: 7,
    };
    const part3 = {
        name: "State of a component",
        exercises: 14,
    };

    const parts = [part1, part2, part3];

    return (
        <div>
            <Header course={course}></Header>
            <Content parts={parts} />
            <Total total={parts} />
        </div>
    );
};

export default App;
