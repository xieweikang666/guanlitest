// models/user.js
const db = require('../config/db.js'),
    userModel = '../schema/user_login.js'; // 引入user_login的表结构
const guanli = db.guanli; // 引入数据库

const User = guanli.import(userModel); // 用sequelize的import方法引入表结构，实例化了User。

const getUserById = function* (id) { // 注意是function* 而不是function 对于需要yield操作的函数都需要这种generator函数。
    const userInfo = yield User.findOne({ // 用yield控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据
        where: {
            userid: id
        }
    });
    return userInfo // 返回数据
}
const getUserByName = function* (name) {
    const userInfo = yield User.findOne({
        where: {
            username: name
        }
    })
    return userInfo
}

module.exports = {
    getUserById,  // 导出getUserById的方法，将会在controller里调用
    getUserByName
}