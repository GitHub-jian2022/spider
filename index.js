const path = require('path')
const fs = require('fs')
const request = require('request')
const config = require('./config')
const analyze=require('./utils/analyze');
const tools = require('./utils/tools')

request.get(config.url, (error, response, data) => {
    if (error) return
    analyze.findImg(data,tools.downLoad);
    
})

