# advanced-node
Implementation of Advanced Node Concepts course using Multithreading, Clustering, Caching, Streaming and other cool concepts.

## PM2

To use (PM2)[pm2.keymetrics.io], first, install it globally:
`npm i -g pm2`

To start the application with an optimized cluster mode, use:
`pm2 start index.js -i 0`

To stop all instances, use:
`pm2 delete index`

To use PM2 monitoring tool:
`pm2 monit`