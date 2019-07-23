const data ={
    tasks : {
        'task-1' : {id : 'task-1',content : "Go to doctor"},
        'task-2' : {id : 'task-2',content : "Meet ahmed"},
        'task-3' : {id : 'task-3',content : "But the grocery"},
        'task-4' : {id : 'task-4',content : "Cook dinner"},
        'task-5' : {id : 'task-5',content : "Fuel up the car"},
        'task-6' : {id : 'task-6',content : "Watch a new Movie"},
    },
    columns:{
        'column-1':{
            id : 'column-1',
            title : 'To Do List',
            taskIds:['task-1','task-2','task-3','task-4','task-5','task-6']
        },
    },
    columnOrder :['column-1']
}

export default data;