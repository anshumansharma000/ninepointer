import React, { useState, useEffect } from 'react';
import SideBar from '../../../../components/Admin/Panel/SideBar';
import TopBar from '../../../../components/Admin/Panel/TopBar';
import styles from './pyqs.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Link from 'next/link';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'university', headerName: 'University', width: 130 },
  { field: 'subject', headerName: 'Subject', width: 130 },
  { field: 'semester', headerName: 'Semester', width: 130 },
  { field: 'branch', headerName: 'Branch', width: 130 },
  {
    field: 'year',
    headerName: 'Year',
    width: 90,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: (params) => {
      return (
        <>
          {/* <Link href={`pyqs/${params.row.id}`}> */}
          <Link
            href={{
              pathname: `pyqs/${params.row.id}`,
            }}
          >
            <button className={styles.btn}>Edit</button>
          </Link>
          <button className={styles.btn}>Delete</button>
        </>
      );
    },
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const pyqs = () => {
  const [columnData, setcolumnData] = useState();
  const [pyqData, setPyqData] = useState();

  useEffect(() => {
    const fetchPyqs = async () => {
      const res = await axios.get(
        'https://ninepointer-staging.herokuapp.com/api/v1/engineering/pyq?limit=300'
      );
      console.log('fetching');
      setPyqData(res.data.data);
      console.log(res.data.data);
      console.log(Object.keys(res.data.data[0]));
    };
    fetchPyqs();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <TopBar />
        <div className={styles.sections}>
          <SideBar />
          <div className={styles.pageContent}>
            <div style={{ height: 500, width: '100%' }}>
              {pyqData && (
                <DataGrid
                  disableSelectionOnClick
                  rows={pyqData.map((item, index) => {
                    return {
                      id: item._id,
                      university: item.university,
                      subject: item.subject,
                      semester: item.semester,
                      branch: item.branch,
                      year: item.year,
                    };
                  })}
                  columns={columns}
                  pageSize={10}
                  rowsPerPageOptions={[10]}
                  checkboxSelection
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default pyqs;
