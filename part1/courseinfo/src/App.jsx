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
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                name: "State of a component",
                exercises: 14,
            },
        ],
    };

    return (
        <div>
            <Header course={course.name}></Header>
            <Content parts={course.parts} />
            <Total total={course.parts} />
        </div>
    );
};

export default App;
