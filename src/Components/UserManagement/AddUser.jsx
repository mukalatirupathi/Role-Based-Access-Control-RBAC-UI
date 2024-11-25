import React, { useState } from 'react'


const AddUser = ({showmodel,setshowmodel,onSaveUser,nextUid}) => {
  if (!showmodel) return null; 
  
  const[userdata,setuserdata]=useState({
    uid: nextUid,
    username:'',
    role:'',
    permission:'',
    status:'',
  });
 
  const handleCloseClick=()=>{
    setshowmodel(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserdata({ ...userdata, [name]: value });
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    onSaveUser(userdata); // Pass the user data to parent
    setshowmodel(false); // Close the modal
  };
  return (
    <div>
        <div className='modal fade show' style={{ display: 'block' }}>
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h1 className="modal-title btn btn-success w-100 m-1">Add User</h1>
                  <button  onClick={handleCloseClick} className='m-2 btn btn-danger'>close</button>
                </div>
                <div className='modal-body'>
                  <form>
                    <dl>
                      <dt>uid</dt>
                      <dd><input type="text"  value={nextUid}  className='w-100 mt-2 form form-select' placeholder='userid'></input></dd>
                      <dt>username</dt>
                      <dd><input type="text" name="username" placeholder='username' className='w-100 mt-2 form form-select' onChange={handleChange}></input></dd>
                      <dt>role</dt>
                      <dd>
                        <select  name="role" className='w-100 mt-2 form-select'  onChange={handleChange}>
                          <option value="">select the role</option>
                          <option value="Admin">Admin</option>
                          <option value="user">user</option>
                          <option value="guest">guest</option>
                        </select>
                      </dd>
                      <dt>Permission</dt>
                      <dd>
                        <select name="permission" className='w-100 mt-2 form-select'  onChange={handleChange}>
                          <option value="">select the permission</option>
                          <option value="read&write">read&write</option>
                          <option value="write">write</option>
                          <option value="read">read</option>
                        </select>
                      </dd>
                      <dt>status</dt>
                      <dd>
                        <select   name="status" className='w-100 mt-2 form-select'  onChange={handleChange}>
                          <option value="">select the status</option>
                          <option value="active">active</option>
                          <option value="inactive">inactive</option>
                        </select>
                      </dd>
                    </dl>
                    <button className='btn btn-success m-2' onClick={handleSaveClick} >save</button>
                    <button className='btn btn-danger m-2' onClick={handleCloseClick} >close</button>
                  
                  </form>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser
