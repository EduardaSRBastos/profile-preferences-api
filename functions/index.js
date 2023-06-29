import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';

const functions = require('firebase-functions');
const runtimeOpts = {
  timeoutSeconds: 60,
};

const server = async () => {
  const app = express();

  // Define your Cloud Function route
  app.get('/', (req, res) => {
    res.send('Hello, Cloud Functions!');
  });

  const nestApp = await NestFactory.create(AppModule, app);
  await nestApp.init();

  // Export the Nest.js app as a Cloud Function
  return functions.region('europe-west2').runWith(runtimeOpts).https.onRequest(nestApp.getHttpAdapter().getInstance());
};

exports.app = server;
