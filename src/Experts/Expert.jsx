import React from "react";

const experts = [
  {
    name: "Rohit Gupta",
    role: "Chartered Accountant (CA)",
    img: "https://i.pravatar.cc/150?img=11",
    phone: "919876543210",
  },
  {
    name: "Neha Agarwal",
    role: "Tax Consultant (GST & ITR)",
    img: "https://i.pravatar.cc/150?img=12",
    phone: "919876543211",
  },
  {
    name: "Sandeep Mehta",
    role: "Financial Advisor",
    img: "https://i.pravatar.cc/150?img=13",
    phone: "919876543212",
  },
  {
    name: "Pooja Sharma",
    role: "Accounts Manager",
    img: "https://i.pravatar.cc/150?img=14",
    phone: "919876543213",
  },
  {
    name: "Amit Jain",
    role: "Auditor",
    img: "https://i.pravatar.cc/150?img=15",
    phone: "919876543214",
  },
  {
    name: "Kavita Singh",
    role: "Bookkeeping Expert",
    img: "https://i.pravatar.cc/150?img=16",
    phone: "919876543215",
  },
];

const Expert = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      
      <h1 className="text-3xl font-bold text-center mb-10">
        Talk to an Accounting Expert
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {experts.map((expert, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
          >
            
            {/* Profile Image */}
            <div className="relative">
              <img
                src={expert.img}
                alt={expert.name}
                className="w-24 h-24 mx-auto rounded-full mb-2"
              />

              {/* 🟢 Online Status */}
              <span className="absolute bottom-2 right-[38%] w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            <h2 className="text-xl font-semibold">{expert.name}</h2>
            <p className="text-gray-500">{expert.role}</p>

            {/* Status Text */}
            <p className="text-green-600 text-sm mb-4">
              🟢 Available Now
            </p>

            {/* Buttons */}
            <div className="flex gap-2 justify-center">
              
              {/* Call Button */}
              <a
                href={`tel:${expert.phone}`}
                className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-600 transition"
              >
                📞 Call
              </a>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${expert.phone}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-600 transition"
              >
                💬 WhatsApp
              </a>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Expert;