'use client';
import { useContext, useState, useRef, useImperativeHandle, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Catalogue } from '@/app/context';
import { DataGrid} from '@mui/x-data-grid';
import Image from 'next/image';
import { getKeyByValue, operators, filtersOperators, addInputComponentToFilter } from './filterOperators';
import { tableStyle } from './tableStyling';
import './resultTable.css';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

 
export default function ResultTable(props) {
  const filter = useSearchParams().get('filter');
  const {catalogue} = useContext(Catalogue);
  const rows = catalogue;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filterModel, setFilterModel] = useState({items:[{field:'Cost Price', operator:'**', value:''}]});  //Model for filtering
  const validColumns = ['Cost Price','Quantity'];

  useEffect(()=>{
    //ensuring that the filterParams in the url are used
    if(filter){
      const firstSplit = filter.split('_');
      const field = firstSplit?.[0] || '';
      const secondSplit = firstSplit?.[1]?.split(':') || '';
      const operation = secondSplit?.[0] ? "_"+secondSplit[0] : "";
      const value = secondSplit?.[1] ? secondSplit[1]:'';
      if(validColumns.includes(field) && Object.keys(operators).includes(operation)){
        setFilterModel({items:[{field:field, operator:operators[operation], value:value}]})
      }
    }
  },[])
  
  //function to update searchParams during filtering
  const upDateSearchParams = (filterParam)=>{
    const queryParameters = searchParams.entries();
    const queryParamsJson = {};
    for( const [key, value] of queryParameters){
      queryParamsJson[key] = value;
    }
    const routerSearchParams = new URLSearchParams({...queryParamsJson, ...filterParam}).toString();
    router.push('?'+routerSearchParams, undefined, {shallow:true})
  }

  //The input component to enter filtering Values
  const  InputComponent = (props) => {
      const { item, applyValue, focusElementRef } = props;
      const InputRef = useRef(null);
      const handleFilterChange = (event) => {
        applyValue({ ...item, value: event.target.value })
      };
      useImperativeHandle(focusElementRef, () => ({
        focus: () => {
          InputRef.current
            .querySelector(`input[value="${item.value || ''}"]`)
            .focus();
        },
      }),[handleFilterChange]);

      return (
 
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: 48,
            pl: '20px',
          }}
        >
          <TextField
              id="outlined-number"
              label="Value"
              value={item.value || ''}
              onChange={handleFilterChange}
              ref={InputRef}
              type="string"
              InputLabelProps={{
                shrink: true,
              }}
            />
        </Box>
      );
    }

    //Adding the InputComponent to the Filtering box
    useEffect(()=>{
      addInputComponentToFilter(InputComponent)
    },[])
   
      // defines the columns and how they map the the body more info in "MUI Data-Grid"
      const columns = [
                        { field: 'id', headerName: 'S/N', width: 35, renderCell:(params)=>{
                            return <div className='centre' style={{ width:"100%", height:"100%"}}>
                            {params?.row?.id}
                            </div>
                        },
                        valueGetter:(params)=>params?.row?.id
                        },
                        { field: 'Image_1', headerName: 'Image', width: 70,
                        renderCell: (params)=>{
                          return (<div className='table-image'>
                          <Image className='item-image' src={params?.row?.Image_1} width={40} height={40} alt='image'/>
                          </div>)
                        } },
                        { field: 'SKU', headerName: 'SKU', width: 90 },
                        { field: 'Name', headerName: 'Name', width: 130 },
                        { field: 'Title', headerName: 'Title', width: 160 },
                        { field: 'Description', headerName: 'Description', width: 200 },
                        { field: 'Brand', headerName: 'Brand', width: 130 },
                        { field: 'Cost Price', headerName: 'Cost Price', width: 130, 
                          filterOperators:[...Object.values(filtersOperators)],  
                        },
                        { field: 'Quantity', headerName: 'Quantity', width: 130,
                          filterOperators:[...Object.values(filtersOperators)]
                         
                        },
                          
                        { field: 'Size', headerName: 'Size',width: 117 },
                      ];


  return (
    <div style={{  width: '100%', height:'43rem' }}>
  
      <DataGrid
        rows={rows}
        filterModel={filterModel}
        columns={columns}
        disableColumnResize
        disableRowSelectionOnClick
        disableColumnSelector     
        sx={tableStyle}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}

        //Handles model Change
        onFilterModelChange={(newFilter)=>{
          const item = newFilter?.items[0];
          setFilterModel(()=>newFilter);
          if(item?.field && item?.operator){
            const filterParam = {"filter" : item?.field+getKeyByValue(item?.operator)+':'+item?.value};
            upDateSearchParams(filterParam);
          }}}
        
        pageSizeOptions={[10]}
        checkboxSelection
      />
 
    </div>
  );
};