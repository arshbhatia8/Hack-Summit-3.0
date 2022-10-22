const contextReducer = (state, action) => {
    let transactions;
    if (action.type === 'DELETE_TRANSACTION') {
        transactions = state.filter((t) => t.id !== action.payload);
        localStorage.setItem('transactions', JSON.stringify(transactions));
        return transactions;
    } else if (action.type === 'ADD_TRANSACTION') {
        transactions = [action.payload, ...state];
        localStorage.setItem('transactions', JSON.stringify(transactions));
        return transactions; 
    }
    else {
        return state;
    }
}

export default contextReducer;