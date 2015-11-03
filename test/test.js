var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();

// Test shortcuts
var expect = Code.expect;
var before = lab.before;
var after = lab.after;
var describe = lab.experiment;
var it = lab.test;

var StringNumber = require('../index');

describe("StringNumber", function () {


    describe('Stringnumber class', function(){
      it('can be cast to string', function(done){
          var number = new StringNumber("4056437197321369473829423451234");
          var longString = 'my '+ number;
          expect(longString).string().equal('my 4056437197321369473829423451234');
          done();
      });

      it('can check instance', function(done){
        var myNumber = new StringNumber("9827349865348972654874");
        expect(myNumber instanceof StringNumber).true();
        done();
      })
    })

    describe('StringNumber.stringify', function(){
      it('can stringify a StringNumber', function(done){
          var ownJSON = {
              id: new StringNumber("4056437197321369473829423451234"),
              nickname: ">>>Weird Characters<<<"
          };
          var output = StringNumber.stringify(ownJSON);
          expect(output).string().contains('"id":4056437197321369473829423451234,');
          done();
      });
    })

    describe('StringNumber.parse', function(){

        it('Can parse long integer from JSON into String', function(done){

            var input = '{"id":4056437197321369473829423451234,"custom_id":"2"}';
            var parsed = StringNumber.parse(input);
            expect(parsed.id.toString()).exist().string().equals('4056437197321369473829423451234');
            done();
        });

        it('is reversable', function(done){
            var input = '{"id":4056437197321369473829423451234,"custom_id":"2"}';
            var parsed = StringNumber.parse(input);
            var stringified = StringNumber.stringify(parsed);
            expect(input).equal(stringified);
            done();
        });
    });
});
