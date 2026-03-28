# REST API Mahasiswa (Express.js)

## Deskripsi
API sederhana untuk mengelola data mahasiswa menggunakan Node.js dan Express.js tanpa database.

## Cara Menjalankan
1. npm install
2. node app.js

## Endpoint

### 1. Home
GET /
Response:
API Mahasiswa berjalan

### 2. GET Semua Mahasiswa
GET /students

### 3. GET Mahasiswa by ID
GET /students/:id

### 4. POST Tambah Mahasiswa
POST /students

Body:
{
  "nama": "Dewi",
  "jurusan": "Informatika"
}

### 5. PUT Update
PUT /students/:id

### 6. DELETE
DELETE /students/:id
