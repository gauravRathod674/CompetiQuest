// app/profile/edit/page.jsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeft, FiUpload } from "react-icons/fi";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";




export default function EditProfile() {
  const [formData, setFormData] = useState({
    name: "Kavyaa11",
    email: "kavya@example.com",
    password: "",
    confirmPassword: "",
  });

  const [profileFile, setProfileFile] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);

  const router = useRouter();
  const { darkMode } = useTheme(); // get darkMode

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log("Updating profile:", formData);
    if (profileFile) console.log("Profile image file:", profileFile);
    router.push("/profile"); // Navigate back
  };

  const handleDeactivate = () => {
    if (
      confirm(
        "Are you sure you want to deactivate your account? This action cannot be undone."
      )
    ) {
      console.log("Deactivating account");
      router.push("/");
    }
  };

  return (
    <div className={`min-h-screen p-6 flex items-center justify-center ${darkMode ? "bg-secondary/35" : "bg-secondary/35"}`}>
      <div className="max-w-4xl w-full ">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => router.back()}
            className="mr-4 p-2 rounded-full hover:bg-accent/10 transition-colors"
          >
            
          </button>
          <h1 className={`text-2xl font-bold ${darkMode ? "text-foreground" : "text-foreground"}`}>Edit Profile</h1>
        </div>

        {/* Form */}
        <div className={`rounded-2xl shadow-md p-6 border border-border/50 ${darkMode ? "bg-secondary/35" : "bg-white"}`}>
          <form onSubmit={handleUpdateProfile} className="space-y-6">
            {/* Profile Photo */}
            <div className="flex items-center gap-6 mb-6">
              <div className={`w-24 h-24 rounded-full overflow-hidden border-2 flex items-center justify-center ${darkMode ? "border-border/50" : "border-border/50"}`}>
                {profilePreview ? (
                  <img
                    src={profilePreview}
                    alt="Profile Preview"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <Image
                    src="/profile_photo.png"
                    alt="Profile thumbnail"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
              <div>
                <label
                  htmlFor="profileUpload"
                  className="flex items-center gap-2 px-7 py-3 border-2 border-accent text-accent font-bold rounded-xl transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
          >
                  <FiUpload size={14} />
                  Upload
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="profileUpload"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setProfileFile(file);
                    setProfilePreview(file ? URL.createObjectURL(file) : null);
                  }}
                />
                {profileFile && (
                  <p className="mt-2 text-sm truncate">{profileFile.name}</p>
                )}
              </div>
            </div>

            {/* Username & Email */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className={`flex items-center gap-2 mb-1 ${darkMode ? "text-foreground" : "text-foreground"}`}>
                  <FaUser /> Username
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border ${darkMode ? "bg-secondary/35 text-foreground border-border/50" : "bg-white text-foreground border-border/50"}`}
                />
              </div>

              <div>
                <label className={`flex items-center gap-2 mb-1 ${darkMode ? "text-foreground" : "text-foreground"}`}>
                  <FaEnvelope /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border ${darkMode ? "bg-secondary/35 text-foreground border-border/50" : "bg-white text-foreground border-border/50"}`}
                />
              </div>

              <div>
                <label className={`flex items-center gap-2 mb-1 ${darkMode ? "text-foreground" : "text-foreground"}`}>
                  <FaLock /> New Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Leave blank to keep current"
                  className={`w-full px-4 py-2 rounded-lg border ${darkMode ? "bg-secondary/35 text-foreground border-border/50" : "bg-white text-foreground border-border/50"}`}
                />
              </div>

              <div>
                <label className={`flex items-center gap-2 mb-1 ${darkMode ? "text-foreground" : "text-foreground"}`}>
                  <FaLock /> Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Leave blank to keep current"
                  className={`w-full px-4 py-2 rounded-lg border ${darkMode ? "bg-secondary/35 text-foreground border-border/50" : "bg-white text-foreground border-border/50"}`}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button
                type="submit"
                className="hidden sm:block px-6 py-2 bg-accent/20 text-accent font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                className="flex items-center gap-2 px-7 py-3 border-2 border-accent text-accent font-bold rounded-xl transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
          >
                Cancel
              </button>
            </div>

            {/* Deactivate */}
            <div className="mt-6 flex items-center justify-between">
              <div>
                <h3 className={`font-medium ${darkMode ? "text-foreground" : "text-foreground"}`}>Deactivate your account</h3>
                <p className={`text-sm ${darkMode ? "text-muted-foreground" : "text-gray-500"}`}>
                  This will permanently delete your account and data.
                </p>
              </div>
              <button
                type="button"
                onClick={handleDeactivate}
                className="hidden sm:block px-6 py-2 bg-accent/20 text-accent font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                Deactivate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
