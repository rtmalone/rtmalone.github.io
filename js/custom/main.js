(function(){

  $(document).ready(init);

  function init(){
    $('#hrRate').text(bRate);
    $('#rateBtn').click(setRate);
    $('a[name=submit]').on('click', addRule);
    $('#ruleContainer').on('click', 'a', getValue);
  }
  var bRate = 200;

  function setRate() {
    bRate = $('#bRate').val() * 1;
    if(bRate < 0){
      bRate = 0;
    }
    showRate();
  }

  function showRate() {
    $('#rateDiv :input').val('');
    $('#hrRate').text(bRate);
  }

  function addRule () {
    var rule = {};
    rule.rName = $('#ruleName').val();
    rule.rVal = $('#ruleVal').val();
    appendRule(rule);
    $('#rulesDiv :input').val('');
  }

  function appendRule(rule) {
    $div = '<div>'+rule.rName+': $<span>'+rule.rVal+'</span></div>';
    $('#ruleContainer').append($div);
    addButton();
  }

  function addButton(){
    $a = '<a>Apply</a>';
    $('#ruleContainer').children('div').last().append($a);
  }

  function getValue() {
    var val = $(this).prev().text() * 1;
    if(val >=0){
      increaseRate(val);
    } else {
      decreaseRate(val);
    }
  }

  function increaseRate(posVal) {
    modifyRate(posVal);
  }

  function decreaseRate(negVal){
    modifyRate(negVal);
  }

  function modifyRate(value) {
    bRate += value;
    setRate();
  }
})();
