interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: 'Microsoft 365 Migration Specialists',
    description:
      'Let us migrate your services and devices to Microsoft 365 with ease of mind and minimal downtime',
    icon: 'fa-brands fa-microsoft fa-5x',
  },
  {
    title: 'Mail Management',
    description:
      'Let us manage your organisations mail with unlimited requests as a part of a package',
    icon: 'fa-solid fa-envelope-open-text fa-5x',
  },
  {
    title: 'Managed Services',
    description:
      'Let us tailor a package to suit your organisation. Sit back whilst we manage your IT services, devices, network and infrastructure',
    icon: 'fa-solid fa-house-laptop fa-5x',
  },
  {
    title: 'Office 365 Suite',
    description:
      'Can be purchased stand-alone or tailored with your office 365 tenancy. Rest assured, enquire within, and let us handle the stress for you.',
    icon: 'fa-solid fa-file-word fa-5x',
  },
  {
    title: 'Web Hosting',
    description:
      'Professional and reliable web hosting services with minimal downtime. In house developers for special requests of implementation',
    icon: 'fa-solid fa-server fa-5x',
  },
  {
    title: 'IT Audits',
    description:
      'Let us audit your IT infrastructure to identify and assist with security risks, vulnerabilities, device management, network configurations and business continuity',
    icon: 'fa-solid fa-magnifying-glass-chart fa-5x',
  },
];

export { Service, services };
