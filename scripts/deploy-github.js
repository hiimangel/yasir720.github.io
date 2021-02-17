const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/yasir720/yasir720.github.io',
  },
  () => {
    console.log('Deploy Complete!')
  }
)