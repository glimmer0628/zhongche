export default (router) => {
  router.map({
    '/': {
      meta: {
        title: '首页'
      },
      component: require('./page/Home/Home.vue'),
      subRoutes: {
        'activity': {
          meta: {
            title: '活动'
          },
          component: require('./components/Activity/Activity.vue')
        },
        'news': {
          meta: {
            title: '资讯'
          },
          component: require('./components/News/News.vue')
        },
        'rights': {
          meta: {
            title: '维权'
          },
          component: require('./components/Rights/Rights.vue')
        },
        'my': {
          meta: {
            title: '我的'
          },
          component: require('./components/My/My.vue')
        }
      }
    },
    '/enroll': {
      meta: {
        title: '我的报名'
      },
      component: require('./page/Enroll/Enroll.vue')
    },
    '/points': {
      meta: {
        title: '我的积分'
      },
      component: require('./page/Points/Points.vue')
    },
    '/ranking': {
      meta: {
        title: '排名'
      },
      component: require('./page/Ranking/Ranking.vue'),
      subRoutes: {
        'ranktog': {
          meta: {
            title: '综合'
          },
          component: require('./components/RankTog/RankTog.vue')
        },
        'rankculture': {
          meta: {
            title: '文化'
          },
          component: require('./components/RankCulture/RankCulture.vue')
        },
        'ranksport': {
          meta: {
            title: '体育'
          },
          component: require('./components/RankSport/RankSport.vue')
        },
        'rankskill': {
          meta: {
            title: '技能'
          },
          component: require('./components/RankSkill/RankSkill.vue')
        },
        'rankmy': {
          meta: {
            title: '我的'
          },
          component: require('./components/RankMy/RankMy.vue')
        }
      }
    },
    '/changenum': {
      meta: {
        title: '申请修改'
      },
      component: require('./page/ChangeNum/ChangeNum.vue')
    },
    '/binding': {
      meta: {
        title: '工号绑定'
      },
      component: require('./page/Binding/Binding.vue')
    },
    '/blockade': {
      meta: {
        title: '文学闯关'
      },
      component: require('./page/Blockade/Blockade.vue')
    },
    '/walking': {
      meta: {
        title: '健步走'
      },
      component: require('./page/Walking/Walking.vue')
    },
    '/rules': {
      meta: {
        title: '约稿规则'
      },
      component: require('./page/Rules/Rules.vue')
    },
    '/search': {
      meta: {
        title: '搜索'
      },
      component: require('./page/Search/Search.vue')
    },
    '/blockade/doneblockade': {
      meta: {
        title: '关卡'
      },
      component: require('./components/DoneBlockade/DoneBlockade.vue')
    },
    'activedetail/:id/:done': {
      name: 'activedetail',
      meta: {
        title: '活动详情'
      },
      component: require('./page/ActiveDetail/ActiveDetail.vue')
    },
    'detailinfo/:detailid': {
      name: 'detailinfo',
      meta: {
        title: '资讯详情'
      },
      component: require('./page/DetailInfo/DetailInfo.vue')
    },
    '/vote': {
      meta: {
        title: '投票'
      },
      component: require('./page/Vote/Vote.vue')
    }
  });
};
