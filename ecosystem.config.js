module.exports = {
  apps: [{
    name: 'Development2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-18-223-203-123.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/development_key.pem',
      ref: 'origin/master',
      repo: 'git@github.com:rbakerdev/awsexample.git',
      path: '/home/ubuntu/awsexample',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}