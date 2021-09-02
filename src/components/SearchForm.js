import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();

  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus();
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className='section search'>
      <div className="search-form">
        <form className='form-control' onSubmit={handleSubmit}>
          <label htmlFor="name">
            search and get high
            <input type="text" name="name" id="name" ref={searchValue} onChange={searchCocktail}/>
          </label>
        </form>
      </div>
    </section>
  )
}

export default SearchForm
