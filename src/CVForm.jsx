import React from 'react';

const CVForm = ({ personalInfo, setPersonalInfo, education, setEducation, experience, setExperience }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission, for example, logging the form data
    console.log('Submitted:', { personalInfo, education, experience });
  };

  return (
    <form className="cv-form" onSubmit={handleSubmit}>
      {/* Personal Information Section */}
      <div>
        <h3>Personal Information</h3>
        <label>Name:</label>
        <input 
          type="text" 
          value={personalInfo.name} 
          onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
        />
        <label>Email:</label>
        <input 
          type="email" 
          value={personalInfo.email} 
          onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
        />
        <label>Phone:</label>
        <input 
          type="text" 
          value={personalInfo.phone} 
          onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
        />
      </div>

      {/* Education Experience Section */}
      <div>
        <h3>Education Experience</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <label>School Name:</label>
            <input 
              type="text" 
              value={edu.schoolName} 
              onChange={(e) => {
                const updatedEducation = [...education];
                updatedEducation[index].schoolName = e.target.value;
                setEducation(updatedEducation);
              }}
            />
            <label>Degree:</label>
            <input 
              type="text" 
              value={edu.degree} 
              onChange={(e) => {
                const updatedEducation = [...education];
                updatedEducation[index].degree = e.target.value;
                setEducation(updatedEducation);
              }}
            />
            <label>Date:</label>
            <input 
              type="text" 
              value={edu.date} 
              onChange={(e) => {
                const updatedEducation = [...education];
                updatedEducation[index].date = e.target.value;
                setEducation(updatedEducation);
              }}
            />
          </div>
        ))}
      </div>

      {/* Practical Experience Section */}
      <div>
        <h3>Practical Experience</h3>
        {experience.map((exp, index) => (
          <div key={index}>
            <label>Company Name:</label>
            <input 
              type="text" 
              value={exp.companyName} 
              onChange={(e) => {
                const updatedExperience = [...experience];
                updatedExperience[index].companyName = e.target.value;
                setExperience(updatedExperience);
              }}
            />
            <label>Position:</label>
            <input 
              type="text" 
              value={exp.position} 
              onChange={(e) => {
                const updatedExperience = [...experience];
                updatedExperience[index].position = e.target.value;
                setExperience(updatedExperience);
              }}
            />
            <label>Responsibilities:</label>
            <input 
              type="text" 
              value={exp.responsibilities} 
              onChange={(e) => {
                const updatedExperience = [...experience];
                updatedExperience[index].responsibilities = e.target.value;
                setExperience(updatedExperience);
              }}
            />
            <label>Start Date:</label>
            <input 
              type="text" 
              value={exp.startDate} 
              onChange={(e) => {
                const updatedExperience = [...experience];
                updatedExperience[index].startDate = e.target.value;
                setExperience(updatedExperience);
              }}
            />
            <label>End Date:</label>
            <input 
              type="text" 
              value={exp.endDate} 
              onChange={(e) => {
                const updatedExperience = [...experience];
                updatedExperience[index].endDate = e.target.value;
                setExperience(updatedExperience);
              }}
            />
          </div>
        ))}
      </div>

      {/* Submit Button */}
    </form>
  );
};

export default CVForm;