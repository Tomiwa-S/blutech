
const clippedTextStyle = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal',
    lineHeight: '15px',
    alignItems: 'center',
    border: 'none',
    wordWrap: 'break-word',
  };

  
export const tableStyle = {
            border:'0',
            "& .MuiDataGrid-container--top": {
                 all: "unset",
            },
            '& .MuiDataGrid-columnHeader':{
                backgroundColor:'#F0F4FE',
                color:'#595959',
                fontFamily:'Euclid Circular B SemiBold',
            },

            '& .MuiDataGrid-columnHeaders':{
                marginBottom:"1rem",

            },
            '& .MuiDataGrid-row':{
                fontFamily:"Euclid Circular B Bold",
                fontSize:"12px",
                textWrap:"wrap",
                border:"none",
                margin:'0',
                position:'relative',
                textAlign:'center',
            },
            '& .MuiDataGrid-row::after':{
                content:"''",
                display:'block',
                width:"96%",
                borderBottom:"2px solid #F0F4FE",
                bottom:0,
                left:"50%",
                transform: "translateX(-50%)",
                position:'absolute'
            },
            '& .css-s1v7zr-MuiDataGrid-virtualScrollerRenderZone *':{
                border:'none'
            },
            '& .MuiDataGrid-cell--textLeft':{
                textOverflow:"unset",
                whiteSpace:"unset",
                lineHeight:"15px",
                display:"flex",
                alignItems:'center',
                border:'none',
                ...clippedTextStyle
            },
            '& .MuiDataGrid-cell--textLeft + *':{
                height:"30px",
                margin:'auto'
            },
            '& .css-s1v7zr-MuiDataGrid-virtualScrollerRenderZone':{
                backgroundColor:'#FFFFFF',
                borderRadius:'12px'
            },
            '& .MuiDataGrid-filler .css-8yphpr':{
                height:'unset',
                display:'none'
            },
            '& .MuiDataGrid-cell:focus': {
                outline: 'none',
                },

            '& .MuiDataGrid-cell:focus-within': {
                outline: 'none',
            },
            ,
            '& .css-z9kl1x .MuiDataGrid-filler, .MuiDataGrid-filler ':{
                backgroundColor:'#F0F4FE',
            }
        }
