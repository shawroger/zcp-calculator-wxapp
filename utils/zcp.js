var ZCP = (function () {
    function ZCP(arr) {
        this.result = [];
        if (arr) {
            this.result = this.getAllCorrectCards(arr);
        }
    }
    ZCP.prototype.sum = function (arr) {
        var s = 0;
        arr.forEach(function (v) {
            s += v;
        });
        return s;
    };
    ZCP.prototype.isEqual = function (arr1, arr2) {
        return this.sum(arr1) === this.sum(arr2);
    };
    ZCP.prototype.traveral = function (size, len) {
        var arr = Array(len)
            .fill(0)
            .map(function (_v, i) { return i; });
        var cards = [];
        (function traveral(arr, size, result) {
            var arrConcat = function (arr) {
                var result = [];
                arr.forEach(function (e) {
                    e.forEach(function (v) {
                        result.push(v);
                    });
                });
                return result;
            };
            if (size > arr.length) {
                return;
            }
            else if (size === arr.length) {
                cards.push(arrConcat([result, arr]));
            }
            else {
                for (var i = 0; i < arr.length; i++) {
                    var temp = arrConcat([result]);
                    temp.push(arr[i]);
                    if (size === 1) {
                        cards.push(temp);
                    }
                    else {
                        var tempArr = arrConcat([arr]);
                        tempArr.splice(0, i + 1);
                        traveral(tempArr, size - 1, temp);
                    }
                }
            }
        })(arr, size, []);
        return cards;
    };
    ZCP.prototype.cardToNum = function (val) {
        var vaildChars = {
            J: 11,
            Q: 12,
            K: 13,
            j: 11,
            q: 12,
            k: 13
        };
        var isNumber = function (val) {
            var regNumber = /^\d+$/;
            if (regNumber.test(val)) {
                return true;
            }
            else {
                return false;
            }
        };
        if (isNumber(val.toString())) {
            return Number(val);
        }
        else if (Object.keys(vaildChars).includes(val.toString())) {
            var returns = 0;
            for (var i in Object.keys(vaildChars)) {
                if (Object.keys(vaildChars)[i] === val.toString()) {
                    returns = Object.values(vaildChars)[i];
                    break;
                }
            }
            return returns;
        }
        else {
            return -1;
        }
    };
    ZCP.prototype.numsToCard = function (val) {
        var strArr = [
            "A",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "J",
            "Q",
            "K"
        ];
        return strArr[val - 1];
    };
    ZCP.prototype.cardsToNums = function (val) {
        var _this = this;
        return val.map(function (e) { return _this.cardToNum(e); });
    };
    ZCP.prototype.allTraveral = function (len) {
        var result = [];
        for (var i = 1; i <= Math.floor(0.5 * len); i++) {
            this.traveral(i, len).forEach(function (e) {
                result.push(e);
            });
        }
        return result;
    };
    ZCP.prototype.chooseCards = function (arr) {
        var result = [];
        var allVals = Array(arr.length)
            .fill(0)
            .map(function (_v, i) { return i; });
        this.allTraveral(arr.length).forEach(function (e) {
            var temp1 = [];
            var temp2 = [];
            e.forEach(function (v) {
                temp1.push(arr[v]);
            });
            allVals.forEach(function (v) {
                if (!e.includes(v)) {
                    temp2.push(arr[v]);
                }
            });
            result.push([temp1, temp2]);
        });
        return result;
    };
    ZCP.prototype.getCorrectCards = function (arr) {
        var _this = this;
        var result = [];
        var allParts = this.chooseCards(arr);
        allParts.forEach(function (e) {
            if (_this.isEqual(_this.cardsToNums(e[0]), _this.cardsToNums(e[1]))) {
                result.push(e);
            }
        });
        return result;
    };
    ZCP.prototype.getAllCorrectCards = function (arr) {
        var _this = this;
        var result = this.getCorrectCards(arr);
        var allParts = this.chooseCards(arr);
        allParts.forEach(function (e) {
            _this.getCorrectCards(e[0]).forEach(function (v) {
                result.push(v);
            });
            _this.getCorrectCards(e[1]).forEach(function (v) {
                result.push(v);
            });
        });
        return result;
    };
    ZCP.prototype.when = function (arr) {
        return this.getAllCorrectCards(arr);
    };
    ZCP.prototype.filter = function (arr) {
        var isEqual = function (m, n) {
            if (m.length !== n.length)
                return false;
            var M = m.sort();
            var N = n.sort();
            var result = true;
            M.forEach(function (v, k) {
                if (v !== N[k]) {
                    result = false;
                }
            });
            return result;
        };
        var itemsIsEqual = function (m, n) {
            if (isEqual(m[0], n[0]) && isEqual(m[1], n[1]))
                return true;
            if (isEqual(m[0], n[1]) && isEqual(m[1], n[0]))
                return true;
            return false;
        };
        var arrHasItem = function (m, n) {
            var result = false;
            n.forEach(function (v) {
                if (itemsIsEqual(v, m)) {
                    result = true;
                }
            });
            return result;
        };
        var newArr = [];
        arr.forEach(function (v) {
            if (!arrHasItem(v, newArr)) {
                newArr.push(v);
            }
        });
        return newArr;
    };
    ZCP.prototype.sort = function (arr) {
        var sortByLength = function (m, n) {
            return n[0].length + n[1].length - m[0].length - m[1].length;
        };
        var sortByFirstLength = function (m, n) {
            return n[0].length - m[0].length;
        };
        return arr.sort(sortByFirstLength).sort(sortByLength);
    };
    return ZCP;
}());

const zcp = new ZCP();

export {
	zcp
}

