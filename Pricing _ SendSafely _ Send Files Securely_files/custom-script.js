
function showElemsHideOthers($elemsToShow, $elemsToHide) {
    $elemsToShow.show().removeClass('opacityHide');
    $elemsToHide.hide().addClass('opacityHide');
}

$(document).ready(function (){
    var $tabToggle = $('#pricing_plan_toggle');
    var $numUsersForm = $('#num_users_form');
    var $rowEnterprise = $('#row_enterprise');
    var $rowIndividual = $('#row_individual');

    $rowIndividual.hide();
    $tabToggle.on('click', function (ev) {
        var $tab = $(ev.target);

        if($tab.prop('id') === 'individual-tab') {
            $numUsersForm.addClass('opacityHide');
            showElemsHideOthers($rowIndividual, $rowEnterprise);
            return;
        }
        $numUsersForm.removeClass('opacityHide');
        showElemsHideOthers($rowEnterprise, $rowIndividual);
    });
});