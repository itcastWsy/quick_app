(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(4)
	var $app_style$ = __webpack_require__(5)
	var $app_script$ = __webpack_require__(6)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "root"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "big_img"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.src}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "sm_imgs"
	      ],
	      "children": [
	        {
	          "type": "list",
	          "attr": {},
	          "children": [
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "img"
	              },
	              "events": {
	                "click": function (evt) {this.toggleImg(this.$item.src,this.$item.model_id,evt)}
	              },
	              "repeat": function () {return this.imgArr},
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.$item.src}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "tools"
	      ],
	      "children": [
	        {
	          "type": "input",
	          "attr": {
	            "type": "button",
	            "value": "上传图片"
	          },
	          "events": {
	            "click": function (evt) {this.pickPhoto(evt)}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  ".root": {
	    "flexWrap": "wrap"
	  },
	  ".big_img": {
	    "width": "100%",
	    "height": "50%",
	    "backgroundColor": "#00FFFF",
	    "justifyContent": "center"
	  },
	  ".big_img image": {
	    "width": "80%",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "big_img"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "image"
	        }
	      ]
	    }
	  },
	  ".sm_imgs": {
	    "width": "100%",
	    "height": "30%"
	  },
	  ".sm_imgs list": {
	    "flexDirection": "row",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "sm_imgs"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "list"
	        }
	      ]
	    }
	  },
	  ".tools": {
	    "width": "100%",
	    "height": "15%",
	    "justifyContent": "center"
	  },
	  ".tools input": {
	    "width": "60%",
	    "backgroundColor": "#0094ff",
	    "color": "#ffffff",
	    "borderRadius": "15px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tools"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "input"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _data = __webpack_require__(7);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _system = $app_require$('@app-module/system.media');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.request');
	
	var _system4 = _interopRequireDefault(_system3);
	
	var _system5 = $app_require$('@app-module/system.router');
	
	var _system6 = _interopRequireDefault(_system5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: {
	    src: _data2.default.imgArr[0].src,
	    imgArr: _data2.default.imgArr,
	    model_id: _data2.default.imgArr[0].model_id
	  },
	  toggleImg: function toggleImg(src, model_id) {
	    this.src = src;
	    this.model_id = model_id;
	  },
	  pickPhoto: function pickPhoto() {
	    var that = this;
	
	    _system2.default.pickImage({
	      success: function success(data) {
	        var fileUri = data.uri;
	        _system4.default.upload({
	          url: "http://192.168.23.1:3003/fuse?model_id=" + that.model_id,
	          files: [{
	            name: "qaFile",
	            uri: fileUri
	          }],
	          success: function success(r) {
	            console.log(JSON.stringify(r));
	
	            if (r.code == 200) {
	              var dataObj = JSON.parse(r.data);
	
	              if (dataObj.ret && dataObj.ret == 0) {
	                _system6.default.push({
	                  uri: "/DemoDetail",
	                  params: {
	                    img_url: dataObj.img_url
	                  }
	                });
	              }
	            }
	          },
	          fail: function fail(data1, code) {
	            console.log("上传到后台失败");
	            console.log(code);
	          }
	        });
	      },
	      fail: function fail() {
	        console.log("选择图片失败");
	      }
	    });
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var imgArr = [{
	  "model_id": "hezuo_junzhuangzhao_1999m_20170919141604",
	  "src": "http://p6razpd8o.bkt.clouddn.com/hezuo_junzhuangzhao_1999m_20170919141604.jpg"
	}, {
	  "model_id": "hezuo_junzhuangzhao_2007m_20170919141654",
	  "src": "http://p6razpd8o.bkt.clouddn.com/hezuo_junzhuangzhao_2007m_20170919141654.jpg"
	}, {
	  "model_id": "hezuo_junzhuangzhao_1999w_20170919141627",
	  "src": "http://p6razpd8o.bkt.clouddn.com/hezuo_junzhuangzhao_1999w_20170919141627.jpg"
	}, {
	  "model_id": "hezuo_junzhuangzhao_1927m_20170919140703",
	  "src": "http://p6razpd8o.bkt.clouddn.com/hezuo_junzhuangzhao_1927m_20170919140703.jpg"
	}, {
	  "model_id": "hezuo_junzhuangzhao_1927w2_20170919140735",
	  "src": "http://p6razpd8o.bkt.clouddn.com/hezuo_junzhuangzhao_1927w2_20170919140735.jpg"
	}, {
	  "model_id": "hezuo_junzhuangzhao_1937m_20170919140902",
	  "src": "http://p6razpd8o.bkt.clouddn.com/hezuo_junzhuangzhao_1937m_20170919140902.jpg"
	}, {
	  "model_id": "hezuo_junzhuangzhao_1937w_20170919140927",
	  "src": "http://p6razpd8o.bkt.clouddn.com/hezuo_junzhuangzhao_1937w_20170919140927.jpg"
	}, {
	  "model_id": "hezuo_junzhuangzhao_1948m_20170919140951",
	  "src": "http://p6razpd8o.bkt.clouddn.com/hezuo_junzhuangzhao_1948m_20170919140951.jpg"
	}, {
	  "model_id": "hezuo_junzhuangzhao_1948w_20170919141013",
	  "src": "http://p6razpd8o.bkt.clouddn.com/hezuo_junzhuangzhao_1948w_20170919141013.jpg"
	}, {
	  "model_id": "hezuo_junzhuangzhao_1950m_20170919141035",
	  "src": "http://p6razpd8o.bkt.clouddn.com/hezuo_junzhuangzhao_1950m_20170919141035.jpg"
	}, {
	  "model_id": "hezuo_junzhuangzhao_1965m_20170919141309",
	  "src": "http://p6razpd8o.bkt.clouddn.com/hezuo_junzhuangzhao_1965m_20170919141309.jpg"
	}, {
	  "model_id": "hezuo_junzhuangzhao_1965w_20170919141337",
	  "src": "http://p6razpd8o.bkt.clouddn.com/hezuo_junzhuangzhao_1965w_20170919141337.jpg"
	}, {
	  "model_id": "hezuo_junzhuangzhao_1987m_20170919141505",
	  "src": "http://p6razpd8o.bkt.clouddn.com/hezuo_junzhuangzhao_1987m_20170919141505.jpg"
	}, {
	  "model_id": "hezuo_junzhuangzhao_1987w_20170919141529",
	  "src": "http://p6razpd8o.bkt.clouddn.com/hezuo_junzhuangzhao_1987w_20170919141529.jpg"
	}, {
	  "model_id": "hezuo_junzhuangzhao_2007w_20170919141715",
	  "src": "http://p6razpd8o.bkt.clouddn.com/hezuo_junzhuangzhao_2007w_20170919141715.jpg"
	}];
	exports.default = {
	  imgArr: imgArr
	};

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map