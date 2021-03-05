
export const setStorage = (key, data) => {
    return new Promise((resolve, reject) => {
        uni.setStorage({
            key: key,
            data: data,
            success: (res) => { resolve('success') },
            fail: (err) => { reject(err) }
        });
    })
}

export const getStorage = (key) => {
    return new Promise((resolve, reject) => {
        uni.getStorage({
            key: key,
            success: (res) => { resolve(res.data) },
            fail: (err) => { reject(err) }
        });
    })
}

export const removeStorage = (key) => {
    return new Promise((resolve, reject) => {
        uni.removeStorage({
            key: key,
            success: (res) => { resolve('success') },
            fail: (err) => { reject(err) }
        });
    })
}
export const clearStorage = (key) => {
    return uni.clearStorage();
}

