import { useMemo } from "react";
import { IFilter, ITask } from "../types/props";


export const useTasks = (tasks: ITask[], filter: IFilter) => {
    const sortedTasks = useMemo(() => {
        if (filter.sort !== undefined) {
            if (filter.query !== true) {
                return  [...tasks].filter((item) => item.completed === filter.sort);
            }
        }

        return tasks;
    }, [ tasks, filter ]);

    return sortedTasks
}