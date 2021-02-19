

const system = {
    state: () => ({
        notifyData: [],

    }),
    mutations: {
        ADD_NOTIFY: (state, data) => {
            state.notifyData.push(data);
            setTimeout(() => {
                state.notifyData.shift();
            }, data.time);
        },

    },
    actions: {
        add_notify({ commit }, data) {
            commit('ADD_NOTIFY', data)
        },

    },
    modules: {

    },
    namespaced: true,
}
export default system

// 内容 类型 时间