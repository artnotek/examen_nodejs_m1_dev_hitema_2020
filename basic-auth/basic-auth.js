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
    const hash = crypto.createHash('sha256');

    hash.update(data);
    hash.digest('hex');
    console.log(hash);
    return hash;
}

sha1Encode('test2');

module.exports.digestAuth = (request, response, next) => {
    // To be implemented!
    response
        .status(HttpStatus.OK)
        .send('ok');

    // console.log(response);


    const authorization = request.headers.authorization;  // 'Basic xxxx'
    const encoded = authorization.replace('Basic ', '');
    // https://nodejs.org/docs/latest-v12.x/api/buffer.html
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    // 'user:paswword'
    const authentication = decoded.split(':');

    // si user = user & password=password, ok
    const isValid = authentication[0] === 'node'
        && authentication[1] === 'password';

    isValid ? next() : response.sendStatus(HttpStatus.UNAUTHORIZED);
}
