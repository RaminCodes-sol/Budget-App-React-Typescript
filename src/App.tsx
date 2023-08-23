import AddExpense from "./components/AddExpense"
import BudgetDetails from "./components/BudgetDetails"
import ExpenseList from "./components/ExpenseList"



const App = () => {

  return (
    <main className="px-2">
      <section className="w-[900px] mx-auto border border-gray-600 px-3 pb-7">
        <h1 className='text-center text-3xl font-bold  py-5'>My Budget Planner</h1>
        
        <div>
          <BudgetDetails />
          <ExpenseList />
          <AddExpense />
        </div>
      </section>
    </main>
  )
}

export default App
