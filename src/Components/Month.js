import React, {useContext} from 'react';
import {TabMenu} from "primereact/tabmenu";
import {MenuContext} from "../Contexts/MenuContext";
import {useHistory} from "react-router-dom";

const Month = () => {
    const tabs= useContext(MenuContext)
    const history = useHistory();
    return (
        <div className="h-screen root">
            <TabMenu model={tabs.data}
                     activeIndex={tabs.activeTab}
                     onTabChange={(e) => {
                         tabs.setActiveTab(e.index);
                         console.log(e)
                         history.push(tabs.data[e.index].redirectUrl)
                     }}/>
            Hello world
        </div>
    );
};

export default Month;