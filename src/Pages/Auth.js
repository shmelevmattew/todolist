import React, {useContext, useEffect, useState} from 'react';
import {TabPanel, TabView} from "primereact/tabview";
import { InputText } from 'primereact/inputtext';
import {Button} from "primereact/button";
import {Link, useHistory} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
const Auth = () => {
    const [loginData,setLoginData] = useState({
        email:"",
        password:""
    })
    const [registrationData,setRegistrationData] = useState({
        name:"",
        email:"",
        password:"",
        passwordRepeat:""
    })
    function handleChangeLogin(e,target){
        setLoginData((prev)=>{
            return {...prev,[target]:e.target.value}
        })
    }

    function handleChangeRegistration(e,target){
        setRegistrationData((prev)=>{
            return {...prev,[target]:e.target.value}
        })
    }

    const {store} = useContext(Context);
    const history = useHistory()

    useEffect(()=>{
        if(store.isAuth){
            history.push("/")
        }
    },[store.isAuth])

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
                                    }} label="Готово" />
                                </div>
                            </form>
                        </TabPanel>
                        <TabPanel header="Регистрация">
                            <form action="" className="flex flex-column w-30rem gap-2">
                                <InputText value={registrationData.name} onChange={(e)=>handleChangeRegistration(e,'name')} placeholder="Введите имя"/>
                                <InputText value={registrationData.email} onChange={(e)=>handleChangeRegistration(e,'email')} placeholder="Введите Email"/>
                                <InputText value={registrationData.password} onChange={(e)=>handleChangeRegistration(e,'password')} placeholder="Введите пароль"/>
                                <InputText value={registrationData.passwordRepeat} onChange={(e)=>handleChangeRegistration(e,'passwordRepeat')} placeholder="Введите пароль повторно"/>
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