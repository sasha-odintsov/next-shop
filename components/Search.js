import { useState } from "react";

export default function Search({value}) {
  const [search, setSearch] = useState('');
  value(search)
  
  return(
    <>
      <input 
      type='text' 
      placeholder="Search..." 
      value={search} 
      onChange={(e) => setSearch(e.target.value)} 
      className="border rounded p-2"
      />
    </>
  )
}