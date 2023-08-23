import { useState } from 'react'
import { useBudgetContext } from "../context/budgetContext"
import { ExpenseType } from "./types"




const BudgetDetails = () => {
  const { budget, expenses, dispatch } = useBudgetContext()
  const [isEditBudget, setIsEditBudget] = useState(false)
  const [budgetValue, setBudgetValue] = useState(String(budget))



  /*-------Total-Cost-------*/
  const { totalCost } = expenses.reduce((acc: {totalCost: number}, val: ExpenseType) => {
    return {
      totalCost : acc.totalCost + val.cost
    }
  }, {
    totalCost: 0
  })


  /*-------Edit-Budget-------*/
  const editBudget = () => {
    dispatch({ type:'EDIT_BUDGET', payload: Number(budgetValue)})
    setIsEditBudget(false)
  }



  return (
    <div className="w-full">
      <ul className="w-full border-red-400 flex justify-between gap-2">
        
        {/*-------Budget-------*/}
        {
          !isEditBudget 
            ? <li className='bg-orange-500 flex-1 flex justify-center items-center gap-2 p-4 text-[1.1rem]'>
                <h3>Budget:</h3>
                <span>${budget}</span>
                <button onClick={() => setIsEditBudget(true)} className="bg-green-500 px-2 py-[.1rem] rounded-lg transition-colors hover:bg-green-600">edit</button>
              </li>
            : <li className='bg-orange-500 flex-1 flex justify-center items-center gap-2 p-4 text-[1.1rem]'>
                <input type='text' placeholder='your budget...' value={budgetValue} onChange={(e) => setBudgetValue(e.target.value)} className='text-black boder-none outline-none rounded-sm px-1 py-[.13rem]' />
                <button onClick={() => editBudget()} className='bg-blue-500 px-2 py-[.1rem] rounded-lg transition-colors hover:bg-blue-600'>Save</button>
              </li>
        }
       

        {/*-------Remaining-------*/}
        <li className='bg-purple-500 flex-1 flex justify-center items-center gap-2 p-4 text-[1.1rem]'>
          <h3>Remaining:</h3>
          <span>${(budget - totalCost)}</span>
        </li>

        {/*-------SpentSoFar-------*/}
        <li className='bg-blue-500 flex-1 flex justify-center items-center gap-2 p-4 text-[1.05rem]'>
          <h3>Spent so far:</h3>
          <span>${totalCost}</span>
        </li>

      </ul>
    </div>
  )
}

export default BudgetDetails