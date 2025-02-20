import React, { useContext, useState } from "react";
import { FormInterface } from "../types/FormType";
import { useNavigate } from "react-router-dom";
import "../styles/form.css";
import CPtextBox from "../fr-components/CPtextbox";
import CPradio from "../fr-components/CPradio";
import CPcheckbox from "../fr-components/CPcheckbox";
import CPdropdown from "../fr-components/CPdropdown";
import { TableContext } from "../Routes";
const Form = () => {
  const navigate = useNavigate();
  const { tableFields, setTableFields } = useContext(TableContext);
  const skills = [
    "JavaScript",
    "TypeScript",
    "React JS",
    "Node JS",
    "Postgres",
    "AWS",
  ];
  const education = ["M.E", "B.E", "B.Tech", "B.Sc", "Diploma"];

  const [formInputs, setFormInputs] = useState<FormInterface>({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    skills: [],
    education: "",
  });
  const [formErrors, setFormErrors] = useState<any>({
    firstName: false,
    lastName: false,
    email: false,
    gender: false,
    skills: false,
    education: false,
  });

  const textBoxOnchange = (fieldObj: any) => {
    setFormInputs({ ...formInputs, [fieldObj.name]: fieldObj.value });
  };

  const genderOnChange = (newInput: any) => {
    setFormInputs({ ...formInputs, gender: newInput });
  };
  const skillsOnChange = (skill: string, action: "add" | "remove") => {
    if (action == "add")
      setFormInputs({ ...formInputs, skills: [...formInputs.skills, skill] });
    else {
      const removedSkills = formInputs.skills.filter(
        (skillEle) => skillEle !== skill
      );
      setFormInputs({ ...formInputs, skills: removedSkills });
    }
  };

  const submitFn = (event: any) => {
    event.preventDefault();
    setTableFields([...tableFields,formInputs]);
    navigate('/table')
  };

  return (
    <form className="form-container">
      <CPtextBox
        title="First Name : "
        value={formInputs.firstName}
        name="firstName"
        onChange={(e) => textBoxOnchange(e.target)}
      />
      <CPtextBox
        title="Last Name : "
        value={formInputs.lastName}
        name="lastName"
        onChange={(e) => textBoxOnchange(e.target)}
      />
      <CPtextBox
        title="Email : "
        value={formInputs.email}
        name="email"
        onChange={(e) => textBoxOnchange(e.target)}
      />
      <CPradio
        title="Gender : "
        groupName="Gender"
        fields={["Male", "Female"]}
        onChange={genderOnChange}
      />
      <CPcheckbox title="Skills : " fields={skills} onChange={skillsOnChange} />
      <CPdropdown
        title="Highest Level of Education"
        fields={education}
        onChange={(newEducation: string) =>
          setFormInputs({ ...formInputs, education: newEducation })
        }
      />
      <div>
        <button type="submit" onClick={(e) => submitFn(e)}>
          submit
        </button>
        <button onClick={() => navigate("/")}>Cancel</button>
      </div>
    </form>
  );
};

export default Form;
