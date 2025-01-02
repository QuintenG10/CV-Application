import React, { useState } from 'react';
import CVForm from './CVForm';  // Import CVForm
import { jsPDF } from 'jspdf';  // Import jsPDF to generate PDF
import './App.css';

function App() {
  // State for personal information, education, and experience
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const [education, setEducation] = useState([
    { schoolName: '', degree: '', date: '' }
  ]);
  
  const [experience, setExperience] = useState([
    { companyName: '', position: '', responsibilities: '', startDate: '', endDate: '' }
  ]);

  // Function to generate the resume as a PDF
  const generateResumePDF = () => {
    const doc = new jsPDF();

    // Add Personal Information to the PDF
    doc.setFontSize(16);
    doc.text('Personal Information', 20, 30);
    doc.setFontSize(12);
    doc.text(`Name: ${personalInfo.name}`, 20, 40);
    doc.text(`Email: ${personalInfo.email}`, 20, 50);
    doc.text(`Phone: ${personalInfo.phone}`, 20, 60);

    // Add Education to the PDF
    doc.setFontSize(16);
    doc.text('Education Experience', 20, 80);
    let yPos = 90;
    education.forEach((edu, index) => {
      doc.setFontSize(12);
      doc.text(`${index + 1}. ${edu.schoolName} - ${edu.degree} (${edu.date})`, 20, yPos);
      yPos += 10;
    });

    // Add Work Experience to the PDF
    doc.setFontSize(16);
    doc.text('Practical Experience', 20, yPos + 20);
    yPos += 30;
    experience.forEach((exp, index) => {
      doc.setFontSize(12);
      doc.text(`${index + 1}. ${exp.companyName} - ${exp.position} (${exp.startDate} to ${exp.endDate})`, 20, yPos);
      yPos += 10;
      doc.text(`Responsibilities: ${exp.responsibilities}`, 20, yPos);
      yPos += 15;
    });

    // Save the generated PDF
    doc.save('resume.pdf');
  };

  return (
    <div className="app-container">
      <h1>CV Form</h1>
      <CVForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        education={education}
        setEducation={setEducation}
        experience={experience}
        setExperience={setExperience}
      />
      {/* Button to download the generated resume as a PDF */}
      <button onClick={generateResumePDF}>Download Resume</button>
    </div>
  );
}

export default App;