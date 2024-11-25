import React, { useState } from 'react'

const EditUser = ({seteditmodel,selecteduser, onUpdateUser}) => {

  const[formdata,setformdata]=useState(
    {
      uid: selecteduser.uid,
      username: selecteduser.username,
      role: selecteduser.role,
      permission :selecteduser.permission,
      status:selecteduser.status
    });

     const handleCloseClick=()=>{
      seteditmodel(false);
     };

     const handleChange=(e)=>{
      const { name, value } = e.target;
      setformdata({ ...formdata, [name]: value });
     };

     const handleSaveClick = (e) => {
      e.preventDefault();
      onUpdateUser(formdata); 
     };

  return (
    <div>
      <div className='modal fade show' style={{ display: 'block' }}>
        <div className='modal-dialog'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h1 className='modal-title btn btn-success w-100 m-2'>Edit User Details</h1>
                    <button className='btn btn-danger' onClick={handleCloseClick}>close</button>
                </div>
                <div className='modal-body'>
                <form>
                    <dl>
                      <dt>userid</dt>
                      <dd><input type="text" placeholder='enter your userid' className='w-100 mt-2 form-select'  onChange={handleChange}  value={formdata.uid}></input></dd>
                      <dt>username</dt>
                      <dd><input type="text" name="username" placeholder='username' className='w-100 mt-2 form form-select'   onChange={handleChange}  value={formdata.username}></input></dd>
                      <dt>role</dt>
                      <dd>
                        <select  name="role" className='w-100 mt-2 form-select' value={formdata.role} onChange={handleChange}>
                          <option value="">select the role</option>
                          <option value="Admin">Admin</option>
                          <option value="user">user</option>
                          <option value="guest">guest</option>
                        </select>
                      </dd>
                      <dt>Permission</dt>
                      <dd>
                        <select name="permission" className='w-100 mt-2 form-select'  value={formdata.permission} onChange={handleChange}>
                          <option value="">select the permission</option>
                          <option value="read&write">read&write</option>
                          <option value="write">write</option>
                          <option value="read">read</option>
                        </select>
                      </dd>
                      <dt>status</dt>
                      <dd>
                        <select  name="status" className='w-100 mt-2 form-select'  value={formdata.status} onChange={handleChange}>
                          <option value="">select the status</option>
                          <option value="active">active</option>
                          <option value="inactive">inactive</option>
                        </select>
                      </dd>
                    </dl>
                    <button className='btn btn-success m-2' onClick={handleSaveClick}>save</button>
                    <button className='btn btn-danger m-2' onClick={handleCloseClick} >close</button>
                  
                  </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EditUser
