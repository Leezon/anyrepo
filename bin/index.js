#! /usr/bin/env node

const program = require('commander');
const chalk = require('chalk');

// 获取当前版本号
const version = require('../package.json').version;

// 获取create模块
const createModel = require('../utils/create');

program
  // 配置脚手架名称
  .name('anyrepo')
  // 配置命令格式
  .usage(`<command> [option]`)
  // 配置版本号
  .version(version);

program
  .command('create <project-name>')
  .description('create a new project')
  .option('-f, --force', 'overwrite target directory if it exists')
  .option('-r, --url <url>', 'repo url')
  .action((projectName, options) => {
    // 引入create模块，并传入参数
    createModel(projectName, options);
  });

program.parse(process.argv);
