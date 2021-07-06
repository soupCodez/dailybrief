#!/usr/bin/env node

/* eslint-disable import/no-unresolved */

const yargs = require('yargs/yargs');

// eslint-disable-next-line prefer-destructuring
const { hideBin } = require('yargs/helpers');

// eslint-disable-next-line prefer-destructuring
const argv = yargs(hideBin(process.argv)).argv;

const axios = require('axios');

const get = axios.get();

const fs = require('fs');

const result = await get(
  `https://newsapi.org/v2/everything?q=tesla&from=2021-06-05&sortBy=publishedAt&apiKey=${argv.token}`
);

fs.writeFileSync('../news.json', result, (err) => {
  if (err) {
    console.error(err);
  }
});
/* eslint-enable import/no-unresolved */
