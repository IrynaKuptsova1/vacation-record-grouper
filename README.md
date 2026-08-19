# vacation-record-grouper

Challenge: Vacation records -> vacation periods grouped by user

Example: Input records for Ivan, Anna, and Ivan -> one output entry per user, with all of that user's vacation periods in `weekendDates`.

How to Run:
```bash
# Install dependencies
npm install

# Run scripts
npm start
# or via Node after compiling:
npm run node
# or via Bun:
bun run index.ts
```

This small TypeScript CLI turns a flat vacation list into a user-based summary and saves it as `output.json`. It uses Node.js file APIs, a `Map` for efficient grouping, `tsx` for a quick development run, and Bun as an alternative runtime.