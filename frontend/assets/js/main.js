$(document).ready(function () {
    $('.format-price').each(function() {
        new AutoNumeric(this, {
            currencySymbol: '',
            decimalCharacter: ',',
            digitGroupSeparator: '.',
            maximumValue: '9999999999.99',
            decimalPlaces: 2,
            modifyValueOnWheel: false,
            unformatOnHover: false
        });
    });
    
});

