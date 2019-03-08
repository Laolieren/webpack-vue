import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 1
    },
    // 如果组件想用mutations里的方法，需要this.$store.commit('方法名',参数)调用
    mutations: {
        CountAdd(state, num) {
            state.count += num
        }

    },
    //  getters负责提供数据，不负责修改数据，可以对数据进行包装
    // 与组件中的过滤器比较相似,$store.getters.getCount调用
    getters: {
        getCount: function (state) {
            return "我相当于过滤器" + state.count
        }
    }

})