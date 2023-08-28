import React,{useState} from "react";
import { IoMenuOutline } from "react-icons/io5";
import './App.css';


function App() {
  const [btn, setBtn] = useState(false);
  function getStyle(index, company){
    const colors = ["lightgray", "gray", "lightblue", "green", "yellow", "red", "darkred"];
    const companyIndex = company.indexValue.find(
      (item) => item.id === index.id
    );
    if(companyIndex){
      return{
        borderRadius:"8px",
        height:`${index.weight}px`,
        backgroundColor:colors[companyIndex.value+3]
      };
    }else{
      return{
        borderRadius:"8px",
        height:`${index.weight}px`,
        backgroundColor:"#000"
      };
    }
  }
  


  return (
    <div className='container '>
   <table className="table">
  <thead>
    <tr>
      <th><IoMenuOutline size={30} onclick={()=>setBtn(!btn)}/>
      {btn && <div id="myDropdown" class="dropdown-content">
        <a href="#">Save as PDF</a>
      </div>
      
  }
       </th>
      {companies.map((company)=>{
        return(
          <th scope="col" style={{width:`${company.weight}px`}}>{company.name}</th>
        )
      })}
    </tr>
  </thead>
  <tbody>
    {indexList.map((index)=>{
      return(
<tr style={{height:`${index.weight}px`}}> 
    
      <td>{index.name}</td>
      {companies.map((company)=>{
        return(
          <td>
            <div style={getStyle(index,company)}></div>
          </td>
        );
      })}
    </tr>
      );
    })}
  </tbody>
</table>
</div>
  );
}

export default App;

const randomNumber = (digits) =>{
  return Math.floor(Math.random()*Math.pow(10, digits));
};

function generateIndexValue(){
  return Math.floor(Math.random()*7)-3;
}

const indexList = [
  {name:"سودآوری",id:1,weight:randomNumber(2)},
  {name:"کیفیت سودآوری",id:2,weight:randomNumber(2)},
  {name:"استفاده از طرفیت",id:3,weight:randomNumber(2)},
  {name:"رشد ظرفیت مولد",id:4,weight:randomNumber(2)},
  {name:"ریسک سرمایه در گردش",id:5,weight:randomNumber(2)},
  {name:"بازده سرمایه در گردش",id:6,weight:randomNumber(2)},
  {name:"ریسک مالی",id:7,weight:randomNumber(2)},
  {name:"بهره گیری از اعتبار",id:8,weight:randomNumber(2)},
];

const companies = [
  {
    name:"توسعه آهن و فولاد گل گهر",
    weight:randomNumber(2),
    indexValue:[
      {id:1, value: generateIndexValue()},
      {id:2, value: generateIndexValue()},
      {id:5, value: generateIndexValue()},
      {id:6, value: generateIndexValue()},
      {id:7, value: generateIndexValue()},
      {id:8, value: generateIndexValue()},
    ]
  },
  {
    name:"ایران خودرو",
    weight:randomNumber(2),
    indexValue:[
      {id:1, value: generateIndexValue()},
      {id:2, value: generateIndexValue()},
      {id:5, value: generateIndexValue()},
      {id:6, value: generateIndexValue()},
      {id:7, value: generateIndexValue()},
      {id:8, value: generateIndexValue()},
    ]
  },
  {
    name:"گهر انرژی",
    weight:randomNumber(2),
    indexValue:[
      {id:1, value: generateIndexValue()},
      {id:2, value: generateIndexValue()},
      {id:3, value: generateIndexValue()},
      {id:6, value: generateIndexValue()},
      {id:7, value: generateIndexValue()},
      {id:8, value: generateIndexValue()}
    ]
  },
  {
    name:"گهر",
    weight:randomNumber(2),
    indexValue:[
      {id:1, value: generateIndexValue()},
      {id:2, value: generateIndexValue()},
      {id:3, value: generateIndexValue()},
      {id:4, value: generateIndexValue()},
      {id:5, value: generateIndexValue()},
      {id:6, value: generateIndexValue()},
      {id:8, value: generateIndexValue()}
    ]
  },
  {
    name:"سنگ آهک گهر زمین",
    weight:randomNumber(2),
    indexValue:[
      {id:1, value: generateIndexValue()},
      {id:2, value: generateIndexValue()},
      {id:3, value: generateIndexValue()},
      {id:4, value: generateIndexValue()},
      {id:5, value: generateIndexValue()},
      {id:6, value: generateIndexValue()},
      {id:7, value: generateIndexValue()},
      {id:8, value: generateIndexValue()}
    ]
  },
  {
    name:"معدنی و صنعتی گل گهر",
    weight:randomNumber(2),
    indexValue:[
      {id:1, value: generateIndexValue()},
      {id:2, value: generateIndexValue()},
      {id:3, value: generateIndexValue()},
      {id:6, value: generateIndexValue()},
      {id:7, value: generateIndexValue()},
      {id:8, value: generateIndexValue()},
    ]
  },
  {
    name:"مجمع جهانی فولاد",
    weight:randomNumber(2),
    indexValue:[
      {id:1, value: generateIndexValue()},
      {id:2, value: generateIndexValue()},
      {id:3, value: generateIndexValue()},
      {id:4, value: generateIndexValue()},
      {id:5, value: generateIndexValue()},
      {id:6, value: generateIndexValue()},
      {id:7, value: generateIndexValue()},
      {id:8, value: generateIndexValue()},
    ]
  },
  {
    name:"سنگ آهک گهر زمین",
    weight:randomNumber(2),
    indexValue:[
      {id:1, value: generateIndexValue()},
      {id:2, value: generateIndexValue()},
      {id:3, value: generateIndexValue()},
      {id:4, value: generateIndexValue()},
      {id:5, value: generateIndexValue()},
      {id:6, value: generateIndexValue()},
      {id:7, value: generateIndexValue()},
      {id:8, value: generateIndexValue()}
    ]
  },
  {
    name:"کرمان موتور",
    weight:randomNumber(2),
    indexValue:[
      {id:1, value: generateIndexValue()},
      {id:2, value: generateIndexValue()},
      {id:3, value: generateIndexValue()},
      {id:4, value: generateIndexValue()},
      {id:5, value: generateIndexValue()},
      {id:6, value: generateIndexValue()},
      {id:7, value: generateIndexValue()},
      {id:8, value: generateIndexValue()},
    ]
  }
]
