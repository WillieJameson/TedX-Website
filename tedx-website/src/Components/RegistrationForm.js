import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const history = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: new Date().toString(),
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/4dd20c6a-3c5e-4860-8abe-400017d4cc03",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        history.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
    // window.location.replace("/thanks");
    window.location.reload('true')
  };
  return (
    <form className="mx-10" 
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center" >
      <div className="grid lg:grid-cols-2 lg:gap-5 grid-cols-1">
        <div className="col-span-1">
        <label htmlFor="firstName" className="form-label block text-lg font-archivo">
          First Name
        </label>
        
        <input required
          type="text"
          className="form-control mb-3 p-2 w-full rounded-md text-black"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          autoComplete="off"
        />
        </div>
      
      <div className=" col-span-1">
        <label htmlFor="lastName" className="form-label block text-lg font-archivo">
          Last Name
        </label>
        <input required
          type="text"
          className="form-control mb-3 p-2 w-full rounded-md text-black"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      </div>
      <div className="mb-3 mt-2">
        <label htmlFor="email" className="form-label text-lg block font-archivo">
          Email
        </label>
        <input required
          type="email"
          className="form-control mb-3 p-2 w-full rounded-md text-black"
          name="email"
          value={data.email}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <p className="font-archivo lg:text-lg py-3 text-sm">
      Note: <br />After you have pressed the SUBMIT button, your site will reload. But, worry not, your data will still go through. More details will be sent via email 1 day prior to our event.
      </p>
      <div className=" text-center">
        <button className=" text-center rounded-lg border-2 border-red-500 w-20 py-1 hover:bg-red-500 text-red-500 font-semibold hover:text-white mt-5 font-archivo">Submit</button>
        </div>
    </form>
  );
};

export default Add;