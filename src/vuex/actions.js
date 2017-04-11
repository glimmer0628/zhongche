// import * as types from './mutation-types'
// export const setToken = ({ dispatch }, token) => {
//   dispatch(types.SET_TOKEN, token)
// }

// index actions
export const saveOpenId = makeAction('SAVE_OPENID');
export const startLocation = makeAction('SAVE_START');
export const endLocation = makeAction('SAVE_END');
export const saveAvatar = makeAction('SAVE_AVATAR');
export const saveNickname = makeAction('SAVE_NICKNAME');

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args);
}
