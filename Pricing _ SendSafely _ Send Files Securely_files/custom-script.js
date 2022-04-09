console.log('loading...');
function showOrHideAllExceptLast(allElements, uiChangeTime, hideLast) {
    var show = typeof hideLast !== 'undefined' ? hideLast : true;
    var $firstElements = allElements.slice(0,-1);
    if(show) {
        $firstElements.removeClass('hideLeft opacityHide');
        allElements.last().addClass('hideRight opacityHide');
        setTimeout(function (){
            $firstElements.show();
            allElements.last().hide();
        }, uiChangeTime);
        return;
    }
    $firstElements.addClass('hideLeft opacityHide');
    allElements.last().removeClass('hideRight opacityHide');

    setTimeout(function (){
        $firstElements.hide();
        allElements.last().show();
    }, uiChangeTime * 0.5);
}
$(document).ready(function (){
    var $tabToggle = $('#pricing_plan_toggle');
    var $numUsersForm = $('#num_users_form');
    var $priceTable = $('#home');
    var $priceTableCols = $priceTable.find('.priceTable_col');
    var uiTimeMs = 800;
    console.log('ready');
    $priceTableCols.slice(0,-1).hide();
    $priceTableCols.last().removeClass('opacityHide');
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