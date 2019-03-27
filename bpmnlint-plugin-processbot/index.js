module.exports = {
  configs: {
    recommended: {
      rules: {
        'processbot/no-manual-task': 'error'
      }
    },
    all: {
      rules: {
        'processbot/no-general-instruction': 'warn',
        'processbot/no-manual-task': 'warn'
      }
    }
  }
}