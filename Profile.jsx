import React, { useState } from "react";
import "./Profile.css";
import g from './g.jpeg';

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "Ram",
    lastName: "Amutharajan",
    email: "samithaa.amutharajan@gmail.com",
    phoneNumber: "9876543210",
    dateOfBirth: "17 Nov, 1996",
    batch: "2000",
    department: "Electronics and Communication Engineering",
    socialLinks: {
      linkedin: "https://www.linkedin.com",
      github: "https://github.com",
      email: "https://gmail.com",
    },
    workExperience: [
      {
        company: "Bosch",
        role: "Product Development Manager",
        duration: "2020 - Present",
        description: "Co-ordinated multiple product innovations",
        isEditing: false,
      },
      {
        company: "Qualcomm",
        role: "Project Manager",
        duration: "2018 - 2020",
        description: "Headed projects",
        isEditing: false,
      },
    ],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSocialLinksChange = (e) => {
    setFormData({
      ...formData,
      socialLinks: { ...formData.socialLinks, [e.target.name]: e.target.value },
    });
  };

  const handleWorkExperienceChange = (index, field, value) => {
    const updatedExperience = formData.workExperience.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp
    );
    setFormData({ ...formData, workExperience: updatedExperience });
  };

  const toggleEditExperience = (index) => {
    const updatedExperience = formData.workExperience.map((exp, i) =>
      i === index ? { ...exp, isEditing: !exp.isEditing } : exp
    );
    setFormData({ ...formData, workExperience: updatedExperience });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      workExperience: [
        ...formData.workExperience,
        {
          company: "",
          role: "",
          duration: "",
          description: "",
          isEditing: true,
        },
      ],
    });
  };

  const deleteExperience = (index) => {
    setFormData({
      ...formData,
      workExperience: formData.workExperience.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-columns">
        {/* Left Column */}
        <div className="profile-left">
          <div className="profile-header">
            <h1 className="profile-title">Profile</h1>
            <div className="profile-image-container">
              <img src={g} alt="Profile" className="profile-image" />
              <button className="camera-button">✎</button>
            </div>
          </div>

          <div className="profile-content">
            <div className="form-section">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-section">
            <div className="form-group">
            </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-section">
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="text"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Batch</label>
                <input
                  type="text"
                  name="batch"
                  value={formData.batch}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-section">
              <h3>Social Links</h3>
              <div className="form-group">
                <label>LinkedIn</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.socialLinks.linkedin}
                  onChange={handleSocialLinksChange}
                />
              </div>
              <div className="form-group">
                <label>GitHub</label>
                <input
                  type="url"
                  name="github"
                  value={formData.socialLinks.github}
                  onChange={handleSocialLinksChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="url"
                  name="email"
                  value={formData.socialLinks.email}
                  onChange={handleSocialLinksChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="profile-right">
          <div className="work-experience">
            <div className="work-header">
              <label className="work-title">Work Experience</label>
              <button onClick={addExperience} className="add-button">
                + Add Experience
              </button>
            </div>
            {formData.workExperience.map((exp, index) => (
              <div key={index} className="experience-card">
                {exp.isEditing ? (
                  <>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) =>
                        handleWorkExperienceChange(index, "company", e.target.value)
                      }
                      placeholder="Company"
                      className="edit-input"
                    />
                    <input
                      type="text"
                      value={exp.role}
                      onChange={(e) =>
                        handleWorkExperienceChange(index, "role", e.target.value)
                      }
                      placeholder="Role"
                      className="edit-input"
                    />
                    <input
                      type="text"
                      value={exp.duration}
                      onChange={(e) =>
                        handleWorkExperienceChange(index, "duration", e.target.value)
                      }
                      placeholder="Duration"
                      className="edit-input"
                    />
                    <textarea
                      value={exp.description}
                      onChange={(e) =>
                        handleWorkExperienceChange(index, "description", e.target.value)
                      }
                      placeholder="Description"
                      className="edit-input description"
                    />
                  </>
                ) : (
                  <>
                    <h3>{exp.company}</h3>
                    <p className="role">{exp.role}</p>
                    <p className="duration">{exp.duration}</p>
                    <p className="description">{exp.description}</p>
                  </>
                )}
                <div className="action-buttons">
                  <button onClick={() => toggleEditExperience(index)}>
                    {exp.isEditing ? "💾 Save" : "✎ Edit"}
                  </button>
                  <button
                    onClick={() => deleteExperience(index)}
                    className="delete-button"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
