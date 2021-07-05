#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const axios = require('axios')
const get = axios.get()

const fs = require('fs')

const result = await get(`https://newsapi.org/v2/everything?q=tesla&from=2021-06-05&sortBy=publishedAt&apiKey=${argv.token}`)

fs.writeFileSync(('../news.json', result, err) => {
  if (err) {
    console.error(err)
    return
  }
})
