import React, { useState } from "react";

function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    father_name: "",
    dob: "",
    mobile: "",
    email: "",
    address: "",
    aadhaar: "",
    course: "",
    batch: "",
    start_date: "",
    duration: "",
    pickup: false,
    payment_status: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldData = JSON.parse(localStorage.getItem("admissions")) || [];
    const newData = [...oldData, formData];

    localStorage.setItem("admissions", JSON.stringify(newData));

    alert("Admission Saved ✅");

    setFormData({
      name: "",
      father_name: "",
      dob: "",
      mobile: "",
      email: "",
      address: "",
      aadhaar: "",
      course: "",
      batch: "",
      start_date: "",
      duration: "",
      pickup: false,
      payment_status: ""
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🚗 Driving School Admission</h2>

        <form onSubmit={handleSubmit}>
          <div style={styles.grid}>
            <input style={styles.input} name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            <input style={styles.input} name="father_name" placeholder="Father Name" value={formData.father_name} onChange={handleChange} />

            <input style={styles.input} type="date" name="dob" value={formData.dob} onChange={handleChange} />
            <input style={styles.input} name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} />

            <input style={styles.input} name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input style={styles.input} name="aadhaar" placeholder="Aadhaar Number" value={formData.aadhaar} onChange={handleChange} />

            <select style={styles.input} name="course" value={formData.course} onChange={handleChange}>
              <option value="">Select Course</option>
              <option>2 Wheeler</option>
              <option>4 Wheeler</option>
              <option>Both</option>
            </select>

            <select style={styles.input} name="batch" value={formData.batch} onChange={handleChange}>
              <option value="">Select Batch</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>

            <input style={styles.input} type="date" name="start_date" value={formData.start_date} onChange={handleChange} />

            <select style={styles.input} name="duration" value={formData.duration} onChange={handleChange}>
              <option value="">Duration</option>
              <option>15 Days</option>
              <option>30 Days</option>
            </select>

            <select style={styles.input} name="payment_status" value={formData.payment_status} onChange={handleChange}>
              <option value="">Payment Status</option>
              <option>Paid</option>
              <option>Pending</option>
            </select>
          </div>

          <textarea style={styles.textarea} name="address" placeholder="Address" value={formData.address} onChange={handleChange}></textarea>

          <div style={styles.checkbox}>
            <label>
              <input type="checkbox" name="pickup" checked={formData.pickup} onChange={handleChange} /> Pickup Required
            </label>
          </div>

          <button style={styles.button} type="submit">Submit Admission</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: { background: "#f4f7fb", minHeight: "100vh", padding: "30px" },
  card: { maxWidth: "900px", margin: "auto", background: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0 5px 20px rgba(0,0,0,0.1)" },
  title: { textAlign: "center", marginBottom: "20px" },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" },
  input: { padding: "10px", borderRadius: "5px", border: "1px solid #ccc" },
  textarea: { marginTop: "15px", width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" },
  checkbox: { marginTop: "15px" },
  button: { marginTop: "20px", width: "100%", padding: "12px", background: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }
};

export default AdmissionForm;