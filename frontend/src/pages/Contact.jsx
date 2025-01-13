import React from 'react';

function Contact() {
  const teamMembers = [
    {
      name: 'Anurodh Kanth',
      email: 'anurodh.241705@ncit.edu.np',
      phone: '+977 9707712738',
    },
    {
      name: 'Hirdaya Shrestha',
      email: 'hirdaya.241414@ncit.edu.np',
      phone: '+977 9704568737',
    },
    {
      name: 'Rijesh Maharjan',
      email: 'rijesh.241432@ncit.edu.np',
      phone: '+977 9767648299',
    },
    {
      name: 'Samyak Raj Shakya',
      email: 'samyak.241732@ncit.edu.np',
      phone: '+977 9767470049',
    },
  ];

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 text-center">
        Contact Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
            <p className="text-lg text-gray-600 mb-1">
              <strong>Email:</strong>{" "}
              <a
                href={
                  isMobile
                    ? `mailto:${member.email}`
                    : `https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`
                }
                target={isMobile ? "_self" : "_blank"}
                rel={isMobile ? "" : "noopener noreferrer"}
                className="text-blue-600 hover:underline"
              >
                {member.email}
              </a>
            </p>
            <p className="text-lg text-gray-600">
              <strong>Phone:</strong>{" "}
              {isMobile ? (
                <a href={`tel:${member.phone}`} className="text-blue-600 hover:underline">
                  {member.phone}
                </a>
              ) : (
                member.phone
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;