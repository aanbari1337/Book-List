
const initState = [{
    title: '',
    author:'',
    id:0
}]

export const bookReducer = (state=initState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: 'id-'+ action.book.title
            }]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
        default:
            return state
    }
}
