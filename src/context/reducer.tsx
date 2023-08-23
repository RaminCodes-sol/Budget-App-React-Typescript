import { StateType, ActionType } from "../components/types"



export const reducer = (state: StateType, action: ActionType) => {
    switch(action.type) {

        /*-----Add-Expense-----*/
        case 'ADD_EXPENSE': 
            return {
                ...state,
                expenses: [action.payload, ...state.expenses]
            }

        /*-----Remove-Expense-----*/
        case 'REMOVE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            }
        
        /*-----Edit-Expense-----*/
        case 'EDIT_EXPENSE': 
            return {
                ...state,
                expenses: state.expenses.map(expense => {
                    if (expense.id === action.payload.id) {
                        return {
                            ...expense,
                            name: action.payload.name || expense.name,
                            cost: action.payload.cost || expense.cost
                        }
                    }
                    return expense
                })
            }

        /*-----Edit-Budget-----*/
        case 'EDIT_BUDGET': 
            return {
                ...state,
                budget: action.payload
            }
            
        default:
            return state
    }
}