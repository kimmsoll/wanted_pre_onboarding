import React from 'react';
import Toggle from './components/Toggle/Toggle';
import Tab from './components/Tab/Tab';
import Slider from './components/Slider/Slider';
import Input from './components/Input/Input';
import Dropdown from './components/Dropdown/Dropdown';

const App = () => {
    const menus = ['감자', '고구마', '카레라이스'];
    const searchData = [
        'All Symbols',
        'BTCUSD.PERP',
        'BATUSD.PERP',
        'BCHUSD.PERP',
        'ETHUSD.PERP',
        'LTCUSD.PERP',
        'XRPUSD.PERP',
        '1000SHIBUSD.PERP'
    ];

    return (
        <>
        <Toggle />
        <Tab menus={menus}/>
        <Slider />
        <Input />
        <Dropdown searchData={searchData}/>
        </>
    )
}

export default App;