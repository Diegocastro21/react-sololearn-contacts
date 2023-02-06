import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function AddPersonForm(props) {
  const [ person, setPerson ] = useState('');

  const [ name, setName ] = useState('');
  const [ age, setAge ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ phone, setPhone ] = useState('');
    
  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeAge(e) {
    setAge(e.target.value);
  }
  function handleChangeLocation(e) {
    setLocation(e.target.value);
  }
  function handleChangePhone(e) {
    setPhone(e.target.value);
  }
    
  function handleSubmit(e) {
    setPerson(
      {
        name,
        age,
        location,
        phone
      }
    )
    if(person !== '') {
      props.handleSubmit(person);
      setPerson('');
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="insert name" 
        onChange={handleChangeName} 
        value={name} />
      <input type="text" 
        placeholder="insert age" 
        onChange={handleChangeAge} 
        value={age} />
      <input type="text" 
        placeholder="insert location" 
        onChange={handleChangeLocation} 
        value={location} />
      <input type="text" 
        placeholder="insert phone number" 
        onChange={handleChangePhone} 
        value={phone} />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItem = arr.map((val, index) =>
    <li key={index}>
      Nombre: {val.name} <br/>
      Edad: {val.age} <br/>
      Lugar: {val.location} <br/>
      Telefono: {val.phone}
    </li>
    
  );
  return <ul>
    {listItem}
  </ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
const contacts = [
  {
    name: "James Smith",
    age: 18,
    location: "Medellin",
    phone: +5731232112321
    
  },
  { 
    name: "Thomas Anderson",
    age: 21,
    location: "Bogota",
    phone: +57313562112321
  }, 
  {
    name: "Bruce Wayne",
    age: 40,
    location: "Putumaho",
    phone: +5731487232321
  }

];

ReactDOM.render(
  <ContactManager data={contacts} />, 
  document.getElementById('root')
);