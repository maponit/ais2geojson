'use strict';
const {exec} = require('child_process')
const util = require('util')
const execP = util.promisify(exec)

module.exports.ais2geoson = async event => {

    console.log('execute native command')
    const result = await execP("echo '2017-03-01T13:41:14;!BSVDM,1,1,,B,13nW`F001V0pk1jV0r5s@8rHP<0i,0*13' | ./ais2geojson")

    console.log(result);
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Go Serverless v1.0! Your function executed successfully!',
                input: event,
            },
            null,
            2
        )
    }

}
