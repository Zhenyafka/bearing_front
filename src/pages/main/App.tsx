import './App.css';
import TableContainer from '@mui/material/TableContainer';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";



export function createData(
    Name: string,
    Brand: string,
    Inner: number,
    Outer: number,
    Width: number,
    Count: number,
    Price: string,
) {
    return { Name, Brand, Inner, Outer, Width, Count, Price};
}

export const rows = [
    createData('1726204-2S.T', 'FKL', 20, 47, 14, 1, '791.06'),
    createData('1726205-2S.T', 'FKL', 25, 52, 15, 1, '695.60'),
    createData('1726206-2RS1', 'FKL', 30, 62, 16,1, '835.46'),
    createData('1726207-2RS1', 'FKL', 35, 72, 17,1, '1024.16'),
    createData('1726208-2RS1', 'FKL', 40, 80, 18,1, '1141.82'),
    createData('1726209-2RS1', 'FKL', 45, 85, 19,1, '1348.28')]

export const App = ()=> {
  console.log("constructor()")
    return (
        <div className="App">
            <div>Table:Bearings</div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Brand</TableCell>
                            <TableCell align="right">Inner</TableCell>
                            <TableCell align="right">Outer</TableCell>
                            <TableCell align="right">Width</TableCell>
                            <TableCell align="right">Count</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.Name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.Name}
                                </TableCell>
                                <TableCell align="right">{row.Brand}</TableCell>
                                <TableCell align="right">{row.Inner}</TableCell>
                                <TableCell align="right">{row.Outer}</TableCell>
                                <TableCell align="right">{row.Width}</TableCell>
                                <TableCell align="right">{row.Count}</TableCell>
                                <TableCell align="right">{row.Price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )

}


export default App;
