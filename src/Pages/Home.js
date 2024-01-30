import React, {useContext, useEffect, useState} from 'react';
import { TabMenu } from 'primereact/tabmenu';
import {MenuContext} from "../Contexts/MenuContext";
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {ScrollPanel} from "primereact/scrollpanel";
import {Checkbox} from "primereact/checkbox";
import {Divider} from "primereact/divider";
import {ProgressBar} from "primereact/progressbar";
import { useHistory } from 'react-router-dom';
import { Dialog } from 'primereact/dialog'
import {InputText} from "primereact/inputtext";
import {ListBox} from "primereact/listbox";
import ToDoService from "../Services/ToDoService"
import {Calendar} from "primereact/calendar";
import DateService from "../Services/DateService"
import {Context} from "../index";
const Home = () => {
    const tabs= useContext(MenuContext)
    const store = useContext(Context)

    const [editing,setEditing] = useState(false)
    const [creatingNew,setCreatingNew] = useState(false)

    const [taskForm,setTaksForm] = useState({
    })

    const [newTask,setNewTask] = useState({
        name:"",
        description:"",
        date:""
    })

    const [selectedSubtask,setSelectedSubtask] = useState(undefined)
    const [data,setData] = useState([])
    const history = useHistory();
    const today = new Date()
    const subtasks = [
        { name: 'Подзадача 1', code: 'NY' },
        { name: 'Подзадача 2', code: 'RM' },
        { name: 'Подзадача 3', code: 'LDN' },
        { name: 'Подзадача 4', code: 'IST' },
        { name: 'Подзадача 5', code: 'PRS' }
    ];

    useEffect(()=>{
        if(!store.isAuth){
            history.push("/auth")
        }
    },[])

    useEffect(()=>{
        ToDoService.getAllTasks().then(function(res){
            const responseData = res.data
            setData(responseData)
            console.log(responseData)
        })
    },[setData])

    function handleEdit(task){
        setTaksForm(task)
        console.log(taskForm)
        setEditing(true)
    }



    return (
        <div className="h-screen root">
            <TabMenu model={tabs.data}
                     activeIndex={tabs.activeTab}
                     onTabChange={(e) => {
                         tabs.setActiveTab(e.index);
                         if(tabs.activeTab.label == "Выход"){
                             store.logout()
                             tabs.setActiveTab(0)
                         }
                     }}/>
            <div className="flex align-items-start justify-content-center mt-8 h-full">
                <Card className="col-3 ml-5 mr-5 relative" title={"Сегодня"} subTitle={"27 января"}>
                    <ScrollPanel className="h-25rem">
                        {
                            data.map(el=>{
                                console.log(DateService.getTodayDate())
                                const elDate = el.completionTime.substring(8,10) + "-" +el.completionTime.substring(5,7) + "-" + el.completionTime.substring(0,4)
                                if(DateService.getTodayDate() === elDate){
                                    return(
                                        <>
                                            <div className="flex justify-content-between align-items-center">
                                                <div className="flex align-items-center">
                                                    <h4>{el.title.length > 20 ? el.title.substring(0,20) + "..." : el.title}</h4>
                                                    <i onClick={handleEdit} className="pi pi-pencil cursor-pointer ml-4"></i>
                                                </div>
                                                <Checkbox checked={el.status} className="mr-3"></Checkbox>
                                            </div>
                                            {
                                                el.subItems.map((subitem)=>{
                                                    return (
                                                        <>
                                                            <div className="flex justify-content-between align-items-center">
                                                                <p className="ml-4">{subitem.title}</p>
                                                                <Checkbox  checked={subitem.status} className="mr-3"></Checkbox>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                            <Divider></Divider>
                                        </>
                                    )
                                }
                            })
                        }
                    </ScrollPanel>
                    <Button onClick={()=>setCreatingNew(true)} className="w-2rem h-2rem button_position md:absolute flex align-items-center justify-content-center" icon="pi pi-plus"/>
                    <ProgressBar className="mt-5" value={50}></ProgressBar>
                </Card>
                <Card className="col-3 ml-5 mr-5 relative" title={"Завтра"} subTitle={"28 января"}>
                    <ScrollPanel className="h-25rem">
                        {
                            data.map(el=>{
                                const elDate = el.completionTime.substring(8,10) + "-" +el.completionTime.substring(5,7) + "-" + el.completionTime.substring(0,4)
                                if(DateService.getTomorrowDate() === elDate){
                                    return(
                                        <>
                                            <div className="flex justify-content-between align-items-center">
                                                <div className="flex align-items-center">
                                                    <h4>{el.title.length > 20 ? el.title.substring(0,20) + "..." : el.title}</h4>
                                                    <i onClick={()=>setEditing(true)} className="pi pi-pencil cursor-pointer ml-4"></i>
                                                </div>
                                                <Checkbox checked={el.status} className="mr-3"></Checkbox>
                                            </div>
                                            {
                                                el.subItems.map((subitem)=>{
                                                    return (
                                                        <>
                                                            <div className="flex justify-content-between align-items-center">
                                                                <p className="ml-4">{subitem.title}</p>
                                                                <Checkbox  checked={subitem.status} className="mr-3"></Checkbox>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                            <Divider></Divider>
                                        </>
                                    )
                                }
                            })
                        }
                    </ScrollPanel>
                    <Button onClick={()=>setEditing(true)} className="w-2rem h-2rem button_position md:absolute flex align-items-center justify-content-center" icon="pi pi-plus"/>
                    <ProgressBar className="mt-5" value={50}></ProgressBar>
                </Card>
                <Card className="col-3 ml-5 mr-5 relative" title={"Послезавтра"} subTitle={"29 января"}>
                    <ScrollPanel className="h-25rem">
                        {
                            data.map(el=>{
                                const elDate = el.completionTime.substring(8,10) + "-" +el.completionTime.substring(5,7) + "-" + el.completionTime.substring(0,4)
                                if(DateService.getAfterTomorrowDate()  === elDate){
                                    return(
                                        <>
                                            <div className="flex justify-content-between align-items-center">
                                                <div className="flex align-items-center">
                                                    <h4>{el.title.length > 20 ? el.title.substring(0,20) + "..." : el.title}</h4>
                                                    <i onClick={()=>setEditing(true)} className="pi pi-pencil cursor-pointer ml-4"></i>
                                                </div>
                                                <Checkbox checked={el.status} className="mr-3"></Checkbox>
                                            </div>
                                            {
                                                el.subItems.map((subitem)=>{
                                                    return (
                                                        <>
                                                            <div className="flex justify-content-between align-items-center">
                                                                <p className="ml-4">{subitem.title}</p>
                                                                <Checkbox  checked={subitem.status} className="mr-3"></Checkbox>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                            <Divider></Divider>
                                        </>
                                    )
                                }
                            })
                        }
                    </ScrollPanel>
                    <Button onClick={()=>setEditing(true)} className="w-2rem h-2rem button_position md:absolute flex align-items-center justify-content-center" icon="pi pi-plus"/>
                    <ProgressBar className="mt-5" value={50}></ProgressBar>
                </Card>
            </div>
            <Dialog header="Задача" visible={editing} style={{ width: '40vw' }} onHide={() => setEditing(false)}>
                <div>
                    <form action="" className="flex flex-column gap-2">
                        <InputText value={taskForm.name} placeholder={"Название задачи"}></InputText>
                        <InputText value={taskForm.description} placeholder={"Описание задачи"}></InputText>
                        <Calendar value={taskForm.date} placeholder={"Дата выполения"}></Calendar>
                        <h3>Подзадачи</h3>
                        <div className="flex">
                            <InputText placeholder={"Введите подзадачу"}/>
                            <Button severity="success"  icon="pi pi-plus" className="ml-2"></Button>
                            <Button severity="danger" className="ml-2" icon="pi pi-trash"></Button>
                        </div>
                        <ListBox value={taskForm.selectedSubtask}
                                 options={taskForm.subtasks}
                                 listStyle={{ maxHeight: '200px' }}
                                 onChange={(e)=>setSelectedSubtask(e.value)}
                                 optionLabel="name"
                                 filter>
                        </ListBox>
                        <div className="flex justify-content-between mt-5">
                            <Button severity="danger" icon="pi pi-trash mr-2">Удалить задачу</Button>
                            <div>
                                <Button severity="success" className="ml-2">Готово</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </Dialog>
            <Dialog header="Создание задачи" visible={creatingNew} style={{ width: '40vw' }} onHide={() => setCreatingNew(false)}>
                <div>
                    <form action="" className="flex flex-column gap-2">
                        <InputText value={taskForm.name} placeholder={"Название задачи"}></InputText>
                        <InputText value={taskForm.description}   placeholder={"Описание задачи"}></InputText>
                        <Calendar value={taskForm.date} placeholder={"Дата выполения"}></Calendar>
                        <div className="flex justify-content-end mt-2">
                            <div>
                                <Button severity="success" className="ml-2">Готово</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </Dialog>


        </div>
    );
};

export default Home;