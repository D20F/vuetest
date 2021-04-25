import { getData, postData } from '@/utils/request/request_mapi.js'




/*
    管理员登录
    params:{   
        account":"          复检人员账号
        password":""        密码
    }
*/
export const login = (reqData) => {
    const url = '/v1/rx/login';
    const data = reqData;
    return postData(url, data);
}

/*
    切换管理员状态
    params:{   
        account:""          复检人员账号
        status:""          要改为状态
    }
*/
export const switchStatus = (reqData) => {
    const url = '/v1/rx/switch_status';
    const data = reqData;
    return getData(url, data);
}









