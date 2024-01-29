import $api from "../Http/index";

export default class ToDoService{
    static async getAllTasks(){
        return $api.get('/ToDoItem/Get')
    }
    static async getTaskByDate(){
        return $api.post
    }
    static async getTaskById(){
        return $api.post
    }

}