import {useState, useEffect} from 'react';
import './App.css';
import AddDetails from './components/AddDetails';
import InfoCards from './components/InfoCards';

const App = () => {
  const [personData, setPersonData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        // 'http://localhost:3000/details/users'
        'https://userdetailsbackend.onrender.com/details/users'
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const userData = await response.json();
      setPersonData(userData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const postUpdateData = async (data) => {
    try {
      await fetch(
        // 'http://localhost:3000/details/user'
        'https://userdetailsbackend.onrender.com/details/user',
        {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
    } catch (error) {
      console.error('Error posting data:', error.message);
    }
  };

  const postDeleteData = async (data) => {
    try {
      await fetch(
        // 'http://localhost:3000/details/destroy'
        'https://userdetailsbackend.onrender.com/details/destory',
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
    } catch (error) {
      console.error('Error deleting data:', error.message);
    }
  };

  const updatePersonData = (formData) => {
    const {name, description, interests} = formData;
    const newPerson = {
      name: name,
      description: description,
      linkedin: 'https://www.linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      interests: interests.split(' '),
    };

    // Use spread operator to create a new array with the existing and new objects
    setPersonData((prevPersonData) => [...prevPersonData, newPerson]);
    postUpdateData(newPerson);
  };

  const deletePersonData = (data) => {
    const updatedData = personData.filter((element) => {
      return !(
        element.name === data.name &&
        element.description === data.description
      );
    });

    setPersonData(updatedData);
    postDeleteData(data);
  };

  return (
    <div>
      <AddDetails updatePersonData={updatePersonData} />
      <InfoCards
        personData={personData}
        deletePersonData={deletePersonData}
      />
    </div>
  );
};

export default App;
