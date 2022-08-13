import chalk from 'chalk';// 改变屏幕文字颜色
import type {ForegroundColor, ChalkInstance} from "chalk"
import timestamp from "time-stamp"
import {formatWithOptions} from "util"

function getTimestamp(color: ForegroundColor = "gray") {
    return `[${chalk[color](timestamp('HH:mm:ss'))}]`
}

interface Log extends Console {
    (...content: unknown[]): string,

    chalk: ChalkInstance,

    debug(...content: unknown[]): string,

    success(...content: unknown[]): string,

    warn(...content: unknown[]): string,

    info(...content: unknown[]): string,

    error(...content: unknown[]): string,
}

export const log: Log = ((...content: unknown[]) => {
    const time = getTimestamp();
    process.stdout.write(time + ' ');
    const out = formatWithOptions({colors: true}, ...content)
    console.log(chalk.gray(out));
    return out;
}) as Log

export function success(...content: unknown[]) {
    const time = getTimestamp("cyan");
    process.stdout.write(time + ' ');
    const out = formatWithOptions({colors: true}, ...content)
    console.log(chalk.cyan(out));
    return out;
}

export function warn(...content: unknown[]) {
    const time = getTimestamp("yellow");
    process.stdout.write(time + ' ');
    const out = ["⚡ ", formatWithOptions({colors: true}, ...content)].join('')
    console.log(chalk.yellow(out));
    return out;
}

export function info(...content: unknown[]) {
    const time = getTimestamp("white");
    process.stdout.write(time + ' ');
    const out = formatWithOptions({colors: true}, ...content)
    console.log(chalk.white(out));
    return out;
}

export function error(...content: unknown[]) {
    const time = getTimestamp("red");
    process.stdout.write(time + ' ');
    const out = formatWithOptions({colors: true}, ...content)
    console.log(chalk.red(out));
    return out;
}

log.success = success;
log.debug = log;
log.warn = warn;
log.info = info;
log.error = error;
log.assert = console.assert;
log.clear = console.clear;
log.count = console.count;
log.countReset = console.countReset;
log.dir = console.dir;
log.dirxml = console.dirxml;
log.group = console.group;
log.groupCollapsed = console.groupCollapsed;
log.groupEnd = console.groupEnd;
log.table = console.table;
log.time = console.time;
log.timeEnd = console.timeEnd;
log.timeLog = console.timeLog;
log.timeStamp = console.timeStamp;
log.trace = console.trace;
export default log;