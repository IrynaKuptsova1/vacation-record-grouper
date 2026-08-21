# Vacation Data Transformer


### Challenge
Convert raw vacation requests into a structured format where each user appears once with an array of all their vacation periods, stripping out redundant metadata (`usedDays`, request IDs, status).

Example: Input records for Person1, Person2, Person1 -> one output entry per user, with all of that user's vacation periods in `weekendDates`.

How to Run:
```bash
# Install dependencies
npm install

# Run scripts
npm start
# or
npm run node
# or 
bun run index.ts
```

A TypeScript CLI tool that transforms flat vacation log records into clean, user-grouped vacation summaries (`output.json`). It uses Node.js file APIs, a `Map` for efficient grouping.
