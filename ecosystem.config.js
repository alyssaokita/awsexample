module.exports = {
  apps: [{
    name: 'Development2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-16-214-44.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/development_key.pem',
      ref: 'origin/master',
      repo: 'git@github.com:rbakerdev/awsexample.git',
      path: '/home/ubuntu/awsexample',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}