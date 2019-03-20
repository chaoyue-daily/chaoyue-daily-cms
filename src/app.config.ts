/**
 * App config.
 * @file 应用运行配置
 * @module app/config
 */

import * as path from 'path';
import { argv } from 'yargs';
import { environment } from './app.environment';
import { packageJson } from './transforms/module.transform';

export const APP = {
  LIMIT: 16,
  PORT: 8000,
  ROOT_PATH: __dirname,
  NAME: 'cyDaily',
  URL: 'https://chaoyuedaily.com',
  ENVIRONMENT: environment,
  FRONT_END_PATH: path.join(__dirname, '..', '..', 'chaoyuedaily.com'),
};