import { createContext, useContext, useReducer, useState } from 'react'
import { ContextType, InitialStateType } from '../components/types'
import { reducer } from './reducer'




/*-----BudgetContext-----*/
const BudgetContext = createContext({} as ContextType)

/*-----UseBudgetContext-----*/
export const useBudgetContext = () => useContext(BudgetContext)



/*-----InitialState-----*/
const initialState:InitialStateType = {
    budget: 2000,
    expenses:[
        { id: 1, name: 'dinner', cost: 25},
        { id: 2, name: 'food', cost: 35},
        { id: 3, name: 'T-shirt', cost: 65},
    ]
}



/*-----BudgetContextProvider-----*/
export const BudgetContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState('')


    const value = { 
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
        name,
        setName,
        cost,
        setCost,
        isEditing,
        setIsEditing,
        editId,
        setEditId
    }


    return (
        <BudgetContext.Provider value={value}>
            {children}
        </BudgetContext.Provider>
    )
}