import React from 'react';
import Contact from './Contact';
import contactInfos from '../services/DataList';

function ContactInfoList() {
  return (
    <div>
      {contactInfos.map((contactInfo, index) => (
        <Contact
          key={index}
          name={contactInfo.name}
          email={contactInfo.email}
          phone={contactInfo.phone}
          isDeletable={contactInfo.isDeletable}
        />
      ))}
    </div>
  );
}

export default ContactInfoList;
