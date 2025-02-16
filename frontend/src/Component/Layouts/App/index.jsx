import React from 'react';
import AdminHeader from './AdminHeader'; // Import header
import Footer from './Footer'; // Import footer

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      <main className="flex-grow p-4 bg-gray-100">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function Index() {
  return (
    <AdminLayout>
      <div>
        <h1>Welcome to Admin Panel</h1>
      </div>
    </AdminLayout>
  );
}

export default Index;
