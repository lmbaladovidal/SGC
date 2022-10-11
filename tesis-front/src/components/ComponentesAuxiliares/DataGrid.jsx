import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import { css } from '@linaria/core';



export const DataGridComponent = ({columns,rows}) => {
  return (<DataGrid columns={columns} rows={rows}  />);
}