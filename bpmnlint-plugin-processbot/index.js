module.exports = {
  configs: {
    recommended: {
      rules: {
        'processbot/require-general-instruction': 'error',
        'processbot/require-detail-instruction': 'error',
        'processbot/no-parallel-gateway': 'error',
        'processbot/no-eventbased-gateway': 'error',
        'processbot/no-intermediate-catch-event': 'error',
        'processbot/no-manual-task': 'error'


      }
    },
    all: {
      rules: {
        'processbot/require-general-instruction': 'error',
        'processbot/require-detail-instruction': 'error',
        'processbot/no-parallel-gateway': 'error',
        'processbot/no-eventbased-gateway': 'error',
        'processbot/no-intermediate-catch-event': 'error',
        'processbot/no-manual-task': 'warn'
      }
    }
  }
}