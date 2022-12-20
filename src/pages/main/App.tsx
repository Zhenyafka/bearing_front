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
    createData('1726209-2RS1', 'FKL', 45, 85, 19,1, '1348.28'),
    createData('1726210-2RS1', 'FKL', 50, 90, 20,1, '1383.80'),
    createData('1726306-2RS1', 'FKL', 30, 72, 19,1, '1882.56'),
    createData('1726307-2RS1', 'FKL', 35, 80, 21,1, '2300.66'),
    createData('1726309-2RS1', 'FKL', 45, 100, 25,1, '2535.98'),
    createData('1726310-2RS1', 'FKL', 50, 110, 27,1, '2816.44'),
    createData('SL3303-2S', 'FKL', 17, 47, 24.2,1, '1420.06'),
    createData('SL5203.B-2T', 'FKL', 16.256, 40, 43.88,1, '1261.70'),
    createData('06C04-TS', 'FKL', 16, 45.2, 18.67,1, '857.66'),
    createData('Q203PP.AH05', 'FKL', 13.081, 40, 18.29,1, '955.34'),
    createData('Q203PP.AH02-M', 'FKL', 16.256, 40, 18.29,1, '791.06')
]

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
