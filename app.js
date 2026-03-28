const express = require("express");
const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// data dummy
let students = [
  { id: 1, nama: "Andi", jurusan: "Informatika" },
  { id: 2, nama: "Budi", jurusan: "Sistem Informasi" },
  { id: 3, nama: "Citra", jurusan: "Teknik Komputer" },
];

// route utama
app.get("/", (req, res) => {
  res.send("API Mahasiswa berjalan");
});


// GET semua
app.get("/students", (req, res) => {
  res.json(students);
});

// GET by ID
app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
  }

  res.json(student);
});

// POST
app.post("/students", (req, res) => {
  const { nama, jurusan } = req.body;

  if (!nama || !jurusan) {
    return res.status(400).json({ message: "Data tidak lengkap" });
  }

  const newStudent = {
    id: students.length + 1,
    nama,
    jurusan,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nama, jurusan } = req.body;

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
  }

  student.nama = nama;
  student.jurusan = jurusan;

  res.json(student);
});

// DELETE
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
  }

  students.splice(index, 1);

  res.json({ message: "Mahasiswa berhasil dihapus" });
});

// server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
