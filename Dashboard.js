import React from 'react';
import { useAuth } from './AuthContext'; 
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import file CSS


const AdminDashboard = () => {
    return (
        <div>
            <div className="header">
                <div className="logo">Silaen Library</div>
                <div className="user-info">
                    <span>Admin</span>
                    <a href="./login" style={{ color: 'white', marginLeft: '20px' }}>Logout</a>
                </div>
            </div>
            <div className="sidebar">
                <img alt="User profile picture" height="100" src="febri.jpg" width="100" />
                <a href="./login">
                    <i className="fas fa-tachometer-alt"></i> Dashboard
                </a>
                <a href="#">
                    <i className="fas fa-book"></i> Buku
                </a>
                <a href="#">
                    <i className="fas fa-users"></i> User Anggota
                </a>
                <a href="#">
                    <i className="fas fa-user"></i> User Petugas
                </a>
            </div>
            <div className="main-content">
                <h1>Admin Silaen Library</h1>
                <div className="stats">
                    <div className="stat">
                        <i className="fas fa-users" style={{ color: '#f44336' }}></i>
                        <h3>6 Anggota</h3>
                    </div>
                    <div className="stat">
                        <i className="fas fa-book" style={{ color: '#4caf50' }}></i>
                        <h3>4 Buku</h3>
                    </div>
                    <div className="stat">
                        <i className="fas fa-user-tie" style={{ color: '#9c27b0' }}></i>
                        <h3>3 Petugas</h3>
                    </div>
                    <div className="stat">
                        <i className="fas fa-user" style={{ color: '#ff9800' }}></i>
                        <h3>2 User</h3>
                    </div>
                </div>
                <div className="table-container">
                    <h2>Data Peminjaman</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Anggota</th>
                                <th>Judul Buku</th>
                                <th>Tanggal Pinjam</th>
                                <th>Tanggal Kembali</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Contoh data peminjaman */}
                            {[
                                { no: 1, nama: 'Nicky ', judul: 'Mencari Tuhan', pinjam: '2024-11-01', kembali: '2024-11-10', status: 'Returned' },
                                { no: 2, nama: 'Neuree Siagian', judul: '100 hari jadi Badut', pinjam: '2024-11-01', kembali: '2024-11-10', status: 'Overdue' },
                                { no: 3, nama: 'Jamot', judul: 'Matematika Diskrit', pinjam: '2024-11-01', kembali: '2024-11-10', status: 'Returned' },
                            ].map((item) => (
                                <tr key={item.no}>
                                    <td>{item.no}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.judul}</td>
                                    <td>{item.pinjam}</td>
                                    <td>{item.kembali}</td>
                                    <td>{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="alert">
                    <strong>Success!</strong> Data has been updated successfully.
                </div>
            </div>
        </div>
    );
};


export default AdminDashboard;