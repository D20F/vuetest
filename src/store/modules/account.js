

/**
 * 
 * @property {string}   name                  名字
 * @property {string}   account               链上账号名
 * @property {string}   avatar                头像
 * @property {string}   role                  账号当前角色
 * @property {string}   privateKey            私钥
 * @property {string}   phone                 手机号
**/
const ACCOUNT = {
    state: () => ({
        account: '',
        avatar: '',
        name: '',
        role: '',
        privateKey: '',
        status: '',
        phone: '',
    }),
    mutations: {
        accountFun(state, data) {
            state.account = data;
        },
        avatarFun(state, data) {
            state.avatar = data;
        },
        nameFun(state, data) {
            state.name = data;
        },
        roleFun(state, data) {
            state.role = data;
        },
        privateKeyFun(state, data) {
            state.privateKey = data;
        },
        phoneFun(state, data) {
            state.phone = data;
        }, statusFun(state, data) {
            state.status = data;
        },
    },
    actions: {

    },
    modules: {

    }
}

export default ACCOUNT

