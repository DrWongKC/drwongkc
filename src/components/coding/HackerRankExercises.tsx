import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const HackerRankExercises = () => {
  const blogPostCodeStringOne = `import { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [count, setCount] = useState(1);
  const [blogPosts, setBlogPosts] = useState([]);

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input
          count={count}
          setCount={setCount}
          blogPosts={blogPosts}
          setBlogPosts={setBlogPosts}
        />
      </div>
      <div className="posts-section">
        <PostDisplay blogPosts={blogPosts} setBlogPosts={setBlogPosts} />
      </div>
    </div>
  );
}

export default Home;`;
  const blogPostCodeStringTwo = `import { useState } from "react";

function Input({ setCount, count, setBlogPosts, blogPosts }) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  function handleTitle(e) {
    setInputTitle(e.target.value);
  }

  function handleDescription(e) {
    setInputDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputTitle == "" || inputDescription == "") {
    } else {
      setCount(count + 1);
      setBlogPosts([
        ...blogPosts,
        {
          id: count,
          title: inputTitle,
          description: inputDescription,
        },
      ]);
    }

    setInputTitle("");
    setInputDescription("");
  }

  return (
    <>
      <div className="layout-column justify-content-center align-items-center">
        <input
          className="w-100"
          type="text"
          placeholder="Enter Title"
          value={inputTitle}
          onChange={handleTitle}
          data-testid="title-input"
        />
        <textarea
          className="mt-10 w-100"
          placeholder="Enter Description"
          value={inputDescription}
          onChange={handleDescription}
          data-testid="description-input"
        />
      </div>
      <button
        data-testid="create-button"
        className="mt-10"
        onClick={handleSubmit}
      >
        Create Post
      </button>
    </>
  );
}

export default Input;`;
  const blogPostCodeStringThree = `function PostDisplay({ blogPosts, setBlogPosts }) {
  function deleteBlogPost(id) {
    setBlogPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== id),
    );
  }

  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {blogPosts.map((blogPost) => (
        <div key={blogPost.id} className="post-box">
          <h3>{blogPost.title + blogPost.id}</h3>
          <p>{blogPost.description}</p>
          <button onClick={() => deleteBlogPost(blogPost.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostDisplay;`;

  const contactFormCodeStringOne = `import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to validate inputs and display submitted data
    // HINT: You can use the setError function
    // Real-time validation
    if (name == "" || email == "" || message == "") {
      setError("All fields are required.");
    } else {
      // HINT: You can use the setSubmittedData function as below
      // setSubmittedData({ name, email, message });
      setSubmittedData({ name, email, message });
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      <div className="App">
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            data-testid="name-input"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            data-testid="email-input"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            data-testid="message-input"
          />
          <button type="submit" data-testid="submit-button">
            Submit
          </button>
        </form>
        {error && (
          <p data-testid="error-message" className="error">
            {error}
          </p>
        )}
        {submittedData && (
          <div data-testid="submitted-data" className="submitted-data">
            <h2>Submitted Information</h2>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Message:</strong> {submittedData.message}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default ContactForm;
`;

  const cryptoRankExchangeCodeStringOne = `import { useState } from "react";
import Table from "./Table";

function Main() {
  const [toBeExchanged, setToBeExchanged] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLessThan, setIsLessThan] = useState(false);
  const [isExceed, setIsExceed] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;

    // check if empty
    if (value === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }

    // check if value is less than 0.01
    if (value < 0.01) {
      setIsLessThan(true);
    } else {
      setIsLessThan(false);
    }

    // check if value exceeds 17042.67
    if (value > 17042.67) {
      setIsExceed(true);
    } else {
      setIsExceed(false);
    }

    // check if value includes a decimal point
    if (value.match(/\./g)) {
      const [, decimal] = value.split(".");

      // restrict value to only 2 decimal places
      if (decimal?.length > 2) {
        // do nothing
        return;
      }
    }

    // otherwise, update value in state
    setToBeExchanged(value);
  };

  const handleBlur = (e) => {
    const num = parseFloat(e.target.value);
    if (!isNaN(num)) {
      // Formats to fixed 2 decimal places
      setToBeExchanged(num.toFixed(2));
    }
  };

  return (
    <div className="layout-column align-items-center mx-auto">
      <h1>CryptoRank Exchange</h1>
      <p>{toBeExchanged}</p>
      <section>
        <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
          <label>
            I want to exchange ${" "}
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-10"
              data-testid="amount-input"
              required
              type="number"
              step="0.01"
              value={toBeExchanged}
            />{" "}
            of my $<span>17042.67</span>:
          </label>
          {isEmpty && (
            <p
              data-testid="error"
              className="form-hint error-text mt-3 pl-0 ml-0"
            >
              {"Amount cannot be empty"}
            </p>
          )}
          {isLessThan && (
            <p
              data-testid="error"
              className="form-hint error-text mt-3 pl-0 ml-0"
            >
              {"Amount cannot be less than $0.01"}
            </p>
          )}
          {isExceed && (
            <p
              data-testid="error"
              className="form-hint error-text mt-3 pl-0 ml-0"
            >
              {"Amount cannot exceed the available balance"}
            </p>
          )}
        </div>
      </section>
      <Table toBeExchanged={toBeExchanged} isExceed={isExceed} />
    </div>
  );
}

export default Main;
`;
  const cryptoRankExchangeCodeStringTwo = `import { cryptocurrencyList } from "../cryptocurrency-list";

function Table(props) {
  return (
    <div className="card card-text mt-10 mx-4">
      <table className="mb-0">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">
          {cryptocurrencyList.map((crypto) => (
            <tr key={crypto.code}>
              <td>{crypto.name}</td>
              <td>1 USD = {crypto.rate}</td>
              <td>
                {props.isExceed ? "n/a" : crypto.rate * props.toBeExchanged}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
`;
  const cryptoRankExchangeCodeStringThree = `export const cryptocurrencyList = [
  {
    code: "BNB",
    name: "BNB",
    rate: 0.00311839,
  },
  {
    code: "BTC",
    name: "Bitcoin",
    rate: 0.00004066,
  },
  {
    code: "DOGE",
    name: "Dogecoin",
    rate: 11.18558722,
  },
  {
    code: "ETH",
    name: "Ethereum",
    rate: 0.00059237,
  },
  {
    code: "XRP",
    name: "XRP",
    rate: 2.50682634,
  },
];
`;

  const employeeValidationRecordsCodeStringOne = `import React, { useState } from "react";

function EmployeeValidationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employeeId: "",
    joiningDate: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "Name must be at least 4 characters long and only contain letters and spaces.",
    email: "Email must be a valid email address.",
    employeeId: "Employee ID must be exactly 6 digits.",
    joiningDate: "Joining Date cannot be in the future.",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Perform validation checks and update error state
    if (
      name === "name" &&
      value.length >= 4 &&
      /^[A-Za-z\s]{4,}$/.test(value)
    ) {
      setFormErrors((prevState) => ({
        ...prevState,
        name: "",
      }));
    } else if (name === "email" && value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setFormErrors((prevState) => ({
        ...prevState,
        email: "",
      }));
    } else if (name === "employeeId" && value.length === 6) {
      setFormErrors((prevState) => ({
        ...prevState,
        employeeId: "",
      }));
    } else if (
      name === "joiningDate" &&
      value <= new Date().toISOString().split("T")[0]
    ) {
      setFormErrors((prevState) => ({
        ...prevState,
        joiningDate: "",
      }));
    } else {
      if (name === "name") {
        setFormErrors((prevState) => ({
          ...prevState,
          name: "Name must be at least 4 characters long and only contain letters and spaces.",
        }));
      } else if (name === "email") {
        setFormErrors((prevState) => ({
          ...prevState,
          email: "Email must be a valid email address.",
        }));
      } else if (name === "employeeId") {
        setFormErrors((prevState) => ({
          ...prevState,
          employeeId: "Employee ID must be exactly 6 digits.",
        }));
      } else if (name === "joiningDate") {
        setFormErrors((prevState) => ({
          ...prevState,
          joiningDate: "Joining Date cannot be in the future.",
        }));
      } else {
        console.log(
          "ERROR - This error should not be happening, check handleInputChange for information.",
        );
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation check
    const isFormValid = Object.values(formErrors).every(
      (error) => error === "",
    );

    if (isFormValid) {
      // Form submission logic
      console.log("Form submitted successfully!");
      // Reset the form
      setFormData({
        name: "",
        email: "",
        employeeId: "",
        joiningDate: "",
      });
      setFormErrors({
        name: "",
        email: "",
        employeeId: "",
        joiningDate: "",
      });
    } else {
      console.log("ERROR");
    }
  };

  return (
    <div className="layout-column align-items-center mt-20 ">
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-name"
      >
        <input
          onChange={handleInputChange}
          className="w-100"
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          data-testid="input-name-test"
        />
        {formErrors.name && (
          <p className="error mt-2">
            Name must be at least 4 characters long and only contain letters and
            spaces
          </p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-email"
      >
        <input
          onChange={handleInputChange}
          className="w-100"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
        />
        {formErrors.email && (
          <p className="error mt-2">Email must be a valid email address</p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-employee-id"
      >
        <input
          onChange={handleInputChange}
          className="w-100"
          type="number"
          name="employeeId"
          value={formData.employeeId}
          placeholder="Employee ID"
        />
        {formErrors.employeeId && (
          <p className="error mt-2">Employee ID must be exactly 6 digits</p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-joining-date"
      >
        <input
          onChange={handleInputChange}
          className="w-100"
          type="date"
          name="joiningDate"
          value={formData.joiningDate}
          placeholder="Joining Date"
        />
        {formErrors.joiningDate && (
          <p className="error mt-2">Joining Date cannot be in the future</p>
        )}
      </div>
      <button
        onSubmit={handleSubmit}
        disabled={
          formErrors.name != "" ||
          formErrors.email != "" ||
          formErrors.employeeId != "" ||
          formErrors.joiningDate != ""
        }
        data-testid="submit-btn"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;
`;

  const ItemListManagerCodeStringOne = `import { useState } from "react";

function ItemListManager() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    if (input.length > 0) {
      // TODO: Add logic to add input to items list
      setItems([...items, input]);
      setInput("");
    }
  };

  return (
    <>
      <div className="App">
        <h3>Item List</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
          data-testid="input-field"
        />
        <button onClick={handleAddItem} data-testid="add-button">
          Add Item
        </button>
        <ul data-testid="item-list">
          {items.map((item, index) => (
            <li key={index} data-testid="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ItemListManager;
`;

  const patientMedicalRecordsCodeStringOne = `import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import Search from "./components/Search";
import Records from "./components/Records";
import medical_records from "./medicalRecords";

const title = "Patient Medical Records";

const App = () => {
  const [startedSearch, setStartedSearch] = useState(false);
  const [records, setRecords] = useState();
  const [id, setId] = useState();

  setRecords(medical_records);

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="content">
        {
          <Search
            setRecords={setRecords}
            records={records}
            setId={id}
            id={id}
            setStartedSearch={setStartedSearch}
            startedSearch={startedSearch}
          />
        }
        {startedSearch && <Records records={records} />}
      </div>
    </div>
  );
};

export default App;
`;
  const patientMedicalRecordsCodeStringTwo = `import React, { useState } from "react";

function Search({
  setRecords,
  records,
  setId,
  id,
  setStartedSearch,
  startedSearch,
}) {
  const [showError, setShowError] = useState(false);

  const [userChoice, setUserChoice] = useState();

  const userNames = records.map((group) => group.data[0].userName);
  console.log(userNames);

  function handleClick(e) {
    if (userChoice != undefined) {
      setStartedSearch(true);
    }

    console.log(userChoice);
    if (userChoice === undefined) {
      setShowError(true);
      console.log("alert got called");
    } else {
      setShowError(false);
    }
  }

  return (
    <>
      <div className="layout-row align-items-baseline select-form-container">
        <div className="select">
          <select
            onChange={(e) => setUserChoice(e.target.value)}
            data-testid="patient-name"
            defaultValue="0"
          >
            <option key={0} value="0" disabled>
              Select Patient
            </option>
            {userNames.map((i) => (
              <option
                key={userNames.indexOf(i) + 1}
                value={userNames.indexOf(i) + 1}
              >
                {i}
              </option>
            ))}
          </select>
        </div>

        <button onClick={handleClick} type="submit" data-testid="show">
          Show
        </button>
      </div>
      {showError && <p>Please select a patient name.</p>}
    </>
  );
}

export default Search;
`;
  const patientMedicalRecordsCodeStringThree = `import React from "react";

function Records(records) {
  return (
    <div className="patient-profile-container" id="profile-view">
      <div className="layout-row justify-content-center">
        <div
          id="patient-profile"
          data-testid="patient-profile"
          className="mx-auto"
        >
          <h4 id="patient-name">{"Patient Name"}</h4>
          <h5 id="patient-dob">DOB: {"Patient DOB"}</h5>
          <h5 id="patient-height">Height: {"Patient Height"}</h5>
        </div>
        <button className="mt-10 mr-10" data-testid="next-btn">
          Next
        </button>
      </div>

      <table id="patient-records-table">
        <thead id="table-header">
          <tr>
            <th>SL</th>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Weight</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody id="table-body" data-testid="patient-table">
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Records;
`;
  const patientMedicalRecordsCodeStringFour = `const medical_records = [
  {
    id: "1",
    data: [
      {
        id: 6,
        timestamp: 1568550058964,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 155,
          bloodPressureSystole: 90,
          pulse: 130,
          breathingRate: 29,
          bodyTemperature: 99.2,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 173,
        },
      },
      {
        id: 7,
        timestamp: 1564691138999,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 147,
          bloodPressureSystole: 100,
          pulse: 138,
          breathingRate: 25,
          bodyTemperature: 100,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 196,
        },
      },
      {
        id: 8,
        timestamp: 1562157191823,
        diagnosis: {
          id: 2,
          name: "Common Cold",
          severity: 1,
        },
        vitals: {
          bloodPressureDiastole: 122,
          bloodPressureSystole: 77,
          pulse: 91,
          breathingRate: 20,
          bodyTemperature: 101.5,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 175,
        },
      },
      {
        id: 13,
        timestamp: 1551906996274,
        diagnosis: {
          id: 2,
          name: "Common Cold",
          severity: 1,
        },
        vitals: {
          bloodPressureDiastole: 121,
          bloodPressureSystole: 80,
          pulse: 91,
          breathingRate: 18,
          bodyTemperature: 101.3,
        },
        doctor: {
          id: 4,
          name: "Dr Allysa Ellis",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 180,
        },
      },
      {
        id: 15,
        timestamp: 1551566179628,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 136,
          bloodPressureSystole: 88,
          pulse: 112,
          breathingRate: 25,
          bodyTemperature: 99.3,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 192,
        },
      },
      {
        id: 22,
        timestamp: 1563243111785,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 139,
          bloodPressureSystole: 82,
          pulse: 105,
          breathingRate: 28,
          bodyTemperature: 97.1,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 196,
        },
      },
      {
        id: 24,
        timestamp: 1563805161434,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 144,
          bloodPressureSystole: 92,
          pulse: 137,
          breathingRate: 34,
          bodyTemperature: 102.5,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 191,
        },
      },
      {
        id: 30,
        timestamp: 1549051080085,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 130,
          bloodPressureSystole: 82,
          pulse: 114,
          breathingRate: 23,
          bodyTemperature: 98.6,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 188,
        },
      },
      {
        id: 33,
        timestamp: 1552027463340,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 133,
          bloodPressureSystole: 83,
          pulse: 126,
          breathingRate: 19,
          bodyTemperature: 99.7,
        },
        doctor: {
          id: 4,
          name: "Dr Allysa Ellis",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 185,
        },
      },
      {
        id: 41,
        timestamp: 1546789224456,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 151,
          bloodPressureSystole: 96,
          pulse: 130,
          breathingRate: 26,
          bodyTemperature: 103,
        },
        doctor: {
          id: 4,
          name: "Dr Allysa Ellis",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 174,
        },
      },
    ],
  },
  {
    id: "2",
    data: [
      {
        id: 1,
        timestamp: 1565637002408,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 154,
          bloodPressureSystole: 91,
          pulse: 125,
          breathingRate: 32,
          bodyTemperature: 100,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 172,
        },
      },
      {
        id: 2,
        timestamp: 1562539731129,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 139,
          bloodPressureSystole: 81,
          pulse: 104,
          breathingRate: 20,
          bodyTemperature: 99.4,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 171,
        },
      },
      {
        id: 3,
        timestamp: 1563465027370,
        diagnosis: {
          id: 2,
          name: "Common Cold",
          severity: 1,
        },
        vitals: {
          bloodPressureDiastole: 125,
          bloodPressureSystole: 76,
          pulse: 113,
          breathingRate: 22,
          bodyTemperature: 100.8,
        },
        doctor: {
          id: 4,
          name: "Dr Allysa Ellis",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 185,
        },
      },
      {
        id: 16,
        timestamp: 1568085122164,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 136,
          bloodPressureSystole: 85,
          pulse: 117,
          breathingRate: 29,
          bodyTemperature: 99.9,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 186,
        },
      },
      {
        id: 17,
        timestamp: 1547084560364,
        diagnosis: {
          id: 2,
          name: "Common Cold",
          severity: 1,
        },
        vitals: {
          bloodPressureDiastole: 129,
          bloodPressureSystole: 79,
          pulse: 102,
          breathingRate: 16,
          bodyTemperature: 103.4,
        },
        doctor: {
          id: 4,
          name: "Dr Allysa Ellis",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 185,
        },
      },
      {
        id: 20,
        timestamp: 1549184918171,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 145,
          bloodPressureSystole: 94,
          pulse: 125,
          breathingRate: 25,
          bodyTemperature: 102.6,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 181,
        },
      },
      {
        id: 26,
        timestamp: 1564765981840,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 144,
          bloodPressureSystole: 90,
          pulse: 135,
          breathingRate: 28,
          bodyTemperature: 99.2,
        },
        doctor: {
          id: 4,
          name: "Dr Allysa Ellis",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 178,
        },
      },
      {
        id: 31,
        timestamp: 1555004832077,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 154,
          bloodPressureSystole: 90,
          pulse: 138,
          breathingRate: 26,
          bodyTemperature: 102.9,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 178,
        },
      },
      {
        id: 32,
        timestamp: 1554074088481,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 135,
          bloodPressureSystole: 82,
          pulse: 119,
          breathingRate: 29,
          bodyTemperature: 97.8,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 183,
        },
      },
      {
        id: 35,
        timestamp: 1560628606015,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 151,
          bloodPressureSystole: 98,
          pulse: 140,
          breathingRate: 27,
          bodyTemperature: 100.7,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 186,
        },
      },
    ],
  },
  {
    id: "3",
    data: [
      {
        id: 9,
        timestamp: 1548036340751,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 147,
          bloodPressureSystole: 96,
          pulse: 130,
          breathingRate: 28,
          bodyTemperature: 101,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 106,
        },
      },
      {
        id: 10,
        timestamp: 1562161672195,
        diagnosis: {
          id: 2,
          name: "Common Cold",
          severity: 1,
        },
        vitals: {
          bloodPressureDiastole: 127,
          bloodPressureSystole: 78,
          pulse: 130,
          breathingRate: 22,
          bodyTemperature: 103.8,
        },
        doctor: {
          id: 4,
          name: "Dr Allysa Ellis",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 110,
        },
      },
      {
        id: 11,
        timestamp: 1563846626267,
        diagnosis: {
          id: 2,
          name: "Common Cold",
          severity: 1,
        },
        vitals: {
          bloodPressureDiastole: 126,
          bloodPressureSystole: 75,
          pulse: 99,
          breathingRate: 22,
          bodyTemperature: 101.9,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 108,
        },
      },
      {
        id: 18,
        timestamp: 1560177927736,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 141,
          bloodPressureSystole: 96,
          pulse: 123,
          breathingRate: 29,
          bodyTemperature: 99,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 103,
        },
      },
      {
        id: 25,
        timestamp: 1551539005307,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 154,
          bloodPressureSystole: 90,
          pulse: 131,
          breathingRate: 22,
          bodyTemperature: 103,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 107,
        },
      },
      {
        id: 27,
        timestamp: 1556836728887,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 133,
          bloodPressureSystole: 84,
          pulse: 124,
          breathingRate: 26,
          bodyTemperature: 99.2,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 109,
        },
      },
      {
        id: 29,
        timestamp: 1551436887626,
        diagnosis: {
          id: 2,
          name: "Common Cold",
          severity: 1,
        },
        vitals: {
          bloodPressureDiastole: 124,
          bloodPressureSystole: 80,
          pulse: 129,
          breathingRate: 21,
          bodyTemperature: 102.3,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 107,
        },
      },
      {
        id: 34,
        timestamp: 1553964012428,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 151,
          bloodPressureSystole: 95,
          pulse: 126,
          breathingRate: 29,
          bodyTemperature: 102.9,
        },
        doctor: {
          id: 4,
          name: "Dr Allysa Ellis",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 102,
        },
      },
      {
        id: 42,
        timestamp: 1551568255913,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 133,
          bloodPressureSystole: 86,
          pulse: 115,
          breathingRate: 26,
          bodyTemperature: 97.7,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 110,
        },
      },
      {
        id: 47,
        timestamp: 1568317109556,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 139,
          bloodPressureSystole: 83,
          pulse: 124,
          breathingRate: 26,
          bodyTemperature: 99.7,
        },
        doctor: {
          id: 4,
          name: "Dr Allysa Ellis",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 104,
        },
      },
    ],
  },
];

export default medical_records;
`;

  return (
    <div>
      <h2 className="heading">HackerRank Exercises</h2>
      <div>
        <h4>(Completed) Blog Post [Data Handling]</h4>
        <ol>
          <li>
            The "Blog Post" component should have two input fields: one for the
            post title and another for the post description (textarea).
          </li>
          <li>
            The application should display a "Create" button that, when clicked,
            adds a new blog post to the list of existing posts.
          </li>
          <li>
            The "Create" button should only add a post if both the title and
            description fields have values. If either field is empty, the button
            should not create a post.
          </li>
          <li>
            Once a post is successfully created, both the title and description
            fields should be cleared.
          </li>
          <li>
            The list of created blog posts should be displayed in grid layout,
            with each post appearing inside a box.
          </li>
          <li>
            Each box should include:
            <ul>
              <li>The post's title.</li>
              <li>The post's description</li>
              <li>
                A "Delete" button to remove the specific post from the list.
              </li>
            </ul>
          </li>
        </ol>
        <h4>Preview</h4>
        <div className="flex-container">
          <div className="flex-div">
            <h5>Before:</h5>
            <img
              className="flex-img"
              src={
                "https://i.postimg.cc/Pr06QKgS/screencapture-main-ironpack-hrcdn-net-2026-10-22-18-03-36.png"
              }
            />
          </div>
          <div className="flex-div">
            <h5>After:</h5>
            <img
              className="flex-img"
              src={
                "https://i.postimg.cc/VLjxCTvc/screencapture-main-ironpack-hrcdn-net-2026-10-22-18-30-08.png"
              }
            />
          </div>
        </div>
        <h4>Solution</h4>
        <>
          <h5>Home.js</h5>
          <SyntaxHighlighter language="javascript" style={docco}>
            {blogPostCodeStringOne}
          </SyntaxHighlighter>
          <h5>Input.js</h5>
          <SyntaxHighlighter language="javascript" style={docco}>
            {blogPostCodeStringTwo}
          </SyntaxHighlighter>
          <h5>PostDisplay.js</h5>
          <SyntaxHighlighter language="javascript" style={docco}>
            {blogPostCodeStringThree}
          </SyntaxHighlighter>
        </>
      </div>
      <div>
        <h4>(Completed) Contact Form [Forms]</h4>
        <p>
          You need to create a simple React application called "Contact Form"
          that collects user information and displays it below the form upon
          submission. This task will help you practice handling form inputs,
          validation, and conditional rendering in React.
        </p>
        <ol>
          <li>Form Structure:</li>
          <ul>
            <li>The form should have the following fields:</li>
            <ul>
              <li>Name: Text input for the user's name.</li>
              <li>Email: Text input for the user's email address.</li>
              <li>Message: Textarea for the user's message.</li>
            </ul>
          </ul>
          <li>Form Submission:</li>
          <ul>
            <li>There should be a "Submit" button to submit the form.</li>
          </ul>
          <li>Form Validation:</li>
          <ul>
            <li>Validate that none of the fields are empty upon submission.</li>
            <li>
              If any field is empty, display an error message: "All fields are
              required." The forms hould not be submitted.
            </li>
          </ul>
          <li>Displaying Submitted Data:</li>
          <ul>
            <li>
              If the form is successfully submitted, display the entered
              information below the form.
            </li>
            <li>Clear the input fields after a successful submission.</li>
          </ul>
        </ol>
        <h4>Preview</h4>
        <div className="flex-container">
          <div className="flex-div">
            <h5>Before:</h5>
            <img className="flex-img" src={"google.com"} />
          </div>
          <div className="flex-div">
            <h5>After:</h5>
            <img className="flex-img" src={"google.com"} />
          </div>
        </div>
        <h4>Solution</h4>
        <h5>ContactForm.js</h5>
        <SyntaxHighlighter language="javascript" style={docco}>
          {contactFormCodeStringOne}
        </SyntaxHighlighter>
      </div>
      <div>
        <h4>(Completed) CryptoRank Exchange [Data Handling]</h4>
        <p>
          Develop a React application called "CryptoRank Exchange" to estimate
          the number of cryptocurrency coins a user can receive based on an
          entered amount of fiat currency. The application requirements are
          detailed below, and the finished application must pass all unit tests.
        </p>
        <ol>
          <li>Fields and Display:</li>
          <ul>
            <li>Input Field: Allows entry of the amount to be exchanged.</li>
            <li>
              Table: Displays "Exchange Rate" and "Number of Coins" for each
              cryptocurrency.
            </li>
          </ul>
          <li>User Interactions:</li>
          <ul>
            <li>Users input an amount within their available balance.</li>
            <li>
              Amount is mandatory, ranging from $0.01 to the available balance.
            </li>
            <li>If invalid, show an error message.</li>
            <li>
              By default, the input field is empty with no error message and
              "Number of Coins" as 0.00000000.
            </li>
            <li>Table updates dynamically as the amount is modified.</li>
          </ul>
          <li>Conversion Calculation:</li>
          <ul>
            <li>
              "Number of Coins" = (Amount & Exchange Rate), rounded to 8 decimal
              places.
            </li>
            <li>
              Invalid amounts displayed "n/a" in the "Number of Coins" column.
            </li>
          </ul>
          <li>Error Messages:</li>
          <ul>
            <li>Empty input: "Amount cannot be empty".</li>
            <li>Amount less than 0.01: "Amountcannotbelessthan 0.01".</li>
            <li>
              Amount greater than available balance: "Amount cannot exceed the
              available balance".
            </li>
          </ul>
        </ol>
        <h4>Preview</h4>
        <div className="flex-container">
          <div className="flex-div">
            <h5>Before:</h5>
            <img className="flex-img" src={"google.com"} />
          </div>
          <div className="flex-div">
            <h5>After:</h5>
            <img className="flex-img" src={"google.com"} />
          </div>
        </div>
        <h4>Solution</h4>
        <h5>Main.js</h5>
        <SyntaxHighlighter language="javascript" style={docco}>
          {cryptoRankExchangeCodeStringOne}
        </SyntaxHighlighter>
        <h5>Table.js</h5>
        <SyntaxHighlighter language="javascript" style={docco}>
          {cryptoRankExchangeCodeStringTwo}
        </SyntaxHighlighter>

        <h5>cryptocurrency-list.js</h5>
        <SyntaxHighlighter language="javascript" style={docco}>
          {cryptoRankExchangeCodeStringThree}
        </SyntaxHighlighter>
      </div>
      <div>
        <h4>(Completed) Employee Validation [Forms]</h4>
        <p>
          Your task is to create a React application that helps employees
          validate and update their exisiting information through a survey form.
          The application requirements are detailed below, and the finished
          application must pass all of the unit tests.
        </p>
        <h5>Detailed Requirements</h5>
        <ol>
          <li>
            The EmployeeValidationForm component collects employee details
            through four input fields: Name, Email, Employee ID, and Joining
            Date.
          </li>
          <li>
            Each input field should have validation logic to ensure that the
            data entered meets the specified requirements.
          </li>
          <li>
            A submit button should be present at the bottom of the form but
            remain disabled until all fields are valid.
          </li>
          <li>
            If a field does not meet the criteria, an error message should be
            displayed below that field.
          </li>
          <li>
            When the form is valid and submitted, all input fields should be
            cleared, and the form should be reset to its initial state.
          </li>
        </ol>
        <h5>Validation Criteria</h5>
        <ul>
          <li>
            Name Field: Must be at least 4 characters long and can only contain
            alphabetical characters (A-Z, a-z) and spaces.
          </li>
          <li>
            Email Field: Must be in a valid email format (e.g.,
            user@example.com).
          </li>
          <li>Employee ID Field: Must be exactly 6 numeric digits.</li>
          <li>Joining Date Field: Cannot be set to a date in the future.</li>
        </ul>
        <h4>Preview</h4>
        <div className="flex-container">
          <div className="flex-div">
            <h5>Before:</h5>
            <img className="flex-img" src={"google.com"} />
          </div>
          <div className="flex-div">
            <h5>After:</h5>
            <img className="flex-img" src={"google.com"} />
          </div>
        </div>
        <h4>Solution</h4>
        <h5>EmployeeValidation.js</h5>
        <SyntaxHighlighter language="javascript" style={docco}>
          {employeeValidationRecordsCodeStringOne}
        </SyntaxHighlighter>
      </div>
      <div>
        <h4>(Completed) Item List Manager [Components]</h4>
        <p>
          You are tasked with creating a simple React application called "Item
          List Manager" that displays a list of items and allows users to add
          new items to the list. The items will be displayed in an unordered
          list, and there will be an input field along with a button to add new
          items to this list.
        </p>
        <ol>
          <li>When the application loads, it should display an empty list.</li>
          <li>The input field should accept user text input.</li>
          <li>When the button is clocked:</li>
          <ol>
            <li>The text from the input field should be added to the list.</li>
            <li>The input field should be cleared.</li>
            <li>
              If the input field is empty and the button is clicked, nothing
              should be added to the list.
            </li>
          </ol>
        </ol>
        <h4>Preview</h4>
        <div className="flex-container">
          <div className="flex-div">
            <h5>Before:</h5>
            <img className="flex-img" src={"google.com"} />
          </div>
          <div className="flex-div">
            <h5>After:</h5>
            <img className="flex-img" src={"google.com"} />
          </div>
        </div>
        <h4>Solution</h4>
        <h5>ItemListManager.js</h5>
        <SyntaxHighlighter language="javascript" style={docco}>
          {ItemListManagerCodeStringOne}
        </SyntaxHighlighter>
      </div>
      <div>
        <h4>(Could Not Complete) Patient Medical Records [Interaction]</h4>
        <p>
          In this challenge, you will create a React application called "Patient
          Medical Records" that allows users to view and cycle through patients'
          medical records. The application requirements are outlined below, and
          your finished implementation must pass all provided unit tests.
        </p>
        <ol>
          <li>
            The application consists of two components: Search and Records.
          </li>
          <li>
            The search component must have a dropdown selet menu populated with
            3 patient names from a file named medicalRecords.js. By default, the
            dropdown should display "Select Patient" with both selected and
            disabled attributes.
          </li>
          <li>
            When the application is first loaded, no record table or "Next"
            button should be visible.
          </li>
          <li>Show Button Functionality:</li>
          <ul>
            <li>
              If the user clicks "Show" without selecting a patient, an alert
              should appear with the message: "Please select a patient name".
            </li>
            <li>
              If a patient is selected, clicking "Show" should display a table
              containing all of the selected patient's details and medical
              records. The table must also include a "Next" button to navigate
              through records.
            </li>
          </ul>
          <li>Next Button Functionality:</li>
          <ul>
            <li>
              Clicking "Next" should display the medical records for the next
              patient in the list based on their ID.
            </li>
            <li>
              If the last patient's records are being displayed, clicking "Next"
              should loop back to the first patient's records.
            </li>
          </ul>
        </ol>
        <h4>Preview</h4>
        <div className="flex-container">
          <div className="flex-div">
            <h5>Before:</h5>
            <img className="flex-img" src={"google.com"} />
          </div>
          <div className="flex-div">
            <h5>After:</h5>
            <img className="flex-img" src={"google.com"} />
          </div>
        </div>
        <h4>Solution</h4>
        <h5>App.js</h5>
        <SyntaxHighlighter language="javascript" style={docco}>
          {patientMedicalRecordsCodeStringOne}
        </SyntaxHighlighter>
        <h5>Search.js</h5>
        <SyntaxHighlighter language="javascript" style={docco}>
          {patientMedicalRecordsCodeStringTwo}
        </SyntaxHighlighter>
        <h5>Records.js</h5>
        <SyntaxHighlighter language="javascript" style={docco}>
          {patientMedicalRecordsCodeStringThree}
        </SyntaxHighlighter>
        <h5>medicalRecords.js</h5>
        <SyntaxHighlighter language="javascript" style={docco}>
          {patientMedicalRecordsCodeStringFour}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default HackerRankExercises;
