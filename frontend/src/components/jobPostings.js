const jobPostings = [
    {
      jobTitle: "Frontend Developer",
      jobDescription: "We need a frontend developer to create a responsive web app.",
      jobStatus: "Open",
      jobVisibility: "Public",
      jobSkillsRequired: ["React", "CSS", "JavaScript"],
      proposals: [
        {
          proposal_date: "2024-08-25T00:00:00.000Z",
          proposal_status: "Pending",
          freelancer_name: "John Doe",
          milestones: [],
          contract: {
            contract_start_date: "2024-09-01T00:00:00.000Z",
            contract_end_date: "2024-12-01T00:00:00.000Z",
            contract_status: "Active"
          }
        }
      ]
    },
    {
      jobTitle: "Backend Developer",
      jobDescription: "Looking for a backend developer to work on RESTful APIs.",
      jobStatus: "Closed",
      jobVisibility: "Private",
      jobSkillsRequired: ["Node.js", "MongoDB", "Express"],
      proposals: [
        {
          proposal_date: "2024-08-22T00:00:00.000Z",
          proposal_status: "Accepted",
          freelancer_name: "Jane Smith",
          milestones: [],
          contract: {
            contract_start_date: "2024-09-05T00:00:00.000Z",
            contract_end_date: "2024-12-05T00:00:00.000Z",
            contract_status: "Completed"
          }
        }
      ]
    },
    {
      jobTitle: "Full Stack Developer",
      jobDescription: "Hiring for a full stack developer to manage both frontend and backend.",
      jobStatus: "Open",
      jobVisibility: "Public",
      jobSkillsRequired: ["React", "Node.js", "SQL"],
      proposals: [
        {
          proposal_date: "2024-08-20T00:00:00.000Z",
          proposal_status: "In Review",
          freelancer_name: "Sam Wilson",
          milestones: [],
          contract: {
            contract_start_date: "2024-09-10T00:00:00.000Z",
            contract_end_date: "2024-11-10T00:00:00.000Z",
            contract_status: "Pending"
          }
        }
      ]
    },
    {
      jobTitle: "UI/UX Designer",
      jobDescription: "Looking for a UI/UX designer to revamp the user interface of our mobile app.",
      jobStatus: "Open",
      jobVisibility: "Public",
      jobSkillsRequired: ["Figma", "Sketch", "Adobe XD"],
      proposals: [
        {
          proposal_date: "2024-08-18T00:00:00.000Z",
          proposal_status: "Pending",
          freelancer_name: "Anna Taylor",
          milestones: [],
          contract: {
            contract_start_date: "2024-09-15T00:00:00.000Z",
            contract_end_date: "2024-11-15T00:00:00.000Z",
            contract_status: "In Progress"
          }
        }
      ]
    },
    {
      jobTitle: "DevOps Engineer",
      jobDescription: "Seeking a DevOps engineer to automate our CI/CD pipeline.",
      jobStatus: "Open",
      jobVisibility: "Private",
      jobSkillsRequired: ["AWS", "Docker", "Kubernetes"],
      proposals: [
        {
          proposal_date: "2024-08-16T00:00:00.000Z",
          proposal_status: "Accepted",
          freelancer_name: "Michael Lee",
          milestones: [],
          contract: {
            contract_start_date: "2024-09-20T00:00:00.000Z",
            contract_end_date: "2024-12-20T00:00:00.000Z",
            contract_status: "Pending"
          }
        }
      ]
    },
    {
      jobTitle: "Data Scientist",
      jobDescription: "Need a data scientist to analyze large datasets for business insights.",
      jobStatus: "Open",
      jobVisibility: "Public",
      jobSkillsRequired: ["Python", "Machine Learning", "Data Analysis"],
      proposals: [
        {
          proposal_date: "2024-08-14T00:00:00.000Z",
          proposal_status: "Pending",
          freelancer_name: "Emily Johnson",
          milestones: [],
          contract: {
            contract_start_date: "2024-09-25T00:00:00.000Z",
            contract_end_date: "2024-12-25T00:00:00.000Z",
            contract_status: "In Progress"
          }
        }
      ]
    },
    {
      jobTitle: "QA Engineer",
      jobDescription: "Looking for a QA engineer to ensure the quality of our software.",
      jobStatus: "Closed",
      jobVisibility: "Private",
      jobSkillsRequired: ["Selenium", "JUnit", "Test Automation"],
      proposals: [
        {
          proposal_date: "2024-08-12T00:00:00.000Z",
          proposal_status: "Rejected",
          freelancer_name: "David Brown",
          milestones: [],
          contract: {
            contract_start_date: "2024-09-30T00:00:00.000Z",
            contract_end_date: "2024-12-30T00:00:00.000Z",
            contract_status: "Completed"
          }
        }
      ]
    },
    {
        jobTitle: "Mobile App Developer",
        jobDescription: "Looking for a mobile app developer to build and maintain our iOS and Android apps.",
        jobStatus: "Open",
        jobVisibility: "Public",
        jobSkillsRequired: ["React Native", "Swift", "Kotlin"],
        proposals: [
          {
            proposal_date: "2024-08-28T00:00:00.000Z",
            proposal_status: "In Review",
            freelancer_name: "Lisa Miller",
            milestones: [],
            contract: {
              contract_start_date: "2024-09-10T00:00:00.000Z",
              contract_end_date: "2024-12-10T00:00:00.000Z",
              contract_status: "Pending"
            }
          }
        ]
      },
      {
        jobTitle: "System Administrator",
        jobDescription: "Need a system administrator to manage our server infrastructure and ensure uptime.",
        jobStatus: "Open",
        jobVisibility: "Private",
        jobSkillsRequired: ["Linux", "Network Management", "Shell Scripting"],
        proposals: [
          {
            proposal_date: "2024-08-25T00:00:00.000Z",
            proposal_status: "Accepted",
            freelancer_name: "George Harris",
            milestones: [],
            contract: {
              contract_start_date: "2024-09-15T00:00:00.000Z",
              contract_end_date: "2024-12-15T00:00:00.000Z",
              contract_status: "In Progress"
            }
          }
        ]
      },
      {
        jobTitle: "Technical Writer",
        jobDescription: "Seeking a technical writer to create and maintain documentation for our software products.",
        jobStatus: "Open",
        jobVisibility: "Public",
        jobSkillsRequired: ["Technical Writing", "Documentation", "Software Development"],
        proposals: [
          {
            proposal_date: "2024-08-26T00:00:00.000Z",
            proposal_status: "Pending",
            freelancer_name: "Olivia Martinez",
            milestones: [],
            contract: {
              contract_start_date: "2024-09-20T00:00:00.000Z",
              contract_end_date: "2024-12-20T00:00:00.000Z",
              contract_status: "Pending"
            }
          }
        ]
      },
      {
        jobTitle: "Product Manager",
        jobDescription: "Looking for a product manager to oversee the development and launch of new features.",
        jobStatus: "Closed",
        jobVisibility: "Public",
        jobSkillsRequired: ["Product Management", "Agile", "Market Research"],
        proposals: [
          {
            proposal_date: "2024-08-29T00:00:00.000Z",
            proposal_status: "Accepted",
            freelancer_name: "Andrew Walker",
            milestones: [],
            contract: {
              contract_start_date: "2024-09-25T00:00:00.000Z",
              contract_end_date: "2024-12-25T00:00:00.000Z",
              contract_status: "Completed"
            }
          }
        ]
      },
      {
        jobTitle: "Business Analyst",
        jobDescription: "Need a business analyst to gather requirements and analyze business processes.",
        jobStatus: "Open",
        jobVisibility: "Private",
        jobSkillsRequired: ["Business Analysis", "Requirements Gathering", "Data Analysis"],
        proposals: [
          {
            proposal_date: "2024-08-30T00:00:00.000Z",
            proposal_status: "In Review",
            freelancer_name: "Sophia Lewis",
            milestones: [],
            contract: {
              contract_start_date: "2024-09-05T00:00:00.000Z",
              contract_end_date: "2024-12-05T00:00:00.000Z",
              contract_status: "Pending"
            }
          }
        ]
      },
      {
        jobTitle: "Salesforce Developer",
        jobDescription: "Looking for a Salesforce developer to customize and optimize our Salesforce instance.",
        jobStatus: "Open",
        jobVisibility: "Public",
        jobSkillsRequired: ["Salesforce", "Apex", "Visualforce"],
        proposals: [
          {
            proposal_date: "2024-08-23T00:00:00.000Z",
            proposal_status: "Pending",
            freelancer_name: "Ethan White",
            milestones: [],
            contract: {
              contract_start_date: "2024-09-15T00:00:00.000Z",
              contract_end_date: "2024-12-15T00:00:00.000Z",
              contract_status: "Pending"
            }
          }
        ]
      },
      {
        jobTitle: "Cloud Engineer",
        jobDescription: "Seeking a cloud engineer to manage cloud infrastructure and services.",
        jobStatus: "Open",
        jobVisibility: "Private",
        jobSkillsRequired: ["AWS", "Azure", "Cloud Security"],
        proposals: [
          {
            proposal_date: "2024-08-24T00:00:00.000Z",
            proposal_status: "Accepted",
            freelancer_name: "Natalie Green",
            milestones: [],
            contract: {
              contract_start_date: "2024-09-20T00:00:00.000Z",
              contract_end_date: "2024-12-20T00:00:00.000Z",
              contract_status: "In Progress"
            }
          }
        ]
      },
      {
        jobTitle: "Graphic Designer",
        jobDescription: "Need a graphic designer to create marketing materials and design assets.",
        jobStatus: "Open",
        jobVisibility: "Public",
        jobSkillsRequired: ["Photoshop", "Illustrator", "InDesign"],
        proposals: [
          {
            proposal_date: "2024-08-26T00:00:00.000Z",
            proposal_status: "Pending",
            freelancer_name: "Lucas Scott",
            milestones: [],
            contract: {
              contract_start_date: "2024-09-10T00:00:00.000Z",
              contract_end_date: "2024-12-10T00:00:00.000Z",
              contract_status: "Pending"
            }
          }
        ]
      },
      {
        jobTitle: "Content Writer",
        jobDescription: "Looking for a content writer to produce high-quality articles and blog posts.",
        jobStatus: "Open",
        jobVisibility: "Public",
        jobSkillsRequired: ["Content Writing", "SEO", "Research"],
        proposals: [
          {
            proposal_date: "2024-08-27T00:00:00.000Z",
            proposal_status: "In Review",
            freelancer_name: "Mia Robinson",
            milestones: [],
            contract: {
              contract_start_date: "2024-09-01T00:00:00.000Z",
              contract_end_date: "2024-12-01T00:00:00.000Z",
              contract_status: "Pending"
            }
          }
        ]
      },
      {
        jobTitle: "Network Engineer",
        jobDescription: "Seeking a network engineer to design and implement network solutions.",
        jobStatus: "Closed",
        jobVisibility: "Private",
        jobSkillsRequired: ["Networking", "TCP/IP", "Firewall Management"],
        proposals: [
          {
            proposal_date: "2024-08-28T00:00:00.000Z",
            proposal_status: "Accepted",
            freelancer_name: "Zoe Carter",
            milestones: [],
            contract: {
              contract_start_date: "2024-09-10T00:00:00.000Z",
              contract_end_date: "2024-12-10T00:00:00.000Z",
              contract_status: "Completed"
            }
          }
        ]
      },
      {
        jobTitle: "Game Developer",
        jobDescription: "Need a game developer to create engaging and interactive games.",
        jobStatus: "Open",
        jobVisibility: "Public",
        jobSkillsRequired: ["Unity", "C#", "Game Design"],
        proposals: [
          {
            proposal_date: "2024-08-30T00:00:00.000Z",
            proposal_status: "Pending",
            freelancer_name: "Jackson Adams",
            milestones: [],
            contract: {
              contract_start_date: "2024-09-25T00:00:00.000Z",
              contract_end_date: "2024-12-25T00:00:00.000Z",
              contract_status: "Pending"
            }
          }
        ]
      }
    ];
    
    export default jobPostings;