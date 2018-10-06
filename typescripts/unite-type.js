"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatCommandline(command) {
    var line = '';
    if (typeof command === 'string') {
        line = command.trim();
    }
    else {
        line = command.join(' ').trim();
    }
}
exports.formatCommandline = formatCommandline;
