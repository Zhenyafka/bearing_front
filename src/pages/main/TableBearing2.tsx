import './TableBearing.css';
import {useState, useEffect, Component} from 'react';
import xlsxParser from 'xlsx-parse-json';
import '../../Documents/FKL.xlsx';


const Header = ({columns}) => {
    return (
        <thead>
        <tr>
            {columns.map(column => (
                <th key={column} className = "table-bearing-cell">
                    {column}
                </th>
            ))}
        </tr>
        </thead>
    )
}
//
// export interface Data {
//     Name: string;
//     Brand: string;
//     Inner: string;
//     Outer: string;
//     Width: string;
//     Count: string;
//     Price: string;
// }
// export function createData(
//     Name: string,
//     Brand: string,
//     Inner: string,
//     Outer: string,
//     Width: string,
//     Count: string,
//     Price: string,
// ): Data {
//     return {Name, Brand, Inner, Outer, Width, Count, Price};
// }
//
// export const rows = [
//     createData('1726204-2S.T', 'FKL', 20, 47, 14, 1, '791.06'),
//     createData('1726205-2S.T', 'FKL', 25, 52, 15, 1, '695.60'),
//     createData('1726206-2RS1', 'FKL', 30, 62, 16, 1, '835.46'),
//     createData('1726207-2RS1', 'FKL', 35, 72, 17, 1, '1024.16'),
//     createData('1726208-2RS1', 'FKL', 40, 80, 18, 1, '1141.82'),
//     createData('1726209-2RS1', 'FKL', 45, 85, 19, 1, '1348.28'),
//     createData('1726210-2RS1', 'FKL', 50, 90, 20, 1, '1383.80'),
//     createData('1726306-2RS1', 'FKL', 30, 72, 19, 1, '1882.56'),
//     createData('1726307-2RS1', 'FKL', 35, 80, 21, 1, '2300.66'),
//     createData('1726309-2RS1', 'FKL', 45, 100, 25, 1, '2535.98'),
//     createData('1726310-2RS1', 'FKL', 50, 110, 27, 1, '2816.44'),
//     createData('SL3303-2S', 'FKL', 17, 47, 24.2, 1, '1420.06'),
//     createData('SL5203.B-2T', 'FKL', 16.256, 40, 43.88, 1, '1261.70'),
//     createData('06C04-TS', 'FKL', 16, 45.2, 18.67, 1, '857.66'),
//     createData('Q203PP.AH05', 'FKL', 13.081, 40, 18.29, 1, '955.34'),
//     createData('Q203PP.AH02-M', 'FKL', 16.256, 40, 18.29, 1, '791.06')
// ]

const Content = ({rows, columns}) => {
    return (
        <tbody>
        {rows.map((row) =>(
            <tr key={row.name}>
                {columns.map(column => (
                    <td key={column} className="table-bearing-cell">{row[column]}</td>
                ))}
            </tr>
        ))}
        </tbody>
    )
};
export const SearchBar = () => {};
export const TableBearing = () => {
    const columns = ['Name', 'Brand', 'Inner', 'Outer', 'Width', 'Count', 'Price']
    const [bearings, setBearings] = useState ([]);
    console.log(bearings);

    useEffect(() => {
        const url = '../../Documents/FKL.xlsx';
        xlsxParser
            .onFileSelection('../../Documents/FKL.xlsx')
            .then(data => {
                const parsedData = url
            })
        fetch(url)
            .then((res) => res.json())
            .then((bearings) => {
                setBearings(bearings);
            });
    });

    return (
        <div>
            SearchBar
            <table className = "table-bearing">
                <Header columns = {columns}/>
                <Content rows={bearings} columns={columns}/>
            </table>
        </div>
    )
}
