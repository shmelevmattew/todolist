export default class DateService{
    static getTodayDate () {
        const today = new Date()
        return ('0' + today.getDate()).slice(-2) + '.'
            + ('0' + (today.getMonth()+1)).slice(-2) + '.'
            + today.getFullYear();
    }
    static getTomorrowDate(){
        const today = new Date()
        return ('0' + today.getDate() + 1).slice(-2) + '.'
            + ('0' + (today.getMonth()+1)).slice(-2) + '.'
            + today.getFullYear();
    }
    static async getAfterTomorrowDate(){
        const today = new Date()
        return ('0' + today.getDate() + 2).slice(-2) + '.'
            + ('0' + (today.getMonth()+1)).slice(-2) + '.'
            + today.getFullYear();
    }

}