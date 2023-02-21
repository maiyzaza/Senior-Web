import React, { useState } from "react";

import useTable from "../useTable";
import styles from "./Table.module.css";
// import "./Table.css"
import TableFooter from "./TableFooter";
import { BiInfoCircle } from 'react-icons/bi';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// <i class='bx bx-check-square' style='color:#ff0005'  ></i>

const Table = ({ data, rowsPerPage }) => {

  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>ชื่อห้อง (RoomName)</th>
            <th className={styles.tableHeader}>สถานที่ (Place)</th>
            <th className={styles.tableHeader}>ตึก (Building)</th>
            <th className={styles.tableHeader}>ชั้น (Floor)</th>
            <th align="center" className={styles.tableHeader}>ข้อมูลเพิ่มเติม (More Information)</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.roomName}</td>
              <td className={styles.tableCell}>{el.place}</td>
              {/* <td align="center" className={styles.tableCell}>{el.building}</td> */}
              {/* <td align="center" className={styles.tableCell}>{el.floor}</td> */}
              <td className={styles.tableCell}>{el.price}</td>
              {/* <td align="center" className={styles.tableCell}>{el.floor}</td> */}
              {el.status !== null ? el.status === 1 ? <td className={styles.tableCellGreen} >Paid</td> : <td className={styles.tableCellRed}>Not Paid</td> : <td></td>}
              {el.status !== null ? el.status === 0 ? <td><button className={styles.tableButton}>Pay</button></td> : <td></td> : <td></td>}
              {/* <td align="center"><BiInfoCircle></BiInfoCircle></td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;