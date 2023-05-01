"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.getRoot = function (req, res) {
        var _a;
        if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
            res.send("\n      <div>\n        <div>You are Logged In</div>\n        <a href=\"/auth/logout\">Logout</a>\n      </div>\n      ");
        }
        else {
            res.send("\n      <div>\n        <div>You are NOT Logged In</div>\n        <a href=\"/auth/login\">LogIN</a>\n      </div>\n      ");
        }
    };
    return RootController;
}());
