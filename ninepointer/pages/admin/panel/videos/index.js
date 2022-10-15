import React, { useState, useEffect } from 'react';
import SideBar from '../../../../components/Admin/Panel/SideBar';
import TopBar from '../../../../components/Admin/Panel/TopBar';
import styles from './videos.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SideBarPageContext from '../../../../context/SideBarPageContext';
import { useContext } from 'react';

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

const videos = () => {
  const [columnData, setcolumnData] = useState();
  const [videosData, setVideosData] = useState();
  const Router = useRouter();
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'subject', headerName: 'Subject', width: 130 },
    { field: 'type', headerName: 'Type', width: 130 },
    { field: 'creator', headerName: 'Creator', width: 130 },
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
                pathname: `videos/${params.row.id}`,
              }}
            >
              <button className={styles.btn}>Edit</button>
            </Link>
            <button
              className={styles.btn}
              onClick={async () => {
                console.log(params.row.id);
                console.log(
                  `https://ninepointer-staging.herokuapp.com/api/v1/engineering/video/${params.row.id}`
                );
                const res = await axios.delete(
                  `https://ninepointer-staging.herokuapp.com/api/v1/engineering/video/${params.row.id}`
                );
                {
                  if (res.data.status == 'success') {
                    console.log('deleting');
                    console.log(params.row.id);
                    setVideosData(
                      videosData.filter((item) => item._id !== params.row.id)
                    );
                  }
                }
              }}
            >
              Delete
            </button>
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
  const { sideBarPage, setSideBarPage } = useContext(SideBarPageContext);
  useEffect(() => {
    if (!Router.isReady) return;
    if (sideBarPage !== 'videos') {
      setSideBarPage('videos');
    }
    const fetchVideos = async () => {
      const res = await axios.get(
        'https://ninepointer-staging.herokuapp.com/api/v1/engineering/video?limit=300'
      );
      console.log('fetching');
      setVideosData(res.data.data);
      console.log(res.data.data);
      console.log(Object.keys(res.data.data[0]));
    };
    fetchVideos();
  }, [Router.isReady, Router.pathname]);
  return (
    <>
      <div className={styles.container}>
        <TopBar />
        <div className={styles.sections}>
          <SideBar />
          <div className={styles.pageContent}>
            <div className={styles.actionButtons}>
              <button
                onClick={() => {
                  Router.push('/admin/panel/videos/upload');
                }}
              >
                Add a Video
              </button>
            </div>
            <div style={{ height: 500, width: '100%' }}>
              {videosData && (
                <DataGrid
                  disableSelectionOnClick
                  rows={videosData.map((item, index) => {
                    return {
                      id: item._id,
                      title: item.title,
                      subject: item.subject,
                      videoLink: item.videoLink,
                      type: item.type,
                      creator: item.creator,
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

export default videos;
