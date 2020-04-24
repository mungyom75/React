import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers=[{
  'id':'2020192',
  'name':'mgkim',
  'image':'https://placeimg.com/64/64/any',
  'birthday':'2020192',
  'gender':'male',
  'job':'programmer'
},
{
  'id':'2020193',
  'name':'mgkim',
  'image':'https://placeimg.com/64/64/1',
  'birthday':'2020192',
  'gender':'male',
  'job':'programmer'
},
{
  'id':'2020194',
  'name':'mgkim',
  'image':'https://placeimg.com/64/64/2',
  'birthday':'2020192',
  'gender':'male',
  'job':'programmer'
}]
class App extends Component{
  render(){
    return(
      <div>
        {
          customers.map(c=> {
            return (
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
            );
          })
        }
      
      </div>
    );
  }
}

export default App;
