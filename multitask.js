process.env.UV_THREADPOOL_SIZE = 5; // If the threadpool is equals 5, 
                                    // all the requests are going to be executed cuncurrently
const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest() {
    https.request('https://www.google.com', res => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log(Date.now() - start);
        });
    })
    .end();
}

function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
       console.log('Hash:', Date.now() - start); 
    });
}

// Doesn't touch the threadpool at all
doRequest();

// Makes the threadpool work in subsequent tasks due to the HD waiting time
fs.readFile('multitask.js', 'utf-8', () => {
    console.log('FS:', Date.now() - start);
});

doHash(); // Finishes the execution before the FS if threadpool is 4 or below
doHash(); // Finishes the execution before the FS if threadpool is 4 or below
doHash(); // Finishes the execution before the FS if threadpool is 4 or below
doHash(); // Finishes the execution before the FS if threadpool is 4 or below