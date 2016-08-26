// generate path string based on input parameters
var rect;

rect = function(dimensions) {
    var required,
        upper_left,
        upper_right,
        lower_right,
        lower_left,
        close,
        path_string;
    required = ['height', 'width'];
    required.forEach(function(property) {
        if (typeof dimensions[property] !== 'number') {
            console.error('rectangle path generator requires ' + property + ' property');
            return;
        }
    });
    upper_left = 'M 0,0';
    upper_right = 'l ' + dimensions.width + ',0';
    lower_right = 'l 0,' + dimensions.height;
    lower_left = 'l ' + dimensions.width * -1 + ',0';
    close = 'z';
    path_string = [
        upper_left,
        upper_right,
        lower_right,
        lower_left,
        close
    ].join(' ');
    return path_string;
};

export default rect;