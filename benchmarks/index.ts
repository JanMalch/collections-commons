#!/usr/bin/env ts-node

import prompts from 'prompts';
import minimist from 'minimist';
// FIXME: change this so regexs like extensions are supported. Maybe use worker trick to enable ts-node on the fly. Also no need for index.ts then
import * as Suites from './suites';

const argv = minimist(process.argv.slice(2));

const allSuites = Object.keys(Suites)
  .sort()
  .map((fnName) => ({
    fnName,
    title: fnName.substring(0, fnName.length - 5),
  }));

const autoRunAll = argv.all === true;
const fileRegexps: RegExp[] = argv._.map((r) => new RegExp(r, 'i'));

function runSuites(suites: any[]) {
  suites.forEach((suite) => {
    console.log(`--- ${suite.title} ---`);
    (Suites as any)[suite.fnName]();
    console.log();
  });
}

async function main() {
  if (autoRunAll) {
    console.log(`${allSuites.map((s) => s.title).join(', ')}\n`);
    runSuites(allSuites);
  } else {
    if (fileRegexps.length > 0) {
      const filteredSuites = allSuites.filter((suite) => {
        return fileRegexps.some((r) => r.test(suite.title));
      });
      if (filteredSuites.length === 0) {
        console.error('No matching benchmarks found');
        process.exit(1);
      }
      console.log(`${filteredSuites.map((s) => s.title).join(', ')}\n`);
      runSuites(filteredSuites);
    } else {
      const selection = await prompts({
        type: 'multiselect',
        name: 'value',
        message: 'Pick suites to run',
        choices: allSuites.map((suite) => ({
          title: suite.title,
          value: suite,
        })),
        hint: '- Space to select. Return to submit',
        min: 1,
      });
      console.log();
      runSuites(selection.value);
    }
  }
}

main();
