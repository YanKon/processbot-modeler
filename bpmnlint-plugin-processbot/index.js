module.exports = {
  configs: {
    recommended: {
      rules: {
        'processbot/disallow-types': 'error',
        'processbot/disallow-intermediate-event-types': 'error',
        'processbot/require-general-instruction': 'error',
        'processbot/require-detail-instruction': 'error',
        'processbot/require-button-name-intermadiate-event': 'error',
        'processbot/require-detail-description': 'error',
        'processbot/require-split-question-exclusive-gateway': 'error',
        'processbot/no-parallel-gateway': 'error',
        'processbot/fake-exclusive-gateway': 'error',
      }
    }
  }
}