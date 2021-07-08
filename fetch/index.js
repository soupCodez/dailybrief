#!/usr/bin/env node

/* eslint-disable import/no-unresolved */

const yargs = require('yargs/yargs');

// eslint-disable-next-line prefer-destructuring
const { hideBin } = require('yargs/helpers');

// eslint-disable-next-line prefer-destructuring
const argv = yargs(hideBin(process.argv)).argv;

const axios = require('axios');

const fs = require('fs');

const NewsAPI = require('newsapi');
const { fstat } = require('fs/promises');
const newsapi = new NewsAPI(argv.token.toString());

newsapi.v2
  .topHeadlines({
    language: 'en',
  })
  .then((response) => {
    try {
      fs.writeFileSync('news.json', JSON.stringify(response));
    } catch (err) {
      console.error(err);
    }
  });

/* eslint-enable import/no-unresolved */
