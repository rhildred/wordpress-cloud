let exec = require('child_process').execSync;

let port = process.env.PORT || parseInt(process.argv.pop()) || 3000;

let cmd = "/usr/bin/php -S 0.0.0.0:" + port;

exec(cmd, {stdio: 'inherit'});