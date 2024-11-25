import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  

const UserManagement = ({users,seteditmodel,setselecteduser,onDeleteUser}) => {

    const handleEditClick=(user)=>{
        console.log("Edit button clicked");
        setselecteduser(user);
        seteditmodel(true);
    };

    const handleDeleteClick = (uid) => {
        onDeleteUser(uid);
      };

  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Userid</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Permission</TableCell>
                        <TableCell>status</TableCell>
                        <TableCell>Edit</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((user,index)=>(
                            <TableRow key={index}>
                                <TableCell>{user.uid}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>{user.permission}</TableCell>
                                <TableCell>{user.status}</TableCell>
                                <TableCell><button className='btn btn-primary' onClick={() => handleEditClick(user)}>edit</button></TableCell>
                                <TableCell><button className='btn btn-danger' onClick={() => handleDeleteClick(user.uid)}>delete</button></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default UserManagement
