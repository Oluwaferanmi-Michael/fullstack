const Header = ({courseHeader}) => {
    return (
      <h1>{courseHeader.name}</h1>
    )
  }
  
  const Content = ({courseContent}) => {
    return (
      <div>
         {courseContent.parts.map((part) => <Part key={part.id} coursePart={part}></Part>)} 
      </div>
    )
  }
  
  const Part = ({coursePart}) => {
    return (
      <p>{coursePart.name} {coursePart.id}</p>
    )
  }
  
  const Course = ({course}) => {
    return (
      <>
        <Header courseHeader={course}></Header>
        <br></br>
        <Content courseContent={course}></Content>
  
        <b>
          total of {course.parts.reduce((sum, part) => {sum + part.exercises}, 0)} exercises
        </b>
      </>
    )
  }

  export default Course;