// Ids of the run_step_part_state_type table (seeded values, see solodb data/migration)
export enum RunStepPartStateEnum {
    IDLE = 1,
    STARTED = 2,
    FINISHED = 3,
    FAILED = 4,
    REPAIRING = 5,
    TESTING = 6
}
