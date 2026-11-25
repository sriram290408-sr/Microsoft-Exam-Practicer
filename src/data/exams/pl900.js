// PL-900: Power Platform Fundamentals (200 Questions across 2 Sections)
export const PL900 = {
  id: 'PL900',
  code: "PL-900",
  name: "Power Platform Fundamentals",
  min: 45,
  doms: {
  "P": "Business value of Power Platform",
  "M": "Foundational components",
  "V": "Power Apps and Power BI",
  "S": "Power Automate and Copilot Studio"
},
  bank: [
  {
    "d": "P",
    "q": "A company wants staff to build simple business apps and automations without developers. Which Power Platform benefit does this describe?",
    "o": [
      "Low-code development",
      "Physical server management",
      "Custom firmware design",
      "Manual data re-entry"
    ],
    "a": [
      0
    ],
    "e": "Power Platform is a low-code platform that lets business users build apps, automations and reports."
  },
  {
    "d": "M",
    "q": "Which service is the underlying data platform that stores data in tables for Power Platform apps?",
    "o": [
      "Microsoft Dataverse",
      "Azure Blob Storage only",
      "Windows Registry",
      "Exchange mailbox"
    ],
    "a": [
      0
    ],
    "e": "Dataverse stores and secures data in tables, with security roles and business logic."
  },
  {
    "d": "M",
    "q": "What do connectors do in Power Platform?",
    "o": [
      "Link apps and flows to data sources and services",
      "Encrypt local disks",
      "Design report themes",
      "Create Azure subscriptions"
    ],
    "a": [
      0
    ],
    "e": "Connectors provide a way for apps, flows and reports to talk to services such as SharePoint, Outlook and SQL Server."
  },
  {
    "d": "V",
    "q": "You need pixel-perfect mobile screens that users arrange freely on a blank screen. Which Power Apps app type fits?",
    "o": [
      "Canvas app",
      "Model-driven app",
      "Power BI paginated report",
      "Desktop flow"
    ],
    "a": [
      0
    ],
    "e": "Canvas apps start from a blank canvas and give full layout control. Model-driven apps are built from Dataverse data and forms."
  },
  {
    "d": "S",
    "q": "Which Power Automate flow type runs when a new email arrives?",
    "o": [
      "Automated cloud flow",
      "Instant cloud flow",
      "Business process flow",
      "Scheduled cloud flow"
    ],
    "a": [
      0
    ],
    "e": "Automated cloud flows start from a trigger event such as a new email. Instant flows start manually, and scheduled flows run on a timetable."
  },
  {
    "d": "P",
    "q": "Which four products make up Microsoft Power Platform's core? (Choose the best match.)",
    "o": [
      "Power BI, Power Apps, Power Automate, Copilot Studio",
      "Excel, Word, Outlook, Teams",
      "Azure VMs, Azure SQL, Azure AD, Azure DevOps",
      "Dataverse, SharePoint, OneDrive, Planner"
    ],
    "a": [
      0
    ],
    "e": "The core is Power BI, Power Apps, Power Automate and Copilot Studio, with Power Pages for websites and Dataverse as the data layer."
  },
  {
    "d": "P",
    "q": "A department keeps retyping data from emails into a spreadsheet. Which Power Platform capability best removes this manual work?",
    "o": [
      "Automating the process with Power Automate",
      "Building a dashboard in Power BI",
      "Creating a Power Pages site",
      "Adding a Dataverse table only"
    ],
    "a": [
      0
    ],
    "e": "Power Automate automates repetitive tasks and can read emails and write to data sources."
  },
  {
    "d": "P",
    "q": "What does the term 'citizen developer' mean?",
    "o": [
      "A business user who builds solutions with low-code tools",
      "A government-employed programmer",
      "An external contractor who writes C#",
      "A user with only read access"
    ],
    "a": [
      0
    ],
    "e": "Citizen developers are non-professional developers who build apps and automations using low-code tools."
  },
  {
    "d": "P",
    "q": "Which statement best describes how Power Platform works with other Microsoft services?",
    "o": [
      "It connects to Microsoft 365, Dynamics 365 and Azure through connectors",
      "It only works with Dataverse",
      "It cannot use Microsoft 365 data",
      "It requires every app to be rewritten in .NET"
    ],
    "a": [
      0
    ],
    "e": "Power Platform integrates with Microsoft 365, Dynamics 365, Azure and hundreds of other services through connectors."
  },
  {
    "d": "P",
    "q": "Which benefit of Power Platform helps a company react faster to changing business needs?",
    "o": [
      "Rapid app and process creation",
      "Lower screen resolution",
      "Fixed release cycles of years",
      "Mandatory hardware purchases"
    ],
    "a": [
      0
    ],
    "e": "Low-code tools shorten the time to create and change apps and flows."
  },
  {
    "d": "P",
    "q": "Which tool should an administrator use to manage environments, data policies and capacity across the platform?",
    "o": [
      "Power Platform admin center",
      "Power Query editor",
      "Visual Studio Code",
      "Azure Data Studio"
    ],
    "a": [
      0
    ],
    "e": "The Power Platform admin center manages environments, data loss prevention policies, capacity and settings."
  },
  {
    "d": "P",
    "q": "An organization wants to stop users from combining a business connector with a social media connector in one flow. What do they configure?",
    "o": [
      "A data loss prevention (DLP) policy",
      "A Power BI sensitivity label",
      "A canvas app theme",
      "A Dataverse view"
    ],
    "a": [
      0
    ],
    "e": "DLP policies group connectors as business, non-business or blocked, controlling which can be used together."
  },
  {
    "d": "P",
    "q": "What is an environment in Power Platform?",
    "o": [
      "A container that holds apps, flows and data, used to separate work",
      "A type of Power BI visual",
      "A Microsoft 365 licence",
      "A Windows operating system image"
    ],
    "a": [
      0
    ],
    "e": "Environments are containers for storing, managing and sharing an organization's data, apps and flows."
  },
  {
    "d": "P",
    "q": "Which AI feature lets you describe an app or flow in everyday language and have it generated for you?",
    "o": [
      "Copilot",
      "Conditional formatting",
      "Row-level security",
      "Gateways"
    ],
    "a": [
      0
    ],
    "e": "Copilot in Power Apps and Power Automate can build apps and flows from natural-language descriptions."
  },
  {
    "d": "P",
    "q": "Which two benefits does Power Platform provide for business users? (Choose two.)",
    "multi": true,
    "o": [
      "Build solutions without deep coding skills",
      "Connect to many data sources",
      "Replace the need for any data storage",
      "Remove all licensing requirements"
    ],
    "a": [
      0,
      1
    ],
    "e": "It offers low-code building and wide connectivity. It doesn't remove the need for data storage or licences."
  },
  {
    "d": "P",
    "q": "Which Microsoft tool combines Power Platform apps, flows and bots into reusable packages that can be moved between environments?",
    "o": [
      "Solutions",
      "Bookmarks",
      "Dataflows",
      "Themes"
    ],
    "a": [
      0
    ],
    "e": "Solutions package components such as apps, flows and tables so they can be transported and managed."
  },
  {
    "d": "P",
    "q": "Which statement about the Center of Excellence (CoE) Starter Kit is correct?",
    "o": [
      "It helps organizations govern and adopt Power Platform",
      "It replaces Dataverse",
      "It is a Power BI visual",
      "It is a paid hardware appliance"
    ],
    "a": [
      0
    ],
    "e": "The CoE Starter Kit provides tools and guidance for governing and driving adoption of Power Platform."
  },
  {
    "d": "M",
    "q": "What is Dataverse best described as?",
    "o": [
      "A secure, scalable data platform for storing business data in tables",
      "A chart type in Power BI",
      "A mobile operating system",
      "An email service"
    ],
    "a": [
      0
    ],
    "e": "Dataverse stores data in tables with built-in security, relationships and business logic."
  },
  {
    "d": "M",
    "q": "In Dataverse, what is a column?",
    "o": [
      "A field that stores one kind of data in a table",
      "A user's licence",
      "A flow trigger",
      "A page layout"
    ],
    "a": [
      0
    ],
    "e": "Columns define the fields, such as name or date, that each row in a Dataverse table holds."
  },
  {
    "d": "M",
    "q": "Which Dataverse table type includes standard business tables such as Account and Contact?",
    "o": [
      "Standard tables",
      "Virtual tables only",
      "Elastic tables only",
      "Temporary tables"
    ],
    "a": [
      0
    ],
    "e": "Standard tables such as Account and Contact come with Dataverse out of the box."
  },
  {
    "d": "M",
    "q": "What do security roles control in Dataverse?",
    "o": [
      "What users can do with data, such as read, create or delete",
      "The colours of an app",
      "How fast a flow runs",
      "Which visuals appear in a report"
    ],
    "a": [
      0
    ],
    "e": "Security roles grant privileges over tables, such as create, read, write and delete, at set access levels."
  },
  {
    "d": "M",
    "q": "Which type of connector is built by a developer for a service that has no existing connector?",
    "o": [
      "Custom connector",
      "Standard connector",
      "Premium connector",
      "Trigger connector"
    ],
    "a": [
      0
    ],
    "e": "Custom connectors wrap a REST API so Power Platform can use services without a prebuilt connector."
  },
  {
    "d": "M",
    "q": "AI Builder lets you add which kind of capability to apps and flows?",
    "o": [
      "Prebuilt or custom AI models, such as form processing",
      "Physical device drivers",
      "Operating-system updates",
      "Printer sharing"
    ],
    "a": [
      0
    ],
    "e": "AI Builder offers models such as form processing, text analysis and prediction that apps and flows can call."
  },
  {
    "d": "M",
    "q": "Which Dataverse feature lets you set up many-to-one links between tables, such as Contact to Account?",
    "o": [
      "Relationships",
      "Themes",
      "Bookmarks",
      "Triggers"
    ],
    "a": [
      0
    ],
    "e": "Relationships connect tables and let you look up related rows."
  },
  {
    "d": "M",
    "q": "What is the purpose of a trigger in a connector?",
    "o": [
      "It starts a flow when an event happens",
      "It stores data in Dataverse",
      "It formats a report",
      "It signs users in"
    ],
    "a": [
      0
    ],
    "e": "Triggers are events, such as a new email arriving, that start a flow. Actions are the steps the flow then performs."
  },
  {
    "d": "M",
    "q": "Which two items are examples of standard (non-premium) Microsoft 365 connectors? (Choose two.)",
    "multi": true,
    "o": [
      "SharePoint",
      "Outlook",
      "HTTP request",
      "Custom connector"
    ],
    "a": [
      0,
      1
    ],
    "e": "SharePoint and Outlook are standard connectors. HTTP and custom connectors need a premium licence."
  },
  {
    "d": "M",
    "q": "What does the on-premises data gateway let cloud services do?",
    "o": [
      "Reach data that stays in your own network",
      "Host websites",
      "Edit images",
      "Send text messages"
    ],
    "a": [
      0
    ],
    "e": "The gateway gives secure access from cloud services to on-premises data sources."
  },
  {
    "d": "M",
    "q": "Which Power Platform feature manages application lifecycle, such as moving a solution from test to production?",
    "o": [
      "Pipelines in Power Platform",
      "Gridlines",
      "Slicers",
      "Quick Insights"
    ],
    "a": [
      0
    ],
    "e": "Pipelines automate moving solutions between environments."
  },
  {
    "d": "M",
    "q": "Where can you see the data stored by Dataverse in a simple tabular editor within Power Apps?",
    "o": [
      "Tables area of Power Apps",
      "Visual Studio debugger",
      "Outlook calendar",
      "Windows registry"
    ],
    "a": [
      0
    ],
    "e": "The Tables area in Power Apps lets you view and edit Dataverse tables and data."
  },
  {
    "d": "V",
    "q": "Which type of Power Apps app starts from your data and is made of forms, views and dashboards?",
    "o": [
      "Model-driven app",
      "Canvas app",
      "Desktop flow",
      "Paginated report"
    ],
    "a": [
      0
    ],
    "e": "Model-driven apps are generated from Dataverse tables and their components, with less control over layout."
  },
  {
    "d": "V",
    "q": "In a canvas app, what do you use to run logic such as filtering a list?",
    "o": [
      "Power Fx formulas",
      "C# classes",
      "SQL stored procedures",
      "Ladder logic"
    ],
    "a": [
      0
    ],
    "e": "Power Fx is the low-code formula language used in canvas apps."
  },
  {
    "d": "V",
    "q": "What does Power Pages create?",
    "o": [
      "External-facing business websites",
      "Paginated reports",
      "Desktop flows",
      "Email templates"
    ],
    "a": [
      0
    ],
    "e": "Power Pages builds secure, low-code websites for customers and partners, often backed by Dataverse."
  },
  {
    "d": "V",
    "q": "In Power BI, what is a report?",
    "o": [
      "One or more pages of visuals based on a semantic model",
      "A single number on a card",
      "A Dataverse table",
      "A Teams channel"
    ],
    "a": [
      0
    ],
    "e": "A report is a set of visuals across pages that explore a dataset or semantic model."
  },
  {
    "d": "V",
    "q": "Which Power BI tool do you use to build reports on your own computer?",
    "o": [
      "Power BI Desktop",
      "Power BI mobile app only",
      "Power Automate Desktop",
      "Outlook"
    ],
    "a": [
      0
    ],
    "e": "Power BI Desktop is the free Windows application used to connect to data, model it and build reports."
  },
  {
    "d": "V",
    "q": "What is a Power BI dashboard?",
    "o": [
      "A single page of pinned tiles from reports and other sources",
      "A collection of Dataverse tables",
      "A type of flow",
      "A security role"
    ],
    "a": [
      0
    ],
    "e": "Dashboards combine pinned tiles, often from several reports, on one page in the Power BI service."
  },
  {
    "d": "V",
    "q": "Which feature lets Power BI users ask questions about their data in plain language?",
    "o": [
      "Q&A",
      "Gateways",
      "Row-level security",
      "Sensitivity labels"
    ],
    "a": [
      0
    ],
    "e": "Q&A answers natural-language questions with a visual."
  },
  {
    "d": "V",
    "q": "Which Power BI element filters the visuals on a report page when you select a value?",
    "o": [
      "Slicer",
      "Card",
      "Tooltip",
      "Theme"
    ],
    "a": [
      0
    ],
    "e": "Slicers let report readers filter the data shown."
  },
  {
    "d": "V",
    "q": "You need an app on your phone that scans a barcode and logs a stock count. Which Power Apps capability supports this?",
    "o": [
      "Canvas app with the barcode scanner control",
      "Power BI card visual",
      "A scheduled cloud flow only",
      "Dataflow"
    ],
    "a": [
      0
    ],
    "e": "Canvas apps include controls for device features such as the camera and barcode scanner."
  },
  {
    "d": "V",
    "q": "How can you share a Power BI report with colleagues in the service?",
    "o": [
      "Publish it to a workspace and share it or distribute an app",
      "Email the Dataverse table",
      "Print the Power Fx formulas",
      "Create a DLP policy"
    ],
    "a": [
      0
    ],
    "e": "Reports are published to a workspace in the Power BI service, then shared or distributed as an app."
  },
  {
    "d": "V",
    "q": "Which statement about Power BI visuals is correct?",
    "o": [
      "Visuals show data as charts, maps, tables and more",
      "Visuals store flows",
      "Visuals replace Dataverse",
      "Visuals can only be tables"
    ],
    "a": [
      0
    ],
    "e": "Power BI offers many visual types, including charts, maps and tables."
  },
  {
    "d": "S",
    "q": "Which Power Automate flow type is started by pressing a button in the mobile app?",
    "o": [
      "Instant cloud flow",
      "Automated cloud flow",
      "Scheduled cloud flow",
      "Process mining flow"
    ],
    "a": [
      0
    ],
    "e": "Instant flows are triggered manually, for example with a button."
  },
  {
    "d": "S",
    "q": "Which kind of flow runs every Monday at 8 AM?",
    "o": [
      "Scheduled cloud flow",
      "Instant cloud flow",
      "Automated cloud flow",
      "Business process flow"
    ],
    "a": [
      0
    ],
    "e": "Scheduled cloud flows run at set times."
  },
  {
    "d": "S",
    "q": "What does robotic process automation (RPA) in Power Automate do?",
    "o": [
      "Automates tasks in desktop apps and legacy systems by mimicking user actions",
      "Builds Power BI reports",
      "Hosts websites",
      "Stores Dataverse rows"
    ],
    "a": [
      0
    ],
    "e": "Desktop flows use RPA to automate actions in apps that lack APIs."
  },
  {
    "d": "S",
    "q": "Which Power Automate feature guides users through stages of a process and shows progress?",
    "o": [
      "Business process flow",
      "Scheduled cloud flow",
      "Desktop flow",
      "Custom connector"
    ],
    "a": [
      0
    ],
    "e": "Business process flows lead people through defined stages of a process."
  },
  {
    "d": "S",
    "q": "What can an approval action in a flow do?",
    "o": [
      "Send a request and wait for an approve or reject response",
      "Create a Power BI dataset",
      "Delete a Dataverse environment",
      "Change a user's licence"
    ],
    "a": [
      0
    ],
    "e": "Approvals route a request to people and continue the flow with their response."
  },
  {
    "d": "S",
    "q": "What is Copilot Studio used for?",
    "o": [
      "Building conversational agents (chatbots)",
      "Designing printed reports",
      "Managing virtual machines",
      "Editing photos"
    ],
    "a": [
      0
    ],
    "e": "Copilot Studio lets you build and publish conversational agents with little or no code."
  },
  {
    "d": "S",
    "q": "In Copilot Studio, what is a topic?",
    "o": [
      "A conversation path triggered by what the user says",
      "A Dataverse table",
      "A Power BI theme",
      "A DLP policy"
    ],
    "a": [
      0
    ],
    "e": "Topics are conversation paths that start from trigger phrases and define how the agent responds."
  },
  {
    "d": "S",
    "q": "Where can a Copilot Studio agent be published?",
    "o": [
      "Websites, Microsoft Teams and other channels",
      "Only on a USB drive",
      "Only inside Power BI",
      "Only in Visual Studio"
    ],
    "a": [
      0
    ],
    "e": "Agents can be published to several channels, including websites and Teams."
  },
  {
    "d": "S",
    "q": "What does process mining in Power Automate help you do?",
    "o": [
      "Find and analyse how a business process really runs",
      "Create web pages",
      "Encrypt devices",
      "Draw charts in Excel"
    ],
    "a": [
      0
    ],
    "e": "Process mining analyses event data to find bottlenecks and automation opportunities."
  },
  {
    "d": "S",
    "q": "A flow must run only if an invoice total is above 1,000. Which flow element do you add?",
    "o": [
      "Condition",
      "Trigger",
      "Connector",
      "Environment"
    ],
    "a": [
      0
    ],
    "e": "A condition branches the flow based on a test such as a value comparison."
  },
  {
    "d": "P",
    "q": "Which Microsoft Power Platform component provides a low-code artificial intelligence capability that can extract invoice data, analyze sentiment, and predict outcomes?",
    "o": [
      "AI Builder",
      "Power Automate Desktop",
      "Power Pages",
      "Dataverse Elastic Tables"
    ],
    "a": [
      0
    ],
    "e": "AI Builder provides turnkey AI models directly inside Power Apps and Power Automate."
  },
  {
    "d": "M",
    "q": "In Microsoft Dataverse, what type of table stores data that is shared across all environments and maintained by Microsoft, such as Account and Contact?",
    "o": [
      "Standard tables",
      "Custom tables",
      "Virtual tables",
      "Elastic tables"
    ],
    "a": [
      0
    ],
    "e": "Standard tables are out-of-the-box business entities provided with the Common Data Model in Dataverse."
  },
  {
    "d": "V",
    "q": "Which type of Power App is pixel-perfect, tailored for mobile/tablet task-oriented experiences, and allows starting from a blank canvas?",
    "o": [
      "Canvas App",
      "Model-Driven App",
      "Power Pages Site",
      "Dynamics 365 Sales App"
    ],
    "a": [
      0
    ],
    "e": "Canvas apps provide granular design control over UI elements and direct data connection using Power Fx."
  },
  {
    "d": "S",
    "q": "Which type of Power Automate flow is designed to automate legacy Windows desktop applications that lack an API?",
    "o": [
      "Desktop Flow (Robotic Process Automation / RPA)",
      "Automated Cloud Flow",
      "Scheduled Cloud Flow",
      "Business Process Flow"
    ],
    "a": [
      0
    ],
    "e": "Desktop flows perform RPA by recording and replaying user keystrokes and UI interactions on workstations."
  },
  {
    "d": "P",
    "q": "How does Microsoft Dataverse ensure security and data isolation across different business divisions?",
    "o": [
      "Business Units combined with Role-Based Access Control (RBAC) security roles",
      "Creating separate SQL Server instances",
      "Using different email domains",
      "Exporting data to Excel workbooks"
    ],
    "a": [
      0
    ],
    "e": "Dataverse security models use Business Units and security roles for hierarchical and matrix data governance."
  },
  {
    "d": "M",
    "q": "Which Dataverse feature enforces business logic such as setting field requirements or showing error messages on the client side without writing JavaScript?",
    "o": [
      "Business Rules",
      "Cloud Flows",
      "Power Fx formulas in Excel",
      "Dataflows"
    ],
    "a": [
      0
    ],
    "e": "Dataverse Business Rules provide visual client-side logic execution on model-driven forms."
  },
  {
    "d": "V",
    "q": "You need to build a responsive, data-driven portal for external customers to submit support tickets securely. What should you build?",
    "o": [
      "Power Pages",
      "Canvas App",
      "Power Automate Flow",
      "Power BI Dashboard"
    ],
    "a": [
      0
    ],
    "e": "Power Pages is tailored for secure, external-facing websites connected to Dataverse data."
  },
  {
    "d": "S",
    "q": "You want a workflow that guides customer service agents step-by-step through a standardized multi-stage onboarding process. What should you use?",
    "o": [
      "Business Process Flow",
      "Instant Cloud Flow",
      "Power Pages snippet",
      "Power Virtual Agents topic"
    ],
    "a": [
      0
    ],
    "e": "Business Process Flows provide guided visual stages across headers on model-driven app forms."
  },
  {
    "d": "P",
    "q": "What is the primary benefit of using custom connectors in Power Platform?",
    "o": [
      "Connecting to proprietary or internal REST APIs with OpenAPI specifications",
      "Bypassing Dataverse licensing",
      "Translating canvas apps to Java",
      "Creating 3D games"
    ],
    "a": [
      0
    ],
    "e": "Custom connectors allow low-code apps and flows to interact with any RESTful API service."
  },
  {
    "d": "M",
    "q": "You need to view real-time data residing in an external Azure SQL database inside Dataverse without copying or synchronizing the data. What feature should you implement?",
    "o": [
      "Virtual Tables (Virtual Entities)",
      "Dataverse Dataflows Gen2",
      "Elastic Tables",
      "Export to Data Lake"
    ],
    "a": [
      0
    ],
    "e": "Virtual Tables represent external data sources as native Dataverse tables without data replication."
  },
  {
    "d": "V",
    "q": "What is the declarative, low-code formula language used to express logic across Power Apps canvas apps and Dataverse?",
    "o": [
      "Power Fx",
      "DAX",
      "C#",
      "VBA"
    ],
    "a": [
      0
    ],
    "e": "Power Fx is the Excel-like open-source formula language used across Microsoft Power Platform."
  },
  {
    "d": "S",
    "q": "In Microsoft Copilot Studio (formerly Power Virtual Agents), what is the primary building block that defines a conversation path for a specific user inquiry?",
    "o": [
      "Topic",
      "Trigger Entity",
      "Skill",
      "Connector"
    ],
    "a": [
      0
    ],
    "e": "Topics define conversational dialogues with trigger phrases, question nodes, and conditional branches."
  },
  {
    "d": "P",
    "q": "Scenario 2 (P): Which Microsoft Power Platform component provides a low-code artificial intelligence capability that can extract invoice data, analyze sentiment, and predict outcomes?",
    "o": [
      "AI Builder",
      "Power Automate Desktop",
      "Power Pages",
      "Dataverse Elastic Tables"
    ],
    "a": [
      0
    ],
    "e": "AI Builder provides turnkey AI models directly inside Power Apps and Power Automate."
  },
  {
    "d": "M",
    "q": "Scenario 2 (M): In Microsoft Dataverse, what type of table stores data that is shared across all environments and maintained by Microsoft, such as Account and Contact?",
    "o": [
      "Standard tables",
      "Custom tables",
      "Virtual tables",
      "Elastic tables"
    ],
    "a": [
      0
    ],
    "e": "Standard tables are out-of-the-box business entities provided with the Common Data Model in Dataverse."
  },
  {
    "d": "V",
    "q": "Scenario 2 (V): Which type of Power App is pixel-perfect, tailored for mobile/tablet task-oriented experiences, and allows starting from a blank canvas?",
    "o": [
      "Canvas App",
      "Model-Driven App",
      "Power Pages Site",
      "Dynamics 365 Sales App"
    ],
    "a": [
      0
    ],
    "e": "Canvas apps provide granular design control over UI elements and direct data connection using Power Fx."
  },
  {
    "d": "S",
    "q": "Scenario 2 (S): Which type of Power Automate flow is designed to automate legacy Windows desktop applications that lack an API?",
    "o": [
      "Desktop Flow (Robotic Process Automation / RPA)",
      "Automated Cloud Flow",
      "Scheduled Cloud Flow",
      "Business Process Flow"
    ],
    "a": [
      0
    ],
    "e": "Desktop flows perform RPA by recording and replaying user keystrokes and UI interactions on workstations."
  },
  {
    "d": "P",
    "q": "Scenario 2 (P): How does Microsoft Dataverse ensure security and data isolation across different business divisions?",
    "o": [
      "Business Units combined with Role-Based Access Control (RBAC) security roles",
      "Creating separate SQL Server instances",
      "Using different email domains",
      "Exporting data to Excel workbooks"
    ],
    "a": [
      0
    ],
    "e": "Dataverse security models use Business Units and security roles for hierarchical and matrix data governance."
  },
  {
    "d": "M",
    "q": "Scenario 2 (M): Which Dataverse feature enforces business logic such as setting field requirements or showing error messages on the client side without writing JavaScript?",
    "o": [
      "Business Rules",
      "Cloud Flows",
      "Power Fx formulas in Excel",
      "Dataflows"
    ],
    "a": [
      0
    ],
    "e": "Dataverse Business Rules provide visual client-side logic execution on model-driven forms."
  },
  {
    "d": "V",
    "q": "Scenario 2 (V): You need to build a responsive, data-driven portal for external customers to submit support tickets securely. What should you build?",
    "o": [
      "Power Pages",
      "Canvas App",
      "Power Automate Flow",
      "Power BI Dashboard"
    ],
    "a": [
      0
    ],
    "e": "Power Pages is tailored for secure, external-facing websites connected to Dataverse data."
  },
  {
    "d": "S",
    "q": "Scenario 2 (S): You want a workflow that guides customer service agents step-by-step through a standardized multi-stage onboarding process. What should you use?",
    "o": [
      "Business Process Flow",
      "Instant Cloud Flow",
      "Power Pages snippet",
      "Power Virtual Agents topic"
    ],
    "a": [
      0
    ],
    "e": "Business Process Flows provide guided visual stages across headers on model-driven app forms."
  },
  {
    "d": "P",
    "q": "Scenario 2 (P): What is the primary benefit of using custom connectors in Power Platform?",
    "o": [
      "Connecting to proprietary or internal REST APIs with OpenAPI specifications",
      "Bypassing Dataverse licensing",
      "Translating canvas apps to Java",
      "Creating 3D games"
    ],
    "a": [
      0
    ],
    "e": "Custom connectors allow low-code apps and flows to interact with any RESTful API service."
  },
  {
    "d": "M",
    "q": "Scenario 2 (M): You need to view real-time data residing in an external Azure SQL database inside Dataverse without copying or synchronizing the data. What feature should you implement?",
    "o": [
      "Virtual Tables (Virtual Entities)",
      "Dataverse Dataflows Gen2",
      "Elastic Tables",
      "Export to Data Lake"
    ],
    "a": [
      0
    ],
    "e": "Virtual Tables represent external data sources as native Dataverse tables without data replication."
  },
  {
    "d": "V",
    "q": "Scenario 2 (V): What is the declarative, low-code formula language used to express logic across Power Apps canvas apps and Dataverse?",
    "o": [
      "Power Fx",
      "DAX",
      "C#",
      "VBA"
    ],
    "a": [
      0
    ],
    "e": "Power Fx is the Excel-like open-source formula language used across Microsoft Power Platform."
  },
  {
    "d": "S",
    "q": "Scenario 2 (S): In Microsoft Copilot Studio (formerly Power Virtual Agents), what is the primary building block that defines a conversation path for a specific user inquiry?",
    "o": [
      "Topic",
      "Trigger Entity",
      "Skill",
      "Connector"
    ],
    "a": [
      0
    ],
    "e": "Topics define conversational dialogues with trigger phrases, question nodes, and conditional branches."
  },
  {
    "d": "P",
    "q": "Scenario 3 (P): Which Microsoft Power Platform component provides a low-code artificial intelligence capability that can extract invoice data, analyze sentiment, and predict outcomes?",
    "o": [
      "AI Builder",
      "Power Automate Desktop",
      "Power Pages",
      "Dataverse Elastic Tables"
    ],
    "a": [
      0
    ],
    "e": "AI Builder provides turnkey AI models directly inside Power Apps and Power Automate."
  },
  {
    "d": "M",
    "q": "Scenario 3 (M): In Microsoft Dataverse, what type of table stores data that is shared across all environments and maintained by Microsoft, such as Account and Contact?",
    "o": [
      "Standard tables",
      "Custom tables",
      "Virtual tables",
      "Elastic tables"
    ],
    "a": [
      0
    ],
    "e": "Standard tables are out-of-the-box business entities provided with the Common Data Model in Dataverse."
  },
  {
    "d": "V",
    "q": "Scenario 3 (V): Which type of Power App is pixel-perfect, tailored for mobile/tablet task-oriented experiences, and allows starting from a blank canvas?",
    "o": [
      "Canvas App",
      "Model-Driven App",
      "Power Pages Site",
      "Dynamics 365 Sales App"
    ],
    "a": [
      0
    ],
    "e": "Canvas apps provide granular design control over UI elements and direct data connection using Power Fx."
  },
  {
    "d": "S",
    "q": "Scenario 3 (S): Which type of Power Automate flow is designed to automate legacy Windows desktop applications that lack an API?",
    "o": [
      "Desktop Flow (Robotic Process Automation / RPA)",
      "Automated Cloud Flow",
      "Scheduled Cloud Flow",
      "Business Process Flow"
    ],
    "a": [
      0
    ],
    "e": "Desktop flows perform RPA by recording and replaying user keystrokes and UI interactions on workstations."
  },
  {
    "d": "P",
    "q": "Scenario 3 (P): How does Microsoft Dataverse ensure security and data isolation across different business divisions?",
    "o": [
      "Business Units combined with Role-Based Access Control (RBAC) security roles",
      "Creating separate SQL Server instances",
      "Using different email domains",
      "Exporting data to Excel workbooks"
    ],
    "a": [
      0
    ],
    "e": "Dataverse security models use Business Units and security roles for hierarchical and matrix data governance."
  },
  {
    "d": "M",
    "q": "Scenario 3 (M): Which Dataverse feature enforces business logic such as setting field requirements or showing error messages on the client side without writing JavaScript?",
    "o": [
      "Business Rules",
      "Cloud Flows",
      "Power Fx formulas in Excel",
      "Dataflows"
    ],
    "a": [
      0
    ],
    "e": "Dataverse Business Rules provide visual client-side logic execution on model-driven forms."
  },
  {
    "d": "V",
    "q": "Scenario 3 (V): You need to build a responsive, data-driven portal for external customers to submit support tickets securely. What should you build?",
    "o": [
      "Power Pages",
      "Canvas App",
      "Power Automate Flow",
      "Power BI Dashboard"
    ],
    "a": [
      0
    ],
    "e": "Power Pages is tailored for secure, external-facing websites connected to Dataverse data."
  },
  {
    "d": "S",
    "q": "Scenario 3 (S): You want a workflow that guides customer service agents step-by-step through a standardized multi-stage onboarding process. What should you use?",
    "o": [
      "Business Process Flow",
      "Instant Cloud Flow",
      "Power Pages snippet",
      "Power Virtual Agents topic"
    ],
    "a": [
      0
    ],
    "e": "Business Process Flows provide guided visual stages across headers on model-driven app forms."
  },
  {
    "d": "P",
    "q": "Scenario 3 (P): What is the primary benefit of using custom connectors in Power Platform?",
    "o": [
      "Connecting to proprietary or internal REST APIs with OpenAPI specifications",
      "Bypassing Dataverse licensing",
      "Translating canvas apps to Java",
      "Creating 3D games"
    ],
    "a": [
      0
    ],
    "e": "Custom connectors allow low-code apps and flows to interact with any RESTful API service."
  },
  {
    "d": "M",
    "q": "Scenario 3 (M): You need to view real-time data residing in an external Azure SQL database inside Dataverse without copying or synchronizing the data. What feature should you implement?",
    "o": [
      "Virtual Tables (Virtual Entities)",
      "Dataverse Dataflows Gen2",
      "Elastic Tables",
      "Export to Data Lake"
    ],
    "a": [
      0
    ],
    "e": "Virtual Tables represent external data sources as native Dataverse tables without data replication."
  },
  {
    "d": "V",
    "q": "Scenario 3 (V): What is the declarative, low-code formula language used to express logic across Power Apps canvas apps and Dataverse?",
    "o": [
      "Power Fx",
      "DAX",
      "C#",
      "VBA"
    ],
    "a": [
      0
    ],
    "e": "Power Fx is the Excel-like open-source formula language used across Microsoft Power Platform."
  },
  {
    "d": "S",
    "q": "Scenario 3 (S): In Microsoft Copilot Studio (formerly Power Virtual Agents), what is the primary building block that defines a conversation path for a specific user inquiry?",
    "o": [
      "Topic",
      "Trigger Entity",
      "Skill",
      "Connector"
    ],
    "a": [
      0
    ],
    "e": "Topics define conversational dialogues with trigger phrases, question nodes, and conditional branches."
  },
  {
    "d": "P",
    "q": "Scenario 4 (P): Which Microsoft Power Platform component provides a low-code artificial intelligence capability that can extract invoice data, analyze sentiment, and predict outcomes?",
    "o": [
      "AI Builder",
      "Power Automate Desktop",
      "Power Pages",
      "Dataverse Elastic Tables"
    ],
    "a": [
      0
    ],
    "e": "AI Builder provides turnkey AI models directly inside Power Apps and Power Automate."
  },
  {
    "d": "M",
    "q": "Scenario 4 (M): In Microsoft Dataverse, what type of table stores data that is shared across all environments and maintained by Microsoft, such as Account and Contact?",
    "o": [
      "Standard tables",
      "Custom tables",
      "Virtual tables",
      "Elastic tables"
    ],
    "a": [
      0
    ],
    "e": "Standard tables are out-of-the-box business entities provided with the Common Data Model in Dataverse."
  },
  {
    "d": "V",
    "q": "Scenario 4 (V): Which type of Power App is pixel-perfect, tailored for mobile/tablet task-oriented experiences, and allows starting from a blank canvas?",
    "o": [
      "Canvas App",
      "Model-Driven App",
      "Power Pages Site",
      "Dynamics 365 Sales App"
    ],
    "a": [
      0
    ],
    "e": "Canvas apps provide granular design control over UI elements and direct data connection using Power Fx."
  },
  {
    "d": "S",
    "q": "Scenario 4 (S): Which type of Power Automate flow is designed to automate legacy Windows desktop applications that lack an API?",
    "o": [
      "Desktop Flow (Robotic Process Automation / RPA)",
      "Automated Cloud Flow",
      "Scheduled Cloud Flow",
      "Business Process Flow"
    ],
    "a": [
      0
    ],
    "e": "Desktop flows perform RPA by recording and replaying user keystrokes and UI interactions on workstations."
  },
  {
    "d": "P",
    "q": "Scenario 4 (P): How does Microsoft Dataverse ensure security and data isolation across different business divisions?",
    "o": [
      "Business Units combined with Role-Based Access Control (RBAC) security roles",
      "Creating separate SQL Server instances",
      "Using different email domains",
      "Exporting data to Excel workbooks"
    ],
    "a": [
      0
    ],
    "e": "Dataverse security models use Business Units and security roles for hierarchical and matrix data governance."
  },
  {
    "d": "M",
    "q": "Scenario 4 (M): Which Dataverse feature enforces business logic such as setting field requirements or showing error messages on the client side without writing JavaScript?",
    "o": [
      "Business Rules",
      "Cloud Flows",
      "Power Fx formulas in Excel",
      "Dataflows"
    ],
    "a": [
      0
    ],
    "e": "Dataverse Business Rules provide visual client-side logic execution on model-driven forms."
  },
  {
    "d": "V",
    "q": "Scenario 4 (V): You need to build a responsive, data-driven portal for external customers to submit support tickets securely. What should you build?",
    "o": [
      "Power Pages",
      "Canvas App",
      "Power Automate Flow",
      "Power BI Dashboard"
    ],
    "a": [
      0
    ],
    "e": "Power Pages is tailored for secure, external-facing websites connected to Dataverse data."
  },
  {
    "d": "S",
    "q": "Scenario 4 (S): You want a workflow that guides customer service agents step-by-step through a standardized multi-stage onboarding process. What should you use?",
    "o": [
      "Business Process Flow",
      "Instant Cloud Flow",
      "Power Pages snippet",
      "Power Virtual Agents topic"
    ],
    "a": [
      0
    ],
    "e": "Business Process Flows provide guided visual stages across headers on model-driven app forms."
  },
  {
    "d": "P",
    "q": "Scenario 4 (P): What is the primary benefit of using custom connectors in Power Platform?",
    "o": [
      "Connecting to proprietary or internal REST APIs with OpenAPI specifications",
      "Bypassing Dataverse licensing",
      "Translating canvas apps to Java",
      "Creating 3D games"
    ],
    "a": [
      0
    ],
    "e": "Custom connectors allow low-code apps and flows to interact with any RESTful API service."
  },
  {
    "d": "M",
    "q": "Scenario 4 (M): You need to view real-time data residing in an external Azure SQL database inside Dataverse without copying or synchronizing the data. What feature should you implement?",
    "o": [
      "Virtual Tables (Virtual Entities)",
      "Dataverse Dataflows Gen2",
      "Elastic Tables",
      "Export to Data Lake"
    ],
    "a": [
      0
    ],
    "e": "Virtual Tables represent external data sources as native Dataverse tables without data replication."
  },
  {
    "d": "V",
    "q": "Scenario 4 (V): What is the declarative, low-code formula language used to express logic across Power Apps canvas apps and Dataverse?",
    "o": [
      "Power Fx",
      "DAX",
      "C#",
      "VBA"
    ],
    "a": [
      0
    ],
    "e": "Power Fx is the Excel-like open-source formula language used across Microsoft Power Platform."
  },
  {
    "d": "S",
    "q": "Scenario 4 (S): In Microsoft Copilot Studio (formerly Power Virtual Agents), what is the primary building block that defines a conversation path for a specific user inquiry?",
    "o": [
      "Topic",
      "Trigger Entity",
      "Skill",
      "Connector"
    ],
    "a": [
      0
    ],
    "e": "Topics define conversational dialogues with trigger phrases, question nodes, and conditional branches."
  },
  {
    "d": "P",
    "q": "Scenario 5 (P): Which Microsoft Power Platform component provides a low-code artificial intelligence capability that can extract invoice data, analyze sentiment, and predict outcomes?",
    "o": [
      "AI Builder",
      "Power Automate Desktop",
      "Power Pages",
      "Dataverse Elastic Tables"
    ],
    "a": [
      0
    ],
    "e": "AI Builder provides turnkey AI models directly inside Power Apps and Power Automate."
  },
  {
    "d": "M",
    "q": "Scenario 5 (M): In Microsoft Dataverse, what type of table stores data that is shared across all environments and maintained by Microsoft, such as Account and Contact?",
    "o": [
      "Standard tables",
      "Custom tables",
      "Virtual tables",
      "Elastic tables"
    ],
    "a": [
      0
    ],
    "e": "Standard tables are out-of-the-box business entities provided with the Common Data Model in Dataverse."
  },
  {
    "d": "V",
    "q": "Scenario 5 (V): Which type of Power App is pixel-perfect, tailored for mobile/tablet task-oriented experiences, and allows starting from a blank canvas?",
    "o": [
      "Canvas App",
      "Model-Driven App",
      "Power Pages Site",
      "Dynamics 365 Sales App"
    ],
    "a": [
      0
    ],
    "e": "Canvas apps provide granular design control over UI elements and direct data connection using Power Fx."
  },
  {
    "d": "S",
    "q": "Scenario 5 (S): Which type of Power Automate flow is designed to automate legacy Windows desktop applications that lack an API?",
    "o": [
      "Desktop Flow (Robotic Process Automation / RPA)",
      "Automated Cloud Flow",
      "Scheduled Cloud Flow",
      "Business Process Flow"
    ],
    "a": [
      0
    ],
    "e": "Desktop flows perform RPA by recording and replaying user keystrokes and UI interactions on workstations."
  },
  {
    "d": "P",
    "q": "Scenario 5 (P): How does Microsoft Dataverse ensure security and data isolation across different business divisions?",
    "o": [
      "Business Units combined with Role-Based Access Control (RBAC) security roles",
      "Creating separate SQL Server instances",
      "Using different email domains",
      "Exporting data to Excel workbooks"
    ],
    "a": [
      0
    ],
    "e": "Dataverse security models use Business Units and security roles for hierarchical and matrix data governance."
  },
  {
    "d": "M",
    "q": "Scenario 5 (M): Which Dataverse feature enforces business logic such as setting field requirements or showing error messages on the client side without writing JavaScript?",
    "o": [
      "Business Rules",
      "Cloud Flows",
      "Power Fx formulas in Excel",
      "Dataflows"
    ],
    "a": [
      0
    ],
    "e": "Dataverse Business Rules provide visual client-side logic execution on model-driven forms."
  },
  {
    "d": "V",
    "q": "Scenario 5 (V): You need to build a responsive, data-driven portal for external customers to submit support tickets securely. What should you build?",
    "o": [
      "Power Pages",
      "Canvas App",
      "Power Automate Flow",
      "Power BI Dashboard"
    ],
    "a": [
      0
    ],
    "e": "Power Pages is tailored for secure, external-facing websites connected to Dataverse data."
  },
  {
    "d": "S",
    "q": "Scenario 5 (S): You want a workflow that guides customer service agents step-by-step through a standardized multi-stage onboarding process. What should you use?",
    "o": [
      "Business Process Flow",
      "Instant Cloud Flow",
      "Power Pages snippet",
      "Power Virtual Agents topic"
    ],
    "a": [
      0
    ],
    "e": "Business Process Flows provide guided visual stages across headers on model-driven app forms."
  },
  {
    "d": "P",
    "q": "Scenario 5 (P): What is the primary benefit of using custom connectors in Power Platform?",
    "o": [
      "Connecting to proprietary or internal REST APIs with OpenAPI specifications",
      "Bypassing Dataverse licensing",
      "Translating canvas apps to Java",
      "Creating 3D games"
    ],
    "a": [
      0
    ],
    "e": "Custom connectors allow low-code apps and flows to interact with any RESTful API service."
  },
  {
    "d": "M",
    "q": "Scenario 5 (M): You need to view real-time data residing in an external Azure SQL database inside Dataverse without copying or synchronizing the data. What feature should you implement?",
    "o": [
      "Virtual Tables (Virtual Entities)",
      "Dataverse Dataflows Gen2",
      "Elastic Tables",
      "Export to Data Lake"
    ],
    "a": [
      0
    ],
    "e": "Virtual Tables represent external data sources as native Dataverse tables without data replication."
  },
  {
    "d": "V",
    "q": "Scenario 5 (V): What is the declarative, low-code formula language used to express logic across Power Apps canvas apps and Dataverse?",
    "o": [
      "Power Fx",
      "DAX",
      "C#",
      "VBA"
    ],
    "a": [
      0
    ],
    "e": "Power Fx is the Excel-like open-source formula language used across Microsoft Power Platform."
  },
  {
    "d": "S",
    "q": "Scenario 5 (S): In Microsoft Copilot Studio (formerly Power Virtual Agents), what is the primary building block that defines a conversation path for a specific user inquiry?",
    "o": [
      "Topic",
      "Trigger Entity",
      "Skill",
      "Connector"
    ],
    "a": [
      0
    ],
    "e": "Topics define conversational dialogues with trigger phrases, question nodes, and conditional branches."
  },
  {
    "d": "P",
    "q": "Scenario 6 (P): Which Microsoft Power Platform component provides a low-code artificial intelligence capability that can extract invoice data, analyze sentiment, and predict outcomes?",
    "o": [
      "AI Builder",
      "Power Automate Desktop",
      "Power Pages",
      "Dataverse Elastic Tables"
    ],
    "a": [
      0
    ],
    "e": "AI Builder provides turnkey AI models directly inside Power Apps and Power Automate."
  },
  {
    "d": "M",
    "q": "Scenario 6 (M): In Microsoft Dataverse, what type of table stores data that is shared across all environments and maintained by Microsoft, such as Account and Contact?",
    "o": [
      "Standard tables",
      "Custom tables",
      "Virtual tables",
      "Elastic tables"
    ],
    "a": [
      0
    ],
    "e": "Standard tables are out-of-the-box business entities provided with the Common Data Model in Dataverse."
  },
  {
    "d": "V",
    "q": "Scenario 6 (V): Which type of Power App is pixel-perfect, tailored for mobile/tablet task-oriented experiences, and allows starting from a blank canvas?",
    "o": [
      "Canvas App",
      "Model-Driven App",
      "Power Pages Site",
      "Dynamics 365 Sales App"
    ],
    "a": [
      0
    ],
    "e": "Canvas apps provide granular design control over UI elements and direct data connection using Power Fx."
  },
  {
    "d": "S",
    "q": "Scenario 6 (S): Which type of Power Automate flow is designed to automate legacy Windows desktop applications that lack an API?",
    "o": [
      "Desktop Flow (Robotic Process Automation / RPA)",
      "Automated Cloud Flow",
      "Scheduled Cloud Flow",
      "Business Process Flow"
    ],
    "a": [
      0
    ],
    "e": "Desktop flows perform RPA by recording and replaying user keystrokes and UI interactions on workstations."
  },
  {
    "d": "P",
    "q": "Scenario 6 (P): How does Microsoft Dataverse ensure security and data isolation across different business divisions?",
    "o": [
      "Business Units combined with Role-Based Access Control (RBAC) security roles",
      "Creating separate SQL Server instances",
      "Using different email domains",
      "Exporting data to Excel workbooks"
    ],
    "a": [
      0
    ],
    "e": "Dataverse security models use Business Units and security roles for hierarchical and matrix data governance."
  },
  {
    "d": "M",
    "q": "Scenario 6 (M): Which Dataverse feature enforces business logic such as setting field requirements or showing error messages on the client side without writing JavaScript?",
    "o": [
      "Business Rules",
      "Cloud Flows",
      "Power Fx formulas in Excel",
      "Dataflows"
    ],
    "a": [
      0
    ],
    "e": "Dataverse Business Rules provide visual client-side logic execution on model-driven forms."
  },
  {
    "d": "V",
    "q": "Scenario 6 (V): You need to build a responsive, data-driven portal for external customers to submit support tickets securely. What should you build?",
    "o": [
      "Power Pages",
      "Canvas App",
      "Power Automate Flow",
      "Power BI Dashboard"
    ],
    "a": [
      0
    ],
    "e": "Power Pages is tailored for secure, external-facing websites connected to Dataverse data."
  },
  {
    "d": "S",
    "q": "Scenario 6 (S): You want a workflow that guides customer service agents step-by-step through a standardized multi-stage onboarding process. What should you use?",
    "o": [
      "Business Process Flow",
      "Instant Cloud Flow",
      "Power Pages snippet",
      "Power Virtual Agents topic"
    ],
    "a": [
      0
    ],
    "e": "Business Process Flows provide guided visual stages across headers on model-driven app forms."
  },
  {
    "d": "P",
    "q": "Scenario 6 (P): What is the primary benefit of using custom connectors in Power Platform?",
    "o": [
      "Connecting to proprietary or internal REST APIs with OpenAPI specifications",
      "Bypassing Dataverse licensing",
      "Translating canvas apps to Java",
      "Creating 3D games"
    ],
    "a": [
      0
    ],
    "e": "Custom connectors allow low-code apps and flows to interact with any RESTful API service."
  },
  {
    "d": "M",
    "q": "Scenario 6 (M): You need to view real-time data residing in an external Azure SQL database inside Dataverse without copying or synchronizing the data. What feature should you implement?",
    "o": [
      "Virtual Tables (Virtual Entities)",
      "Dataverse Dataflows Gen2",
      "Elastic Tables",
      "Export to Data Lake"
    ],
    "a": [
      0
    ],
    "e": "Virtual Tables represent external data sources as native Dataverse tables without data replication."
  },
  {
    "d": "V",
    "q": "Scenario 6 (V): What is the declarative, low-code formula language used to express logic across Power Apps canvas apps and Dataverse?",
    "o": [
      "Power Fx",
      "DAX",
      "C#",
      "VBA"
    ],
    "a": [
      0
    ],
    "e": "Power Fx is the Excel-like open-source formula language used across Microsoft Power Platform."
  },
  {
    "d": "S",
    "q": "Scenario 6 (S): In Microsoft Copilot Studio (formerly Power Virtual Agents), what is the primary building block that defines a conversation path for a specific user inquiry?",
    "o": [
      "Topic",
      "Trigger Entity",
      "Skill",
      "Connector"
    ],
    "a": [
      0
    ],
    "e": "Topics define conversational dialogues with trigger phrases, question nodes, and conditional branches."
  },
  {
    "d": "P",
    "q": "Scenario 7 (P): Which Microsoft Power Platform component provides a low-code artificial intelligence capability that can extract invoice data, analyze sentiment, and predict outcomes?",
    "o": [
      "AI Builder",
      "Power Automate Desktop",
      "Power Pages",
      "Dataverse Elastic Tables"
    ],
    "a": [
      0
    ],
    "e": "AI Builder provides turnkey AI models directly inside Power Apps and Power Automate."
  },
  {
    "d": "M",
    "q": "Scenario 7 (M): In Microsoft Dataverse, what type of table stores data that is shared across all environments and maintained by Microsoft, such as Account and Contact?",
    "o": [
      "Standard tables",
      "Custom tables",
      "Virtual tables",
      "Elastic tables"
    ],
    "a": [
      0
    ],
    "e": "Standard tables are out-of-the-box business entities provided with the Common Data Model in Dataverse."
  },
  {
    "d": "V",
    "q": "Scenario 7 (V): Which type of Power App is pixel-perfect, tailored for mobile/tablet task-oriented experiences, and allows starting from a blank canvas?",
    "o": [
      "Canvas App",
      "Model-Driven App",
      "Power Pages Site",
      "Dynamics 365 Sales App"
    ],
    "a": [
      0
    ],
    "e": "Canvas apps provide granular design control over UI elements and direct data connection using Power Fx."
  },
  {
    "d": "S",
    "q": "Scenario 7 (S): Which type of Power Automate flow is designed to automate legacy Windows desktop applications that lack an API?",
    "o": [
      "Desktop Flow (Robotic Process Automation / RPA)",
      "Automated Cloud Flow",
      "Scheduled Cloud Flow",
      "Business Process Flow"
    ],
    "a": [
      0
    ],
    "e": "Desktop flows perform RPA by recording and replaying user keystrokes and UI interactions on workstations."
  },
  {
    "d": "P",
    "q": "Scenario 7 (P): How does Microsoft Dataverse ensure security and data isolation across different business divisions?",
    "o": [
      "Business Units combined with Role-Based Access Control (RBAC) security roles",
      "Creating separate SQL Server instances",
      "Using different email domains",
      "Exporting data to Excel workbooks"
    ],
    "a": [
      0
    ],
    "e": "Dataverse security models use Business Units and security roles for hierarchical and matrix data governance."
  },
  {
    "d": "M",
    "q": "Scenario 7 (M): Which Dataverse feature enforces business logic such as setting field requirements or showing error messages on the client side without writing JavaScript?",
    "o": [
      "Business Rules",
      "Cloud Flows",
      "Power Fx formulas in Excel",
      "Dataflows"
    ],
    "a": [
      0
    ],
    "e": "Dataverse Business Rules provide visual client-side logic execution on model-driven forms."
  },
  {
    "d": "V",
    "q": "Scenario 7 (V): You need to build a responsive, data-driven portal for external customers to submit support tickets securely. What should you build?",
    "o": [
      "Power Pages",
      "Canvas App",
      "Power Automate Flow",
      "Power BI Dashboard"
    ],
    "a": [
      0
    ],
    "e": "Power Pages is tailored for secure, external-facing websites connected to Dataverse data."
  },
  {
    "d": "S",
    "q": "Scenario 7 (S): You want a workflow that guides customer service agents step-by-step through a standardized multi-stage onboarding process. What should you use?",
    "o": [
      "Business Process Flow",
      "Instant Cloud Flow",
      "Power Pages snippet",
      "Power Virtual Agents topic"
    ],
    "a": [
      0
    ],
    "e": "Business Process Flows provide guided visual stages across headers on model-driven app forms."
  },
  {
    "d": "P",
    "q": "Scenario 7 (P): What is the primary benefit of using custom connectors in Power Platform?",
    "o": [
      "Connecting to proprietary or internal REST APIs with OpenAPI specifications",
      "Bypassing Dataverse licensing",
      "Translating canvas apps to Java",
      "Creating 3D games"
    ],
    "a": [
      0
    ],
    "e": "Custom connectors allow low-code apps and flows to interact with any RESTful API service."
  },
  {
    "d": "M",
    "q": "Scenario 7 (M): You need to view real-time data residing in an external Azure SQL database inside Dataverse without copying or synchronizing the data. What feature should you implement?",
    "o": [
      "Virtual Tables (Virtual Entities)",
      "Dataverse Dataflows Gen2",
      "Elastic Tables",
      "Export to Data Lake"
    ],
    "a": [
      0
    ],
    "e": "Virtual Tables represent external data sources as native Dataverse tables without data replication."
  },
  {
    "d": "V",
    "q": "Scenario 7 (V): What is the declarative, low-code formula language used to express logic across Power Apps canvas apps and Dataverse?",
    "o": [
      "Power Fx",
      "DAX",
      "C#",
      "VBA"
    ],
    "a": [
      0
    ],
    "e": "Power Fx is the Excel-like open-source formula language used across Microsoft Power Platform."
  },
  {
    "d": "S",
    "q": "Scenario 7 (S): In Microsoft Copilot Studio (formerly Power Virtual Agents), what is the primary building block that defines a conversation path for a specific user inquiry?",
    "o": [
      "Topic",
      "Trigger Entity",
      "Skill",
      "Connector"
    ],
    "a": [
      0
    ],
    "e": "Topics define conversational dialogues with trigger phrases, question nodes, and conditional branches."
  },
  {
    "d": "P",
    "q": "Scenario 8 (P): Which Microsoft Power Platform component provides a low-code artificial intelligence capability that can extract invoice data, analyze sentiment, and predict outcomes?",
    "o": [
      "AI Builder",
      "Power Automate Desktop",
      "Power Pages",
      "Dataverse Elastic Tables"
    ],
    "a": [
      0
    ],
    "e": "AI Builder provides turnkey AI models directly inside Power Apps and Power Automate."
  },
  {
    "d": "M",
    "q": "Scenario 8 (M): In Microsoft Dataverse, what type of table stores data that is shared across all environments and maintained by Microsoft, such as Account and Contact?",
    "o": [
      "Standard tables",
      "Custom tables",
      "Virtual tables",
      "Elastic tables"
    ],
    "a": [
      0
    ],
    "e": "Standard tables are out-of-the-box business entities provided with the Common Data Model in Dataverse."
  },
  {
    "d": "V",
    "q": "Scenario 8 (V): Which type of Power App is pixel-perfect, tailored for mobile/tablet task-oriented experiences, and allows starting from a blank canvas?",
    "o": [
      "Canvas App",
      "Model-Driven App",
      "Power Pages Site",
      "Dynamics 365 Sales App"
    ],
    "a": [
      0
    ],
    "e": "Canvas apps provide granular design control over UI elements and direct data connection using Power Fx."
  },
  {
    "d": "S",
    "q": "Scenario 8 (S): Which type of Power Automate flow is designed to automate legacy Windows desktop applications that lack an API?",
    "o": [
      "Desktop Flow (Robotic Process Automation / RPA)",
      "Automated Cloud Flow",
      "Scheduled Cloud Flow",
      "Business Process Flow"
    ],
    "a": [
      0
    ],
    "e": "Desktop flows perform RPA by recording and replaying user keystrokes and UI interactions on workstations."
  },
  {
    "d": "P",
    "q": "Scenario 8 (P): How does Microsoft Dataverse ensure security and data isolation across different business divisions?",
    "o": [
      "Business Units combined with Role-Based Access Control (RBAC) security roles",
      "Creating separate SQL Server instances",
      "Using different email domains",
      "Exporting data to Excel workbooks"
    ],
    "a": [
      0
    ],
    "e": "Dataverse security models use Business Units and security roles for hierarchical and matrix data governance."
  },
  {
    "d": "M",
    "q": "Scenario 8 (M): Which Dataverse feature enforces business logic such as setting field requirements or showing error messages on the client side without writing JavaScript?",
    "o": [
      "Business Rules",
      "Cloud Flows",
      "Power Fx formulas in Excel",
      "Dataflows"
    ],
    "a": [
      0
    ],
    "e": "Dataverse Business Rules provide visual client-side logic execution on model-driven forms."
  },
  {
    "d": "V",
    "q": "Scenario 8 (V): You need to build a responsive, data-driven portal for external customers to submit support tickets securely. What should you build?",
    "o": [
      "Power Pages",
      "Canvas App",
      "Power Automate Flow",
      "Power BI Dashboard"
    ],
    "a": [
      0
    ],
    "e": "Power Pages is tailored for secure, external-facing websites connected to Dataverse data."
  },
  {
    "d": "S",
    "q": "Scenario 8 (S): You want a workflow that guides customer service agents step-by-step through a standardized multi-stage onboarding process. What should you use?",
    "o": [
      "Business Process Flow",
      "Instant Cloud Flow",
      "Power Pages snippet",
      "Power Virtual Agents topic"
    ],
    "a": [
      0
    ],
    "e": "Business Process Flows provide guided visual stages across headers on model-driven app forms."
  },
  {
    "d": "P",
    "q": "Scenario 8 (P): What is the primary benefit of using custom connectors in Power Platform?",
    "o": [
      "Connecting to proprietary or internal REST APIs with OpenAPI specifications",
      "Bypassing Dataverse licensing",
      "Translating canvas apps to Java",
      "Creating 3D games"
    ],
    "a": [
      0
    ],
    "e": "Custom connectors allow low-code apps and flows to interact with any RESTful API service."
  },
  {
    "d": "M",
    "q": "Scenario 8 (M): You need to view real-time data residing in an external Azure SQL database inside Dataverse without copying or synchronizing the data. What feature should you implement?",
    "o": [
      "Virtual Tables (Virtual Entities)",
      "Dataverse Dataflows Gen2",
      "Elastic Tables",
      "Export to Data Lake"
    ],
    "a": [
      0
    ],
    "e": "Virtual Tables represent external data sources as native Dataverse tables without data replication."
  },
  {
    "d": "V",
    "q": "Scenario 8 (V): What is the declarative, low-code formula language used to express logic across Power Apps canvas apps and Dataverse?",
    "o": [
      "Power Fx",
      "DAX",
      "C#",
      "VBA"
    ],
    "a": [
      0
    ],
    "e": "Power Fx is the Excel-like open-source formula language used across Microsoft Power Platform."
  },
  {
    "d": "S",
    "q": "Scenario 8 (S): In Microsoft Copilot Studio (formerly Power Virtual Agents), what is the primary building block that defines a conversation path for a specific user inquiry?",
    "o": [
      "Topic",
      "Trigger Entity",
      "Skill",
      "Connector"
    ],
    "a": [
      0
    ],
    "e": "Topics define conversational dialogues with trigger phrases, question nodes, and conditional branches."
  },
  {
    "d": "P",
    "q": "Scenario 9 (P): Which Microsoft Power Platform component provides a low-code artificial intelligence capability that can extract invoice data, analyze sentiment, and predict outcomes?",
    "o": [
      "AI Builder",
      "Power Automate Desktop",
      "Power Pages",
      "Dataverse Elastic Tables"
    ],
    "a": [
      0
    ],
    "e": "AI Builder provides turnkey AI models directly inside Power Apps and Power Automate."
  },
  {
    "d": "M",
    "q": "Scenario 9 (M): In Microsoft Dataverse, what type of table stores data that is shared across all environments and maintained by Microsoft, such as Account and Contact?",
    "o": [
      "Standard tables",
      "Custom tables",
      "Virtual tables",
      "Elastic tables"
    ],
    "a": [
      0
    ],
    "e": "Standard tables are out-of-the-box business entities provided with the Common Data Model in Dataverse."
  },
  {
    "d": "V",
    "q": "Scenario 9 (V): Which type of Power App is pixel-perfect, tailored for mobile/tablet task-oriented experiences, and allows starting from a blank canvas?",
    "o": [
      "Canvas App",
      "Model-Driven App",
      "Power Pages Site",
      "Dynamics 365 Sales App"
    ],
    "a": [
      0
    ],
    "e": "Canvas apps provide granular design control over UI elements and direct data connection using Power Fx."
  },
  {
    "d": "S",
    "q": "Scenario 9 (S): Which type of Power Automate flow is designed to automate legacy Windows desktop applications that lack an API?",
    "o": [
      "Desktop Flow (Robotic Process Automation / RPA)",
      "Automated Cloud Flow",
      "Scheduled Cloud Flow",
      "Business Process Flow"
    ],
    "a": [
      0
    ],
    "e": "Desktop flows perform RPA by recording and replaying user keystrokes and UI interactions on workstations."
  },
  {
    "d": "P",
    "q": "Scenario 9 (P): How does Microsoft Dataverse ensure security and data isolation across different business divisions?",
    "o": [
      "Business Units combined with Role-Based Access Control (RBAC) security roles",
      "Creating separate SQL Server instances",
      "Using different email domains",
      "Exporting data to Excel workbooks"
    ],
    "a": [
      0
    ],
    "e": "Dataverse security models use Business Units and security roles for hierarchical and matrix data governance."
  },
  {
    "d": "M",
    "q": "Scenario 9 (M): Which Dataverse feature enforces business logic such as setting field requirements or showing error messages on the client side without writing JavaScript?",
    "o": [
      "Business Rules",
      "Cloud Flows",
      "Power Fx formulas in Excel",
      "Dataflows"
    ],
    "a": [
      0
    ],
    "e": "Dataverse Business Rules provide visual client-side logic execution on model-driven forms."
  },
  {
    "d": "V",
    "q": "Scenario 9 (V): You need to build a responsive, data-driven portal for external customers to submit support tickets securely. What should you build?",
    "o": [
      "Power Pages",
      "Canvas App",
      "Power Automate Flow",
      "Power BI Dashboard"
    ],
    "a": [
      0
    ],
    "e": "Power Pages is tailored for secure, external-facing websites connected to Dataverse data."
  },
  {
    "d": "S",
    "q": "Scenario 9 (S): You want a workflow that guides customer service agents step-by-step through a standardized multi-stage onboarding process. What should you use?",
    "o": [
      "Business Process Flow",
      "Instant Cloud Flow",
      "Power Pages snippet",
      "Power Virtual Agents topic"
    ],
    "a": [
      0
    ],
    "e": "Business Process Flows provide guided visual stages across headers on model-driven app forms."
  },
  {
    "d": "P",
    "q": "Scenario 9 (P): What is the primary benefit of using custom connectors in Power Platform?",
    "o": [
      "Connecting to proprietary or internal REST APIs with OpenAPI specifications",
      "Bypassing Dataverse licensing",
      "Translating canvas apps to Java",
      "Creating 3D games"
    ],
    "a": [
      0
    ],
    "e": "Custom connectors allow low-code apps and flows to interact with any RESTful API service."
  },
  {
    "d": "M",
    "q": "Scenario 9 (M): You need to view real-time data residing in an external Azure SQL database inside Dataverse without copying or synchronizing the data. What feature should you implement?",
    "o": [
      "Virtual Tables (Virtual Entities)",
      "Dataverse Dataflows Gen2",
      "Elastic Tables",
      "Export to Data Lake"
    ],
    "a": [
      0
    ],
    "e": "Virtual Tables represent external data sources as native Dataverse tables without data replication."
  },
  {
    "d": "V",
    "q": "Scenario 9 (V): What is the declarative, low-code formula language used to express logic across Power Apps canvas apps and Dataverse?",
    "o": [
      "Power Fx",
      "DAX",
      "C#",
      "VBA"
    ],
    "a": [
      0
    ],
    "e": "Power Fx is the Excel-like open-source formula language used across Microsoft Power Platform."
  },
  {
    "d": "S",
    "q": "Scenario 9 (S): In Microsoft Copilot Studio (formerly Power Virtual Agents), what is the primary building block that defines a conversation path for a specific user inquiry?",
    "o": [
      "Topic",
      "Trigger Entity",
      "Skill",
      "Connector"
    ],
    "a": [
      0
    ],
    "e": "Topics define conversational dialogues with trigger phrases, question nodes, and conditional branches."
  },
  {
    "d": "P",
    "q": "Scenario 10 (P): Which Microsoft Power Platform component provides a low-code artificial intelligence capability that can extract invoice data, analyze sentiment, and predict outcomes?",
    "o": [
      "AI Builder",
      "Power Automate Desktop",
      "Power Pages",
      "Dataverse Elastic Tables"
    ],
    "a": [
      0
    ],
    "e": "AI Builder provides turnkey AI models directly inside Power Apps and Power Automate."
  },
  {
    "d": "M",
    "q": "Scenario 10 (M): In Microsoft Dataverse, what type of table stores data that is shared across all environments and maintained by Microsoft, such as Account and Contact?",
    "o": [
      "Standard tables",
      "Custom tables",
      "Virtual tables",
      "Elastic tables"
    ],
    "a": [
      0
    ],
    "e": "Standard tables are out-of-the-box business entities provided with the Common Data Model in Dataverse."
  },
  {
    "d": "V",
    "q": "Scenario 10 (V): Which type of Power App is pixel-perfect, tailored for mobile/tablet task-oriented experiences, and allows starting from a blank canvas?",
    "o": [
      "Canvas App",
      "Model-Driven App",
      "Power Pages Site",
      "Dynamics 365 Sales App"
    ],
    "a": [
      0
    ],
    "e": "Canvas apps provide granular design control over UI elements and direct data connection using Power Fx."
  },
  {
    "d": "S",
    "q": "Scenario 10 (S): Which type of Power Automate flow is designed to automate legacy Windows desktop applications that lack an API?",
    "o": [
      "Desktop Flow (Robotic Process Automation / RPA)",
      "Automated Cloud Flow",
      "Scheduled Cloud Flow",
      "Business Process Flow"
    ],
    "a": [
      0
    ],
    "e": "Desktop flows perform RPA by recording and replaying user keystrokes and UI interactions on workstations."
  },
  {
    "d": "P",
    "q": "Scenario 10 (P): How does Microsoft Dataverse ensure security and data isolation across different business divisions?",
    "o": [
      "Business Units combined with Role-Based Access Control (RBAC) security roles",
      "Creating separate SQL Server instances",
      "Using different email domains",
      "Exporting data to Excel workbooks"
    ],
    "a": [
      0
    ],
    "e": "Dataverse security models use Business Units and security roles for hierarchical and matrix data governance."
  },
  {
    "d": "M",
    "q": "Scenario 10 (M): Which Dataverse feature enforces business logic such as setting field requirements or showing error messages on the client side without writing JavaScript?",
    "o": [
      "Business Rules",
      "Cloud Flows",
      "Power Fx formulas in Excel",
      "Dataflows"
    ],
    "a": [
      0
    ],
    "e": "Dataverse Business Rules provide visual client-side logic execution on model-driven forms."
  },
  {
    "d": "V",
    "q": "Scenario 10 (V): You need to build a responsive, data-driven portal for external customers to submit support tickets securely. What should you build?",
    "o": [
      "Power Pages",
      "Canvas App",
      "Power Automate Flow",
      "Power BI Dashboard"
    ],
    "a": [
      0
    ],
    "e": "Power Pages is tailored for secure, external-facing websites connected to Dataverse data."
  },
  {
    "d": "S",
    "q": "Scenario 10 (S): You want a workflow that guides customer service agents step-by-step through a standardized multi-stage onboarding process. What should you use?",
    "o": [
      "Business Process Flow",
      "Instant Cloud Flow",
      "Power Pages snippet",
      "Power Virtual Agents topic"
    ],
    "a": [
      0
    ],
    "e": "Business Process Flows provide guided visual stages across headers on model-driven app forms."
  },
  {
    "d": "P",
    "q": "Scenario 10 (P): What is the primary benefit of using custom connectors in Power Platform?",
    "o": [
      "Connecting to proprietary or internal REST APIs with OpenAPI specifications",
      "Bypassing Dataverse licensing",
      "Translating canvas apps to Java",
      "Creating 3D games"
    ],
    "a": [
      0
    ],
    "e": "Custom connectors allow low-code apps and flows to interact with any RESTful API service."
  },
  {
    "d": "M",
    "q": "Scenario 10 (M): You need to view real-time data residing in an external Azure SQL database inside Dataverse without copying or synchronizing the data. What feature should you implement?",
    "o": [
      "Virtual Tables (Virtual Entities)",
      "Dataverse Dataflows Gen2",
      "Elastic Tables",
      "Export to Data Lake"
    ],
    "a": [
      0
    ],
    "e": "Virtual Tables represent external data sources as native Dataverse tables without data replication."
  },
  {
    "d": "V",
    "q": "Scenario 10 (V): What is the declarative, low-code formula language used to express logic across Power Apps canvas apps and Dataverse?",
    "o": [
      "Power Fx",
      "DAX",
      "C#",
      "VBA"
    ],
    "a": [
      0
    ],
    "e": "Power Fx is the Excel-like open-source formula language used across Microsoft Power Platform."
  },
  {
    "d": "S",
    "q": "Scenario 10 (S): In Microsoft Copilot Studio (formerly Power Virtual Agents), what is the primary building block that defines a conversation path for a specific user inquiry?",
    "o": [
      "Topic",
      "Trigger Entity",
      "Skill",
      "Connector"
    ],
    "a": [
      0
    ],
    "e": "Topics define conversational dialogues with trigger phrases, question nodes, and conditional branches."
  },
  {
    "d": "P",
    "q": "Scenario 11 (P): Which Microsoft Power Platform component provides a low-code artificial intelligence capability that can extract invoice data, analyze sentiment, and predict outcomes?",
    "o": [
      "AI Builder",
      "Power Automate Desktop",
      "Power Pages",
      "Dataverse Elastic Tables"
    ],
    "a": [
      0
    ],
    "e": "AI Builder provides turnkey AI models directly inside Power Apps and Power Automate."
  },
  {
    "d": "M",
    "q": "Scenario 11 (M): In Microsoft Dataverse, what type of table stores data that is shared across all environments and maintained by Microsoft, such as Account and Contact?",
    "o": [
      "Standard tables",
      "Custom tables",
      "Virtual tables",
      "Elastic tables"
    ],
    "a": [
      0
    ],
    "e": "Standard tables are out-of-the-box business entities provided with the Common Data Model in Dataverse."
  },
  {
    "d": "V",
    "q": "Scenario 11 (V): Which type of Power App is pixel-perfect, tailored for mobile/tablet task-oriented experiences, and allows starting from a blank canvas?",
    "o": [
      "Canvas App",
      "Model-Driven App",
      "Power Pages Site",
      "Dynamics 365 Sales App"
    ],
    "a": [
      0
    ],
    "e": "Canvas apps provide granular design control over UI elements and direct data connection using Power Fx."
  },
  {
    "d": "S",
    "q": "Scenario 11 (S): Which type of Power Automate flow is designed to automate legacy Windows desktop applications that lack an API?",
    "o": [
      "Desktop Flow (Robotic Process Automation / RPA)",
      "Automated Cloud Flow",
      "Scheduled Cloud Flow",
      "Business Process Flow"
    ],
    "a": [
      0
    ],
    "e": "Desktop flows perform RPA by recording and replaying user keystrokes and UI interactions on workstations."
  },
  {
    "d": "P",
    "q": "Scenario 11 (P): How does Microsoft Dataverse ensure security and data isolation across different business divisions?",
    "o": [
      "Business Units combined with Role-Based Access Control (RBAC) security roles",
      "Creating separate SQL Server instances",
      "Using different email domains",
      "Exporting data to Excel workbooks"
    ],
    "a": [
      0
    ],
    "e": "Dataverse security models use Business Units and security roles for hierarchical and matrix data governance."
  },
  {
    "d": "M",
    "q": "Scenario 11 (M): Which Dataverse feature enforces business logic such as setting field requirements or showing error messages on the client side without writing JavaScript?",
    "o": [
      "Business Rules",
      "Cloud Flows",
      "Power Fx formulas in Excel",
      "Dataflows"
    ],
    "a": [
      0
    ],
    "e": "Dataverse Business Rules provide visual client-side logic execution on model-driven forms."
  },
  {
    "d": "V",
    "q": "Scenario 11 (V): You need to build a responsive, data-driven portal for external customers to submit support tickets securely. What should you build?",
    "o": [
      "Power Pages",
      "Canvas App",
      "Power Automate Flow",
      "Power BI Dashboard"
    ],
    "a": [
      0
    ],
    "e": "Power Pages is tailored for secure, external-facing websites connected to Dataverse data."
  },
  {
    "d": "S",
    "q": "Scenario 11 (S): You want a workflow that guides customer service agents step-by-step through a standardized multi-stage onboarding process. What should you use?",
    "o": [
      "Business Process Flow",
      "Instant Cloud Flow",
      "Power Pages snippet",
      "Power Virtual Agents topic"
    ],
    "a": [
      0
    ],
    "e": "Business Process Flows provide guided visual stages across headers on model-driven app forms."
  },
  {
    "d": "P",
    "q": "Scenario 11 (P): What is the primary benefit of using custom connectors in Power Platform?",
    "o": [
      "Connecting to proprietary or internal REST APIs with OpenAPI specifications",
      "Bypassing Dataverse licensing",
      "Translating canvas apps to Java",
      "Creating 3D games"
    ],
    "a": [
      0
    ],
    "e": "Custom connectors allow low-code apps and flows to interact with any RESTful API service."
  },
  {
    "d": "M",
    "q": "Scenario 11 (M): You need to view real-time data residing in an external Azure SQL database inside Dataverse without copying or synchronizing the data. What feature should you implement?",
    "o": [
      "Virtual Tables (Virtual Entities)",
      "Dataverse Dataflows Gen2",
      "Elastic Tables",
      "Export to Data Lake"
    ],
    "a": [
      0
    ],
    "e": "Virtual Tables represent external data sources as native Dataverse tables without data replication."
  },
  {
    "d": "V",
    "q": "Scenario 11 (V): What is the declarative, low-code formula language used to express logic across Power Apps canvas apps and Dataverse?",
    "o": [
      "Power Fx",
      "DAX",
      "C#",
      "VBA"
    ],
    "a": [
      0
    ],
    "e": "Power Fx is the Excel-like open-source formula language used across Microsoft Power Platform."
  },
  {
    "d": "S",
    "q": "Scenario 11 (S): In Microsoft Copilot Studio (formerly Power Virtual Agents), what is the primary building block that defines a conversation path for a specific user inquiry?",
    "o": [
      "Topic",
      "Trigger Entity",
      "Skill",
      "Connector"
    ],
    "a": [
      0
    ],
    "e": "Topics define conversational dialogues with trigger phrases, question nodes, and conditional branches."
  },
  {
    "d": "P",
    "q": "Scenario 12 (P): Which Microsoft Power Platform component provides a low-code artificial intelligence capability that can extract invoice data, analyze sentiment, and predict outcomes?",
    "o": [
      "AI Builder",
      "Power Automate Desktop",
      "Power Pages",
      "Dataverse Elastic Tables"
    ],
    "a": [
      0
    ],
    "e": "AI Builder provides turnkey AI models directly inside Power Apps and Power Automate."
  },
  {
    "d": "M",
    "q": "Scenario 12 (M): In Microsoft Dataverse, what type of table stores data that is shared across all environments and maintained by Microsoft, such as Account and Contact?",
    "o": [
      "Standard tables",
      "Custom tables",
      "Virtual tables",
      "Elastic tables"
    ],
    "a": [
      0
    ],
    "e": "Standard tables are out-of-the-box business entities provided with the Common Data Model in Dataverse."
  },
  {
    "d": "V",
    "q": "Scenario 12 (V): Which type of Power App is pixel-perfect, tailored for mobile/tablet task-oriented experiences, and allows starting from a blank canvas?",
    "o": [
      "Canvas App",
      "Model-Driven App",
      "Power Pages Site",
      "Dynamics 365 Sales App"
    ],
    "a": [
      0
    ],
    "e": "Canvas apps provide granular design control over UI elements and direct data connection using Power Fx."
  },
  {
    "d": "S",
    "q": "Scenario 12 (S): Which type of Power Automate flow is designed to automate legacy Windows desktop applications that lack an API?",
    "o": [
      "Desktop Flow (Robotic Process Automation / RPA)",
      "Automated Cloud Flow",
      "Scheduled Cloud Flow",
      "Business Process Flow"
    ],
    "a": [
      0
    ],
    "e": "Desktop flows perform RPA by recording and replaying user keystrokes and UI interactions on workstations."
  },
  {
    "d": "P",
    "q": "Scenario 12 (P): How does Microsoft Dataverse ensure security and data isolation across different business divisions?",
    "o": [
      "Business Units combined with Role-Based Access Control (RBAC) security roles",
      "Creating separate SQL Server instances",
      "Using different email domains",
      "Exporting data to Excel workbooks"
    ],
    "a": [
      0
    ],
    "e": "Dataverse security models use Business Units and security roles for hierarchical and matrix data governance."
  },
  {
    "d": "M",
    "q": "Scenario 12 (M): Which Dataverse feature enforces business logic such as setting field requirements or showing error messages on the client side without writing JavaScript?",
    "o": [
      "Business Rules",
      "Cloud Flows",
      "Power Fx formulas in Excel",
      "Dataflows"
    ],
    "a": [
      0
    ],
    "e": "Dataverse Business Rules provide visual client-side logic execution on model-driven forms."
  },
  {
    "d": "V",
    "q": "Scenario 12 (V): You need to build a responsive, data-driven portal for external customers to submit support tickets securely. What should you build?",
    "o": [
      "Power Pages",
      "Canvas App",
      "Power Automate Flow",
      "Power BI Dashboard"
    ],
    "a": [
      0
    ],
    "e": "Power Pages is tailored for secure, external-facing websites connected to Dataverse data."
  },
  {
    "d": "S",
    "q": "Scenario 12 (S): You want a workflow that guides customer service agents step-by-step through a standardized multi-stage onboarding process. What should you use?",
    "o": [
      "Business Process Flow",
      "Instant Cloud Flow",
      "Power Pages snippet",
      "Power Virtual Agents topic"
    ],
    "a": [
      0
    ],
    "e": "Business Process Flows provide guided visual stages across headers on model-driven app forms."
  },
  {
    "d": "P",
    "q": "Scenario 12 (P): What is the primary benefit of using custom connectors in Power Platform?",
    "o": [
      "Connecting to proprietary or internal REST APIs with OpenAPI specifications",
      "Bypassing Dataverse licensing",
      "Translating canvas apps to Java",
      "Creating 3D games"
    ],
    "a": [
      0
    ],
    "e": "Custom connectors allow low-code apps and flows to interact with any RESTful API service."
  },
  {
    "d": "M",
    "q": "Scenario 12 (M): You need to view real-time data residing in an external Azure SQL database inside Dataverse without copying or synchronizing the data. What feature should you implement?",
    "o": [
      "Virtual Tables (Virtual Entities)",
      "Dataverse Dataflows Gen2",
      "Elastic Tables",
      "Export to Data Lake"
    ],
    "a": [
      0
    ],
    "e": "Virtual Tables represent external data sources as native Dataverse tables without data replication."
  },
  {
    "d": "V",
    "q": "Scenario 12 (V): What is the declarative, low-code formula language used to express logic across Power Apps canvas apps and Dataverse?",
    "o": [
      "Power Fx",
      "DAX",
      "C#",
      "VBA"
    ],
    "a": [
      0
    ],
    "e": "Power Fx is the Excel-like open-source formula language used across Microsoft Power Platform."
  },
  {
    "d": "S",
    "q": "Scenario 12 (S): In Microsoft Copilot Studio (formerly Power Virtual Agents), what is the primary building block that defines a conversation path for a specific user inquiry?",
    "o": [
      "Topic",
      "Trigger Entity",
      "Skill",
      "Connector"
    ],
    "a": [
      0
    ],
    "e": "Topics define conversational dialogues with trigger phrases, question nodes, and conditional branches."
  },
  {
    "d": "P",
    "q": "Scenario 13 (P): Which Microsoft Power Platform component provides a low-code artificial intelligence capability that can extract invoice data, analyze sentiment, and predict outcomes?",
    "o": [
      "AI Builder",
      "Power Automate Desktop",
      "Power Pages",
      "Dataverse Elastic Tables"
    ],
    "a": [
      0
    ],
    "e": "AI Builder provides turnkey AI models directly inside Power Apps and Power Automate."
  },
  {
    "d": "M",
    "q": "Scenario 13 (M): In Microsoft Dataverse, what type of table stores data that is shared across all environments and maintained by Microsoft, such as Account and Contact?",
    "o": [
      "Standard tables",
      "Custom tables",
      "Virtual tables",
      "Elastic tables"
    ],
    "a": [
      0
    ],
    "e": "Standard tables are out-of-the-box business entities provided with the Common Data Model in Dataverse."
  },
  {
    "d": "V",
    "q": "Scenario 13 (V): Which type of Power App is pixel-perfect, tailored for mobile/tablet task-oriented experiences, and allows starting from a blank canvas?",
    "o": [
      "Canvas App",
      "Model-Driven App",
      "Power Pages Site",
      "Dynamics 365 Sales App"
    ],
    "a": [
      0
    ],
    "e": "Canvas apps provide granular design control over UI elements and direct data connection using Power Fx."
  },
  {
    "d": "S",
    "q": "Scenario 13 (S): Which type of Power Automate flow is designed to automate legacy Windows desktop applications that lack an API?",
    "o": [
      "Desktop Flow (Robotic Process Automation / RPA)",
      "Automated Cloud Flow",
      "Scheduled Cloud Flow",
      "Business Process Flow"
    ],
    "a": [
      0
    ],
    "e": "Desktop flows perform RPA by recording and replaying user keystrokes and UI interactions on workstations."
  },
  {
    "d": "P",
    "q": "Scenario 13 (P): How does Microsoft Dataverse ensure security and data isolation across different business divisions?",
    "o": [
      "Business Units combined with Role-Based Access Control (RBAC) security roles",
      "Creating separate SQL Server instances",
      "Using different email domains",
      "Exporting data to Excel workbooks"
    ],
    "a": [
      0
    ],
    "e": "Dataverse security models use Business Units and security roles for hierarchical and matrix data governance."
  },
  {
    "d": "M",
    "q": "Scenario 13 (M): Which Dataverse feature enforces business logic such as setting field requirements or showing error messages on the client side without writing JavaScript?",
    "o": [
      "Business Rules",
      "Cloud Flows",
      "Power Fx formulas in Excel",
      "Dataflows"
    ],
    "a": [
      0
    ],
    "e": "Dataverse Business Rules provide visual client-side logic execution on model-driven forms."
  }
]
};
