interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: 'Microsoft 365 Migration Specialists',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam repellat architecto esse iure est, fugiat quo distinctio quidem provident ad.',
    icon: 'fa-brands fa-microsoft fa-5x',
  },
  {
    title: 'Mail Management',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam repellat architecto esse iure est, fugiat quo distinctio quidem provident ad.',
    icon: 'fa-solid fa-envelope-open-text fa-5x',
  },
  {
    title: 'Managed Services',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam repellat architecto esse iure est, fugiat quo distinctio quidem provident ad.',
    icon: 'fa-solid fa-house-laptop fa-5x',
  },
  {
    title: 'Office 365 Suite',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam repellat architecto esse iure est, fugiat quo distinctio quidem provident ad.',
    icon: 'fa-solid fa-file-word fa-5x',
  },
  {
    title: 'Web Hosting',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam repellat architecto esse iure est, fugiat quo distinctio quidem provident ad.',
    icon: 'fa-solid fa-server fa-5x',
  },
  {
    title: 'IT Audits',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam repellat architecto esse iure est, fugiat quo distinctio quidem provident ad.',
    icon: 'fa-solid fa-magnifying-glass-chart fa-5x',
  },
];

export { Service, services };
