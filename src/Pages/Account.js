
import React, {useContext, useEffect, useState} from 'react';
import {TabMenu} from "primereact/tabmenu";
import {MenuContext} from "../Contexts/MenuContext";
import {useHistory} from "react-router-dom";
import {Card} from "primereact/card";
import {InputText} from "primereact/inputtext";
const Account = () => {
    const tabs= useContext(MenuContext)
    const history = useHistory();
    return (
        <div className="h-screen root">
            <TabMenu model={tabs.data}
                     activeIndex={tabs.activeTab}
                     onTabChange={(e) => {
                         tabs.setActiveTab(e.index);
                         history.push(tabs.data[e.index].redirectUrl)
                     }}/>
            <Card className="flex m-8 p-4">
                <h2>Пользователь</h2>
                <InputText placeholder={"he"}/>
            </Card>
        </div>
    );
};

export default Account;