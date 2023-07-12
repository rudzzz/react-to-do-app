const Search = ({search, setSearch}) => {
    return (
        <div className="search">
            <h2>Search</h2>
            <input type="text" placeholder="Search.." value={search} onChange={ (event) => setSearch(event.target.value)}/>
        </div>
    )
}

export default Search;