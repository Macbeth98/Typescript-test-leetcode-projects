"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = void 0;
// enum will also act as a Type => MatchResult has become a type
// we can define Enums without any values like Match{HomeWin, AwayWin, Draw }
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
;
