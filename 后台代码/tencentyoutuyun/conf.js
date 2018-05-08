var fs = require('fs');
var path = require('path');
var os = require('os');






// 请到 open.youtu.qq.com查看您对应的appid相关信息并填充

exports.APPID = '10125019';
exports.SECRET_ID = 'AKIDdBZIvPHbBecVZUrzUekgUOFxV791rPr8';
exports.SECRET_KEY = 'GWbAd0JSdi2GKDvfF4tb9vZ8WjleM0Tl';
exports.USERID = '1';

var pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../', 'package.json')));
var ua = function () {
    return 'QcloudNodejs/' + pkg.version + ' (' + os.type() + '; ' + os.platform() + '; ' + os.arch() + '; ) ';
}

exports.USER_AGENT = ua;
exports.API_YOUTU_SERVER = 'api.youtu.qq.com';
exports.API_YOUTU_PORT = 80;
exports.API_DOMAIN = 0;

// 初始化 应用信息 
exports.setAppInfo = function (appid, secretId, secretKey, userid, domain) {
    module.exports.APPID = appid;
    module.exports.SECRET_ID = secretId;
    module.exports.SECRET_KEY = secretKey;
    module.exports.USERID = userid;
    if (domain == 0) {
        exports.API_YOUTU_SERVER = 'api.youtu.qq.com';
    } else {
        exports.API_YOUTU_SERVER = 'api.youtu.qq.com';
    }
    exports.API_DOMAIN = domain;
}