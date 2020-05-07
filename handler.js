'use strict';
const {exec} = require('child_process')
const util = require('util')
const execP = util.promisify(exec)

module.exports.ais2geojson = async event => {
    const result = await execP(`echo '${event.message}' | ais2geojson`)
    console.log(result)
    return result.stdout ? JSON.parse(result.stdout) : throw `Could not parse ais2geojson from ${event.message}`
}
