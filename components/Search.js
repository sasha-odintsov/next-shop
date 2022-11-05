import { useState } from "react";
import styles from '../styles/Form.module.css';

export default function Search({value}) {
  const [search, setSearch] = useState('');
  value(search)
  
  return(
    <>
      <input type='text' placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className={styles.search}/>
    </>
  )
}