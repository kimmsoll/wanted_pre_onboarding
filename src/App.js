import Toggle from './components/Toggle/Toggle'
import Tab from './components/Tab/Tab'
import Slider from './components/Slider/Slider'
import Input from './components/Input/Input'
import Dropdown from './components/Dropdown/Dropdown'

function App() {
  const menus = [
    {
      id : 1,
      title : '감자'
    },
    {
      id : 2,
      title : '고구마'
    },
    {
      id : 3,
      title : '카레라이스'
    }
  ]
  const steps = [
    {
      id : 1,
      step : 1
    },
    {
      id : 2,
      step : 25
    },
    {
      id : 3,
      step : 50
    },
    {
      id : 4,
      step : 75
    },
    {
      id : 5,
      step : 100
    }
  ]
  const searchData = [
    {
      id : 1,
      text : 'All Symbols'
    },
    {
      id : 2,
      text : 'BTCUSD.PERP'
    },
    {
      id : 3,
      text : 'BATUSD.PERP'
    },
    {
      id : 4,
      text : 'BCHUSD.PERP'
    },
    {
      id : 5,
      text : 'ETHUSD.PERP'
    },
    {
      id : 6,
      text : 'LTCUSD.PERP'
    },
    {
      id : 7,
      text : 'XRPUSD.PERP'
    },
    {
      id : 8,
      text : '1000SHIBUSD.PERP'
    }
  ]

  return (
    <>
    <Toggle />
    <Tab menus={menus}/>
    <Slider steps={steps}/>
    <Input />
    <Dropdown searchData={searchData}/>
    </>
  )
}

export default App
