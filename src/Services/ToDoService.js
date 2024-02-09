import $api from "../Http/index";

export default class ToDoService{
    static async getAllTasks(){
        return $api.get('/ToDoItem/Get')
    }
    static async createTask(title,description,completionDate){
        console.log({
            "mainItem":{
                title,
                description,
                completionDate
            },
            "subItems":[]
        })
        return $api.post('ToDoItem/Create',{
            "mainItem":{
                title,
                description,
                completionDate
            },
            "subItems":[]
        })
    }
    static async createSubtask(title,completitonDate,parentId){
        console.log(completitonDate)
        return $api.post('/ToDoItem/CreateSubItem',{
            title,
            description:"",
            completitonDate,
            parentId
        })
    }
    static async getTaskById(){
        return $api.post
    }

}