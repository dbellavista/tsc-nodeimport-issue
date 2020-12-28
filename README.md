# README.md

```bash
npm install
rm -f *.d.ts
# Generate d.ts
npx tsc -p jsconfig.json
# Check correctness
npx tsc -p noemit.jsconfig.json
```

If issue is present, the last command should output

```
issue.d.ts:3:26 - error TS2306: File '/home/me/issue/node_modules/@types/node/stream.d.ts' is not a module.

3 import { Writable } from "node/stream";
                           ~~~~~~~~~~~~~

issue.d.ts:4:31 - error TS2306: File '/home/me/issue/node_modules/@types/node/events.d.ts' is not a module.

4 import EventEmitter = require("node/events");
```
