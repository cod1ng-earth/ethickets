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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/abi.js":
/*!********************!*\
  !*** ./src/abi.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = [\n\t{\n\t\t\"constant\": true,\n\t\t\"inputs\": [\n\t\t\t{\n\t\t\t\t\"internalType\": \"address\",\n\t\t\t\t\"name\": \"requester\",\n\t\t\t\t\"type\": \"address\"\n\t\t\t}\n\t\t],\n\t\t\"name\": \"getMyTicketCount\",\n\t\t\"outputs\": [\n\t\t\t{\n\t\t\t\t\"internalType\": \"uint8\",\n\t\t\t\t\"name\": \"\",\n\t\t\t\t\"type\": \"uint8\"\n\t\t\t}\n\t\t],\n\t\t\"payable\": false,\n\t\t\"stateMutability\": \"view\",\n\t\t\"type\": \"function\"\n\t},\n\t{\n\t\t\"constant\": true,\n\t\t\"inputs\": [],\n\t\t\"name\": \"getHosterAddress\",\n\t\t\"outputs\": [\n\t\t\t{\n\t\t\t\t\"internalType\": \"address\",\n\t\t\t\t\"name\": \"\",\n\t\t\t\t\"type\": \"address\"\n\t\t\t}\n\t\t],\n\t\t\"payable\": false,\n\t\t\"stateMutability\": \"view\",\n\t\t\"type\": \"function\"\n\t},\n\t{\n\t\t\"constant\": true,\n\t\t\"inputs\": [],\n\t\t\"name\": \"getAUselessConstantValue\",\n\t\t\"outputs\": [\n\t\t\t{\n\t\t\t\t\"internalType\": \"uint8\",\n\t\t\t\t\"name\": \"\",\n\t\t\t\t\"type\": \"uint8\"\n\t\t\t}\n\t\t],\n\t\t\"payable\": false,\n\t\t\"stateMutability\": \"pure\",\n\t\t\"type\": \"function\"\n\t},\n\t{\n\t\t\"constant\": false,\n\t\t\"inputs\": [\n\t\t\t{\n\t\t\t\t\"internalType\": \"address\",\n\t\t\t\t\"name\": \"attendee\",\n\t\t\t\t\"type\": \"address\"\n\t\t\t}\n\t\t],\n\t\t\"name\": \"requestTicket\",\n\t\t\"outputs\": [],\n\t\t\"payable\": true,\n\t\t\"stateMutability\": \"payable\",\n\t\t\"type\": \"function\"\n\t},\n\t{\n\t\t\"inputs\": [],\n\t\t\"payable\": false,\n\t\t\"stateMutability\": \"nonpayable\",\n\t\t\"type\": \"constructor\"\n\t}\n]\n\n//# sourceURL=webpack:///./src/abi.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const contractAbi = __webpack_require__(/*! ./abi */ \"./src/abi.js\")\n\nasync function start(web3) {\n    const accounts = web3.eth.accounts\n    const account = accounts[0]\n\n    debugger\n    \n    const contract = web3.eth.contract(contractAbi);\n    \n    const contractAddress = '0x575a50b88c368a78ec5ab775c05f6aa87b15bae6'; \n    //0xd582c3bc0e2c8040a0490d7d318995a1f5609bc1\n    // '0x4F614f3eD604eBfDaa0766e50d351cDf89E37956';\n    const contractInstance = contract.at(contractAddress);\n\n    const gasPrice = web3.toWei(100,'gwei')\n    //const ticketPrice = web3.toWei(100,'gwei')\n    \n    //returns a state variable (hoster)\n    const txhash = await contractInstance.getHosterAddress({\n        from: account,\n        gas: 30000,\n        gasPrice: gasPrice,\n        //value: ticketPrice\n    }, (err, result) => { \n        console.log(err)\n        console.log(result)\n    })        \n\n    //just returns a number\n    const txhash2 = await contractInstance.getAUselessConstantValue({\n        from: account,\n        gas: 30000,\n        gasPrice: gasPrice,\n        //value: ticketPrice\n    }, (err, result) => { \n        console.log(err)\n        console.log(result.toJSON())\n    })        \n\n}\nwindow.addEventListener('load', async function() {\n    // Checking if Web3 has been injected by the browser (Mist/MetaMask)\n    if (typeof web3 !== 'undefined') {\n      // Use Mist/MetaMask's provider\n      window.web3 = new Web3(web3.currentProvider);\n    }\n    await start(web3);\n  });\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });