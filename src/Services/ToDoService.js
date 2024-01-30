import $api from "../Http/index";

export default class ToDoService{
    static async getAllTasks(){
        return $api.get('/ToDoItem/Get')
    }
    static async createTask(mainItem){
        return $api.post('ToDoItem/Create',)
    }
    static async getTaskById(){
        return $api.post
    }

}