
import React from 'react';

const companies = [
  {
    name: "Intervue.io",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGOndysiojHog/company-logo_400_400/company-logo_400_400/0/1651668752177/intervue_io_logo?e=1747872000&v=beta&t=66NXZqHnkV5FQEYNUOfUu-IAqJnr2wdWzVRLoqg5XoM"
  },
  {
    name: "DRDO",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHr0-w-4HF1ow/company-logo_400_400/company-logo_400_400/0/1630576665362?e=1747872000&v=beta&t=s8hqwF95Mm2N_xdb-4HzGJ2a_k0Rji-wk9O0MWOU0t8"
  },
  {
    name: "BrightChamps",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGtOa_HhRydCQ/company-logo_400_400-alternative/company-logo_400_400-alternative/0/1630521477745/brightchamps_logo?e=1747872000&v=beta&t=yG_tvy2vQU77C6CuxsCPmWfthFzKQvBwioQQ6t-kabg"
  },
  {
    name: "Code Karo Yaaro",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQEos3Cf7OW1ew/company-logo_400_400/company-logo_400_400/0/1630490732591/codekaroyaaro_logo?e=1747872000&v=beta&t=iC2Az46Tqdqz7rgrf8FN2Ya1t8sWmk5toXd8Ua9yn28"
  }
];

const ClientsSection = () => {
  return (
    <section className="py-12 border-t border-border">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium text-muted-foreground mb-8">
            I've worked with
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {companies.map((company, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
