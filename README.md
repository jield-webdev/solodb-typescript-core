# SoloDB TypeScript Core

Reusable TypeScript API clients, interfaces, and helper utilities for SoloDB. The package wraps SoloDB REST endpoints with typed axios calls so you can build front-ends quickly without hand-writing requests or response types.

## Features
- Typed axios clients for SoloDB domains (core, chemical, equipment, location, monitor, run, service, template, etc.)
- Shared response helpers (`ApiResponse`, `ApiFormattedResponse`) for consistent pagination handling
- `configureAxiosHeaders` helper to set auth token, JSON headers, and the API base URL once
- Barrel exports for all interfaces so you can import domain models from a single entry point

## Getting started
1) Configure axios defaults with your SoloDB server URL and bearer token.
```ts
import { configureAxiosHeaders } from "solodb-typescript-core";

configureAxiosHeaders("<token>", "https://your-solodb-server");
// sets axios defaults: Authorization, JSON headers, and baseURL `${server}/api`
```

2) Call any of the exported API helpers. Each function returns typed data so you get autocompletion and type safety in your app.
```ts
import { ListRuns, GetRun } from "solodb-typescript-core";

const runs = await ListRuns({ environment: "qa" });
// runs.items -> Run[]

const run = await GetRun({ id: 42 });
// run.id, run.steps, etc. are strongly typed
```

3) Use filters and list helpers with query parameters.
```ts
import { GetFilter, ListChemicals } from "solodb-typescript-core";

const filter = await GetFilter({ service: "chemical" });
const chemicals = await ListChemicals({ query: "acetone" });
```

## Response shapes
- `ApiResponse<T>` mirrors the HAL-ish SoloDB response `{ _embedded: { items: T[] }, page_count, total_items, page }`.
- `ApiFormattedResponse<T>` is a convenience shape `{ items, amountOfPages, currentPage, totalItems, hasMore }` returned by most list helpers.

## API surface (high level)
Import everything from the root entrypoint. Functions are grouped by domain:
- **core**: `configureAxiosHeaders`, `GetMe`, `GetFilter`
- **chemical**: `ListChemicals`, `GetChemicalContainer`, `ListChemicalContainerTypes`, `ListChemicalContainerPurposes`, etc.
- **equipment**: `GetEquipment`, `ListEquipment`, `GetSetup`, `ListModules`, `ListIssues`, `ListReservations`, `GetStatusMail`, and related attachment/status helpers
- **location / room**: `ListLocationMessages`, `GetLocation`, `ListLocations`, `GetRoom`, `ListRooms`
- **monitor**: `getMonitor`, `ListMonitors`, `ListMonitorRequirements`, plus measurement/step parameter/result helpers
- **run**: `ListRuns`, `GetRun`, `GetRunStep`, `ListRunSteps`, `ListRunParts`, measurement results, step parameter/file/checklist/part helpers, `SetRunStepPartAction`
- **service / template**: `ListServices`, `getServiceEventReport`, `ListReportResult`, `listServiceEventReportResult`, `ListTemplates`, `getTemplateSteps`
- **organisation, process**: department/process/unit/category/module/recipe/type/parameter interfaces

## Types and interfaces
All API interfaces are exported from the root so you can import models directly, e.g. `import { Run, Equipment, Chemical, User } from "solodb-typescript-core";`.

## Development
```bash
yarn lint  # lint TypeScript sources
yarn build # compile to dist (CJS, ESM, and type declarations)
```
