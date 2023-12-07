
# AWS deployment

### Connect Web server with Bastion Host
Connect Bastion Host from your computer
```
ssh -i ~/.ssh/your-key-pair.pem ec2-user@your-instance-bastion-host-ip
```

Connect Web server with your Bastion Host
```
ssh -i ~/.ssh/your-key-pair.pem ec2-user@your-instance-web-server-ip
```

### Configure the EC2 instance
```
sudo yum update
```

### Install Node.js and npm
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

### Activate nvm
```
. ~/.nvm/nvm.sh
```

### Install node 16
```
nvm install 16
```

### Check versions
```
node -v
npm -v
```

Note: Amazon linux 2 supports node 16 and below

###  Install git
```
sudo yum install git
```

### Create ssh key used on Github
```
nano ~/.ssh/id_rsa
```
Copy your deployer private ssh key and save exit.

```
chmod 600 ~/.ssh/id_rsa
```
Change permission of private ssh key

### Clone your project
```
git clone <repository-url>
```

### Install project dependencies
```
cd <repository>
npm install
```

### Change database Settings
```
nano src/system_settings/system_settings.service.ts
```

Change below to your application server  
from `his.httpService.get<SystemSettingEntitiy[]>('http://localhost:3002/system_settings')`  
to `his.httpService.get<SystemSettingEntitiy[]>('http://your application server ip:3000/system_settings')`   

### Build app for deploy
```
npm run build
```

### Run application with production mode
```
npm run start:prod
```

### Check application running
```
curl "http://localhost:3000/system_settings
```
This should return your database value on json format

### Stop npm and install PM2
click ctrl+c button to stop 
```
npm install pm2 -g
```

### Configure nestjs torun pm2
```
nano package.json
```

insert below code inside of "scripts"
```
    "pm2:start": "pm2 start npm --name 'sampleapp-3tier-middleware' -- start",
    "pm2:stop": "pm2 stop sampleapp-3tier-middleware",
```

### Run nestjs application with pm2
```
npm run pm2:start
```

check pm2 status
```
pm2 status
```

check pm2 logs
```
pm2 logs
```

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
