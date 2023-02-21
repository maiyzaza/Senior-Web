import React from 'react'

import './RoomManagement.css'
import Sidebar from '../Sidebar';
import countries from '../component-table/countries';
import Table from '../component-table/Table'

function RoomManagement() {

  return (
    <div className='backgroundImg'>
    <button className='creat-room-button'>สร้างห้องใหม่</button>
      <Sidebar />
      <div className="flex-container">
        <main className='container'>
          <div className='wrapper'>
            <Table data={countries} rowsPerPage={10} />
          </div>
        </main>
      </div>
      <p className='text-topic'>จัดการห้อง</p>
    </div>
  );
}

export default RoomManagement;