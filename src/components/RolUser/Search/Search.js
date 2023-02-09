import React, {useState, useEffect} from "react";
import { Main,ContainerDividor,ContainerSearch,Form,ContainerTable,InputSearch, Icon,ButtonEdit,ButtonResults
} from './Search.css.js';
import TypeRole from '../Modals/TypeRole/TypeRole';
import Result from '../Modals/Result/Result';

function Search() {

const [ users, setUsers] = useState([])
const [ search, setSearch] = useState("")
const [eventoActual, setEventActual]= useState(0);

const [ usuario, setUsuario ] = useState([]);

const [estadoModal, cambiarEstado] = useState(false);

const [estadoModal2, cambiarEstado2] = useState(false);

const handleShowEventDetails = (eventIndex,user) =>{
  cambiarEstado(!estadoModal);
  setEventActual(eventIndex);
  setUsuario(user);
}

const handleShowBoton = () =>{
  cambiarEstado2(!estadoModal2);
}

const URL='https://jsonplaceholder.typicode.com/users'
const showData = async () =>{
  const response = await fetch(URL)
  const data = await response.json()
  console.log(data)
  setUsers(data)
}

const searcher = (e) => {
  setSearch(e.target.value)
}

const results = !search ?  users : users.filter ((dato) =>dato.email.toLowerCase().includes(search.toLocaleLowerCase()))

useEffect ( ()=>{
  showData()
}, [])

return (
    <Main>
      <div className="container-fluid">
        <ContainerDividor>

          <ContainerSearch>
            <Form>
              <InputSearch value={search} onChange={searcher} type="search" name="users" placeholder="Buscar email"/>
            </Form>
          </ContainerSearch>

          <ContainerTable className="table-responsive">
            <table className="table table-borderless table-hover">
              <thead>
                <tr className="text-white">
                  <th scope="col">Name</th>
                  <th scope="col">User name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Rol</th>
                </tr>
              </thead>
              <tbody>
                { results && 
                results.map( (user,index)=>(
                  
                  <tr key={user.id}>
                    <th  scope="row">{user.name}</th>
                    <th>{user.username}</th>
                    <th>{user.phone}</th>
                    <th>{user.email}</th>
                    <th><ButtonEdit onClick={() => handleShowEventDetails(index,user)}><Icon src={require("../../../assets/icon-edit.png")} /></ButtonEdit></th>
                  </tr>
                ))}
              </tbody>
            </table>
          </ContainerTable>
          <ButtonResults onClick={() => handleShowBoton()}>¿No encuentras resultados?</ButtonResults>
        </ContainerDividor>
      </div>
      <TypeRole estado={estadoModal} cambiarEstado={cambiarEstado} resultado={usuario.name}></TypeRole>
      <Result estado2={estadoModal2} cambiarEstado2={cambiarEstado2} ></Result>      
    </Main>
    
  );
}

export default Search;