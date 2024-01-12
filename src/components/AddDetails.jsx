import React, {useState} from 'react';
import './addDetails.css';

const AddDetails = ({updatePersonData}) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    interests: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePersonData(formData);
    setFormData({
      name: '',
      description: '',
      interests: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={{marginRight: '10px'}}>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label style={{marginRight: '10px'}}>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Interests:
        <input
          type="text"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddDetails;
