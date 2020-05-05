const crypto = require('crypto');
// const hash = crypto.createHash('sha1');
const HttpStatus = require('http-status-codes');


function sha1Encode(data) {
    // To be implemented!
    // // console.log('test hash n°1 : ', hash.write(data));
    // // console.log(HttpStatus.UNAUTHORIZED);
    // hash.on('readable', () => {
    //
    //     const dataHash = hash.read();
    //     if (dataHash) {
    //         console.log(dataHash.toString('hex'));
    //     }
    // });
    //
    // hash.write('test');
    // hash.end();
    return crypto.createHash('sha1').update(data).digest('hex')
}

sha1Encode('test2');

module.exports.digestAuth = (request, response, next) => {
    // To be implemented!

    const authorization = request.headers.authorization;  // 'Basic xxxx'
    const encoded = authorization.replace('Basic ', '');
    // https://nodejs.org/docs/latest-v12.x/api/buffer.html
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    // 'user:paswword'
    const authentication = decoded.split(':');

    // si user = user & password=password, ok
    const isValid = authentication[0] === 'node'
        && authentication[1] === sha1Encode('password');

    isValid ? next() : response.sendStatus(HttpStatus.UNAUTHORIZED);
}
