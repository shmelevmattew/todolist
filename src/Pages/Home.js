import React, {useContext, useState} from 'react';
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
const Home = () => {
    const tabs= useContext(MenuContext)
    const [editing,setEditing] = useState(false)
    const [selectedSubtask,setSelectedSubtask] = useState(undefined)
    const history = useHistory();
    const subtasks = [
        { name: 'Подзадача 1', code: 'NY' },
        { name: 'Подзадача 2', code: 'RM' },
        { name: 'Подзадача 3', code: 'LDN' },
        { name: 'Подзадача 4', code: 'IST' },
        { name: 'Подзадача 5', code: 'PRS' }
    ];
    return (
        <div className="h-screen root">
            <TabMenu model={tabs.data}
                     activeIndex={tabs.activeTab}
                     onTabChange={(e) => {
                         tabs.setActiveTab(e.index);
                         console.log(e)
                         history.push(tabs.data[e.index].redirectUrl)
                     }}/>
            <div className="flex align-items-start mt-8 h-full">
                <Card className="col-3 ml-5 mr-5 relative" title={"Сегодня"} subTitle={"27 января"}>
                    <ScrollPanel className="h-25rem">
                        <div className="flex justify-content-between align-items-center">
                            <h4>Текст определенной задачи</h4>
                            <i onClick={()=>setEditing(true)} className="pi pi-pencil cursor-pointer"></i>
                            <Checkbox className="mr-3"></Checkbox>
                        </div>
                        <div className="flex justify-content-between align-items-center">
                            <p className="ml-4">Текст подзадачи</p>
                            <Checkbox className="mr-3"></Checkbox>
                        </div>
                        <div className="flex justify-content-between align-items-center">
                            <p className="ml-4">Текст подзадачи</p>
                            <Checkbox className="mr-3"></Checkbox>
                        </div>
                        <Divider></Divider>
                        <div className="flex justify-content-between align-items-center">
                            <h4>Текст определенной задачи</h4>
                            <i className="pi pi-pencil"></i>
                            <Checkbox className="mr-3"></Checkbox>
                        </div>
                        <Divider></Divider>
                        <div className="flex justify-content-between align-items-center">
                            <h4>Текст определенной задачи</h4>
                            <i className="pi pi-pencil"></i>
                            <Checkbox className="mr-3"></Checkbox>
                        </div>
                        <Divider></Divider>
                        <div className="flex justify-content-between align-items-center">
                            <h4>Текст определенной задачи</h4>
                            <Checkbox className="mr-3"></Checkbox>
                        </div>
                        <Divider></Divider>
                        <div className="flex justify-content-between align-items-center">
                            <h4>Текст определенной задачи</h4>
                            <Checkbox className="mr-3"></Checkbox>
                        </div>
                        <Divider></Divider>
                    </ScrollPanel>
                    <Button onClick={()=>setEditing(true)} className="w-2rem h-2rem button_position md:absolute flex align-items-center justify-content-center" icon="pi pi-plus"/>
                    <ProgressBar className="mt-5" value={50}></ProgressBar>
                </Card>
                <Card className="col-3" title={"Завтра"} subTitle={"27 января"}>

                </Card>
                <Card className="col-3" title={"Послезавтра"} subTitle={"27 января"}>

                </Card>
            </div>
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
                        </div>
                    </form>
                </div>
            </Dialog>

        </div>
    );
};

export default Home;