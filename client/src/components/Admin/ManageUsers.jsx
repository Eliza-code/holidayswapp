import React from "react";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/adminActions";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { DataGrid } from "@mui/x-data-grid";

const ManageUsers = ({ handleUpdate }) => {
  const dispatch = useDispatch();

  const { allUsers } = useSelector((state) => state.adminReducer);
  const { user } = useSelector((state) => ({
    user: state.userReducer.details,
  }));

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
        dispatch(actions.deleteUser(id));
        handleUpdate(id);
      }
    });
  };

  const handleChangeStatus = (e, params) => {
    e.stopPropagation();
    const { id } = params.row;
    Swal.fire({
      title: "Do you want to change status of this user?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(actions.setNewAdmin(id));
        handleUpdate(id);
      }
    });
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 60,
      align: "center",
    },
    {
      field: "username",
      headerName: "Username",
      width: 160,
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 240,
      align: "center",
    },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 80,
      align: "center",
      renderCell: (cell) =>
        cell.value && <CheckCircleRoundedIcon color="success" />,
    },
    {
      field: "deleteAction",
      headerName: "Action",
      width: 100,
      align: "center",
      sortable: false,
      renderCell: (params) =>
        user?.id !== params.row.id ? (
          <Button
            variant="outlined"
            color="error"
            onClick={(e) => handleDelete(e, params)}
          >
            Delete
          </Button>
        ) : null,
    },
    {
      field: "toAdminAction",
      headerName: "Change Status",
      width: 150,
      align: "center",
      sortable: false,
      renderCell: (params) =>
        user?.id !== params.row.id ? (
          <Button
            variant="outlined"
            onClick={(e) => handleChangeStatus(e, params)}
          >
            {params.row.isAdmin ? "To User" : "To Admin"}
          </Button>
        ) : null,
    },
  ];

  const rows = allUsers?.map((user) => ({
    id: user.id,
    username: user.username,
    email: user.email,
    isAdmin: user.isAdmin || null,
    isDeleted: user.isDeleted || null,
  }));

  return (
    <Container sx={{ height: 420, width: 850 }}>
      {allUsers.length && (
        <DataGrid rowHeight={60} rows={rows} columns={columns} pageSize={5} />
      )}
    </Container>
  );
};

export default ManageUsers;
