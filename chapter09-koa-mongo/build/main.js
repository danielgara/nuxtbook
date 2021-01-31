require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./nuxt.config.js":
/*!************************!*\
  !*** ./nuxt.config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',

  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#fff'
  },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}

  }
};

/***/ }),

/***/ "./server/config/index.js":
/*!********************************!*\
  !*** ./server/config/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = ({
  static_dir: {
    root: '../static'
  }
});

/***/ }),

/***/ "./server/config/mongodb.js":
/*!**********************************!*\
  !*** ./server/config/mongodb.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const database = {
  host: 'cluster0.3h1po.mongodb.net',
  port: 27017,
  dbname: 'nuxt'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  host: database.host,
  port: database.port,
  dbname: database.dbname,
  url: 'mongodb+srv://adminuser:Hola1234.@cluster0.3h1po.mongodb.net/'
});

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ "koa");
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! consola */ "consola");
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(consola__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nuxt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nuxt */ "nuxt");
/* harmony import */ var nuxt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nuxt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middlewares */ "./server/middlewares.js");




const app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a(); // Import and Set Nuxt.js options

const config = __webpack_require__(/*! ../nuxt.config.js */ "./nuxt.config.js");

config.dev = !(app.env === 'production');

async function start() {
  // Instantiate nuxt.js
  const nuxt = new nuxt__WEBPACK_IMPORTED_MODULE_2__["Nuxt"](config);
  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server; // Build in development

  if (config.dev) {
    const builder = new nuxt__WEBPACK_IMPORTED_MODULE_2__["Builder"](nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  } // Middlewares are imported here.


  Object(_middlewares__WEBPACK_IMPORTED_MODULE_3__["default"])(app);
  app.use(ctx => {
    ctx.status = 200;
    ctx.respond = false; // Bypass Koa's built-in response handling

    ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash

    nuxt.render(ctx.req, ctx.res);
  });
  app.listen(port, host);
  consola__WEBPACK_IMPORTED_MODULE_1___default.a.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

start();

/***/ }),

/***/ "./server/middlewares.js":
/*!*******************************!*\
  !*** ./server/middlewares.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-static */ "koa-static");
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_favicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-favicon */ "koa-favicon");
/* harmony import */ var koa_favicon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_favicon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser");
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./server/config/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./server/routes.js");
 // All middlewares are used here.
// Check other Koa official middlewares: https://github.com/koajs






/* harmony default export */ __webpack_exports__["default"] = (app => {
  // Catch and format the error in the upstream.
  // https://github.com/koajs/koa/wiki/Error-Handling
  app.use(async (ctx, next) => {
    try {
      await next(); // Handle 404 - throw it as an error.

      if (ctx.status === 404) {
        ctx.throw(404);
      } // Use this when you want to format the 200 res further.
      // e.g. {"status":200,"data":{"message":"Hello home sample!"}}
      // else, you get, e.g. {"message":"Hello home sample!"}


      if (ctx.status === 200) {
        ctx.body = {
          status: 200,
          data: ctx.body
        };
      }
    } catch (err) {
      ctx.status = err.status || 500;
      ctx.type = 'json';
      ctx.body = {
        status: ctx.status,
        message: err.message
      };
      ctx.app.emit('error', err, ctx);
    }
  }); // Static files are files that clients download as they are from the server.
  // Create a new directory, public. Koa, by default doesn't allow you to
  // serve static files.
  // https://github.com/koajs/static
  // https://www.tutorialspoint.com/koajs/koajs_static_files.htm

  app.use(koa_static__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_3__["default"].static_dir.root)); // Add favicon.

  app.use(koa_favicon__WEBPACK_IMPORTED_MODULE_1___default()('static/favicon.ico')); // The parsed body will store in ctx.request.body
  // If nothing was parsed, body will be an empty object {}
  // https://github.com/koajs/bodyparser
  // https://github.com/koajs/koa/issues/719

  app.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_2___default()()); // Add routes.

  app.use(_routes__WEBPACK_IMPORTED_MODULE_4__["default"].routes(), _routes__WEBPACK_IMPORTED_MODULE_4__["default"].allowedMethods());
});

