import React, { useEffect, useState } from "react";

function AdmissionList() {
  const [admissions, setAdmissions] = useState([]);
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("admissions")) || [];
    setAdmissions(data);
  }, []);

  // 🔍 Search Filter
  const filteredData = admissions.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.mobile.includes(search)
  );

  // ❌ Delete
  const handleDelete = (index) => {
    if (!window.confirm("Delete this record?")) return;

    const updated = admissions.filter((_, i) => i !== index);
    setAdmissions(updated);
    localStorage.setItem("admissions", JSON.stringify(updated));
  };

  // ✏️ Edit
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(admissions[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleUpdate = () => {
    const updated = [...admissions];
    updated[editIndex] = editData;

    setAdmissions(updated);
    localStorage.setItem("admissions", JSON.stringify(updated));
    setEditIndex(null);

    alert("Updated Successfully ✅");
  };

  // 📊 Dashboard Data
  const total = admissions.length;
  const paid = admissions.filter(i => i.payment_status === "Paid").length;
  const pending = admissions.filter(i => i.payment_status === "Pending").length;

  return (
    <div style={{ padding: "20px" }}>

      <h2>📋 Admission Dashboard</h2>

      {/* 📊 Dashboard Cards */}
      <div style={styles.cards}>
        <div style={styles.card}>Total: {total}</div>
        <div style={{ ...styles.card, background: "#28a745" }}>Paid: {paid}</div>
        <div style={{ ...styles.card, background: "#dc3545" }}>Pending: {pending}</div>
      </div>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search by name or mobile..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {/* 📋 Table */}
      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Payment</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              {editIndex === index ? (
                <>
                  <td><input name="name" value={editData.name} onChange={handleChange} /></td>
                  <td><input name="mobile" value={editData.mobile} onChange={handleChange} /></td>
                  <td><input name="course" value={editData.course} onChange={handleChange} /></td>
                  <td><input name="batch" value={editData.batch} onChange={handleChange} /></td>
                  <td><input name="payment_status" value={editData.payment_status} onChange={handleChange} /></td>
                  <td>
                    <button onClick={handleUpdate} style={styles.update}>Save</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                  <td>{item.course}</td>
                  <td>{item.batch}</td>
                  <td>{item.payment_status}</td>
                  <td>
                    <button onClick={() => handleEdit(index)} style={styles.edit}>Edit</button>
                    <button onClick={() => handleDelete(index)} style={styles.delete}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  cards: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  card: {
    flex: 1,
    background: "#007bff",
    color: "#fff",
    padding: "15px",
    textAlign: "center",
    borderRadius: "5px",
    fontWeight: "bold"
  },
  search: {
    padding: "10px",
    width: "100%",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  edit: {
    background: "orange",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    marginRight: "5px"
  },
  delete: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "5px 10px"
  },
  update: {
    background: "green",
    color: "#fff",
    border: "none",
    padding: "5px 10px"
  }
};

export default AdmissionList;