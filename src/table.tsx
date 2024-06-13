import { motion } from "framer-motion";
import TableProps from "./TableProps";
//import { td, th } from "acomponents/Table/table.module.css";
//import {TheadVariants } from './variant';

export const TheadCell: React.FC<
  { children: React.ReactNode } & React.ThHTMLAttributes<HTMLTableCellElement>
> = ({ children, ...props }) => {
  return <th {...props}>{children}</th>;
};

export const TbodyCell: React.FC<
  { children: React.ReactNode } & React.ThHTMLAttributes<HTMLTableCellElement>
> = ({ children, ...props }) => {
  return <td {...props}>{children}</td>;
};

const Table: React.FC<TableProps> = ({ columns, body }) => {
  return (
    <>
      <motion.table>
        <thead>{columns}</thead>
        <tbody> {body}</tbody>
      </motion.table>
    </>
  );
};
export default Table;
