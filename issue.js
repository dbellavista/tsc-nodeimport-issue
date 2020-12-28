/**
 * @file issue.js
 * @module issue/issue
 * @author Daniele Bellavista
 */
'use strict';

const EventEmitter = require('events');
const {Writable} = require('stream');

class Issue extends EventEmitter {

}

const i = new Issue();
i.on('event', () => {});

const w = new Writable();
w.cork();

exports.Issue = Issue;
exports.Writable = Writable;
