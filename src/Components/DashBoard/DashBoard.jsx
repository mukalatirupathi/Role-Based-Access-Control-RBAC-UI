import React, { useState } from 'react'
import './Dashboard.css'; 
import UserManagement from '../UserManagement/UserManagement';
import AddUser from '../UserManagement/AddUser';
import EditUser from '../UserManagement/EditUser';


const DashBoard = ({users}) => {

const[showmodel,setshowmodel] =useState(false);
const[selecteduser,setselecteduser]=useState(null);
const[editmodel,seteditmodel] =useState(false);
const [userList, setUserList] = useState(users || []);
const [nextUid, setNextUid] = useState(5);

const handleadduser=()=>{
  setshowmodel(true);
};

const onSaveUser = (newUser) => {
  newUser.uid = nextUid;
  setUserList([...userList, newUser]);
  setNextUid(nextUid + 1);
};

const handleUpdateUser = (updatedUser) => {
  const updatedList = userList.map((user) =>
    user.uid === updatedUser.uid ? updatedUser : user
  );
  setUserList(updatedList);
  seteditmodel(false); // Close the modal after saving
};

const onDeleteUser = (uid) => {
  const filteredUsers = userList.filter((user) => user.uid !== uid);
  setUserList(filteredUsers);
};

  return (
    <div>
      <header className='header'>
      <div className='dashboard'>
         <h1 className='title'>Dashboard</h1>
         <div>
           <button className="add-user-btn" onClick={handleadduser} >add user</button>
         </div>
      </div>
     </header>
     <UserManagement users={userList} seteditmodel={seteditmodel} setselecteduser={setselecteduser}  onDeleteUser={onDeleteUser}/>
     {editmodel &&<EditUser seteditmodel={seteditmodel} selecteduser={selecteduser}  onUpdateUser={handleUpdateUser}/>}
     <AddUser showmodel={showmodel} setshowmodel={setshowmodel} onSaveUser={onSaveUser} nextUid={nextUid}/>
     
    </div>
  );
};

export default DashBoard;