/***/ }),

/***/ "./server/mongo.js":
/*!*************************!*\
  !*** ./server/mongo.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mongo; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/mongodb */ "./server/config/mongodb.js");




const MongoClient = mongodb__WEBPACK_IMPORTED_MODULE_0___default.a.MongoClient;
class Mongo {
  constructor() {
    this.connection = null; // https://docs.mongodb.com/manual/reference/method/ObjectId/index.html#ObjectId
    // https://stackoverflow.com/questions/28895067/using-uuids-instead-of-objectids-in-mongodb

    this.objectId = mongodb__WEBPACK_IMPORTED_MODULE_0___default.a.ObjectId;
  }

  async connect() {
    // Use connect method to connect to the Server.
    // https://stackoverflow.com/questions/50448272/avoid-current-url-string-parser-is-deprecated-warning-by-setting-usenewurlpars
    this.connection = await MongoClient.connect(_config_mongodb__WEBPACK_IMPORTED_MODULE_1__["default"].url, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    return this.connection.db(_config_mongodb__WEBPACK_IMPORTED_MODULE_1__["default"].dbname);
  }

  close() {
    this.connection.close();
  }

} // const mongo = async () => {
//   // Use connect method to connect to the Server
//   const client = await MongoClient.connect(config.url)
//   const db = client.db(config.dbname)
//   return db
// }
// export default mongo

/***/ }),

/***/ "./server/routes.js":
/*!**************************!*\
  !*** ./server/routes.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mongo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mongo */ "./server/mongo.js");




const mongo = new _mongo__WEBPACK_IMPORTED_MODULE_1__["default"]();
const router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a({
  prefix: '/api'
}); // Home page.

router.get('/', async (ctx, next) => {
  ctx.type = 'json';
  ctx.body = {
    message: 'Hello World!'
  };
}); // Get all users.

router.get('/users', async (ctx, next) => {
  let result;

  try {
    // Get the connection.
    const connection = await mongo.connect(); // Get the collection.

    const collectionUsers = connection.collection('users'); // Find all docs.

    result = await collectionUsers.find().toArray(); // Close the connection.

    mongo.close();
  } catch (err) {
    // Get the error message and do something.
    // console.log(err.message)
    // Throw the error.
    ctx.throw(500, err);
  }

  ctx.type = 'json';
  ctx.body = result;
}); // Get the user by id.

router.get('/users/:id', async (ctx, next) => {
  // const id = parseInt(ctx.params.id) // or ctx.request.params.id
  const id = ctx.params.id;
  let result;

  try {
    // Get the connection.
    const connection = await mongo.connect(); // Get the collection.

    const collectionUsers = connection.collection('users'); // Find one doc.
    // https://stackoverflow.com/questions/48294613/mongo-find-function-wont-exclude-id

    result = await collectionUsers.findOne({
      _id: mongo.objectId(id)
    });
    mongo.close();
  } catch (err) {
    // Get the error message and do something.
    // console.log(err.message)
    // Throw the error.
    ctx.throw(500, err);
  }

  if (result) {
    ctx.type = 'json';
    ctx.body = result;
  } else {
    ctx.throw(404, 'user not found');
  }
}); // Add a user.

router.post('/user', async (ctx, next) => {
  // Get the parsed data.
  let body = ctx.request.body || {};

  if (body.name === undefined) {
    ctx.throw(400, 'name is undefined');
  }

  if (body.slug === undefined) {
    ctx.throw(400, 'slug is undefined');
  }

  if (body.name === '') {
    ctx.throw(400, 'name is required');
  }

  if (body.slug === '') {
    ctx.throw(400, 'slug is required');
  }

  let result;

  try {
    // Get the connection.
    const connection = await mongo.connect(); // Get the collection.

    const collectionUsers = connection.collection('users'); // Find one doc.

    const found = await collectionUsers.findOne({
      slug: body.slug
    });

    if (found) {
      ctx.throw(404, 'slug has been taken');
    } // Insert a doc.


    result = await collectionUsers.insertOne({
      name: body.name,
      slug: body.slug // username: body.username,
      // password: body.password,
      // email: body.email

    });
    mongo.close();
  } catch (err) {
    // Get the error message and do something.
    // console.log(err.message)
    // Throw the error.
    ctx.throw(500, err);
  }

  if (result) {
    ctx.type = 'json';
    ctx.body = result.ops;
  } else {
    ctx.throw(404, 'insert user failed');
  }
}); // Update a user.

router.put('/user', async (ctx, next) => {
  // Get the parsed data.
  let body = ctx.request.body || {};

  if (body.id === undefined) {
    ctx.throw(400, 'id is undefined');
  }

  if (body.name === undefined) {
    ctx.throw(400, 'name is undefined');
  }

  if (body.slug === undefined) {
    ctx.throw(400, 'slug is undefined');
  }

  if (body.id === '') {
    ctx.throw(400, 'id is required');
  }

  if (body.name === '') {
    ctx.throw(400, 'name is required');
  }

  if (body.slug === '') {
    ctx.throw(400, 'slug is required');
  }

  let result;

  try {
    // Get the connection.
    const connection = await mongo.connect(); // Get the collection.

    const collectionUsers = connection.collection('users'); // Find one doc except itself.

    const found = await collectionUsers.findOne({
      slug: body.slug,
      // https://docs.mongodb.com/manual/reference/operator/query/ne/#op._S_ne
      // https://stackoverflow.com/questions/18439612/mongodb-find-all-except-from-one-or-two-criteria
      _id: {
        $ne: mongo.objectId(body.id)
      }
    });

    if (found) {
      ctx.throw(404, 'slug has been taken');
    } // Update a doc.


    result = await collectionUsers.updateOne({
      _id: mongo.objectId(body.id)
    }, {
      $set: {
        name: body.name,
        slug: body.slug
      },
      $currentDate: {
        lastModified: true
      }
    });
    mongo.close();
  } catch (err) {
    // Get the error message and do something.
    // console.log(err.message)
    // Throw the error.
    ctx.throw(500, err);
  }

  if (result) {
    ctx.type = 'json';
    ctx.body = result.result;
  } else {
    ctx.throw(404, 'insert user failed');
  }
}); // Delete a user.

router.del('/user', async (ctx, next) => {
  // Get the parsed data.
  let body = ctx.request.body || {};

  if (body.id === undefined) {
    ctx.throw(400, 'id is undefined');
  }

  if (body.id === '') {
    ctx.throw(400, 'id is required');
  }

  let result;

  try {
    // Get the connection.
    const connection = await mongo.connect(); // Get the collection.

    const collectionUsers = connection.collection('users'); // Find one doc.

    const found = await collectionUsers.findOne({
      _id: mongo.objectId(body.id)
    });

    if (!found) {
      ctx.throw(404, 'no user found');
    } // Delete a doc.


    result = await collectionUsers.deleteOne({
      _id: mongo.objectId(body.id)
    });
    mongo.close();
  } catch (err) {
    // Get the error message and do something.
    // console.log(err.message)
    // Throw the error.
    ctx.throw(500, err);
  }

  if (result) {
    ctx.type = 'json';
    ctx.body = result.result;
  } else {
    ctx.throw(404, 'delete user failed');
  }
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "consola":
/*!**************************!*\
  !*** external "consola" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("consola");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),

/***/ "koa-favicon":
/*!******************************!*\
  !*** external "koa-favicon" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-favicon");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "nuxt":
/*!***********************!*\
  !*** external "nuxt" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ })

/******/ });
//# sourceMappingURL=main.map