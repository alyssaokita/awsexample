module.exports = {
  apps: [{
    name: 'Development',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-224-228-174.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/development_key.pem',
      ref: 'origin/master',
      repo: 'git@github.com:rbaker2016/awsexample.git',
      path: '/home/ubuntu/awsexample',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}