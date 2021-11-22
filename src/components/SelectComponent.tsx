
import Select from 'react-select'

const options = [

    {
        value :"Watches", label: "Watches"
    },
    {
        value :"Mobile phones", label: "Mobile phones"
    },
    {
        value :"Audio", label: "Audio"
    },
    {
        value :"Game gadgets", label: "Game gadgets"
    },
];
  
  export 
      const MyComponent : React.FC = () => (
    <Select options={options} />
  )
  