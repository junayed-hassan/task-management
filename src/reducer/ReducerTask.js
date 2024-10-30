function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added':
            return [...tasks, action.item];
        case 'edited':
            return tasks.map(task =>
                task.id === action.item.id ? action.item : task
            );
        case 'deleted':
            return tasks.filter(task => task.id !== action.id);
        case 'clear':
            return [];
        default:
            return tasks;
    }
}

export default tasksReducer;
