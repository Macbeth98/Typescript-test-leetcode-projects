"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
function matrixRankTransform(matrix) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f;
    var _g, _h, _j;
    var m = matrix.length;
    var n = matrix[0].length;
    var graphs = new Map();
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var v = matrix[i][j];
            if (!graphs.has(v)) {
                graphs.set(v, new Map());
            }
            var graph = graphs.get(v);
            if (!graph)
                continue;
            if (!graph.has(i)) {
                graph.set(i, []);
            }
            if (!graph.has(~j)) {
                graph.set(~j, []);
            }
            (_g = graph.get(i)) === null || _g === void 0 ? void 0 : _g.push(~j);
            (_h = graph.get(~j)) === null || _h === void 0 ? void 0 : _h.push(i);
            console.log(graph);
        }
    }
    console.log('==================');
    console.log(graphs);
    console.log('===================');
    var value2index = new Map();
    var seen = Array(m).fill(Array(n).fill(0));
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (seen[i][j] === 1)
                continue;
            seen[i][j] = 1;
            var v = matrix[i][j];
            var graph = graphs.get(v);
            var rowcols = new Set();
            rowcols.add(i);
            rowcols.add(~j);
            var q = [];
            q.push(i);
            q.push(~j);
            while (q.length > 0) {
                var node = q.shift();
                if (node === undefined)
                    break;
                var rowcols_arr = graph === null || graph === void 0 ? void 0 : graph.get(node);
                if (rowcols_arr === undefined)
                    continue;
                try {
                    for (var rowcols_arr_1 = (e_1 = void 0, __values(rowcols_arr)), rowcols_arr_1_1 = rowcols_arr_1.next(); !rowcols_arr_1_1.done; rowcols_arr_1_1 = rowcols_arr_1.next()) {
                        var rowcol = rowcols_arr_1_1.value;
                        if (!rowcols.has(rowcol)) {
                            rowcols.add(rowcol);
                            q.push(rowcol);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (rowcols_arr_1_1 && !rowcols_arr_1_1.done && (_a = rowcols_arr_1["return"])) _a.call(rowcols_arr_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            var points = [];
            try {
                for (var rowcols_1 = (e_2 = void 0, __values(rowcols)), rowcols_1_1 = rowcols_1.next(); !rowcols_1_1.done; rowcols_1_1 = rowcols_1.next()) {
                    var rowcol = rowcols_1_1.value;
                    var rc_arr = graph === null || graph === void 0 ? void 0 : graph.get(rowcol);
                    if (rc_arr === undefined)
                        continue;
                    try {
                        for (var rc_arr_1 = (e_3 = void 0, __values(rc_arr)), rc_arr_1_1 = rc_arr_1.next(); !rc_arr_1_1.done; rc_arr_1_1 = rc_arr_1.next()) {
                            var k = rc_arr_1_1.value;
                            if (k >= 0) {
                                points.push([k, ~rowcol]);
                                seen[k][~rowcol] = 1;
                            }
                            else {
                                points.push([rowcol, ~k]);
                                seen[rowcol][~k] = 1;
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (rc_arr_1_1 && !rc_arr_1_1.done && (_c = rc_arr_1["return"])) _c.call(rc_arr_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (rowcols_1_1 && !rowcols_1_1.done && (_b = rowcols_1["return"])) _b.call(rowcols_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            if (!value2index.has(v)) {
                value2index.set(v, []);
            }
            (_j = value2index.get(v)) === null || _j === void 0 ? void 0 : _j.push(points);
        }
    }
    console.log(seen);
    console.log(value2index);
    var answer = Array(m).fill(Array(n).fill(0));
    var rowMax = [];
    var colMax = [];
    var keys = value2index.keys();
    try {
        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var v = keys_1_1.value;
            var rank = 1;
            var points = value2index.get(v);
            if (points === undefined)
                continue;
            try {
                for (var points_1 = (e_5 = void 0, __values(points)), points_1_1 = points_1.next(); !points_1_1.done; points_1_1 = points_1.next()) {
                    var point = points_1_1.value;
                    rank = Math.max(rank, Math.max(rowMax[point[0][0]]), colMax[point[0][1]] + 1);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (points_1_1 && !points_1_1.done && (_e = points_1["return"])) _e.call(points_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
            try {
                for (var points_2 = (e_6 = void 0, __values(points)), points_2_1 = points_2.next(); !points_2_1.done; points_2_1 = points_2.next()) {
                    var point = points_2_1.value;
                    answer[point[0][0]][point[0][1]] = rank;
                    rowMax[point[0][0]] = Math.max(rowMax[point[0][0]], rank);
                    colMax[point[0][1]] = Math.max(colMax[point[0][1]], rank);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (points_2_1 && !points_2_1.done && (_f = points_2["return"])) _f.call(points_2);
                }
                finally { if (e_6) throw e_6.error; }
            }
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (keys_1_1 && !keys_1_1.done && (_d = keys_1["return"])) _d.call(keys_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    console.log('Final answer....');
    console.log(answer);
    return answer;
}
matrixRankTransform([[20, -21, 14], [-19, 4, 19], [22, -47, 24], [-19, 4, 19]]
// [[7,7],[7,7]]
// [[1,2],[3,4]]
// [[7,3,6],[1,4,5],[9,8,2]]
);
