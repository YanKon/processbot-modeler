// disallowedHelper alias in webpack
const disallowNodeType = require('./helper').disallowNodeType;

module.exports = disallowNodeType('bpmn:EventBasedGateway');