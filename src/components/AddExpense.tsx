import { useBudgetContext } from "../context/budgetContext"



const AddExpense = () => {
  const { dispatch, name, setName, cost, setCost, isEditing, editId, setIsEditing, setEditId } = useBudgetContext()


  /*-------Add-Expense-------*/
  const addExpense = () => {
    if (name === '' || cost === '') {
      alert("Please fill all inputs!")
      return
    }
    const newExpense = { id: 25, name, cost: Number(cost) }
    dispatch({ type: 'ADD_EXPENSE', payload: newExpense })
    setName('')
    setCost('')
  }


  /*-------Edit-Expense-------*/
  const editExpense = () => {
    if (name === '' || cost === '') {
      alert("Please fill all inputs!")
      return
    }
    dispatch({ type: 'EDIT_EXPENSE', payload: { id: Number(editId), name, cost: Number(cost) } })
    setIsEditing(false)
    setEditId('')
    setName('')
    setCost('')   
  }



  return (
    <div className='p-2 mt-3 flex flex-col gap-5 w-full max-w-[700px] mx-auto border-b border-b-gray-700'>

      {/*-------Inputs-------*/}
      <div className='flex flex-wrap gap-2'>
        <div className='flex flex-col gap-2 flex-1'>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' placeholder='expense name' value={name} onChange={e => setName(e.target.value)} className='p-2 rounded-sm border-none outline-none text-black' />
        </div>
        <div className='flex flex-col gap-2 flex-1'>
          <label htmlFor='cost'>Cost:</label>
          <input type='text' id='cost' placeholder='expense price' value={cost} onChange={e => setCost(e.target.value)} className='p-2 rounded-sm border-none outline-none text-black' />
        </div>
      </div>

      {/*-------Add-Button-------*/}
      {
        !isEditing 
          ? <button onClick={() => addExpense()} className='w-full p-3 rounded-sm bg-orange-500 transition-colors hover:bg-orange-600'>Add to expense</button>
          : <button onClick={() => editExpense()} className='w-full p-3 rounded-sm bg-orange-500 transition-colors hover:bg-orange-600'>Edit Expense</button>
      }
      
    </div>
  )
}

export default AddExpense