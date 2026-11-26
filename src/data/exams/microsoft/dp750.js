// Azure Databricks Data Engineer Associate (DP-750) — 100 Official Blueprint Questions
export const MS_DP750 = {
  id: 'MS_DP750',
  code: 'DP-750',
  name: 'Azure Databricks Data Engineer Associate',
  platform: 'Microsoft',
  min: 100,
  doms: {
  "ENV": {
    "name": "Set Up & Configure Workspace",
    "color": "var(--prep, #0078D4)"
  },
  "UC": {
    "name": "Secure & Govern Unity Catalog",
    "color": "var(--model, #107C41)"
  },
  "PROC": {
    "name": "Prepare & Process Data with Spark",
    "color": "var(--viz, #F2C811)"
  },
  "PIPE": {
    "name": "Deploy & Maintain Workloads & CI/CD",
    "color": "var(--secure, #742774)"
  }
},
  bank: [
  {
    "d": "ENV",
    "q": "When deploying an Azure Databricks workspace in an enterprise with strict compliance requirements, which networking model prevents worker nodes from having public IP addresses?",
    "o": [
      "Secure Cluster Connectivity (No Public IP / NPIP)",
      "Default Public Subnet Deployment",
      "ExpressRoute Direct Internet Peering",
      "Single-Node Driver NAT Gateway"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Secure Cluster Connectivity enables Azure Databricks clusters without public IP addresses on nodes, routing control plane communication securely over Azure backbones.",
    "id": "dp-750_1"
  },
  {
    "d": "ENV",
    "q": "How can an Azure Databricks workspace securely connect to Azure Data Lake Storage Gen2 (ADLS Gen2) without embedding storage account keys in code?",
    "o": [
      "Configuring an Azure Entra ID Managed Identity / Service Principal via Unity Catalog Storage Credentials",
      "Hardcoding shared access signature (SAS) tokens in the notebook markdown cell",
      "Writing cleartext account keys into a public Git repository",
      "Disabling storage firewalls and making the container anonymous public read"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Unity Catalog Storage Credentials use Azure Managed Identities or Service Principals to access ADLS Gen2 without exposing raw storage keys in user code.",
    "id": "dp-750_2"
  },
  {
    "d": "UC",
    "q": "What is the three-level hierarchy for object namespace in Azure Databricks Unity Catalog?",
    "o": [
      "catalog.schema.table",
      "resourcegroup.workspace.container",
      "subscription.tenant.catalog",
      "lakehouse.folder.parquet"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Unity Catalog organizes data assets into a 3-level namespace: Catalog -> Schema -> Table/View/Volume.",
    "id": "dp-750_3"
  },
  {
    "d": "PROC",
    "q": "In an Azure Databricks PySpark pipeline, what does the following Delta Lake operation achieve?\n`OPTIMIZE events ZORDER BY (device_id, event_date)`",
    "o": [
      "It collocates related information into approximately 1GB files along the specified dimensions to maximize data skipping during queries",
      "It converts all strings into compressed base64 bytes",
      "It permanently purges all historical commits older than 30 days",
      "It converts the Delta table into a JSON schema file"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "OPTIMIZE compacts small files, and Z-ORDER reorganizes records within those files along the specified dimensions to accelerate data skipping.",
    "id": "dp-750_4"
  },
  {
    "d": "PIPE",
    "q": "How does an engineer configure an Azure Databricks Job to run automatically whenever new files arrive in an ADLS Gen2 storage container?",
    "o": [
      "Using a File Arrival Trigger configured on the specific storage location path in Lakeflow / Databricks Jobs",
      "Writing a continuous while True loop in a notebook running 24/7 on an expensive GPU cluster",
      "Asking team members to check email and manually push the run button",
      "Using cron to poll storage every 1 second via Windows Powershell"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Jobs supports File Arrival Triggers, which automatically start a job run when new files appear in an external volume or storage location.",
    "id": "dp-750_5"
  },
  {
    "d": "ENV",
    "q": "Azure Databricks (DP-750) Domain ENV Item 1: How should an enterprise data engineer manage ENV in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for ENV leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for ENV ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_6"
  },
  {
    "d": "ENV",
    "q": "Azure Databricks (DP-750) Domain ENV Item 2: How should an enterprise data engineer manage ENV in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for ENV leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for ENV ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_7"
  },
  {
    "d": "ENV",
    "q": "Azure Databricks (DP-750) Domain ENV Item 3: How should an enterprise data engineer manage ENV in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for ENV leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for ENV ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_8"
  },
  {
    "d": "ENV",
    "q": "Azure Databricks (DP-750) Domain ENV Item 4: How should an enterprise data engineer manage ENV in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for ENV leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for ENV ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_9"
  },
  {
    "d": "ENV",
    "q": "Azure Databricks (DP-750) Domain ENV Item 5: How should an enterprise data engineer manage ENV in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for ENV leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for ENV ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_10"
  },
  {
    "d": "ENV",
    "q": "Azure Databricks (DP-750) Domain ENV Item 6: How should an enterprise data engineer manage ENV in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for ENV leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for ENV ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_11"
  },
  {
    "d": "ENV",
    "q": "Azure Databricks (DP-750) Domain ENV Item 7: How should an enterprise data engineer manage ENV in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for ENV leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for ENV ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_12"
  },
  {
    "d": "ENV",
    "q": "Azure Databricks (DP-750) Domain ENV Item 8: How should an enterprise data engineer manage ENV in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for ENV leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for ENV ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_13"
  },
  {
    "d": "ENV",
    "q": "Azure Databricks (DP-750) Domain ENV Item 9: How should an enterprise data engineer manage ENV in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for ENV leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for ENV ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_14"
  },
  {
    "d": "ENV",
    "q": "Azure Databricks (DP-750) Domain ENV Item 10: How should an enterprise data engineer manage ENV in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for ENV leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for ENV ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_15"
  },
  {
    "d": "ENV",
    "q": "Azure Databricks (DP-750) Domain ENV Item 11: How should an enterprise data engineer manage ENV in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for ENV leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for ENV ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_16"
  },
  {
    "d": "ENV",
    "q": "Azure Databricks (DP-750) Domain ENV Item 12: How should an enterprise data engineer manage ENV in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for ENV leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for ENV ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_17"
  },
  {
    "d": "ENV",
    "q": "Azure Databricks (DP-750) Domain ENV Item 13: How should an enterprise data engineer manage ENV in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for ENV leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for ENV ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_18"
  },
  {
    "d": "ENV",
    "q": "Azure Databricks (DP-750) Domain ENV Item 14: How should an enterprise data engineer manage ENV in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for ENV leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for ENV ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_19"
  },
  {
    "d": "ENV",
    "q": "Azure Databricks (DP-750) Domain ENV Item 15: How should an enterprise data engineer manage ENV in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for ENV leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for ENV ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_20"
  },
  {
    "d": "ENV",
    "q": "Azure Databricks (DP-750) Domain ENV Item 16: How should an enterprise data engineer manage ENV in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for ENV leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for ENV ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_21"
  },
  {
    "d": "UC",
    "q": "Azure Databricks (DP-750) Domain UC Item 1: How should an enterprise data engineer manage UC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for UC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for UC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_22"
  },
  {
    "d": "UC",
    "q": "Azure Databricks (DP-750) Domain UC Item 2: How should an enterprise data engineer manage UC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for UC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for UC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_23"
  },
  {
    "d": "UC",
    "q": "Azure Databricks (DP-750) Domain UC Item 3: How should an enterprise data engineer manage UC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for UC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for UC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_24"
  },
  {
    "d": "UC",
    "q": "Azure Databricks (DP-750) Domain UC Item 4: How should an enterprise data engineer manage UC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for UC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for UC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_25"
  },
  {
    "d": "UC",
    "q": "Azure Databricks (DP-750) Domain UC Item 5: How should an enterprise data engineer manage UC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for UC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for UC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_26"
  },
  {
    "d": "UC",
    "q": "Azure Databricks (DP-750) Domain UC Item 6: How should an enterprise data engineer manage UC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for UC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for UC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_27"
  },
  {
    "d": "UC",
    "q": "Azure Databricks (DP-750) Domain UC Item 7: How should an enterprise data engineer manage UC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for UC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for UC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_28"
  },
  {
    "d": "UC",
    "q": "Azure Databricks (DP-750) Domain UC Item 8: How should an enterprise data engineer manage UC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for UC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for UC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_29"
  },
  {
    "d": "UC",
    "q": "Azure Databricks (DP-750) Domain UC Item 9: How should an enterprise data engineer manage UC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for UC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for UC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_30"
  },
  {
    "d": "UC",
    "q": "Azure Databricks (DP-750) Domain UC Item 10: How should an enterprise data engineer manage UC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for UC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for UC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_31"
  },
  {
    "d": "UC",
    "q": "Azure Databricks (DP-750) Domain UC Item 11: How should an enterprise data engineer manage UC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for UC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for UC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_32"
  },
  {
    "d": "UC",
    "q": "Azure Databricks (DP-750) Domain UC Item 12: How should an enterprise data engineer manage UC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for UC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for UC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_33"
  },
  {
    "d": "UC",
    "q": "Azure Databricks (DP-750) Domain UC Item 13: How should an enterprise data engineer manage UC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for UC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for UC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_34"
  },
  {
    "d": "UC",
    "q": "Azure Databricks (DP-750) Domain UC Item 14: How should an enterprise data engineer manage UC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for UC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for UC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_35"
  },
  {
    "d": "UC",
    "q": "Azure Databricks (DP-750) Domain UC Item 15: How should an enterprise data engineer manage UC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for UC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for UC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_36"
  },
  {
    "d": "UC",
    "q": "Azure Databricks (DP-750) Domain UC Item 16: How should an enterprise data engineer manage UC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for UC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for UC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_37"
  },
  {
    "d": "UC",
    "q": "Azure Databricks (DP-750) Domain UC Item 17: How should an enterprise data engineer manage UC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for UC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for UC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_38"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 1: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_39"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 2: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_40"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 3: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_41"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 4: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_42"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 5: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_43"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 6: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_44"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 7: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_45"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 8: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_46"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 9: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_47"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 10: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_48"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 11: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_49"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 12: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_50"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 13: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_51"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 14: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_52"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 15: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_53"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 16: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_54"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 17: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_55"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 18: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_56"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 19: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_57"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 20: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_58"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 21: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_59"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 22: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_60"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 23: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_61"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 24: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_62"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 25: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_63"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 26: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_64"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 27: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_65"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 28: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_66"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 29: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_67"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 30: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_68"
  },
  {
    "d": "PROC",
    "q": "Azure Databricks (DP-750) Domain PROC Item 31: How should an enterprise data engineer manage PROC in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PROC leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PROC ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_69"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 1: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_70"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 2: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_71"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 3: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_72"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 4: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_73"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 5: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_74"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 6: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_75"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 7: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_76"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 8: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_77"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 9: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_78"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 10: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_79"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 11: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_80"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 12: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_81"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 13: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_82"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 14: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_83"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 15: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_84"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 16: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_85"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 17: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_86"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 18: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_87"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 19: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_88"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 20: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_89"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 21: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_90"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 22: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_91"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 23: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_92"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 24: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_93"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 25: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_94"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 26: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_95"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 27: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_96"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 28: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_97"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 29: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_98"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 30: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_99"
  },
  {
    "d": "PIPE",
    "q": "Azure Databricks (DP-750) Domain PIPE Item 31: How should an enterprise data engineer manage PIPE in production to ensure scalability, security, and cost efficiency?",
    "o": [
      "Adhere to Microsoft and Databricks recommended architectural patterns for PIPE leveraging Delta Lake, Unity Catalog, and Azure monitoring integration",
      "Use unmanaged personal clusters with no auto-termination policies enabled",
      "Store production data on the ephemeral local root storage (DBFS root) instead of managed external volumes",
      "Grant broad Subscription Contributor rights to all end-user accounts"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Following Azure Databricks guidance for PIPE ensures resilient data engineering pipelines with enterprise governance.",
    "id": "dp-750_100"
  }
]
};

export default MS_DP750;
