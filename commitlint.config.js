module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': () => [2, 'always', 260],
    'scope-empty': [2, 'never'],
    'scope-enum': () => [2, 'always', ['demo-app', 'demo-app-farmfe', 'mock', 'libs', 'ui', 'all']],
  },
};
