const fs = require('fs');

module.exports.decodeHexFileContent = (filePath) =>  {
    return new Promise((resolve, reject) => {
        // To be implemented!
        const readStream = fs.createReadStream(`${filePath}`, {encoding: 'hex'});

        readStream.on('data', function (chunk) {
            // on peut envoyé le morceau de fichier lu au flux d'écriture
            // writeStream.write(chunk);
            console.log(readStream);
        });

        readStream.on('close', function () {
            console.log('fichier en lecture fermé');
        })

        readStream.on('error', function (error) {
            console.log('erreur lecture :', error);
        })

        readStream.on('finish', function () {
            console.log('flux de lecture terminé');
        })
    });

    decodeHexFileContent('input');
}

