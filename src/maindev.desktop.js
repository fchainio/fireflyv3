
/* eslint-disable */

// Set environment for development
process.env.NODE_ENV = 'development'

// Install `electron-debug` with `devtron`
require('electron-debug')({ showDevTools: true })

require('electron').app.on('ready', () => {
    let { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer')
    installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added React DevTool Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
  })
// Require `main` process to boot app
require('./main.desktop')
