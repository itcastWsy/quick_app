let express = require("express");
let querystring = require("querystring");
let fs = require("fs");
let http = require("http");
let request = require("request");
let app = express();
let Multiparty = require('multiparty');
let bodyParser = require('body-parser')
let conf = require('./tencentyoutuyun/conf');
let youtu = require('./tencentyoutuyun/youtu');
let index = require('./index');
// 压缩图片使用
let gm = require("gm");
// 签名
let expressDate = Math.round(Date.now() / 1000 + 60 * 60 * 24);

// 获取签名，合成图片使用
function getAuth() {
  return index.auth.appSign(expressDate);
}

// 把图片转为base64格式，合成图片使用
function getBase64(path) {
  let fileData = fs.readFileSync(path);
  let data = new Buffer(fileData).toString('base64');
  return data;
}


// 图片上传接口，未压缩 并返回合成后的图片

app.post("/fuse1", (req, res) => {
  var form = new Multiparty.Form();
  console.log("1-获取到上传请求");
  form.parse(req, function (err0, fields, files) {
    if (err0) {
      console.log("1-上传出错");
      console.log(err0);
    } else {
      let file = files.qaFile[0];
      var imageMagick = gm.subClass({
        imageMagick: true
      });

      // 图片文件的base64
      let base64 = getBase64(file.path);
      console.log(req.query);
      // 模板id
      let model_id = req.query.model_id;
      console.log(model_id);
      let opdata = [{
        "cmd": "doFaceMerge",
        "params": {
          "model_id": model_id
        }
      }];
      let bodyData = JSON.stringify({
        "app_id": conf.APPID,
        "rsp_img_type": "url",
        "img_data": base64,
        "opdata": opdata
      });
      let upObj = {
        url: "http://api.youtu.qq.com/cgi-bin/pitu_open_access_for_youtu.fcg",
        headers: {
          "host": "api.youtu.qq.com",
          "content-length": Buffer.byteLength(bodyData),
          "content-type": "application/x-www-form-urlencoded",
          "authorization": getAuth()
        },
        form: bodyData
      };
      request.post(upObj, (err2, httpRes, httpBody) => {
        if (err2) {
          console.log("3-上传到腾讯优图失败");
          console.log(err2);
          res.end(httpBody)
        } else {
          console.log("3-上传到腾讯优图成功");
          console.log(httpBody);
          let objBody = JSON.parse(httpBody);
          // console.log(objBody);
          res.end(httpBody)
        }
      });

    }
  });
});

// 图片上传接口，压缩 并返回合成后的图片
app.post("/fuse", (req, res) => {
  var form = new Multiparty.Form();
  console.log("1-获取到上传请求");
  form.parse(req, function (err0, fields, files) {
    if (err0) {
      console.log("1-上传出错");
      console.log(err0);
    } else {
      let file = files.qaFile[0];
      var imageMagick = gm.subClass({
        imageMagick: true
      });
      imageMagick(file.path)
        .quality("90")
        .autoOrient() //保证图片质量
        .write(file.path, function (err1) {
          if (!err1) {
            // 图片文件的base64
            let base64 = getBase64(file.path);
            console.log(req.query);
            // 模板id
            let model_id = req.query.model_id;
            console.log(model_id);
            let opdata = [{
              "cmd": "doFaceMerge",
              "params": {
                "model_id": model_id
              }
            }];
            let bodyData = JSON.stringify({
              "app_id": conf.APPID,
              "rsp_img_type": "url",
              "img_data": base64,
              "opdata": opdata
            });
            let upObj = {
              url: "http://api.youtu.qq.com/cgi-bin/pitu_open_access_for_youtu.fcg",
              headers: {
                "host": "api.youtu.qq.com",
                "content-length": Buffer.byteLength(bodyData),
                "content-type": "application/x-www-form-urlencoded",
                "authorization": getAuth()
              },
              form: bodyData
            };
            request.post(upObj, (err2, httpRes, httpBody) => {
              if (err2) {
                console.log("3-上传到腾讯优图失败");
                console.log(err2);
                res.end(httpBody)
              } else {
                console.log("3-上传到腾讯优图成功");
                console.log(httpBody);
                let objBody = JSON.parse(httpBody);
                // console.log(objBody);
                res.end(httpBody)
              }
            });
          } else {
            //2 压缩图片失败
            console.log(err1);
          }
        });

    }
  });
});


app.listen(3003, () => {
  console.log("开启成功:" + 3003);
});

// http://shp.qpic.cn/tu_act_pic/0/a2g3nHHHk3dS/0/
// http://shp.qpic.cn/tu_act_pic/0/CK7bnrVPUNqr/0/