# SoloDB TypeScript Core

A typed TypeScript SDK library that wraps SoloDB REST API endpoints with axios calls. Distributed as `@jield/solodb-typescript-core`.

## Build & Development

```bash
yarn build      # tsc type-check + vite build (outputs dist/)
yarn lint       # ESLint on src/
```

## Architecture

**Library mode**: produces both ESM (`dist/index.js`) and CJS (`dist/index.cjs`) with TypeScript declarations (`dist/index.d.ts`). Axios is a peer dependency and is not bundled.

**Domain-driven structure** under `src/`:

| Directory | Purpose |
|-----------|---------|
| `core/` | Axios configuration, filters, user/project helpers |
| `chemical/` | Chemical and container management |
| `equipment/` | Equipment, modules, ECN, issues, reservations |
| `location/` | Facility and location messages |
| `room/` | Sites, buildings, locations, rooms, zones |
| `monitor/` | Monitoring requirements, steps, measurements |
| `process/` | Process, recipe, and version types (interfaces only) |
| `run/` | Run/batch workflow, steps, parts, measurements |
| `service/` | Service events and reports |
| `template/` | Process templates and steps |
| `organisation/` | Organisational hierarchy (department) |
| `iris/` | File upload service integration |

All public exports are re-exported from `src/index.ts`.

## Key Patterns

**API functions** are `async` default exports accepting a single config object, returning typed promises via `axios`:

```typescript
export default async function getRun({ id }: { id: number }): Promise<Run> {
  const response = await axios.get<Run>(url);
  return response.data;
}
```

**Response types** (`src/core/interfaces/`):
- `ApiResponse<T>` — raw HAL-style: `{ _embedded: { items: T[] }, page_count, total_items, page }`
- `ApiFormattedResponse<T>` — convenience: `{ items, amountOfPages, currentPage, totalItems, hasMore }`

**Axios setup**: call `configureAxiosHeaders({ token, baseUrl })` once at app startup to set the Bearer token and base URL globally.

**Enums** (`src/*/enum/`): `RunTypeEnum`, `RunStepPartActionEnum`, `ChemicalPhysicalStateEnum`, `EquipmentGrade`, `WorkstationComponent`, etc.

**Helper functions** (`src/run/functions/`): `performRunStepPartAction()` auto-starts a step before applying an action; `finishStepWhenAllPartsAreFinished()` handles step completion coordination.

## TypeScript Configuration

- Strict mode enabled (`tsconfig.json`)
- Path alias: `@jield/solodb-typescript-core/*` → `src/*`
- Target: `ESNext`, module resolution: `Node`
- `isolatedModules: true`

## Testing

Vitest + `@vitest/coverage-v8` are configured but no tests exist yet.
