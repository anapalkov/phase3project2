import React from 'react';
import Header from './Header'
import NavBar from './NavBar'
import ItemContainer from './ItemContainer'
import Search from './Search'

// Contains Header + Categories Filter + Search Bar + NavBar + ItemContainer + Item

// will need a way to populate products from database and pass as a prop


const [searchText, setSearch] = useState("")

function ProductListPage() {
    return (
      <div>
        <Header />
        <NavBar />
        <Search setSearch={setSearch}/>
        <ItemContainer products/>       
      </div>
    );
  }
  
  export default ProductListPage;