import { v4 as uuidv4 } from 'uuid';

const taskMock = [
    {
        id: uuidv4(),
        type: 'feature',
        description: 'add material ui library to project',
        timeToDo: 2,
    },
    {
        id: uuidv4(),
        type: 'fix',
        description: 'fix landing page layout',
        timeToDo: 1,
    },
    {
        id: uuidv4(),
        type: 'refactor',
        description: 'refactor product page',
        timeToDo: 1,
    },
]

export default taskMock