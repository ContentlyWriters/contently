"use client";

import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

import { FaUser, FaEnvelope, FaSignOutAlt, FaHeadset } from "react-icons/fa";
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleContact = () => {
    window.location.href = "/contact";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setInitialLoading(false);
          return;
        }

        // ✅ Decode token
        let decoded = null;
        try {
          decoded = jwt_decode(token);
        } catch (err) {
          console.error("Invalid token", err);
        }

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

        // Fetch queries
        const resQueries = await fetch("/api/queries", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const dataQueries = await resQueries.json();
        if (resQueries.ok && dataQueries.queries) setQueries(dataQueries.queries);

      } catch (err) {
        console.error(err);
      } finally {
        setTimeout(() => setInitialLoading(false), 500);
      }
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
      if (res.ok && data.user) { setUser(data.user); setIsEditing(false); alert("Profile updated ✅"); }
      else alert(data.message || "Failed ❌");
    } catch (err) { console.error(err); alert("Server error ❌"); }
    finally { setLoading(false); }
  };

  if (initialLoading || !user) return <FuturisticLoader />;

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-gradient-to-b from-[#5b6cf2] to-[#3b45a1] text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-12 tracking-wide">Dashboard</h1>
          <nav className="space-y-4">
            <button
              className={`flex items-center gap-4 p-3 rounded-xl w-full text-left hover:bg-white/10 transition font-medium ${activeTab === "profile" ? "bg-white/20" : ""}`}
              onClick={() => setActiveTab("profile")}
            >
              <FaUser size={20} /> Profile
            </button>
            <button
              className={`flex items-center gap-4 p-3 rounded-xl w-full text-left hover:bg-white/10 transition font-medium ${activeTab === "queries" ? "bg-white/20" : ""}`}
              onClick={() => setActiveTab("queries")}
            >
              <FaEnvelope size={20} /> Queries
            </button>
            <button
              className="flex items-center gap-4 p-3 rounded-xl w-full text-left hover:bg-white/10 transition font-medium mt-6"
              onClick={handleContact}
            >
              <FaHeadset size={20} /> Contact / Support
            </button>
            <button
              className="flex items-center gap-4 p-3 rounded-xl w-full text-left hover:bg-white/10 transition font-medium mt-6"
              onClick={() => setShowModal(true)}
            >
              <FaSignOutAlt size={20} /> Logout
            </button>
          </nav>
        </div>
        <div className="text-sm text-white/70">v1.0.0</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 space-y-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome back, <span className="text-[#5b6cf2]">{user.firstName}</span>
        </h1>

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <section className="bg-white shadow-2xl rounded-2xl p-8 max-w-2xl transition-all">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Profile</h2>
            {isEditing ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={editForm.firstName}
                  onChange={(e) => setEditForm({ ...editForm, firstName: e.target.value })}
                  className="border border-gray-300 px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#5b6cf2]"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  value={editForm.lastName}
                  onChange={(e) => setEditForm({ ...editForm, lastName: e.target.value })}
                  className="border border-gray-300 px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#5b6cf2]"
                  placeholder="Last Name"
                />
                <div className="flex gap-4 mt-2">
                  <button
                    onClick={handleSaveProfile}
                    disabled={loading}
                    className="px-6 py-2 bg-black text-white rounded-xl hover:bg-[#5b6cf2] transition font-semibold"
                  >
                    {loading ? "Saving..." : "Save"}
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400 transition font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <p><strong>First Name:</strong> {user.firstName}</p>
                <p><strong>Last Name:</strong> {user.lastName}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <button
                  onClick={() => { setIsEditing(true); setEditForm({ firstName: user.firstName, lastName: user.lastName }); }}
                  className="mt-4 px-6 py-2 bg-[#5b6cf2] text-white rounded-xl hover:bg-[#4a56d1] transition font-semibold"
                >
                  Edit Profile
                </button>
              </div>
            )}
          </section>
        )}

        {/* Queries Tab */}
        {activeTab === "queries" && (
          <section className="bg-white shadow-2xl rounded-2xl p-8 max-w-4xl transition-all">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">My Queries</h2>
            {queries.length === 0 ? (
              <p className="text-gray-500">No queries yet.</p>
            ) : (
              <ul className="space-y-4">
                {queries.map((q) => (
                  <li key={q._id} className="border-l-4 border-[#5b6cf2] pl-4 py-3 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                    <p className="text-sm text-gray-500">📅 {new Date(q.createdAt).toLocaleString()}</p>
                    <p className="font-medium text-gray-700">{q.name} ({q.email})</p>
                    <p className="text-gray-600">{q.message}</p>
                    {q.company && <p className="text-sm text-gray-400">🏢 {q.company}</p>}
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}
      </main>

      {/* Logout Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 text-center space-y-4">
            <h2 className="text-2xl font-semibold">Confirm Logout</h2>
            <p className="text-gray-600">Are you sure you want to logout?</p>
            <div className="flex justify-between mt-4">
              <button onClick={() => setShowModal(false)} className="px-6 py-2 bg-gray-300 rounded-xl hover:bg-gray-400 transition font-semibold">
                Cancel
              </button>
              <button onClick={handleLogout} className="px-6 py-2 bg-black text-white rounded-xl hover:bg-[black]\80 transition font-semibold">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
