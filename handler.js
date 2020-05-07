'use strict';
const {exec} = require('child_process')
const util = require('util')
const execP = util.promisify(exec)

module.exports.ais2geojson = async event => {

    const result = await execP(`echo '${event.message}' | ais2geojson`)
    const geojson = JSON.parse(result.stdout)
    console.log(geojson.type)

    return geojson

}
