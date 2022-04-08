console.log('loading...');
function showOrHideAllExceptLast(allElements, uiChangeTime, hideLast) {
    var show = typeof hideLast !== 'undefined' ? hideLast : true;
    if(show) {
        allElements.slice(0,-1).removeClass('hideLeft');
        allElements.last().addClass('hideRight');
        setTimeout(function (){
            allElements.last().addClass('opacityHide');
        }, uiChangeTime);
        return;
    }
    allElements.last().show(uiChangeTime);
    allElements.last().removeClass('hideRight opacityHide');
    setTimeout(function (){
        allElements.slice(0,-1).addClass('hideLeft');
    }, uiChangeTime);
}
$(document).ready(function (){
    var $tabToggle = $('#pricing_plan_toggle');
    var $numUsersForm = $('#num_users_form');
    var $priceTable = $('#home');
    var $priceTableCols = $priceTable.find('.priceTable_col');
    var uiTimeMs = 400;
    console.log('ready');
    $tabToggle.on('click', function (ev) {
        var $tab = $(ev.target);
        if($tab.prop('id') === 'retail-tab') {
            $numUsersForm.addClass('opacityHide');
            showOrHideAllExceptLast($priceTableCols, uiTimeMs, true);
            return;
        }
        $numUsersForm.removeClass('opacityHide');
        showOrHideAllExceptLast($priceTableCols, uiTimeMs, false);
    });
});