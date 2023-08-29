
import React, { useState } from "react"
import { IoMenuOutline } from "react-icons/io5";
import "./App.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { Card, Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
// import PDF from './DownloadPdf'

function App() {
// create state for modal use material ui
  const [open, setOpen] = React.useState(false)
  const [selectedCompany, setSelectedCompany] = useState([])

  // create function modal

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  // create functon for style index cell
  function getStyle(index, company) {
    const colors = ["gray", "lightgreen", "green", "darkgreen", "lightred", "red", "darkred"]
    const companyIndex = company.indexValue.find(item => item.id === index.id)
    if (companyIndex) {
      return {
        borderRadius: "8px",
        height: `${index.weight}px`,
        backgroundColor: colors[companyIndex.value + 3]
      }
    } else {
      return {
        borderRadius: "8px",
        height: `${index.weight}px`,
        backgroundColor: "#000"
      }
    }
  }

  const handleCardClick = (e, company) => {
    setSelectedCompany(company)
    setOpen(true)
  }

  return (
    <div className="container ">
    {/* create table for index and company */}
      <table className="table">
        <thead>
          <tr>
            <th>
              {/* create icon in top-right chart */}
               <IoMenuOutline size={30}  />
              
            </th>
            {/* fetch from json and create th in table */}
            {companies.map(company => {
              return (
                <th scope="col" style={{ width: `${company.weight}px` }}>
                  {company.name}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {/* fetch json and create tr and  td table */}
          {indexList.map(index => {
            return (
              <tr style={{ height: `${index.weight}px` }}>
                <td className="indexStyle">{index.name}</td>
                {companies.map(company => {
                  const myStyle = getStyle(index, company)
                  return (
                    <td>
                      <Card onClick={e => handleCardClick(e, company)} sx={myStyle}></Card>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* component pdf */}
       {/* <PDF/> */}
       {/* create modal */}
      <Dialog onClose={handleClickOpen} open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <IconButton
            aria-label="close"
            onClick={handleClose}
            size="small"
            sx={{
              position: "absolute",
              right: 8,
              top: 3,
              color: theme => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <p>{selectedCompany.name}</p>
        </DialogContent>
      </Dialog>
      <div className="infocolor"></div>
     
    </div>
  )
}

export default App

// create function for random number for weight

const randomNumber = digits => {
  return Math.floor(Math.random() * Math.pow(10, digits))
}

// create function for generate [-3,3]

function generateIndexValue() {
  return Math.floor(Math.random() * 7) - 3
}


// create index list 
const indexList = [
  { name: "سودآوری", id: 1, weight: randomNumber(2) },
  { name: "کیفیت سودآوری", id: 2, weight: randomNumber(2) },
  { name: "استفاده از طرفیت", id: 3, weight: randomNumber(2) },
  { name: "رشد ظرفیت مولد", id: 4, weight: randomNumber(2) },
  { name: "ریسک سرمایه در گردش", id: 5, weight: randomNumber(2) },
  { name: "بازده سرمایه در گردش", id: 6, weight: randomNumber(2) },
  { name: "ریسک مالی", id: 7, weight: randomNumber(2) },
  { name: "بهره گیری از اعتبار", id: 8, weight: randomNumber(2) }
]


// create company list
const companies = [
  {
    name: "توسعه آهن و فولاد گل گهر",
    weight: randomNumber(2),
    indexValue: [
      { id: 1, value: generateIndexValue() },
      { id: 2, value: generateIndexValue() },
      { id: 5, value: generateIndexValue() },
      { id: 6, value: generateIndexValue() },
      { id: 7, value: generateIndexValue() },
      { id: 8, value: generateIndexValue() }
    ]
  },
  {
    name: "ایران خودرو",
    weight: randomNumber(2),
    indexValue: [
      { id: 1, value: generateIndexValue() },
      { id: 2, value: generateIndexValue() },
      { id: 5, value: generateIndexValue() },
      { id: 6, value: generateIndexValue() },
      { id: 7, value: generateIndexValue() },
      { id: 8, value: generateIndexValue() }
    ]
  },
  {
    name: "گهر انرژی",
    weight: randomNumber(2),
    indexValue: [
      { id: 1, value: generateIndexValue() },
      { id: 2, value: generateIndexValue() },
      { id: 3, value: generateIndexValue() },
      { id: 6, value: generateIndexValue() },
      { id: 7, value: generateIndexValue() },
      { id: 8, value: generateIndexValue() }
    ]
  },
  {
    name: "گهر",
    weight: randomNumber(2),
    indexValue: [
      { id: 1, value: generateIndexValue() },
      { id: 2, value: generateIndexValue() },
      { id: 3, value: generateIndexValue() },
      { id: 4, value: generateIndexValue() },
      { id: 5, value: generateIndexValue() },
      { id: 6, value: generateIndexValue() },
      { id: 8, value: generateIndexValue() }
    ]
  },
  {
    name: "سنگ آهک گهر زمین",
    weight: randomNumber(2),
    indexValue: [
      { id: 1, value: generateIndexValue() },
      { id: 2, value: generateIndexValue() },
      { id: 3, value: generateIndexValue() },
      { id: 4, value: generateIndexValue() },
      { id: 5, value: generateIndexValue() },
      { id: 6, value: generateIndexValue() },
      { id: 7, value: generateIndexValue() },
      { id: 8, value: generateIndexValue() }
    ]
  },
  {
    name: "معدنی و صنعتی گل گهر",
    weight: randomNumber(2),
    indexValue: [
      { id: 1, value: generateIndexValue() },
      { id: 2, value: generateIndexValue() },
      { id: 3, value: generateIndexValue() },
      { id: 6, value: generateIndexValue() },
      { id: 7, value: generateIndexValue() },
      { id: 8, value: generateIndexValue() }
    ]
  },
  {
    name: "مجمع جهانی فولاد",
    weight: randomNumber(2),
    indexValue: [
      { id: 1, value: generateIndexValue() },
      { id: 2, value: generateIndexValue() },
      { id: 3, value: generateIndexValue() },
      { id: 4, value: generateIndexValue() },
      { id: 5, value: generateIndexValue() },
      { id: 6, value: generateIndexValue() },
      { id: 7, value: generateIndexValue() },
      { id: 8, value: generateIndexValue() }
    ]
  },
  {
    name: "سنگ آهک گهر زمین",
    weight: randomNumber(2),
    indexValue: [
      { id: 1, value: generateIndexValue() },
      { id: 2, value: generateIndexValue() },
      { id: 3, value: generateIndexValue() },
      { id: 4, value: generateIndexValue() },
      { id: 5, value: generateIndexValue() },
      { id: 6, value: generateIndexValue() },
      { id: 7, value: generateIndexValue() },
      { id: 8, value: generateIndexValue() }
    ]
  },
  {
    name: "کرمان موتور",
    weight: randomNumber(2),
    indexValue: [
      { id: 1, value: generateIndexValue() },
      { id: 2, value: generateIndexValue() },
      { id: 3, value: generateIndexValue() },
      { id: 4, value: generateIndexValue() },
      { id: 5, value: generateIndexValue() },
      { id: 6, value: generateIndexValue() },
      { id: 7, value: generateIndexValue() },
      { id: 8, value: generateIndexValue() }
    ]
  }
]

