
var StringNumber = function StringNumber(number){
    this.number = number;
};
StringNumber.prototype.toString = function(){
        return this.number;
};
StringNumber.prototype.valueOf = function(){
        return this.number;
};

module.exports = StringNumber;
