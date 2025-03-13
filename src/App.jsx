import reactLogo from './assets/react.svg'
import './App.css'
import { Persons } from './Persons';
import { PersonForm } from './PersonForm';
import { usePersons } from './persons/custom-hooks';
import { useState } from 'react';
import { Notify } from './Notify';
import { PhoneForm } from './PhoneForm';

function App() {
  const { loading, error, data } = usePersons();
  const [errorMessage, setErrorMessage] = useState(null);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const notifyError = message => {
    setErrorMessage(message);
    setTimeout( () => setErrorMessage(null), 5000)
  }

  return (
    <>
      <div className='App'>
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div>
          <Notify errorMessage={errorMessage}/>
        </div>
        <div>
          <h1>GraphQL</h1>
          {data &&
            <Persons persons={data.allPersons}/>
          }
        </div>
        <PhoneForm notifyError={notifyError}/>
        <PersonForm notifyError={notifyError}/>
      </div>
    </>
  )
}

export default App
