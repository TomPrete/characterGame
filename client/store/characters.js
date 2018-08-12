import axios from 'axios'


/**
 * ACTION TYPES
 */
const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS'


/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getCharacterStatistics = characters => ({ type: GET_ALL_CHARACTERS, characters })

/**
 * THUNK CREATORS
 */

export const fetchAllCharacters = () =>
  dispatch => {
    axios.get('/api/characters')
      .then(res => res.data)
      .then(characters => dispatch(getCharacterStatistics(characters)))
      .catch(err => console.error(err));
  }


/**
 * REDUCER
 */
export default function reducer (state = defaultUser, action) {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return action.characters
    default:
      return state
  }
}
