
const Numbers = ({personData, onDelete}) => {

    const deletePerson = (id) => {
        if (confirm('do you want to delete this contact')) {
          onDelete(id)
        }
        
      }

  return (
    <>
        {personData.map(person => 
            <div key={person.id}>
                <p>{person.name}, {person.number}</p>
                <button onClick={() => deletePerson(person.id)}>Delete</button>
            </div>
            )}
    </>
  )}

export default Numbers