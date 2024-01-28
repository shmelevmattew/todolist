import React, {useContext, useState} from 'react';
import {TabPanel, TabView} from "primereact/tabview";
import { InputText } from 'primereact/inputtext';
import {Button} from "primereact/button";
import {Link} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
const Auth = () => {
    const [loginData,setLoginData] = useState({
        email:"",
        password:""
    })
    function handleChangeLogin(e,target){
        setLoginData((prev)=>{
            return {...prev,[target]:e.target.value}
        })
        console.log(loginData)
    }


    const {store} = useContext(Context);

    return (
        <div className="flex h-screen">
            <div>
                <img src={"./Assets/authBg.png"} className="h-full" alt=""/>
            </div>
            <div className="w-full flex justify-content-center align-items-center">
                <div className="h-30rem" >
                    <TabView>
                        <TabPanel header="Вход">
                            <form action="" className="flex flex-column w-30rem gap-2">
                                <InputText value={loginData.email} onChange={(e)=>handleChangeLogin(e,'email')} placeholder="Введите E-mail"/>
                                <InputText value={loginData.password} onChange={(e)=>handleChangeLogin(e,'password')} placeholder="Введите пароль"/>
                                <div className="flex justify-content-end">
                                    <Button link><Link to={"/"}>Вы забыли пароль?</Link></Button>
                                    <Button onClick={(e) => {
                                        e.preventDefault()
                                        store.login(loginData.email,loginData.password).then((res)=>{
                                            console.log(res)
                                        })
                                        let res =  store.login(loginData.email,loginData.password)
                                    }} label="Готово" />
                                </div>
                            </form>
                        </TabPanel>
                        <TabPanel header="Регистрация">
                            <form action="" className="flex flex-column w-30rem gap-2">
                                <InputText placeholder="Введите имя"/>
                                <InputText placeholder="Введите Email"/>
                                <InputText placeholder="Введите пароль"/>
                                <InputText placeholder="Введите пароль повторно"/>
                                <div className="flex justify-content-end">
                                    <Button link><Link to={"/"}>Вы забыли пароль?</Link></Button>
                                    <Button label="Готово" />
                                </div>
                            </form>
                        </TabPanel>
                    </TabView>
                </div>
            </div>
        </div>
    );
};

export default observer(Auth);