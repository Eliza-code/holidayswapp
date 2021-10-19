import React from "react";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/adminActions";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";

const ManageAnnouncements = ({ handleUpdate }) => {
  const dispatch = useDispatch();

  const { allAnnouncements } = useSelector((state) => state.adminReducer);

  const handleDelete = (e, params) => {
    e.stopPropagation();
    const { id } = params.row;
    Swal.fire({
      title: "Do you want to delete this user?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        dispatch(actions.deleteAnnouncement(id));
        handleUpdate(id);
      }
    });
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      align: "center",
    },
    {
      field: "title",
      headerName: "Title",
      width: 160,
      align: "center",
    },
    {
      field: "owner",
      headerName: "Owner",
      width: 250,
      align: "center",
    },
    {
      field: "country",
      headerName: "Country",
      width: 180,
      align: "center",
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      align: "center",
      sortable: false,
      renderCell: (params) => (
        <Button onClick={(e) => handleDelete(e, params)}>Delete</Button>
      ),
    },
  ];

  const rows = allAnnouncements?.map((announcement) => ({
    id: announcement.id,
    title: announcement.title,
    owner: announcement.owner,
    country: announcement.country,
    isDeleted: announcement.isDeleted || null,
  }));

  return (
    <Container sx={{ height: 420, width: 850 }}>
      {allAnnouncements.length && (
        <DataGrid rowHeight={60} rows={rows} columns={columns} pageSize={5} />
      )}
    </Container>
  );
};

export default ManageAnnouncements;
