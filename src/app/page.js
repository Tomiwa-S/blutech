'use client'
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/navbar";
import ResultTable from "./components/result-table/ResultTable";
import { Catalogue } from "./context";
import { tableData } from "@/test";
import { getCatalogue } from "@/api";

export default function Home(props) {
  const {searchParams} = props;

  const [catalogue, setCatalogue] = useState(tableData);

  useEffect(()=>{
    if(Object.keys(searchParams).length>0){

      try{
            getCatalogue(searchParams).then(response=>{
                const result = response.map((item,i) => {
                  // console.log(item)
                  return ({...item, Size:item.size, id:i+1,
                Image_1: item['Image Links']?.[0] || item['Image_1']
                // Image Links
                
                })})
                
             
                setCatalogue(result);
            }
            );
        }catch(e){
            console.error(e.message);
        }
    }
  },[]);
  
  return (
    <>
    <Catalogue.Provider value={{catalogue, setCatalogue}}>
    <Navbar/>
    <div className="result">
      <h3 className="inter" style={{fontWeight:'500', fontSize:"18px"}}>Department List</h3>
        <ResultTable/>
    </div>
    </Catalogue.Provider>
    </>
  )
}
