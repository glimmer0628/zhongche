// vuex/modules/index.js
import {
  SAVE_OPENID,
  SAVE_START,
  SAVE_END,
  SAVE_AVATAR,
  SAVE_NICKNAME
} from '../mutation-types';

// 该模块的初始状态
const state = {
  prefix: 'http://weixin.cnxiaomubiao.com/zhongche/api.php?s=/',
  userInfo: {
    openid: '',
    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492224628&di=603c513446073e9518230858cb49d2e8&imgtype=jpg&er=1&src=http%3A%2F%2Fcms-bucket.nosdn.127.net%2Fcatchpic%2F7%2F73%2F7319ba09222b697b926725a4a116548a.png%3FimageView%26amp%3Bthumbnail%3D550x0',
    nickname: ''
  },
  location: {
    startCode: {},
    endCode: {}
  }
};

// 相关的 mutations
const mutations = {
  [SAVE_OPENID] (state, openid) {
    state.userInfo.openid = openid;
  },
  [SAVE_START] (state, startLocation) {
    state.location.startCode = startLocation;
  },
  [SAVE_END] (state, endLocation) {
    state.location.endCode = endLocation;
  },
  [SAVE_AVATAR] (state, avatar) {
    state.userInfo.avatar = avatar;
  },
  [SAVE_NICKNAME] (state, nickname) {
    state.userInfo.nickname = nickname;
  }
};

export default {
  state,
  mutations
};
