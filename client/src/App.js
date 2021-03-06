import React, { Component } from "react";
import "./App.css";
import Customer from "./Component/customer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
//import { withStyles } from "@material-ui/core/styles";

/*
const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});
*/

const customers = [
  {
    id: 1,
    img: "https://placeimg.com/64/64/1",
    name: "Jane",
    bday: "560711",
    gender: "Female",
    job: "Marketing",
  },
  {
    id: 2,
    img: "https://placeimg.com/64/64/2",
    name: "Alex",
    bday: "560711",
    gender: "Female",
    job: "Designer",
  },
  {
    id: 3,
    img: "https://placeimg.com/64/64/3",
    name: "Poo",
    bday: "560711",
    gender: "Male",
    job: "Dev",
  },
];

class App extends Component {
  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => {
              return (
                <Customer
                  key={customer.id}
                  id={customer.id}
                  img={customer.img}
                  name={customer.name}
                  bday={customer.bday}
                  gender={customer.gender}
                  job={customer.job}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;
