import { getData, postData } from '@/utils/request/request_mapi.js'



// 获取配置
// export const getConfig = (reqData) => {
//     const url = '/v1/common/config';
//     const data = reqData;
//     return getData(url, data);
// }

/*
    获取验证码
    params:{   
        phone":"          手机号
    }
*/
export const sendCode = (reqData) => {
    const url = '/send_code';
    const data = reqData;
    return postData(url, data);
}
/*
    验证码 验证
    params:{   
        phone":"          手机号
        code":"           验证码
    }
*/
export const verificationCode = (reqData) => {
    const url = '/verification_code';
    const data = reqData;
    return postData(url, data);
}
/*
    注册登陆
    params:{   
        phone":"          手机号
        code":"           验证码
        password":"       密码
        publickey":"      公钥
    }
*/
export const createUser = (reqData) => {
    const url = '/create_user';
    const data = reqData;
    return postData(url, data);
}
/*
    <忘记密码>获取验证码
    params:{   
        phone":"          手机号
    }
*/
export const forgetCode = (reqData) => {
    const url = '/forget_code';
    const data = reqData;
    return postData(url, data);
}
/*
    <忘记密码>验证验证码
    params:{   
        phone":"          手机号
        code":"           验证码
    }
*/
export const resetCode = (reqData) => {
    const url = '/reset_code';
    const data = reqData;
    return postData(url, data);
}
/*
    修改登陆密码
    params:{   
        phone":"          手机号
        password":"       密码
    }
*/
export const modifyPassword = (reqData) => {
    const url = '/modify_password';
    const data = reqData;
    return postData(url, data);
}
/*
    登陆
    params:{   
        phone":"          手机号
        password":"       密码
    }
*/
export const login = (reqData) => {
    const url = '/login';
    const data = reqData;
    return postData(url, data);
}





