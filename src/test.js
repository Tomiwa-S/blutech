const data = [
  {
    "id": 1,
    
    "SKU": "MG234567",
    "Name": "Gloss",
    "Title": "Beauty and glamour",
    "Description": "Lorem ipsum dolor sit amet consectetur.",
    "Brand": 18.00,
    "Cost Price": 38.00,
    "Quantity": 36,
    "Size": "1,800"
  },
  {
    "id": 2,
    
    "SKU": "MG234567",
    "Name": "Gloss",
    "Title": "Beauty and glamour",
    "Description": "Lorem ipsum dolor sit amet consectetur.",
    "Brand": 18.00,
    "Cost Price": 38.00,
    "Quantity": 36,
    "Size": "1,800"
  },
  {
    "id": 3,
    
    "SKU": "MG234567",
    "Name": "Gloss",
    "Title": "Gadget",
    "Description": "Lorem ipsum dolor sit amet consectetur.",
    "Brand": 18.00,
    "Cost Price": 38.00,
    "Quantity": 36,
    "Size": "1,800"
  },
  {
    "id": 4,
    
    "SKU": "MG234567",
    "Name": "Gloss",
    "Title": "Shoe",
    "Description": "Lorem ipsum dolor sit amet consectetur.",
    "Brand": 18.00,
    "Cost Price": 38.00,
    "Quantity": 36,
    "Size": "1,800"
  },
  {
    "id": 5,
    
    "SKU": "MG234567",
    "Name": "Gloss",
    "Title": "Cream",
    "Description": "Lorem ipsum dolor sit amet consectetur.",
    "Brand": 18.00,
    "Cost Price": 38.00,
    "Quantity": 36,
    "Size": "1,800"
  },
  {
    "id": 6,
    
    "SKU": "MG234567",
    "Name": "Gloss",
    "Title": "Lotions",
    "Description": "Lorem ipsum dolor sit amet consectetur.",
    "Brand": 18.00,
    "Cost Price": 38.00,
    "Quantity": 36,
    "Size": "1,800"
  },
  {
    "id": 7,
    
    "SKU": "MG234567",
    "Name": "Gloss",
    "Title": "Beauty and glamour",
    "Description": "Lorem ipsum dolor sit amet consectetur.",
    "Brand": 18.00,
    "Cost Price": 38.00,
    "Quantity": 36,
    "Size": "1,800"
  },
  {
    "id": 8,
    
    "SKU": "MG234567",
    "Name": "Gloss",
    "Title": "Watch",
    "Description": "Lorem ipsum dolor sit amet consectetur.",
    "Brand": 18.00,
    "Cost Price": 38.00,
    "Quantity": 36,
    "Size": "1,800"
  },
  {
    "id": 9,
    
    "SKU": "MG234567",
    "Name": "Gloss",
    "Title": "Beauty and glamour",
    "Description": "Lorem ipsum dolor sit amet consectetur.",
    "Brand": 18.00,
    "Cost Price": 38.00,
    "Quantity": 36,
    "Size": "1,800"
  },
  {
    "id": 10,
    
    "SKU": "MG234567",
    "Name": "Gloss",
    "Title": "Beauty and glamour",
    "Description": "Lorem ipsum dolor sit amet consectetur.",
    "Brand": 18.00,
    "Cost Price": 38.00,
    "Quantity": 36,
    "Size": "1,800"
  }
];

const tableData = data.map((data, index)=>({...data, Image_1:`/images/${index+1}.png` }))
export {tableData}