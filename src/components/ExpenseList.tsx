import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import { useBudgetContext } from '../context/budgetContext'



const ExpenseList = () => {
  const [searchValue, setSearchValue] = useState('')
  let { expenses } = useBudgetContext()
  

  /*-------HandleChange-------*/
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }
  
  
  return (
    <div className='p-2 mt-3 flex flex-col gap-5 w-full max-w-[700px] mx-auto border-b border-b-gray-700'>

      {/*-------Title-------*/}
      <h1 className='text-3xl'>Expenses</h1>


      {/*-------Search-Input-------*/}
      <div className='w-full'>
        <input 
          type='text' 
          placeholder='Type to search...' 
          value={searchValue} 
          onChange={(e) => handleChange(e)}
          className='w-full px-2 py-3 text-black border-none outline-none rounded-sm'
        />
      </div>


      {/*-------Expense-List-------*/}
      <div className={`${expenses.length > 5 ? 'h-[300px] overflow-y-scroll' : 'h-auto'} p-4`}>
        <ul>
          {
            searchValue.length === 0
              ? expenses?.map((expense,index) => <ExpenseItem key={index} expense={expense} />)
              : expenses?.filter(expense => expense.name.toLowerCase().includes(searchValue.toLowerCase())).map((expense, index) => <ExpenseItem key={index} expense={expense} />)
          }
        </ul>
      </div>

    </div>
  )
}
// xpenses?.map((expense,index) => <ExpenseItem key={index} expense={expense} />)
export default ExpenseList