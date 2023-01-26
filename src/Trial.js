import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MyForm from './MyForm';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight:'bold'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
    name= "string",
    identityattack= "string",
    insult= "string",
    obscene= "string",
    severetoxicity= "string",
    sexualexplicit="string",
    threat="string",
    toxicity="string",
  ) {
  return { name, identityattack, insult, obscene, severetoxicity,sexualexplicit,threat,toxicity};
}

const rows = [
  createData('Were dudes on computers, moron. You are quite astonishingly stupid.', "false", "true", "false", "false","false","false","true"),
  createData('Please stop. If you continue to vandalize Wikipedia, as you did to Kmart, you will be blocked from editing', "false", "false", "false", "false","false","false","false"),
  createData('I respect your point of view, and when this discussion originated on 8th April I would have tended to agree with you.', "false", "false", "false", "false","false","false","false"),
 
   
];

 function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ Width: 700 ,borderLeft: 1 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  >text </StyledTableCell>
            <StyledTableCell align="right">identity attack</StyledTableCell>
            <StyledTableCell align="right">insult</StyledTableCell>
            <StyledTableCell align="right">obscene</StyledTableCell>
            <StyledTableCell align="right">severe toxicity</StyledTableCell>
            <StyledTableCell align="right">sexual explicit</StyledTableCell>
            <StyledTableCell align="right">threat</StyledTableCell>
            <StyledTableCell align="right">toxicity</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ borderLeft: 1 }}>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.identityattack}</StyledTableCell>
              <StyledTableCell align="right">{row.insult}</StyledTableCell>
              <StyledTableCell align="right">{row.obscene}</StyledTableCell>
              <StyledTableCell align="right">{row.severetoxicity}</StyledTableCell>
              <StyledTableCell align="right">{row.sexualexplicit}</StyledTableCell>
              <StyledTableCell align="right">{row.threat}</StyledTableCell>
              <StyledTableCell align="right">{row.toxicity}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <MyForm/>
    </TableContainer>
    
  );
}

export default CustomizedTables;

/* function createData(
    text: "string",
    identity_attack: number,
    insult: number,
    obscene: number,
    severe_toxicity: number,
  ) {
    return { text, identity_attack, insult, obscene, severe_toxicity };
  } */