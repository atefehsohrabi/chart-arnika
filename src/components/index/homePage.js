import React, { useState, useRef } from "react";
import { IoMenuOutline } from "react-icons/io5";
import "../../App.css";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
import {
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useReactToPrint } from "react-to-print";
import { companies, indexList } from "./homePage.data";

const HomePage = () => {
  // create state for modal use material ui
  const [open, setOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState([]);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // create function modal

  // refactor
  // const handleClickOpen = () => {
  //   setOpen(true)
  // }
  // const handleClose = () => {
  //   setOpen(false)
  // }
  

  const togglehandler = () => {
    setOpen((prev) => !prev);
  };

  // create functon for style index cell
  function getStyle(index, company) {
    const colors = [
      "gray",
      "lightgreen",
      "green",
      "darkgreen",
      "lightred",
      "red",
      "darkred",
    ];
    const companyIndex = company.indexValue.find(
      (item) => item.id === index.id
    );
    if (companyIndex) {
      return {
        borderRadius: "8px",
        height: `${index.weight}px`,
        backgroundColor: colors[companyIndex.value + 3],
      };
    } else {
      return {
        borderRadius: "8px",
        height: `${index.weight}px`,
        backgroundColor: "#000",
      };
    }
  }

    const handleCardClick = (e, company) => {
      setSelectedCompany(company);
      setOpen(true);
    };

  return (
    <div>
      <div className="container ">
        {/* create table for index and company */}
        <div ref={componentRef}>
          <table className="table">
            <thead>
              <tr>
                <th>
                  {/* create icon in top-right chart */}
                  <IoMenuOutline size={30} />
                </th>
                {/* fetch from json and create th in table */}
                {companies.map((company) => {
                  return (
                    <th key={company.id} scope="col" style={{ width: `${company.weight}px` }}>
                      {company.name}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {/* fetch json and create tr and  td table */}
              {indexList.map((index) => {
                return (
                  <tr style={{ height: `${index.weight}px` }}>
                    <td className="indexStyle">{index.name}</td>
                    {companies.map((company) => {
                      const myStyle = getStyle(index, company);
                      return (
                        <td >
                          <Card
                            onClick={(e) => handleCardClick(e, company)}
                            sx={myStyle}
                          ></Card>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* component pdf */}
        </div>
        {/* create modal */}
        <Dialog onClose={togglehandler} open={open}>
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            <IconButton
              aria-label="close"
              onClick={togglehandler}
              size="small"
              sx={{
                position: "absolute",
                right: 8,
                top: 3,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent dividers>
            <p>{selectedCompany.name}</p>
            
          </DialogContent>
        </Dialog>
        <button className="infocolor" onClick={handlePrint}>
          Downlod PDF
        </button>
      </div>
    </div>
  );
};

export default HomePage;
