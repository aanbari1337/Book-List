import {bookReducer} from '../Reducers/bookReducer'
import uuid from 'uuid/v1'



describe('Book reducer', () => {
    it('should return the initial state', () => {
      expect(bookReducer(undefined, {})).toEqual([
        {
            title: '',
            author:'',
            id:0
        }
      ])
    })
  
    it('should handle ADD_BOOK', () => {
      expect(
        bookReducer([], {
          type: 'ADD_BOOK',
            book: {
              title: 'amine',
              author:'amine',
            },
        })
      ).toEqual([
        {
          title: 'amine',
          author:'amine',
          id: 'id-amine'
        }
      ])
    })
})