
import React, { FC,useState } from "react";

// Defining an interface for the form data
interface FormData {
  name: string;
  email: string;
  address:string;
  number : [];
  
}


const App: FC = () => {
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    address:"",
    number:[]
  });

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div>
      <h1>Submit Form in TypeScript</h1>
      <form className="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        <br /><br />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
        <br /><br />
        <label htmlFor="address">Mobile Number:</label>
        <input type="number" id="number" name="number" value={formData.number} onChange={handleChange} />
        <br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
