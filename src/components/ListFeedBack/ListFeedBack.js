import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './styles.css';
export const ListFeedBack = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //get my be all feedbacks
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://feedbacky-be.herokuapp.com/feedback/"
        );
        if (response) {
          setData(response?.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {data?.length === 0 ? (
        <div>loading</div>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 550 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Domain Name</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Feedback</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.domain}
                  </TableCell>
                  <TableCell align="right"><div className='feedback-cell'>{row.feedback}</div></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
