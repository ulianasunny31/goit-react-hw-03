/* eslint-disable react/prop-types */
import { useId } from 'react';
import css from './SearchBox.module.css'



const SearchBox = ({searchWord, onSearch}) => {
  
  const searchInputId = useId();

  return (
    <div className={css.searchBoxDiv}>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input id={searchInputId}
        name='search'
        value={searchWord}
        type='text'
        onChange={(e) => { onSearch(e.target.value) }}
         >
        </input>
    </div>
  )
}

export default SearchBox;