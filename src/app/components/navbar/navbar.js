'use client';
import './navbar.css';
import Image from 'next/image';
import { getCatalogue } from '@/api';
import { Catalogue } from '@/app/context';
import { useContext, useEffect,useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
export default function Navbar(){
    const {setCatalogue} = useContext(Catalogue);
    const searchParams = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [supplierQuery, setSupplierQuery] = useState('FragranceX')
    // const searchQuery = searchParams.get('search') || '';
    // const supplierQuery = searchParams.get('supplier') || 'FragranceX';
    // console.log({searchQuery, supplierQuery})
    const router = useRouter()
    
    useEffect(()=>{
        const search = searchParams.get('search');
        const supplier = searchParams.get('supplier') || 'FragranceX';
        if(search){
            setSearchQuery(()=>search);
            setSupplierQuery(()=>supplier);
        }
    },[])
    const search = (e)=>{
        'use client'
        e.preventDefault();
        const formData = new FormData(e.target);
        const search = formData.get('search');
        const supplier = formData.get('supplier')
        const searchParams = {search, supplier}; 
        const routerSearchParams = new URLSearchParams(searchParams).toString();
        router.push("?"+routerSearchParams, undefined, { shallow: true })
        try{
            getCatalogue(searchParams).then(response=>{
                const result = response.map((item,i) => ({...item, Size:item.size, id:i+1}))
                setCatalogue(result);
            }
            );
            
        }catch(e){
            console.error(e.message);
        }
    }

    

    const handleInputValueChange = (event)=>{
        setSearchQuery(event.target.value);
    }
    const handleSelectValueChange =(event)=>{
        setSupplierQuery(event.target.value);
    }
    return (
    <nav>

        <div className='navbrand centre'>
            <Image src={'/Unlimi.png'} width={206} height={56}
                className='navbrand-image'
            alt='unlimi nav-brand' priority quality={1}/>
        </div>


        <div className='nav-section'>

            <form className="search-container inter" onSubmit={(e)=>search(e)}>
                    <button type="submit">
                        <Image src={'/search.png'} width={18} height={18} alt='search-icon'/>
                    </button>
                    <input name='search' type="text"
                        onChange={handleInputValueChange}
                     value={searchQuery} placeholder="Search by patients..."/>
                    <select id="category" value={supplierQuery}
                    onChange={handleSelectValueChange}
                     name="supplier">
                        <option value="FragranceX">FragranceX</option>
                        <option value="FragranceNet">FragranceNet</option>
                        <option value="Morris Costumes">Morris Costumes</option>
                      
                    </select>
            </form>


            <div className='nav-items centre'>
                <Image src={'/notification.png'} height={37} width={37} alt='notification'/>
                <Image src={'/doctor.png'} style={{borderRadius:"50%"}} height={37} width={37} alt='notification'/>
                <span className='inter' style={{fontWeight:500, color:'#45464B', fontSize:'16px'}}>Deko</span>
                <Image src={'/arrow-down.png'}  height={7} width={16} alt='nav drop-down'/>
            </div>

        
        </div>
    </nav>)
}