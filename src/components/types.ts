

export type ExpenseType = {
    id: number;
    name: string;
    cost: number;
}


export type InitialStateType = {
    budget: number,
    expenses: ExpenseType[]
}


export type ContextType = {
    budget: number,
    expenses: ExpenseType[],
    dispatch: React.Dispatch<ActionType>,
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    cost: string,
    setCost: React.Dispatch<React.SetStateAction<string>>,
    isEditing: boolean,
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>,
    editId: string,
    setEditId: React.Dispatch<React.SetStateAction<string>>
}


export type StateType = {
    budget: number,
    expenses: ExpenseType[]
}


export type ActionType = 
    | { type: 'ADD_EXPENSE', payload: ExpenseType }
    | { type: 'REMOVE_EXPENSE', payload: number }
    | { type: 'EDIT_EXPENSE', payload: { id: number, name: string, cost: number } }
    | { type: 'EDIT_BUDGET', payload: number }