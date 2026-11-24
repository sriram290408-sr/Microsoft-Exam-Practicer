// DP-700: Fabric Data Engineer
export const DP700 = {
  id: 'DP700',
  code: "DP-700",
  name: "Fabric Data Engineer",
  min: 100,
  doms: {
  "P": "Implement and manage an analytics solution",
  "M": "Ingest and transform data",
  "V": "Monitor and optimize"
},
  bank: [
  {
    "d": "P",
    "q": "You want to move code and items between development and production Fabric workspaces in a controlled way. Which feature do you use?",
    "o": [
      "Deployment pipelines",
      "Mirroring",
      "Shortcuts",
      "Data activator rules"
    ],
    "a": [
      0
    ],
    "e": "Deployment pipelines promote Fabric items across stages such as development, test and production."
  },
  {
    "d": "M",
    "q": "You need to reference data in another lakehouse or in external storage without copying it. What do you create?",
    "o": [
      "A shortcut",
      "A new Delta copy job",
      "A dataflow gen1",
      "A pinned tile"
    ],
    "a": [
      0
    ],
    "e": "OneLake shortcuts point to data in place, so no copy is made."
  },
  {
    "d": "M",
    "q": "Which Spark Structured Streaming source feeds real-time events from Fabric into a lakehouse table with minimal code?",
    "o": [
      "Eventstream",
      "Pipeline copy on a daily schedule",
      "Dataflow Gen2 refresh",
      "Semantic model refresh"
    ],
    "a": [
      0
    ],
    "e": "Eventstreams capture, transform and route real-time events to destinations such as a lakehouse or eventhouse."
  },
  {
    "d": "V",
    "q": "Delta tables in your lakehouse have thousands of tiny files and queries are slow. Which maintenance operation compacts them?",
    "o": [
      "OPTIMIZE",
      "VACUUM only",
      "DROP TABLE",
      "ALTER COLUMN"
    ],
    "a": [
      0
    ],
    "e": "OPTIMIZE compacts small files into larger ones. VACUUM removes old unreferenced files."
  },
  {
    "d": "V",
    "q": "Where do you check the run history and duration of a data pipeline?",
    "o": [
      "Monitor hub",
      "Capacity settings page only",
      "OneLake file explorer",
      "Sensitivity label policy"
    ],
    "a": [
      0
    ],
    "e": "The Monitor hub shows activity and run details for pipelines, notebooks, dataflows and more."
  },
  {
    "d": "P",
    "q": "Which workspace setting lets you pick the Spark runtime version and default pool for notebooks in the workspace?",
    "o": [
      "Data Engineering/Science workspace settings",
      "Power BI tenant branding",
      "Sensitivity label policy",
      "Gateway cluster settings"
    ],
    "a": [
      0
    ],
    "e": "Spark runtime, pools and environments are configured in the workspace's Data Engineering/Science settings."
  },
  {
    "d": "P",
    "q": "You want one reusable set of Spark libraries and settings shared by several notebooks. What do you create?",
    "o": [
      "An environment",
      "A shortcut",
      "A dataflow",
      "A deployment rule"
    ],
    "a": [
      0
    ],
    "e": "Fabric environments bundle runtime, libraries and Spark properties so notebooks and jobs can reuse them."
  },
  {
    "d": "P",
    "q": "Which feature enforces who can see specific rows of a warehouse table using T-SQL?",
    "o": [
      "Row-level security",
      "Dynamic data masking",
      "Shortcuts",
      "Time travel"
    ],
    "a": [
      0
    ],
    "e": "Row-level security uses a predicate function and a security policy to filter rows per user."
  },
  {
    "d": "P",
    "q": "Which T-SQL feature hides the middle digits of a phone number from most users without changing stored data?",
    "o": [
      "Dynamic data masking",
      "Column-level security",
      "Mirroring",
      "V-Order"
    ],
    "a": [
      0
    ],
    "e": "Dynamic data masking obscures values in query results unless a user has permission to see them."
  },
  {
    "d": "P",
    "q": "You must stop a group from reading the Salary column of a warehouse table, while allowing other columns. What do you use?",
    "o": [
      "Column-level security with DENY SELECT on the column",
      "A deployment pipeline",
      "Eventstream filter",
      "A Spark pool"
    ],
    "a": [
      0
    ],
    "e": "Column-level security restricts access to specific columns with GRANT or DENY on those columns."
  },
  {
    "d": "P",
    "q": "Which OneLake security approach controls access to specific folders or tables inside a lakehouse for different users?",
    "o": [
      "OneLake data access roles",
      "Workspace Viewer role only",
      "Capacity admin role",
      "Sensitivity labels"
    ],
    "a": [
      0
    ],
    "e": "OneLake data access roles give fine-grained read access to folders and tables within a lakehouse."
  },
  {
    "d": "P",
    "q": "Which two items can be put under Git source control in a Fabric workspace? (Choose two.)",
    "multi": true,
    "o": [
      "Notebooks",
      "Data pipelines",
      "Capacity metrics",
      "Tenant settings"
    ],
    "a": [
      0,
      1
    ],
    "e": "Many Fabric items, including notebooks and pipelines, support Git integration. Tenant and capacity settings don't."
  },
  {
    "d": "P",
    "q": "Which tool is used to build and publish a database project with schema changes for a Fabric warehouse in a CI/CD flow?",
    "o": [
      "Database projects (SQL projects)",
      "Power BI Desktop",
      "Paginated Report Builder",
      "Visual query editor"
    ],
    "a": [
      0
    ],
    "e": "SQL database projects hold schema as code and can be deployed through a pipeline."
  },
  {
    "d": "P",
    "q": "Which role at the workspace level lets a user run notebooks and edit items but not manage access?",
    "o": [
      "Contributor",
      "Admin",
      "Viewer",
      "Capacity admin"
    ],
    "a": [
      0
    ],
    "e": "Contributors can create and edit items. Admins and members manage access."
  },
  {
    "d": "P",
    "q": "What is the purpose of a deployment pipeline's stages?",
    "o": [
      "Separate development, test and production content",
      "Store raw files",
      "Schedule dataflows",
      "Mask columns"
    ],
    "a": [
      0
    ],
    "e": "Stages represent environments such as development, test and production that content moves through."
  },
  {
    "d": "P",
    "q": "Which scheduling option runs a pipeline every day at 06:00?",
    "o": [
      "Schedule trigger on the pipeline",
      "Mirroring",
      "Shortcut",
      "Direct Lake"
    ],
    "a": [
      0
    ],
    "e": "Pipelines can run on a schedule, or be started by events such as storage changes."
  },
  {
    "d": "P",
    "q": "Which activity in a pipeline runs a notebook?",
    "o": [
      "Notebook activity",
      "Copy data activity",
      "Wait activity",
      "Lookup activity"
    ],
    "a": [
      0
    ],
    "e": "The Notebook activity runs a Fabric notebook as a pipeline step."
  },
  {
    "d": "P",
    "q": "Which feature passes values such as a date into a notebook run from a pipeline?",
    "o": [
      "Parameters in the notebook's parameters cell",
      "A theme file",
      "A slicer",
      "A sensitivity label"
    ],
    "a": [
      0
    ],
    "e": "A cell tagged as parameters can receive values from the pipeline's Notebook activity."
  },
  {
    "d": "M",
    "q": "Which ingestion approach is best for a one-time large file copy into a lakehouse with no transformation?",
    "o": [
      "Copy data activity or Copy job",
      "Streaming eventstream",
      "Power BI slicer",
      "Direct Lake"
    ],
    "a": [
      0
    ],
    "e": "Copy activities or copy jobs move data in bulk without needing transformation code."
  },
  {
    "d": "M",
    "q": "Which Fabric feature captures change-based, incremental copy from a source with minimal setup?",
    "o": [
      "Copy job with incremental copy",
      "Deleting and reloading everything",
      "Manual CSV upload",
      "A paginated report"
    ],
    "a": [
      0
    ],
    "e": "Copy jobs can copy only new or changed data after the first full load."
  },
  {
    "d": "M",
    "q": "Which Delta write mode adds new rows to an existing table without removing existing ones?",
    "o": [
      "Append",
      "Overwrite",
      "ErrorIfExists",
      "Ignore all"
    ],
    "a": [
      0
    ],
    "e": "Append adds rows. Overwrite replaces the table's data."
  },
  {
    "d": "M",
    "q": "Which Delta operation updates, inserts or deletes in one statement based on a match between source and target?",
    "o": [
      "MERGE",
      "TRUNCATE",
      "COPY INTO",
      "VACUUM"
    ],
    "a": [
      0
    ],
    "e": "MERGE applies inserts, updates and deletes by matching rows, and is common for upserts."
  },
  {
    "d": "M",
    "q": "Which slowly changing dimension type keeps the full history by adding a new row with start and end dates?",
    "o": [
      "Type 2",
      "Type 1",
      "Type 0",
      "Type 4 only"
    ],
    "a": [
      0
    ],
    "e": "Type 2 preserves history with new rows. Type 1 overwrites."
  },
  {
    "d": "M",
    "q": "Which Fabric component captures events from sources such as Kafka or Event Hubs in real time?",
    "o": [
      "Eventstream",
      "Dataflow Gen2",
      "Deployment pipeline",
      "Semantic model"
    ],
    "a": [
      0
    ],
    "e": "Eventstreams ingest and route streaming events to destinations."
  },
  {
    "d": "M",
    "q": "Which Spark Structured Streaming concept defines how long late data is accepted when aggregating by time?",
    "o": [
      "Watermark",
      "Checkpoint",
      "Shortcut",
      "Schema hint"
    ],
    "a": [
      0
    ],
    "e": "A watermark sets how late data can arrive before a window is finalized."
  },
  {
    "d": "M",
    "q": "What does a checkpoint location do in Structured Streaming?",
    "o": [
      "Stores progress so a stream can recover after a failure",
      "Encrypts data",
      "Creates a Power BI theme",
      "Compresses Parquet"
    ],
    "a": [
      0
    ],
    "e": "Checkpoints record progress and state to support fault-tolerant restarts."
  },
  {
    "d": "M",
    "q": "Which KQL operator aggregates rows, such as counting events per minute?",
    "o": [
      "summarize",
      "project",
      "extend",
      "take"
    ],
    "a": [
      0
    ],
    "e": "summarize groups and aggregates, often with bin() for time buckets."
  },
  {
    "d": "M",
    "q": "Which KQL operator selects or renames columns?",
    "o": [
      "project",
      "where",
      "join",
      "sort"
    ],
    "a": [
      0
    ],
    "e": "project chooses which columns to keep and can rename them."
  },
  {
    "d": "M",
    "q": "Which Spark DataFrame method removes duplicate rows?",
    "o": [
      "dropDuplicates",
      "explode",
      "pivot",
      "cache"
    ],
    "a": [
      0
    ],
    "e": "dropDuplicates removes duplicate rows, optionally by a subset of columns."
  },
  {
    "d": "M",
    "q": "Which transformation turns an array column into one row per element in PySpark?",
    "o": [
      "explode",
      "collect_list",
      "withColumnRenamed",
      "coalesce"
    ],
    "a": [
      0
    ],
    "e": "explode creates a row for each array element."
  },
  {
    "d": "M",
    "q": "You need to join a very large table with a small lookup table in Spark. Which technique avoids a shuffle?",
    "o": [
      "Broadcast join",
      "Cross join",
      "Full outer join on all columns",
      "Repartition to 1"
    ],
    "a": [
      0
    ],
    "e": "Broadcasting the small table sends it to every executor so the large table isn't shuffled."
  },
  {
    "d": "M",
    "q": "Which T-SQL statement loads files from storage into a warehouse table?",
    "o": [
      "COPY INTO",
      "TRUNCATE TABLE",
      "DROP SCHEMA",
      "CREATE INDEX"
    ],
    "a": [
      0
    ],
    "e": "COPY INTO loads data from files, such as Parquet or CSV, into a warehouse table."
  },
  {
    "d": "M",
    "q": "A dataflow Gen2 should send output to a lakehouse table. What do you configure?",
    "o": [
      "Data destination",
      "Row-level security",
      "Sensitivity label",
      "Git branch"
    ],
    "a": [
      0
    ],
    "e": "Dataflow Gen2 queries can have a data destination such as a lakehouse or warehouse."
  },
  {
    "d": "M",
    "q": "Which two are valid ways to handle missing values in a data cleaning step? (Choose two.)",
    "multi": true,
    "o": [
      "Replace with a default value",
      "Drop rows with nulls in key columns",
      "Rename the workspace",
      "Increase capacity size"
    ],
    "a": [
      0,
      1
    ],
    "e": "Replacing or dropping nulls are standard cleaning options, depending on the column's meaning."
  },
  {
    "d": "M",
    "q": "Which Delta table property enables change data feed so downstream jobs read only changed rows?",
    "o": [
      "delta.enableChangeDataFeed",
      "delta.vorder",
      "delta.logRetention",
      "delta.appendOnly only"
    ],
    "a": [
      0
    ],
    "e": "The change data feed property records row-level changes for downstream consumption."
  },
  {
    "d": "M",
    "q": "Which medallion approach would a data engineer use to land raw files untouched first?",
    "o": [
      "Bronze layer",
      "Gold layer",
      "Semantic layer",
      "Presentation layer"
    ],
    "a": [
      0
    ],
    "e": "Bronze stores raw data as ingested, before cleaning."
  },
  {
    "d": "V",
    "q": "Where can you see the status, duration and errors of recent pipeline and notebook runs across a workspace?",
    "o": [
      "Monitor hub",
      "Lineage view only",
      "Tenant branding",
      "Gateway settings"
    ],
    "a": [
      0
    ],
    "e": "The Monitor hub lists activities and their run history."
  },
  {
    "d": "V",
    "q": "Which feature sends an alert or runs an action when data in an eventstream or report meets a condition?",
    "o": [
      "Activator",
      "V-Order",
      "Deployment rules",
      "Mirroring"
    ],
    "a": [
      0
    ],
    "e": "Activator (Data Activator) triggers actions such as email or Teams messages when conditions are met on data."
  },
  {
    "d": "V",
    "q": "A pipeline fails at a Copy activity. Where do you look first for the cause?",
    "o": [
      "The activity's run details and error output",
      "The Power BI theme file",
      "Sensitivity label settings",
      "Tenant domains"
    ],
    "a": [
      0
    ],
    "e": "Run details show the error message and activity output for diagnosing failures."
  },
  {
    "d": "V",
    "q": "Which Delta maintenance command removes data files no longer referenced by the table and older than the retention period?",
    "o": [
      "VACUUM",
      "OPTIMIZE",
      "MERGE",
      "ALTER TABLE ADD COLUMN"
    ],
    "a": [
      0
    ],
    "e": "VACUUM deletes unreferenced files beyond the retention threshold."
  },
  {
    "d": "V",
    "q": "Which Spark setting helps when one task takes far longer than others because the data is unevenly distributed?",
    "o": [
      "Handle data skew, for example with salting or adaptive query execution",
      "Lower the workspace name length",
      "Disable checkpoints",
      "Use only one executor"
    ],
    "a": [
      0
    ],
    "e": "Data skew leaves one partition much larger than others. Salting keys or enabling AQE helps rebalance work."
  },
  {
    "d": "V",
    "q": "Which Spark behaviour makes repeated use of the same DataFrame faster?",
    "o": [
      "Caching it in memory",
      "Re-reading from source every time",
      "Converting to CSV",
      "Dropping partitions"
    ],
    "a": [
      0
    ],
    "e": "cache() or persist() keeps the DataFrame in memory so later actions reuse it."
  },
  {
    "d": "V",
    "q": "A warehouse query is slow because statistics are out of date. What can you do?",
    "o": [
      "Update statistics",
      "Rename the table",
      "Disable the workspace",
      "Add a Git branch"
    ],
    "a": [
      0
    ],
    "e": "Current statistics help the query optimizer choose good plans."
  },
  {
    "d": "V",
    "q": "Which T-SQL tool shows the plan a query will use so you can find costly steps?",
    "o": [
      "Estimated or actual execution plan",
      "SELECT *",
      "PRINT",
      "GRANT"
    ],
    "a": [
      0
    ],
    "e": "Execution plans show how the engine processes a query."
  },
  {
    "d": "V",
    "q": "Which technique reduces data scanned when queries usually filter by date?",
    "o": [
      "Partition the Delta table by date, or use a sensible clustering",
      "Add more joins",
      "Store data as one huge CSV",
      "Disable V-Order"
    ],
    "a": [
      0
    ],
    "e": "Partitioning or clustering on a commonly filtered column lets engines skip unneeded files."
  },
  {
    "d": "V",
    "q": "Which two actions help reduce small-file problems in a Delta table? (Choose two.)",
    "multi": true,
    "o": [
      "Run OPTIMIZE",
      "Enable optimize write on Spark writes",
      "Write one row per file",
      "Turn off compaction forever"
    ],
    "a": [
      0,
      1
    ],
    "e": "OPTIMIZE and optimized writes produce fewer, larger files."
  },
  {
    "d": "V",
    "q": "Which metric source shows capacity usage and throttling for Fabric workloads?",
    "o": [
      "Microsoft Fabric Capacity Metrics app",
      "Power BI mobile app",
      "Outlook rules",
      "Visual interactions pane"
    ],
    "a": [
      0
    ],
    "e": "The Capacity Metrics app reports capacity utilization, throttling and item-level usage."
  },
  {
    "d": "V",
    "q": "A scheduled dataflow refresh is failing intermittently. What is a sensible first step?",
    "o": [
      "Check refresh history and error details, then fix the source or credentials",
      "Delete the workspace",
      "Disable all pipelines",
      "Rename the dataflow"
    ],
    "a": [
      0
    ],
    "e": "Refresh history shows when and why runs failed, so you can address the cause."
  },
  {
    "d": "V",
    "q": "Which Spark UI element helps find which stage of a job is slow?",
    "o": [
      "Stages and tasks view in the Spark monitoring page",
      "Workspace theme",
      "Sensitivity bar",
      "Lineage legend"
    ],
    "a": [
      0
    ],
    "e": "The Spark monitoring views show stage and task timings and data sizes."
  },
  {
    "d": "V",
    "q": "Which kind of eventhouse policy keeps recent data in fast storage and ages older data out?",
    "o": [
      "Caching and retention policies",
      "Row-level security",
      "Deployment rules",
      "Git branch policy"
    ],
    "a": [
      0
    ],
    "e": "Caching policy defines how long data stays in fast storage, and retention policy defines how long it is kept."
  }
]
};

export default DP700;
