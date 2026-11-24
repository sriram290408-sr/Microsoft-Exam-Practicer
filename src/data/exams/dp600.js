// DP-600: Fabric Analytics Engineer
export const DP600 = {
  id: 'DP600',
  code: "DP-600",
  name: "Fabric Analytics Engineer",
  min: 100,
  doms: {
  "P": "Plan, implement and manage a solution",
  "M": "Prepare and serve data",
  "V": "Implement and manage semantic models",
  "S": "Explore and analyze data"
},
  bank: [
  {
    "d": "P",
    "q": "You need to give a team access to one Fabric workspace's items only, without letting them manage the workspace. Which role is the smallest that lets them edit content?",
    "o": [
      "Contributor",
      "Admin",
      "Viewer",
      "Capacity admin"
    ],
    "a": [
      0
    ],
    "e": "Contributor can create and edit items but cannot manage membership. Viewer is read-only."
  },
  {
    "d": "M",
    "q": "Which Fabric item lets you query lakehouse Delta tables with T-SQL in read-only mode, automatically?",
    "o": [
      "SQL analytics endpoint",
      "Eventstream",
      "Dataflow Gen1",
      "Notebook default pool"
    ],
    "a": [
      0
    ],
    "e": "Each lakehouse gets a SQL analytics endpoint that exposes its Delta tables for read-only T-SQL queries."
  },
  {
    "d": "M",
    "q": "You need to ingest from many sources with low-code transformations using Power Query. Which Fabric item do you pick?",
    "o": [
      "Dataflow Gen2",
      "KQL queryset",
      "Spark job definition",
      "Semantic link"
    ],
    "a": [
      0
    ],
    "e": "Dataflow Gen2 uses Power Query Online for low-code ingestion and transformation."
  },
  {
    "d": "V",
    "q": "A semantic model needs fast queries over very large lakehouse data without importing it. Which storage mode is designed for this in Fabric?",
    "o": [
      "Direct Lake",
      "Dual with no relationships",
      "Import with daily refresh only",
      "Live connection to Excel"
    ],
    "a": [
      0
    ],
    "e": "Direct Lake reads Delta files in OneLake directly, giving import-like speed without copying data into the model."
  },
  {
    "d": "S",
    "q": "Which tool lets you view and edit a semantic model's measures from your own workstation scripts, such as with C# scripts, without opening Power BI Desktop?",
    "o": [
      "Tabular Editor",
      "Excel Power Pivot only",
      "Windows Explorer",
      "Azure Monitor"
    ],
    "a": [
      0
    ],
    "e": "Tabular Editor connects through the XMLA endpoint and can script changes to semantic model metadata."
  },
  {
    "d": "P",
    "q": "Which Fabric item type holds a collection of items, such as lakehouses and notebooks, and is the main unit for access control?",
    "o": [
      "Workspace",
      "Eventstream",
      "Shortcut",
      "Gateway"
    ],
    "a": [
      0
    ],
    "e": "Workspaces group Fabric items and are where roles such as Admin, Member, Contributor and Viewer are assigned."
  },
  {
    "d": "P",
    "q": "Which Fabric workspace role can add or remove members and delete the workspace?",
    "o": [
      "Admin",
      "Contributor",
      "Viewer",
      "Member without edit rights"
    ],
    "a": [
      0
    ],
    "e": "Admin has full control. Contributor edits content, and Viewer only views."
  },
  {
    "d": "P",
    "q": "You want to track changes to semantic models and notebooks in Azure DevOps or GitHub. Which Fabric feature do you set up?",
    "o": [
      "Git integration",
      "Deployment pipeline rules",
      "Data lineage view",
      "Sensitivity labels"
    ],
    "a": [
      0
    ],
    "e": "Git integration connects a workspace to a repository for version control."
  },
  {
    "d": "P",
    "q": "You need to move content from a test workspace to production and change a data source per stage. What do you configure?",
    "o": [
      "Deployment pipeline with deployment rules",
      "A shortcut",
      "A gateway cluster",
      "A sensitivity label"
    ],
    "a": [
      0
    ],
    "e": "Deployment rules let you change parameters and data source connections for each stage."
  },
  {
    "d": "P",
    "q": "Which tool lets you see how items such as lakehouses, dataflows and reports depend on each other?",
    "o": [
      "Lineage view",
      "Query folding indicator",
      "Performance Analyzer",
      "Quick measure"
    ],
    "a": [
      0
    ],
    "e": "Lineage view shows upstream and downstream relationships between items in a workspace."
  },
  {
    "d": "P",
    "q": "Which sensitivity-related feature classifies and protects content, such as Confidential, across Fabric and Microsoft 365?",
    "o": [
      "Microsoft Purview sensitivity labels",
      "Row-level security",
      "Data masking in notebooks",
      "Direct Lake"
    ],
    "a": [
      0
    ],
    "e": "Sensitivity labels classify data and can travel with it when exported."
  },
  {
    "d": "P",
    "q": "What is OneLake?",
    "o": [
      "A single, unified data lake for the whole Fabric tenant",
      "A kind of Power BI visual",
      "A paid add-on for DAX",
      "A Teams channel"
    ],
    "a": [
      0
    ],
    "e": "OneLake is the built-in logical data lake in Fabric. Items store their data in it by default."
  },
  {
    "d": "P",
    "q": "Which two actions are possible with a Fabric capacity admin role? (Choose two.)",
    "multi": true,
    "o": [
      "Assign workspaces to the capacity",
      "Manage capacity settings",
      "Edit every report's visuals",
      "Write DAX for all models"
    ],
    "a": [
      0,
      1
    ],
    "e": "Capacity admins assign workspaces and manage capacity-level settings. They don't automatically edit content."
  },
  {
    "d": "P",
    "q": "Which XMLA endpoint capability do external tools use to work with Fabric semantic models?",
    "o": [
      "Read and write access to model metadata",
      "Printing of paginated reports",
      "Mobile app notifications",
      "Creation of Dataverse tables"
    ],
    "a": [
      0
    ],
    "e": "The XMLA endpoint exposes semantic models to tools such as Tabular Editor and SSMS for reading and writing."
  },
  {
    "d": "M",
    "q": "Which item combines file storage and Delta tables and offers both a SQL analytics endpoint and Spark access?",
    "o": [
      "Lakehouse",
      "Warehouse",
      "Eventhouse",
      "Dataflow"
    ],
    "a": [
      0
    ],
    "e": "A lakehouse stores files and Delta tables, and is reachable with Spark and the SQL analytics endpoint."
  },
  {
    "d": "M",
    "q": "Which item gives full T-SQL read and write support, including INSERT and UPDATE, on tables?",
    "o": [
      "Warehouse",
      "Lakehouse SQL analytics endpoint",
      "Eventstream",
      "Semantic model"
    ],
    "a": [
      0
    ],
    "e": "A Fabric warehouse supports full T-SQL data modification. The lakehouse endpoint is read-only."
  },
  {
    "d": "M",
    "q": "Which approach loads only new or changed rows from a source on each run?",
    "o": [
      "Incremental refresh or incremental load",
      "Full reload every run",
      "Deleting the table",
      "Disabling the schedule"
    ],
    "a": [
      0
    ],
    "e": "Incremental loading processes only new or changed data, which saves time and capacity."
  },
  {
    "d": "M",
    "q": "Which Power Query step order is best for performance when the source supports query folding?",
    "o": [
      "Keep foldable steps, such as filters, early",
      "Put a custom function first",
      "Add an index column first",
      "Merge with a CSV first"
    ],
    "a": [
      0
    ],
    "e": "Foldable steps are pushed to the source. A non-foldable step early on stops folding for the steps after it."
  },
  {
    "d": "M",
    "q": "A data pipeline must copy files from external storage to a lakehouse on a schedule. Which activity do you use?",
    "o": [
      "Copy data activity",
      "Set variable activity",
      "Wait activity",
      "Web hook activity"
    ],
    "a": [
      0
    ],
    "e": "The Copy data activity moves data between sources and destinations in a pipeline."
  },
  {
    "d": "M",
    "q": "Which language is used in Fabric notebooks for distributed transformation with Spark? (Choose the best match.)",
    "o": [
      "PySpark",
      "VBA",
      "M language only",
      "DAX only"
    ],
    "a": [
      0
    ],
    "e": "Notebooks support PySpark, Spark SQL, Scala and R for Spark workloads."
  },
  {
    "d": "M",
    "q": "Which Delta Lake feature lets you query a table as it was at an earlier point?",
    "o": [
      "Time travel",
      "Shortcut",
      "Mirroring",
      "V-Order"
    ],
    "a": [
      0
    ],
    "e": "Delta time travel reads earlier table versions by version or timestamp."
  },
  {
    "d": "M",
    "q": "What is V-Order in Fabric?",
    "o": [
      "A write-time optimization of Parquet files for fast reads",
      "A type of DAX function",
      "A sort for visuals",
      "A security role"
    ],
    "a": [
      0
    ],
    "e": "V-Order applies special sorting and compression to Parquet files so engines such as Power BI can read them quickly."
  },
  {
    "d": "M",
    "q": "Which medallion layer holds cleaned and conformed data?",
    "o": [
      "Silver",
      "Bronze",
      "Gold",
      "Platinum"
    ],
    "a": [
      0
    ],
    "e": "Bronze is raw data, silver is cleaned and conformed, and gold is curated for reporting."
  },
  {
    "d": "M",
    "q": "You want to replicate an Azure SQL database into OneLake in near real time with little setup. What do you use?",
    "o": [
      "Mirroring",
      "A nightly CSV export",
      "A paginated report",
      "A sensitivity label"
    ],
    "a": [
      0
    ],
    "e": "Database mirroring continuously replicates data into OneLake as Delta tables."
  },
  {
    "d": "M",
    "q": "Which SQL clause removes duplicate rows from a result set?",
    "o": [
      "DISTINCT",
      "ORDER BY",
      "HAVING",
      "OFFSET"
    ],
    "a": [
      0
    ],
    "e": "SELECT DISTINCT returns each unique row once."
  },
  {
    "d": "M",
    "q": "Which two Power Query actions reduce data volume early to improve refresh speed? (Choose two.)",
    "multi": true,
    "o": [
      "Remove unneeded columns",
      "Filter out unneeded rows",
      "Add many custom columns",
      "Duplicate every query"
    ],
    "a": [
      0,
      1
    ],
    "e": "Removing columns and filtering rows early reduces the data that has to be processed."
  },
  {
    "d": "M",
    "q": "Which join type returns all rows from the left table and matching rows from the right?",
    "o": [
      "Left outer",
      "Inner",
      "Right anti",
      "Full anti"
    ],
    "a": [
      0
    ],
    "e": "A left outer join keeps every left row and fills right-side columns with nulls where there is no match."
  },
  {
    "d": "M",
    "q": "Where do you define a reusable, parameterized data source connection that many pipelines share?",
    "o": [
      "Connections",
      "Bookmarks",
      "Themes",
      "Visual interactions"
    ],
    "a": [
      0
    ],
    "e": "Connections store source details and credentials that pipelines and dataflows can reuse."
  },
  {
    "d": "M",
    "q": "Which T-SQL function returns the running total for rows ordered by date?",
    "o": [
      "SUM() OVER (ORDER BY date)",
      "COUNT(*)",
      "MAX()",
      "COALESCE()"
    ],
    "a": [
      0
    ],
    "e": "A window function with ORDER BY gives a running total."
  },
  {
    "d": "V",
    "q": "Which is the recommended model design for analytics?",
    "o": [
      "Star schema",
      "One wide flat table only",
      "Fully normalized 3NF",
      "Snowflake with many bridge tables"
    ],
    "a": [
      0
    ],
    "e": "A star schema uses fact tables linked to dimension tables, and is the best fit for the VertiPaq engine."
  },
  {
    "d": "V",
    "q": "Which relationship cardinality is the usual one between a dimension and a fact table?",
    "o": [
      "One-to-many",
      "Many-to-many",
      "One-to-one",
      "Many-to-one reversed always"
    ],
    "a": [
      0
    ],
    "e": "One dimension row relates to many fact rows."
  },
  {
    "d": "V",
    "q": "Which DAX function changes the filter context of a calculation?",
    "o": [
      "CALCULATE",
      "DIVIDE",
      "FORMAT",
      "VALUES only"
    ],
    "a": [
      0
    ],
    "e": "CALCULATE evaluates an expression in a modified filter context."
  },
  {
    "d": "V",
    "q": "Which DAX function safely divides and returns a blank or alternate result on divide-by-zero?",
    "o": [
      "DIVIDE",
      "SUM",
      "RELATED",
      "LOOKUPVALUE"
    ],
    "a": [
      0
    ],
    "e": "DIVIDE handles a zero denominator without an error."
  },
  {
    "d": "V",
    "q": "Which feature lets you define row-level access in a semantic model?",
    "o": [
      "Row-level security roles",
      "Perspectives",
      "Bookmarks",
      "Field parameters"
    ],
    "a": [
      0
    ],
    "e": "RLS roles use DAX filters to limit which rows a user sees."
  },
  {
    "d": "V",
    "q": "You need to reuse one set of measures across many reports. What is the best practice?",
    "o": [
      "Create a shared semantic model and connect reports to it",
      "Copy the PBIX for each report",
      "Export measures to Excel",
      "Create a measure in every report"
    ],
    "a": [
      0
    ],
    "e": "A shared semantic model gives one definition of measures for many reports."
  },
  {
    "d": "V",
    "q": "Which tool helps find slow DAX queries and visuals in Power BI Desktop?",
    "o": [
      "Performance Analyzer",
      "Quick Insights",
      "Q&A setup",
      "Bookmarks pane"
    ],
    "a": [
      0
    ],
    "e": "Performance Analyzer records how long each visual and DAX query takes."
  },
  {
    "d": "V",
    "q": "A semantic model is far too large for a refresh. Which two actions help? (Choose two.)",
    "multi": true,
    "o": [
      "Remove unused columns",
      "Reduce column cardinality, such as splitting datetime",
      "Add more calculated columns",
      "Turn off compression"
    ],
    "a": [
      0,
      1
    ],
    "e": "Fewer columns and lower cardinality shrink the model and speed up refresh."
  },
  {
    "d": "V",
    "q": "Which function returns a table of the distinct values in a column, honoring filters?",
    "o": [
      "VALUES",
      "SUMX",
      "RANKX",
      "DATEDIFF"
    ],
    "a": [
      0
    ],
    "e": "VALUES returns the distinct values in the current filter context."
  },
  {
    "d": "V",
    "q": "Which time-intelligence function gives the total from the start of the year to the current date?",
    "o": [
      "TOTALYTD",
      "EARLIER",
      "USERELATIONSHIP",
      "ALLNOBLANKROW"
    ],
    "a": [
      0
    ],
    "e": "TOTALYTD aggregates year to date and needs a proper date table."
  },
  {
    "d": "V",
    "q": "What is a calculation group used for?",
    "o": [
      "Applying one calculation, such as YTD, to many measures",
      "Storing raw data",
      "Scheduling refresh",
      "Creating gateways"
    ],
    "a": [
      0
    ],
    "e": "Calculation groups reduce measure sprawl by applying calculation items to existing measures."
  },
  {
    "d": "V",
    "q": "Which feature lets you create a model that does not copy data but queries the source for each visual?",
    "o": [
      "DirectQuery",
      "Import",
      "Dual cached",
      "Scheduled export"
    ],
    "a": [
      0
    ],
    "e": "DirectQuery sends queries to the source at run time."
  },
  {
    "d": "V",
    "q": "What is the purpose of marking a table as a date table?",
    "o": [
      "To enable correct time-intelligence calculations",
      "To hide the table from users",
      "To enable row-level security",
      "To compress images"
    ],
    "a": [
      0
    ],
    "e": "A marked date table, with a contiguous date column, supports time-intelligence functions."
  },
  {
    "d": "S",
    "q": "Which Fabric tool lets analysts write SQL against a warehouse in a visual no-code editor?",
    "o": [
      "Visual query editor",
      "Notebook",
      "Eventstream",
      "Data wrangler only"
    ],
    "a": [
      0
    ],
    "e": "The visual query editor builds T-SQL queries with a drag-and-drop interface."
  },
  {
    "d": "S",
    "q": "Which language do you use to query an eventhouse or KQL database?",
    "o": [
      "Kusto Query Language (KQL)",
      "DAX only",
      "MDX",
      "XQuery"
    ],
    "a": [
      0
    ],
    "e": "KQL databases are queried with Kusto Query Language."
  },
  {
    "d": "S",
    "q": "Which Power BI visual best shows how a total breaks down into parts over categories?",
    "o": [
      "Stacked bar or treemap",
      "Gauge",
      "Card",
      "Slicer"
    ],
    "a": [
      0
    ],
    "e": "Stacked bars and treemaps show part-to-whole relationships."
  },
  {
    "d": "S",
    "q": "You need to quickly profile column quality, distribution and errors in Power Query. Which feature do you turn on?",
    "o": [
      "Column quality, distribution and profile",
      "Merge queries",
      "Append queries",
      "Custom connectors"
    ],
    "a": [
      0
    ],
    "e": "Column profiling features show errors, empty values and value distribution."
  },
  {
    "d": "S",
    "q": "Which feature lets users explore a semantic model from Excel using a PivotTable?",
    "o": [
      "Analyze in Excel",
      "Export to PDF",
      "Embed in Teams",
      "Quick insights"
    ],
    "a": [
      0
    ],
    "e": "Analyze in Excel connects a PivotTable to a semantic model in the service."
  },
  {
    "d": "S",
    "q": "Which Spark library displays and transforms DataFrames with a visual grid and generates code?",
    "o": [
      "Data Wrangler",
      "Power Query only",
      "SSMS",
      "Report Builder"
    ],
    "a": [
      0
    ],
    "e": "Data Wrangler is a notebook tool for exploring data and generating PySpark or pandas code."
  },
  {
    "d": "S",
    "q": "Which feature allows Power BI to suggest insights such as outliers and trends from your data?",
    "o": [
      "Analyze or Quick Insights",
      "Row-level security",
      "Deployment rules",
      "Sensitivity labels"
    ],
    "a": [
      0
    ],
    "e": "Automated insights features look for patterns, anomalies and drivers in the data."
  },
  {
    "d": "S",
    "q": "Which statement about KQL is correct?",
    "o": [
      "It pipes data through operators such as where and summarize",
      "It requires CREATE TABLE for every query",
      "It only runs on Excel",
      "It cannot aggregate"
    ],
    "a": [
      0
    ],
    "e": "KQL queries chain operators with the pipe symbol, for example filtering with where and aggregating with summarize."
  }
]
};

export default DP600;
