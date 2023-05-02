export default function Search({ onChange }) {
  
  return(
    <input 
      type='text' 
      placeholder="Search..." 
      onChange={(e) => onChange(e.target.value)} 
      className="border rounded p-2"
    />
  )
}