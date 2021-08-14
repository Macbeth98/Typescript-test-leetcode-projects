"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
function checkRank(rank_arr, rank, num) {
    var index = rank_arr.indexOf(rank);
    return rank;
}
function matrixRankTransform(matrix) {
    var m = matrix.length;
    var n = matrix[0].length;
    var ranks = Array(m).fill(Array(n).fill(0));
    var columns = [];
    var rows = [];
    for (var i = 0; i < matrix.length; i++) {
        var row = __spreadArray([], __read(new Set(matrix[i])));
        row.sort(function (a, b) { return a - b; });
        rows.push(row);
        // if(i > column_length - 1) break;
        var column = [];
        var braked = false;
        for (var j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === undefined) {
                braked = true;
                break;
            }
            // if(column.indexOf(matrix[j][i]) >= 0) console.log('Leemnt alerwady there...', matrix[j][i]);
            // else 
            column.push(matrix[j][i]);
        }
        if (braked)
            break;
        column.sort(function (a, b) { return a - b; });
        columns.push(column);
    }
    // console.log(rows);
    // console.log(columns);
    var row_ranks = [];
    var column_ranks = [];
    for (var i = 0; i < matrix.length; i++) {
        var row = rows[i];
        if (!row_ranks[i])
            row_ranks[i] = [];
        var rr_arr = row_ranks[i];
        for (var j = 0; j < matrix[i].length; j++) {
            var num = matrix[i][j];
            var print_1 = false;
            // if([-19, 4, 19, 7, 6, 9].includes(num)) print = true;
            if (print_1)
                console.log('number..', num);
            var column = columns[j];
            if (print_1)
                console.log('column..', column);
            var row_rank = row.indexOf(num) + 1;
            var column_rank = column.indexOf(num) + 1;
            if (print_1)
                console.log('row rank..', row_rank, 'column rank...', column_rank);
            if (!column_ranks[j])
                column_ranks[j] = [];
            var rc_arr = column_ranks[j];
            if (print_1)
                console.log('colum rank arr...', rc_arr);
            if (print_1)
                console.log('row rank arr...', rr_arr);
            var rank = Math.max(row_rank, column_rank);
            if (print_1)
                console.log('Row, column max rank...', rank);
            var ri = rr_arr.indexOf(rank);
            if (print_1)
                console.log('Final rank index in row rank arr...', ri);
            if (ri >= 0) {
                if (print_1)
                    console.log('Row rank Index found...', ri);
                var or1 = matrix[i][ri];
                if (print_1)
                    console.log('or1...', or1, i, ri);
                if (or1 === num) {
                    if (print_1)
                        console.log('o1 an dnum equal...', or1, num);
                    rr_arr[j] = rank;
                }
                else {
                    if (num > or1) {
                        if (print_1)
                            console.log('num > or1...', num, or1);
                        rank = rank + 1;
                        var max_rank = Math.max.apply(Math, __spreadArray([], __read(rr_arr)));
                        if (print_1)
                            console.log('max rank...', max_rank, 'rank...', rank);
                        if (rank <= max_rank)
                            rank = max_rank + 1;
                        if (print_1)
                            console.log('Fianl max rank..', max_rank, 'final rank...', rank);
                        rr_arr[j] = rank;
                    }
                    else {
                        if (print_1)
                            console.log('num < or1...', num, or1);
                        for (var x = 0; x < rr_arr.length; x++) {
                            if (rr_arr[x] >= rank)
                                rr_arr[x] = rr_arr[x] + 1;
                        }
                        if (print_1)
                            console.log('final rank...', rank);
                        rr_arr[j] = rank;
                    }
                }
            }
            else {
                if (print_1)
                    console.log('Row rank index not found...', ri);
                if (print_1)
                    console.log('FInal rank...', rank);
                rr_arr[j] = rank;
            }
            var ci = rc_arr.indexOf(rank);
            if (print_1)
                console.log('COlum syarrts from here..', i, j);
            if (print_1)
                console.log('Colum rank index...', ci);
            if (ci >= 0) {
                if (print_1)
                    console.log('COlum rank index found...', ci);
                var oc1 = matrix[ci][j];
                if (print_1)
                    console.log('oc1...', oc1, ci, j);
                if (oc1 === num) {
                    if (print_1)
                        console.log('oc1 and num are qual...', oc1, num);
                    rc_arr[i] = rank;
                }
                else {
                    if (num > oc1) {
                        if (print_1)
                            console.log('num > oc1...', num, oc1);
                        rank = rank + 1;
                        var max_rank = Math.max.apply(Math, __spreadArray([], __read(rc_arr)));
                        if (print_1)
                            console.log('Max rank column...', max_rank);
                        if (rank <= max_rank)
                            rank = max_rank + 1;
                        if (print_1)
                            console.log('FInal max rank...', max_rank, 'fianl rank...', rank);
                        rc_arr[i] = rank;
                    }
                    else {
                        if (print_1)
                            console.log('num < oc1...', num, oc1);
                        for (var x = 0; x < rc_arr.length; x++) {
                            if (rc_arr[x] >= rank)
                                rc_arr[x] = rc_arr[x] + 1;
                        }
                        if (print_1)
                            console.log('Final rank...', rank);
                        rc_arr[i] = rank;
                    }
                }
            }
            else {
                if (print_1)
                    console.log('Column rank index not found...', ci);
                if (print_1)
                    console.log('Final rank...', rank);
                rc_arr[i] = rank;
            }
            if (print_1)
                console.log('================================');
            if (print_1)
                console.log();
        }
    }
    // console.log(row_ranks);
    // console.log(column_ranks);
    for (var i = 0; i < matrix.length; i++) {
        var row = matrix[i];
        var rr_arr = row_ranks[i];
        ranks[i] = [];
        for (var j = 0; j < row.length; j++) {
            var num = matrix[i][j];
            var rc_arr = column_ranks[j];
            var rr = rr_arr[j];
            var cr = rc_arr[i];
            var rank = Math.max(rr, cr);
            var ri = rr_arr.indexOf(rank);
            while (ri >= 0) {
                var r_num = matrix[i][ri];
                if (num === r_num) {
                    ranks[i][j] = rank;
                    ri = -1;
                    break;
                }
                else if (num > r_num) {
                    rank = rank + 1;
                    ranks[i][j] = rank;
                    ri = rr_arr.indexOf(rank);
                }
                else {
                    ranks[i][j] = rank;
                    ranks[i][ri] = rank + 1;
                    rr_arr[ri] = rank + 1;
                    column_ranks[ri][i] = rank + 1;
                    // console.log('update column rank also... in row...');
                    ri = -1;
                }
            }
            // if(ri >= 0){
            //   let r_num = matrix[i][ri];
            //   if(num === r_num) {
            //     ranks[i][j] = rank;
            //   } else if (num > r_num){
            //     rank = rank + 1;
            //     ranks[i][j] = rank;
            //   } else {
            //     ranks[i][j] = rank;
            //     ranks[i][ri] = rank + 1;
            //     rr_arr[ri] = rank + 1;
            //   }
            // } else ranks[i][j] = rank;
            rr_arr[j] = rank;
            var frr = rank;
            var rci = rc_arr.indexOf(rank);
            while (rci >= 0) {
                var c_num = matrix[rci][j];
                // console.log('cn umm...', c_num, 'rank...', rank);
                if (num === c_num) {
                    // console.log(num, c_num, 'num, cnum equla...');
                    ranks[i][j] = rank;
                    rci = -1;
                    break;
                }
                else if (num > c_num) {
                    // console.log('num > cnum...', num, c_num);
                    rank = rank + 1;
                    ranks[i][j] = rank;
                    rci = rc_arr.indexOf(rank);
                }
                else {
                    // console.log('num < cnum...', num, c_num);
                    ranks[i][j] = rank;
                    ranks[rci][j] = rank + 1;
                    rc_arr[rci] = rank + 1;
                    row_ranks[rci][j] = rank + 1;
                    // console.log('Updated column ranks data also....');
                    // console.log('num.. rank..', rank)
                    // console.log('cnum_ rank', rank + 1);
                    rci = -1;
                }
            }
            rc_arr[i] = rank;
            var fcr = rank;
            // if(rci >= 0){
            //   let c_num = matrix[rci][j];
            //   console.log('cn umm...', c_num, 'rank...', rank);
            //   if(num === c_num){
            //     console.log(num, c_num, 'num, cnum equla...');
            //     ranks[i][j] = rank;
            //   } else if (num > c_num){
            //     console.log('num > cnum...', num, c_num);
            //     rank = rank + 1;
            //     ranks[i][j] = rank;
            //   } else {
            //     console.log('num < cnum...', num, c_num);
            //     ranks[i][j] = rank;
            //     ranks[rci][j] = rank + 1;
            //     rc_arr[rci] = rank + 1;
            //     console.log('num.. rank..', rank)
            //     console.log('cnum_ rank', rank + 1);
            //   }
            // } else ranks[i][j] = rank;
            // rank = Math.max(frr, fcr);
            ranks[i][j] = rank;
        }
    }
    // console.log()
    // console.log('===============');
    // console.log()
    // console.log(row_ranks);
    // console.log(column_ranks);
    // console.log('=========================');
    console.log(ranks);
    return ranks;
}
;
matrixRankTransform([[20, -21, 14], [-19, 4, 19], [22, -47, 24], [-19, 4, 19]]
// [[7,7],[7,7]]
// [[1,2],[3,4]]
// [[7,3,6],[1,4,5],[9,8,2]]
);
