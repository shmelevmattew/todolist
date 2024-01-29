import React, {useContext, useState} from 'react';
import {TabMenu} from "primereact/tabmenu";
import {MenuContext} from "../Contexts/MenuContext";
import {useHistory} from "react-router-dom";
import { VirtualScroller } from 'primereact/virtualscroller';
import {classNames} from "primereact/utils";
import {Checkbox} from "primereact/checkbox";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {ListBox} from "primereact/listbox";
import {Dialog} from "primereact/dialog";
import {Card} from "primereact/card";
import {DataScroller} from "primereact/datascroller";
import {Calendar} from "primereact/calendar";

const Month = () => {
    const tabs= useContext(MenuContext)
    const history = useHistory();
    const [editing,setEditing] = useState(false)
    const [selectedSubtask,setSelectedSubtask] = useState(undefined)
    const [date,setDate] = useState()
    const subtasks = [
        { name: 'Подзадача 1', code: 'NY' },
        { name: 'Подзадача 2', code: 'RM' },
        { name: 'Подзадача 3', code: 'LDN' },
        { name: 'Подзадача 4', code: 'IST' },
        { name: 'Подзадача 5', code: 'PRS' }
    ];
    const data = [
        {
            id:1,
            date:"27 Января",
            task:[
                {
                    name:"Поиграть там",
                    completed:true,
                    subtasks:["Чето-поделать","Еще че-то поделать"]
                }
            ]
        },
        {
            id:1,
            date:"28 Января",
            task:[
                {
                    name:"Поиграть там",
                    completed:true,
                    subtasks:["Чето-поделать","Еще че-то поделать"]
                }
            ]
        },
        {
            id:1,
            date:"29 Января",
            task:[
                {
                    name:"Поиграть там",
                    completed:true,
                    subtasks:["Чето-поделать","Еще че-то поделать"]
                }
            ]
        },
        {
            id:1,
            date:"30 Января",
            task:[
                {
                    name:"Поиграть там",
                    completed:true,
                    subtasks:["Чето-поделать","Еще че-то поделать"]
                }
            ]
        },
        {
            id:1,
            date:"27 Января",
            task:[
                {
                    name:"Поиграть там",
                    completed:true,
                    subtasks:["Чето-поделать","Еще че-то поделать"]
                }
            ]
        }

    ]
    const dateTemplate = (date,options) => {
        return (
            <div className="flex p-2">
                <div className="flex flex-column col-4 ml-5 pb-4">
                    <h2>
                        {
                            date.date
                        }
                    </h2>
                    <div className="flex justify-content-between align-items-center">
                        <div className="flex align-items-center">
                            <h4>Текст определенной задачи</h4>
                            <i onClick={()=>setEditing(true)} className="pi pi-pencil cursor-pointer ml-3"></i>
                        </div>
                        <Checkbox className="ml-3"></Checkbox>

                    </div>
                    <div className="flex justify-content-between align-items-center">
                        <p className="ml-4">Текст подзадачи</p>
                        <Checkbox></Checkbox>
                    </div>
                    <div className="flex justify-content-between align-items-center">
                        <div className="flex align-items-center">
                            <h4>Текст определенной задачи</h4>
                            <i onClick={()=>setEditing(true)} className="pi pi-pencil cursor-pointer ml-3"></i>
                        </div>
                        <Checkbox className="ml-3"></Checkbox>

                    </div>
                    <div className="flex justify-content-between align-items-center">
                        <p className="ml-4">Текст подзадачи</p>
                        <Checkbox></Checkbox>
                    </div>
                    <div className="flex justify-content-between align-items-center">
                        <p className="ml-4">Текст подзадачи</p>
                        <Checkbox></Checkbox>
                    </div>
                </div>
                <div className="flex flex-column col-4 ml-8 pb-4">
                    <h3>Заметки к планам на день</h3>
                    <p>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                </div>

            </div>
        );
    };
    return (
        <div className="h-screen root">
            <TabMenu model={tabs.data}
                     activeIndex={tabs.activeTab}
                     onTabChange={(e) => {
                         tabs.setActiveTab(e.index);
                         console.log(e)
                         history.push(tabs.data[e.index].redirectUrl)
                     }}/>
            <Card className="h-full">
                <div className="ml-6 mb-2 flex">
                    <Calendar value={date} onChange={(e) =>{ setDate(e.value)
                        console.log(date)
                    }} showIcon />
                </div>
                <DataScroller inline scrollHeight="100vh" value={data} className="h-full" rows={5} itemTemplate={dateTemplate}>

                </DataScroller>
            </Card>

            <Dialog header="Задача" visible={editing} style={{ width: '40vw' }} onHide={() => setEditing(false)}>
                <div>
                    <form action="" className="flex flex-column gap-2">
                        <InputText placeholder={"Название задачи"}></InputText>
                        <InputText placeholder={"Описание задачи"}></InputText>
                        <h3>Подзадачи</h3>
                        <div className="flex">
                            <InputText placeholder={"Введите подзадачу"}/>
                            <Button severity="success"  icon="pi pi-plus" className="ml-2"></Button>
                            <Button severity="danger" className="ml-2" icon="pi pi-trash"></Button>
                        </div>
                        <ListBox value={selectedSubtask}
                                 options={subtasks}
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
                        </div>4]
                    </form>
                </div>
            </Dialog>
        </div>
    );
};

export default Month;