var moment = require('moment');

var TimestampWidget = function(config) {

  var widget = {
    widgetType: config.widgetType,
    plugin: config.plugin,
    datasourceId: config.datasourceId,
    displayName: config.displayName,
    fieldName: config.fieldName,
    value: '',
    width: config.width,
    height: config.height  
  };

  widget.update = function(value) {
    var t = moment(value).format('dddd HH:mm:ss');
    widget.value = t;
  };

  return widget;
};

module.exports = TimestampWidget;