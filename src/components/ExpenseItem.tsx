import { MdOutlineClose, MdModeEditOutline } from "react-icons/md"
import { useBudgetContext } from "../context/budgetContext"

type Props = {
  expense: {
    id: number;
    name: string;
    cost: number;
  }
}


const ExpenseItem = ({ expense }: Props) => {
  const { dispatch, setName, setCost, setIsEditing,setEditId } = useBudgetContext()

  
  /*-------Remove-Expense-------*/
  const removeExpense = (id: number) => {
    dispatch({ type: 'REMOVE_EXPENSE', payload: id })
  }


  /*-------Edit-Expense-------*/
  const editExpense = (id: number) => {
    setIsEditing(true)
    setEditId(String(id))
    setName(expense.name)
    setCost(String(expense.cost))
  }

  

  return (
    <li className='flex items-center text-white bg-white/25 px-5 py-2 mb-2 transition-colors hover:bg-white/40'>
      <span className='flex-1'>{expense.name}</span>
      <code className='mx-6 text-lg bg-blue-500 rounded-md px-1'>${expense.cost}</code>
      <button onClick={() => editExpense(expense.id)} className='bg-black text-white text-lg w-[30px] mx-6 h-[30px] rounded-full transition-colors hover:bg-green-500'><MdModeEditOutline /></button>
      <button onClick={() => removeExpense(expense.id)} className='bg-black text-white text-lg w-[30px] h-[30px] rounded-full transition-colors hover:bg-red-500'><MdOutlineClose /></button>
    </li>
  )
}

export default ExpenseItem