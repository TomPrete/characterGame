import axios from 'axios'


/**
 * ACTION TYPES
 */
const GET_CHARACTER_STATISTICS = 'GET_CHARACTER_STATISTICS'


/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getCharacterStatistics = stats => ({ type: GET_CHARACTER_STATISTICS, stats })

/**
 * THUNK CREATORS
 */

export const fetchCharactersStats = (char_type) =>
  dispatch => {
    axios.get(`/api/characters/${char_type}`, char_type)
      .then(res => res.data)
      .then(stats => dispatch(getCharacterStatistics(stats)))
      .catch(err => console.error(err));
  }
/**
 * REDUCER
 */
export default function reducer (state = defaultUser, action) {
  switch (action.type) {
    case GET_CHARACTER_STATISTICS:
      return action.stats
    default:
      return state
  }
}
