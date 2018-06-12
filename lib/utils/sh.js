const globalShell = require('shelljs');

class Shell {
    constructor() {
        this.msg = {
            green: (msg) => {
                return this.message('\x1b[32m', msg);
            },
            black: (msg) => {
                return this.message('\x1b[30m', msg);
            },
            red: (msg) => {
                return this.message('\x1b[31m', msg);
            },
            yellow: (msg) => {
                return this.message('\x1b[33m', msg);
            },
            blue: (msg) => {
                return this.message('\x1b[34m', msg);
            },
            magenta: (msg) => {
                return this.message('\x1b[35m', msg);
            },
            cyan: (msg) => {
                return this.message('\x1b[36m', msg);
            },
            white: (msg) => {
                return this.message('\x1b[37m', msg);
            }
        }

    }
    message(color, msg = '') {
        return globalShell.echo(color + msg);
    }
    command(cmd, cb = null) {
        const command = globalShell.exec(cmd)
        if (typeof cb == 'function') {
            if (command !== 0) {
                cb(false);
            } else {
                cb(true)
            }
        }
    } // command
} // class
module.exports = new Shell();
