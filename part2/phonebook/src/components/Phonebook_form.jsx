
const PhoneBookForm = ({
    nameInputValue,
    nameChangeHandler,
    numberInputValue,
    numberChangeHandler,
    submitionHandler
    }) => {

    return (
     // Input Form 
     <>
       <form name='phonebook input'>
         <div>
           name: <input value={nameInputValue} onChange={nameChangeHandler}></input>
         </div>
         <div>
           phone number: <input value={numberInputValue} onChange={numberChangeHandler}></input>
         </div>
   
         {/* Button */}
         <div>
           <button type='submit' onClick={submitionHandler}>add</button>
         </div>
       </form>
     </>
    )
   }

   
   export default PhoneBookForm