module.exports = function(number){
    this.number = number;
    this.toString = function(){
        return this.number;
    };
};