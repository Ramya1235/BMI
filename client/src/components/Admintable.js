
import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getcal } from "../actions/auth";
import { useState, useEffect } from "react";
import { useSortBy } from 'react-table'



// Define a default UI for filtering
function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const { auth } = useSelector((state) => ({ ...state }));
    const history = useHistory()
    const logOut = () => {

        window.localStorage.removeItem('auth');
        history.push("/");
    }
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <span>
            <div className="nav adminnav float-right">
                <a className='btn btn-secondary' onClick={logOut}>Logout</a>
            </div>
            {/* <input
                className="form-control"
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
            /> */}

            <div className="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Search</span>
                </div>
                <input
                    className="form-control search"
                    value={value || ""}
                    onChange={e => {
                        setValue(e.target.value);
                        onChange(e.target.value);
                    }}
                    placeholder={`Search ${count} records...`}
                />
            </div>

        </span>
    )
}

function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    const count = preFilteredRows.length

    return (
        // <input
        //     className="form-control"
        //     value={filterValue || ''}
        //     onChange={e => {
        //         setFilter(e.target.value || undefined)
        //     }}
        //     placeholder={`Search ${count} records...`}
        // />
        <>
        </>
    )
}

function Table({ columns, data }) {

    const defaultColumn = React.useMemo(
        () => ({
            // Default Filter UI
            Filter: DefaultColumnFilter,
        }),
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            defaultColumn
        },
        useFilters,
        useGlobalFilter,
        useSortBy


    )

    return (
        <div>

            <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (

                                <><th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    {/* Add a sort direction indicator */}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>

                                </>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <br />
        </div>
    )
}



function AdminTable() {

    const [bmis, setBmis] = useState([]);

    useEffect(async () => {

        try {

            const data = await (await getcal()).data;

            setBmis(data);
            console.log(data)

        } catch (error) {
            console.log(error)

        }

    }, []);

    const data = bmis

    const columns = React.useMemo(
        () => [
            // {
            //     Header: 'Name',
            //     columns: [
                    {
                        Header: 'Email',
                        accessor: 'name',
                    },
                // ],
            // },
            // {
                // Header: 'Info',
                // columns: [
                    {
                        Header: 'BMI',
                        accessor: 'bmi'
                    },
                    {
                        Header: 'Height',
                        accessor: 'height'
                    },
                    {
                        Header: 'Weight',
                        accessor: 'weight'
                    },
                    {
                        Header: 'Date and Time',
                        accessor: 'createdAt'
                    },
                ],
            // },
        // ],
        []
    )


    return (


        <div className="bg-white">


            <Table columns={columns} data={data} />


        </div>

    )
}

export default AdminTable;