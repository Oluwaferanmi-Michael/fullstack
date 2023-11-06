
const Header = (courseName) => {
  return (
    <h1>
      {courseName.name}
    </h1>
  );
}

const Part = (coursePart) => {
  return (
    <p>
      {coursePart.part} {coursePart.exercise}
    </p>
  )
}

const Content = (parts) => {
  return (
    <>
      <Part part={parts[0].title} exercise={parts[0].exercises}></Part>
      <Part part={parts[1].title} exercise={parts[1].exercises}></Part>
      <Part part={parts[2].title} exercise={parts[2].exercises}></Part>
    </>
  )
}

const Total = (total) => {
  return (
    <p>
      Number of exercises {total.exercise1 + total.exercise2 + total.exercise3}
    </p>
  )
}


function App() {
  const course = {
  name: 'Half Stack Application development',
  part: [
    {
      title: 'Fundamentals of React',
      exercises: 10
    },
    {
      title: 'Using Props to pass Data',
      exercises: 7
    },
    {
      title: 'State of a Component',
      exercises: 14
    }]};


  return (
    <>
      <Header name={course}/>
      <Content parts={course.part}
        // name={course.part[0].title} exercises={course.part[0].exercises}
        // name2={course.part[1].title} exercises2={course.part[1].exercises}
        // name3={course.part[2].title} exercises3={course.part[2].exercises}
      />
      <Total exercise1={course.part[0].exercises} exercise2={course.part[1].exercises} exercise3={course.part[2].exercises}></Total>
    </>
  )
}

export default App
