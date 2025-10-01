"use client";

import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { FaUser, FaEnvelope, FaSignOutAlt, FaHeadset, FaHome, FaBars } from "react-icons/fa";
import FuturisticLoader from "@/components/main/loader";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [queries, setQueries] = useState([]);
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editForm, setEditForm] = useState({ firstName: "", lastName: "" });
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleContact = () => {
    window.location.href = "/contact";
  };

  const goHome = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) { setInitialLoading(false); return; }

        let decoded = null;
        try { decoded = jwt_decode(token); } catch (err) { console.error("Invalid token", err); }

        if (decoded) {
          setUser({
            firstName: decoded.firstName || decoded.name?.split(" ")[0] || "User",
            lastName: decoded.lastName || decoded.name?.split(" ").slice(1).join(" ") || "",
            email: decoded.email || "",
          });
          setEditForm({
            firstName: decoded.firstName || decoded.name?.split(" ")[0] || "",
            lastName: decoded.lastName || decoded.name?.split(" ").slice(1).join(" ") || "",
          });
        }

        const resQueries = await fetch("/api/queries", { headers: { Authorization: `Bearer ${token}` } });
        const dataQueries = await resQueries.json();
        if (resQueries.ok && dataQueries.queries) setQueries(dataQueries.queries);
      } catch (err) { console.error(err); }
      finally { setTimeout(() => setInitialLoading(false), 500); }
    };

    fetchData();
  }, []);

  const handleSaveProfile = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) { alert("Token missing!"); setLoading(false); return; }

      const res = await fetch("/api/profile/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ firstName: editForm.firstName, lastName: editForm.lastName }),
      });
      const data = await res.json();
      if (res.ok && data.user) { setUser(data.user); setIsEditing(false); alert("Profile updated"); }
      else alert(data.message || "Failed");
    } catch (err) { console.error(err); alert("Server error"); }
    finally { setLoading(false); }
  };

  if (initialLoading || !user) return <FuturisticLoader />;

  return (
    <div className="flex min-h-screen font-sans bg-gray-50 text-gray-900 relative">

      {/* Mobile Hamburger */}
      <div className="sm:hidden absolute top-4 right-4 z-50">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-900 text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed sm:relative top-0 h-full pb-10 w-72 bg-white shadow-lg flex flex-col justify-between transition-transform duration-300 z-40
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}>
        <div>
          <h3 className="text-2xl ml-2 font-semibold mb-6 flex items-center gap-2 cursor-pointer" onClick={goHome}>
            <FaHome /> Home
          </h3>
          <nav className="space-y-2">
            <button
              className={`flex items-center gap-3 p-3 w-full text-left rounded hover:bg-gray-100 transition font-medium ${activeTab === "profile" ? "bg-gray-100" : ""}`}
              onClick={() => setActiveTab("profile")}
            >
              <FaUser /> Profile
            </button>
            <button
              className={`flex items-center gap-3 p-3 w-full text-left rounded hover:bg-gray-100 transition font-medium ${activeTab === "queries" ? "bg-gray-100" : ""}`}
              onClick={() => setActiveTab("queries")}
            >
              <FaEnvelope /> Queries
            </button>
            <button
              className="flex items-center gap-3 p-3 w-full text-left rounded hover:bg-gray-100 transition mt-4 font-medium"
              onClick={handleContact}
            >
              <FaHeadset /> Contact / Support
            </button>
            <button
              className="flex items-center gap-3 p-3 w-full text-left rounded hover:bg-gray-100 transition mt-4 font-medium"
              onClick={() => setShowModal(true)}
            >
              <FaSignOutAlt /> Logout
            </button>
          </nav>
        </div>
      
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/30 z-30 sm:hidden" onClick={() => setSidebarOpen(false)}></div>}

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-10 sm:ml-72 space-y-8">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Welcome back, <span className="text-gray-900 font-semibold">{user.firstName}</span>
        </h1>

        {/* Profile Tab */}
        {activeTab === "profile" && (
       <section className="bg-white rounded-xl shadow-md p-6 sm:p-8 max-w-2xl">
  <h2 className="text-xl sm:text-2xl font-semibold mb-6">Profile</h2>

  {isEditing ? (
    <div className="space-y-4">
      <input
        type="text"
        value={editForm.firstName}
        onChange={(e) => setEditForm({ ...editForm, firstName: e.target.value })}
        className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
        placeholder="First Name"
      />
      <input
        type="text"
        value={editForm.lastName}
        onChange={(e) => setEditForm({ ...editForm, lastName: e.target.value })}
        className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
        placeholder="Last Name"
      />
      <div className="flex flex-col sm:flex-row gap-3 mt-2">
        <button
          onClick={handleSaveProfile}
          disabled={loading}
          className="px-5 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition font-medium"
        >
          {loading ? "Saving..." : "Save"}
        </button>
        <button
          onClick={() => setIsEditing(false)}
          className="px-5 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  ) : (
    <>
      <div className="space-y-2">
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      {/* Button wrapper OUTSIDE the info div */}
      <div className="flex justify-start sm:justify-end mt-5">
        <button
          onClick={() => { setIsEditing(true); setEditForm({ firstName: user.firstName, lastName: user.lastName }); }}
          className="px-5 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition font-medium"
        >
          Edit Profile
        </button>
      </div>
    </>
  )}
</section>

        )}

        {/* Queries Tab */}
        {activeTab === "queries" && (
          <section className="bg-white rounded-xl shadow-md p-6 sm:p-8 max-w-4xl">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">My Queries</h2>
            {queries.length === 0 ? (
              <p className="text-gray-500">No queries yet.</p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {queries.map((q) => (
                  <li key={q._id} className="py-3 flex flex-col sm:flex-row justify-between hover:bg-gray-50 transition px-2 sm:px-4">
                    <div>
                      <p className="text-gray-600 text-sm">{new Date(q.createdAt).toLocaleString()}</p>
                      <p className="font-medium text-gray-800">{q.name} ({q.email})</p>
                      <p className="text-gray-700">{q.message}</p>
                      {q.company && <p className="text-gray-500 text-sm">{q.company}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}
      </main>

      {/* Logout Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center space-y-4">
            <h3 className="text-xl font-semibold">Confirm Logout</h3>
            <p className="text-gray-700">Are you sure you want to logout?</p>
            <div className="flex justify-between mt-4">
              <button onClick={() => setShowModal(false)} className="px-5 py-2 bg-gray-200 rounded hover:bg-gray-300 transition font-medium">
                Cancel
              </button>
              <button onClick={handleLogout} className="px-5 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition font-medium">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
