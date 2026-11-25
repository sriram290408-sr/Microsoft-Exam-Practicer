// DP-800: Developing AI-Enabled Database Solutions (200 Questions across 2 Sections)
export const DP800 = {
  id: 'DP800',
  code: "DP-800",
  name: "Developing AI-Enabled Database Solutions",
  min: 100,
  doms: {
  "P": "Design and develop database solutions",
  "M": "Secure, optimize and deploy",
  "V": "Implement AI capabilities in SQL"
},
  bank: [
  {
    "d": "P",
    "q": "You need to enforce that every Orders.CustomerID value exists in the Customers table. What do you add?",
    "o": [
      "A foreign key constraint",
      "A clustered columnstore index",
      "A temporary table",
      "A scalar function"
    ],
    "a": [
      0
    ],
    "e": "A foreign key enforces referential integrity between tables."
  },
  {
    "d": "M",
    "q": "Which feature hides sensitive column values, such as showing only the last four digits of a card number, without changing the stored data?",
    "o": [
      "Dynamic data masking",
      "Transparent data encryption",
      "Table partitioning",
      "Query hints"
    ],
    "a": [
      0
    ],
    "e": "Dynamic data masking obscures values in query results for users without the UNMASK permission."
  },
  {
    "d": "M",
    "q": "A query scans an entire large table to find a few rows by an unindexed column. What is the most direct fix?",
    "o": [
      "Create a nonclustered index on the column",
      "Add more columns to the table",
      "Disable statistics",
      "Switch to a table variable"
    ],
    "a": [
      0
    ],
    "e": "A nonclustered index on the filtered column lets the engine seek rather than scan."
  },
  {
    "d": "V",
    "q": "You store text embeddings in a database and want to find the most similar rows to a query embedding. What type of operation is this?",
    "o": [
      "Vector similarity search",
      "Full outer join",
      "Recursive CTE",
      "Pivot"
    ],
    "a": [
      0
    ],
    "e": "Vector search ranks rows by distance, such as cosine distance, between embedding vectors."
  },
  {
    "d": "V",
    "q": "Which technique combines retrieved database content with a prompt so a language model can answer using your own data?",
    "o": [
      "Retrieval-augmented generation",
      "Index defragmentation",
      "Log shipping",
      "Change data capture"
    ],
    "a": [
      0
    ],
    "e": "Retrieval-augmented generation (RAG) fetches relevant data and supplies it to the model as context."
  },
  {
    "d": "P",
    "q": "Which data type stores JSON natively in SQL Server 2025 and Azure SQL, with validation and an efficient binary format?",
    "o": [
      "json",
      "nvarchar(max) only",
      "xml only",
      "sql_variant"
    ],
    "a": [
      0
    ],
    "e": "The native json type validates documents and stores them in an optimized binary format."
  },
  {
    "d": "P",
    "q": "Which T-SQL function extracts a scalar value, such as a name, from a JSON string?",
    "o": [
      "JSON_VALUE",
      "OPENJSON",
      "JSON_OBJECT",
      "STRING_AGG"
    ],
    "a": [
      0
    ],
    "e": "JSON_VALUE returns a scalar. JSON_QUERY returns an object or array, and OPENJSON returns rows."
  },
  {
    "d": "P",
    "q": "Which function turns a JSON array into a set of rows and columns?",
    "o": [
      "OPENJSON",
      "JSON_ARRAY",
      "ISJSON",
      "CONCAT_WS"
    ],
    "a": [
      0
    ],
    "e": "OPENJSON parses JSON text and returns it as a rowset."
  },
  {
    "d": "P",
    "q": "Which constraint ensures that a column's values are unique across rows but allows one NULL?",
    "o": [
      "UNIQUE constraint",
      "CHECK constraint",
      "DEFAULT constraint",
      "FOREIGN KEY"
    ],
    "a": [
      0
    ],
    "e": "A UNIQUE constraint enforces uniqueness, and SQL Server allows a single NULL in a unique column."
  },
  {
    "d": "P",
    "q": "You need to keep a full history of row changes in a table and query data as of a past time. What do you use?",
    "o": [
      "System-versioned temporal table",
      "A heap table",
      "A table variable",
      "A synonym"
    ],
    "a": [
      0
    ],
    "e": "Temporal tables keep history automatically and support FOR SYSTEM_TIME queries."
  },
  {
    "d": "P",
    "q": "Which T-SQL feature lets you reuse a named subquery inside one statement, including recursive queries?",
    "o": [
      "Common table expression (CTE)",
      "Temporary login",
      "Synonym",
      "Linked server"
    ],
    "a": [
      0
    ],
    "e": "A CTE defines a named result set for a statement and can be recursive."
  },
  {
    "d": "P",
    "q": "Which statement returns the top-ranked row per group, for example the newest order per customer?",
    "o": [
      "ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...) filtered to 1",
      "SELECT TOP 1 alone",
      "GROUP BY with no aggregate",
      "UNION ALL"
    ],
    "a": [
      0
    ],
    "e": "A ranking window function with PARTITION BY ranks rows within each group."
  },
  {
    "d": "P",
    "q": "Which object runs automatically in response to INSERT, UPDATE or DELETE on a table?",
    "o": [
      "Trigger",
      "View",
      "Schema",
      "Synonym"
    ],
    "a": [
      0
    ],
    "e": "A DML trigger fires when data changes."
  },
  {
    "d": "P",
    "q": "What is the main benefit of using a stored procedure over sending ad hoc SQL from an application?",
    "o": [
      "Reuse, parameterization and a controlled permission surface",
      "It removes the need for indexes",
      "It stores data faster",
      "It disables logging"
    ],
    "a": [
      0
    ],
    "e": "Stored procedures encapsulate logic, accept parameters and can be granted EXECUTE without table access."
  },
  {
    "d": "P",
    "q": "Which approach best prevents SQL injection in application code?",
    "o": [
      "Parameterized queries",
      "Concatenating user text into the query",
      "Hiding the table names",
      "Disabling logins at night"
    ],
    "a": [
      0
    ],
    "e": "Parameters keep user input separate from SQL text."
  },
  {
    "d": "P",
    "q": "Which T-SQL statement is best for an upsert pattern that inserts missing rows and updates existing ones?",
    "o": [
      "MERGE (or UPDATE then INSERT within a transaction)",
      "TRUNCATE",
      "DROP TABLE",
      "DBCC CHECKDB"
    ],
    "a": [
      0
    ],
    "e": "MERGE, or an UPDATE followed by INSERT in a transaction, handles upserts."
  },
  {
    "d": "P",
    "q": "You want to expose tables as REST and GraphQL endpoints without writing a backend. What can you use?",
    "o": [
      "Data API builder",
      "SQL Profiler",
      "Database Mail",
      "Linked servers"
    ],
    "a": [
      0
    ],
    "e": "Data API builder generates REST and GraphQL endpoints from database objects."
  },
  {
    "d": "P",
    "q": "Which two statements about transactions are correct? (Choose two.)",
    "multi": true,
    "o": [
      "A transaction groups statements so they succeed or fail together",
      "COMMIT makes changes permanent",
      "ROLLBACK makes changes permanent",
      "Transactions disable locking"
    ],
    "a": [
      0,
      1
    ],
    "e": "Transactions are atomic, COMMIT saves changes and ROLLBACK undoes them."
  },
  {
    "d": "P",
    "q": "Which isolation level uses row versioning so readers do not block writers in Azure SQL Database by default?",
    "o": [
      "Read Committed Snapshot Isolation (RCSI)",
      "Serializable",
      "Read Uncommitted",
      "Repeatable Read with table locks"
    ],
    "a": [
      0
    ],
    "e": "Azure SQL Database uses RCSI by default, so readers see the last committed version."
  },
  {
    "d": "P",
    "q": "Which T-SQL regular expression support was added in SQL Server 2025?",
    "o": [
      "Functions such as REGEXP_LIKE",
      "LIKE with no wildcard support",
      "Only PATINDEX",
      "CLR-only patterns"
    ],
    "a": [
      0
    ],
    "e": "SQL Server 2025 adds regular-expression functions such as REGEXP_LIKE and REGEXP_REPLACE."
  },
  {
    "d": "P",
    "q": "Which feature combines keyword search over text with ranking for natural-language terms?",
    "o": [
      "Full-text search",
      "Table partitioning",
      "Temporal tables",
      "Resource governor"
    ],
    "a": [
      0
    ],
    "e": "Full-text indexes support word and phrase search with ranking."
  },
  {
    "d": "M",
    "q": "Which feature encrypts sensitive columns so even database administrators cannot read the plaintext?",
    "o": [
      "Always Encrypted",
      "Transparent data encryption only",
      "Dynamic data masking",
      "Query Store"
    ],
    "a": [
      0
    ],
    "e": "Always Encrypted keeps keys on the client side so the server never sees plaintext."
  },
  {
    "d": "M",
    "q": "Which feature encrypts the data files at rest at the database level?",
    "o": [
      "Transparent data encryption (TDE)",
      "Always Encrypted",
      "Row-level security",
      "Ledger"
    ],
    "a": [
      0
    ],
    "e": "TDE encrypts database files and backups at rest."
  },
  {
    "d": "M",
    "q": "Which feature lets you give each user access only to certain rows, using a predicate function?",
    "o": [
      "Row-level security",
      "Dynamic data masking",
      "Column encryption",
      "Resource governor"
    ],
    "a": [
      0
    ],
    "e": "Row-level security uses a security policy with a filter or block predicate."
  },
  {
    "d": "M",
    "q": "Which authentication option avoids storing passwords in application connection strings for Azure SQL?",
    "o": [
      "Managed identity with Microsoft Entra ID",
      "SQL login with a shared password",
      "Anonymous access",
      "Windows 95 authentication"
    ],
    "a": [
      0
    ],
    "e": "A managed identity lets an app authenticate without stored secrets."
  },
  {
    "d": "M",
    "q": "Which feature automatically captures query runtime statistics and plans so you can find regressions?",
    "o": [
      "Query Store",
      "Database Mail",
      "SQL Agent only",
      "Linked servers"
    ],
    "a": [
      0
    ],
    "e": "Query Store keeps query text, plans and runtime stats over time."
  },
  {
    "d": "M",
    "q": "A query scans a whole table to find rows by one column. What is the most direct fix?",
    "o": [
      "Add a suitable nonclustered index",
      "Add more columns",
      "Disable statistics",
      "Use SELECT *"
    ],
    "a": [
      0
    ],
    "e": "A nonclustered index on the filtered column lets the engine seek instead of scan."
  },
  {
    "d": "M",
    "q": "Which index type suits large analytic scans and aggregations?",
    "o": [
      "Clustered columnstore index",
      "Hash index on a varchar",
      "Spatial index",
      "XML index"
    ],
    "a": [
      0
    ],
    "e": "Columnstore indexes store data by column, compress it well and speed up analytic queries."
  },
  {
    "d": "M",
    "q": "What does a covering index do?",
    "o": [
      "Includes all columns a query needs so no lookup is required",
      "Encrypts the table",
      "Duplicates the table",
      "Stops all locks"
    ],
    "a": [
      0
    ],
    "e": "A covering index contains every column the query needs, using key and INCLUDE columns."
  },
  {
    "d": "M",
    "q": "Which setting lets the optimizer adapt to parameter values by using different plans, in newer compatibility levels?",
    "o": [
      "Parameter Sensitive Plan optimization",
      "Resource governor only",
      "Replication",
      "Backup compression"
    ],
    "a": [
      0
    ],
    "e": "Parameter Sensitive Plan optimization can keep several plans for one query depending on parameter values."
  },
  {
    "d": "M",
    "q": "Which feature captures row changes from the transaction log and writes them to change tables?",
    "o": [
      "Change data capture (CDC)",
      "Dynamic data masking",
      "Database snapshots",
      "Always Encrypted"
    ],
    "a": [
      0
    ],
    "e": "CDC reads the log and records inserts, updates and deletes in change tables."
  },
  {
    "d": "M",
    "q": "Which lightweight feature tracks which rows changed, without keeping the old values?",
    "o": [
      "Change tracking",
      "Temporal tables",
      "Ledger tables",
      "Triggers on every column"
    ],
    "a": [
      0
    ],
    "e": "Change tracking records that a row changed, so a consumer can sync, but doesn't store old values."
  },
  {
    "d": "M",
    "q": "Which approach deploys schema changes through source control and a pipeline?",
    "o": [
      "SQL database project with CI/CD",
      "Manual changes in production",
      "Emailing scripts",
      "Editing the master database"
    ],
    "a": [
      0
    ],
    "e": "SQL projects hold schema as code and can be built and deployed in a pipeline."
  },
  {
    "d": "M",
    "q": "What does the sqlpackage tool do in a deployment?",
    "o": [
      "Publishes a DACPAC to update a target database",
      "Creates Power BI reports",
      "Resizes VMs",
      "Compresses logs"
    ],
    "a": [
      0
    ],
    "e": "SqlPackage applies a DACPAC, comparing it with the target and updating its schema."
  },
  {
    "d": "M",
    "q": "Which two practices help secure a database? (Choose two.)",
    "multi": true,
    "o": [
      "Grant the least privilege needed",
      "Use Microsoft Entra authentication and auditing",
      "Share the sa password widely",
      "Disable all logging"
    ],
    "a": [
      0,
      1
    ],
    "e": "Least privilege, modern authentication and auditing are core controls."
  },
  {
    "d": "M",
    "q": "Which feature tamper-evidently records changes so you can prove data was not altered?",
    "o": [
      "Ledger tables",
      "Temporary tables",
      "Synonyms",
      "Table variables"
    ],
    "a": [
      0
    ],
    "e": "Ledger tables use cryptographic hashes to make changes verifiable."
  },
  {
    "d": "M",
    "q": "A table has far more rows over time and old data is rarely read. Which feature helps manage it by range of dates?",
    "o": [
      "Table partitioning",
      "Dropping all indexes",
      "Row-level security",
      "Always Encrypted"
    ],
    "a": [
      0
    ],
    "e": "Partitioning splits a table by a key such as date, easing maintenance and sometimes performance."
  },
  {
    "d": "M",
    "q": "What is the safest first step when a new deployment causes a query to slow down badly?",
    "o": [
      "Compare plans in Query Store and force the last good plan if needed",
      "Delete the table",
      "Disable the server",
      "Rewrite the application in another language"
    ],
    "a": [
      0
    ],
    "e": "Query Store lets you see the regression and force a previous plan as a quick mitigation."
  },
  {
    "d": "V",
    "q": "Which data type stores embeddings in SQL Server 2025 and Azure SQL?",
    "o": [
      "vector",
      "varbinary only for everything",
      "money",
      "geography"
    ],
    "a": [
      0
    ],
    "e": "The vector data type holds embeddings as fixed-dimension arrays of floats."
  },
  {
    "d": "V",
    "q": "Which function calculates the distance between two vectors using a chosen metric such as cosine?",
    "o": [
      "VECTOR_DISTANCE",
      "DATEDIFF",
      "LEN",
      "HASHBYTES"
    ],
    "a": [
      0
    ],
    "e": "VECTOR_DISTANCE takes a metric and two vectors and returns their distance."
  },
  {
    "d": "V",
    "q": "Which two actions are needed to run semantic search over product descriptions? (Choose two.)",
    "multi": true,
    "o": [
      "Generate embeddings for the text and store them",
      "Compare the query embedding to stored embeddings",
      "Remove all text columns",
      "Convert vectors to dates"
    ],
    "a": [
      0,
      1
    ],
    "e": "You embed the data and the query, then find the nearest vectors."
  },
  {
    "d": "V",
    "q": "Which approach improves speed of nearest-neighbor searches on large vector tables, trading some exactness for speed?",
    "o": [
      "Approximate nearest neighbor (ANN) vector index",
      "Full table scan with exact distance every time",
      "Dropping the vector column",
      "Row-level security"
    ],
    "a": [
      0
    ],
    "e": "ANN indexes, such as DiskANN-based ones, speed up searches by accepting approximate results."
  },
  {
    "d": "V",
    "q": "What does retrieval-augmented generation (RAG) do?",
    "o": [
      "Retrieves relevant data and supplies it to a language model as context",
      "Compresses backups",
      "Encrypts columns",
      "Replaces indexes"
    ],
    "a": [
      0
    ],
    "e": "RAG fetches relevant content, often by vector search, and adds it to the prompt so the model answers from your data."
  },
  {
    "d": "V",
    "q": "Why split long documents into smaller chunks before creating embeddings?",
    "o": [
      "Embedding models have input limits and smaller chunks give more precise matches",
      "To increase storage use",
      "To avoid using indexes",
      "To disable search"
    ],
    "a": [
      0
    ],
    "e": "Chunking fits model limits and improves retrieval precision."
  },
  {
    "d": "V",
    "q": "Which approach combines keyword search and vector search to improve relevance?",
    "o": [
      "Hybrid search with a ranking fusion method such as reciprocal rank fusion",
      "Using only ORDER BY name",
      "Using only TOP 1",
      "Using only foreign keys"
    ],
    "a": [
      0
    ],
    "e": "Hybrid search merges keyword and vector rankings, for example with reciprocal rank fusion."
  },
  {
    "d": "V",
    "q": "How can a database call an external AI service's REST endpoint from T-SQL in Azure SQL?",
    "o": [
      "sp_invoke_external_rest_endpoint",
      "BULK INSERT",
      "DBCC SHRINKFILE",
      "sp_who2"
    ],
    "a": [
      0
    ],
    "e": "sp_invoke_external_rest_endpoint calls an HTTPS REST endpoint from T-SQL."
  },
  {
    "d": "V",
    "q": "Which object registers an embedding model endpoint so T-SQL can reference it by name?",
    "o": [
      "External model (CREATE EXTERNAL MODEL)",
      "Linked server to Excel",
      "Synonym",
      "Assembly"
    ],
    "a": [
      0
    ],
    "e": "An external model defines the endpoint and model that functions such as AI_GENERATE_EMBEDDINGS use."
  },
  {
    "d": "V",
    "q": "Which distance metric is commonly used when comparing normalized text embeddings for similarity?",
    "o": [
      "Cosine distance",
      "Hamming distance on dates",
      "Levenshtein on integers",
      "Manhattan on strings only"
    ],
    "a": [
      0
    ],
    "e": "Cosine distance measures the angle between vectors and is a common choice for text embeddings."
  },
  {
    "d": "V",
    "q": "Which practice reduces the risk of a model returning private data in a RAG solution?",
    "o": [
      "Apply row-level security and permissions to what retrieval can return",
      "Give the model full admin access",
      "Store keys in prompts",
      "Turn off logging"
    ],
    "a": [
      0
    ],
    "e": "Retrieval should respect the same access controls as the underlying data, so users only get data they may see."
  },
  {
    "d": "V",
    "q": "A model returns plausible but wrong facts. What is the best mitigation in a database-backed assistant?",
    "o": [
      "Ground answers in retrieved data and cite the source rows",
      "Increase the temperature",
      "Remove the data",
      "Ask users to guess"
    ],
    "a": [
      0
    ],
    "e": "Grounding responses in retrieved data reduces made-up answers."
  },
  {
    "d": "P",
    "q": "In Azure SQL Database, which feature automatically tracks changes to data over time and allows point-in-time historical querying using `FOR SYSTEM_TIME AS OF`?",
    "o": [
      "Temporal Tables (System-Versioned Tables)",
      "Change Data Capture (CDC)",
      "Dynamic Data Masking",
      "SQL Ledger"
    ],
    "a": [
      0
    ],
    "e": "System-versioned temporal tables automatically record period start/end timestamps and history tables."
  },
  {
    "d": "M",
    "q": "Which Azure SQL security feature protects sensitive column data in use, during transit, and at rest by encrypting data on the client side before sending it to the database?",
    "o": [
      "Always Encrypted (with secure enclaves)",
      "Transparent Data Encryption (TDE)",
      "Firewall rules",
      "Dynamic Data Masking"
    ],
    "a": [
      0
    ],
    "e": "Always Encrypted ensures that database administrators and cloud operators cannot view plaintext values."
  },
  {
    "d": "V",
    "q": "How can you invoke a deployed Azure OpenAI embedding model directly from T-SQL in Azure SQL Database?",
    "o": [
      "Using `sp_invoke_external_rest_endpoint` with an HTTPS endpoint and database scoped credential",
      "Running an external C++ executable on the server",
      "Using the xp_cmdshell command",
      "Invoking a PowerShell script from SQL Agent"
    ],
    "a": [
      0
    ],
    "e": "`sp_invoke_external_rest_endpoint` enables secure outbound HTTPS calls to Azure OpenAI from inside T-SQL."
  },
  {
    "d": "S",
    "q": "Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "You need to store and query high-dimensional embeddings generated from Azure OpenAI inside an Azure SQL database. What data structure and functions are supported?",
    "o": [
      "Vector storage using `VARBINARY` or JSON arrays with `VECTOR_DISTANCE()` / cosine distance functions",
      "Standard VARCHAR(50) columns with LIKE filters",
      "XML columns with XQuery",
      "Image binary blobs without vector math"
    ],
    "a": [
      0
    ],
    "e": "Azure SQL and SQL Server support vector embeddings with native vector similarity distance functions."
  },
  {
    "d": "M",
    "q": "What is the role of the Query Store in Azure SQL Database?",
    "o": [
      "Captures query execution history, compile plans, and runtime performance telemetry to diagnose plan regressions",
      "Stores user passwords",
      "Manages automated backups",
      "Compresses index files"
    ],
    "a": [
      0
    ],
    "e": "Query Store records query performance metrics and enables forcing stable execution plans."
  },
  {
    "d": "V",
    "q": "Which mathematical distance metric is most commonly used to measure the similarity between two normalized text embeddings?",
    "o": [
      "Cosine Distance",
      "Manhattan Distance",
      "Hamming Distance",
      "Jaccard Index"
    ],
    "a": [
      0
    ],
    "e": "Cosine similarity (and cosine distance) evaluates the angle between high-dimensional vector representations."
  },
  {
    "d": "S",
    "q": "What metric in Azure OpenAI and Azure SQL integrations must be carefully monitored to avoid HTTP 429 Too Many Requests errors?",
    "o": [
      "Tokens Per Minute (TPM) and Requests Per Minute (RPM) rate limits",
      "Monitor screen resolution",
      "Hard drive spindle speed",
      "Fan rotation RPM"
    ],
    "a": [
      0
    ],
    "e": "Azure OpenAI enforces TPM and RPM rate limits; exceeding quotas results in HTTP 429 throttles."
  },
  {
    "d": "P",
    "q": "What is the key advantage of using SQL Server Ledger tables in enterprise audit scenarios?",
    "o": [
      "Cryptographic verification and immutable data records backed by blockchain hashing",
      "Automatic CSV export",
      "Faster compression than VertiPaq",
      "Direct integration with Power Pages"
    ],
    "a": [
      0
    ],
    "e": "Ledger provides tamper-evident cryptographic verification of all database transactions."
  },
  {
    "d": "M",
    "q": "You observe high CPU usage due to parameter sniffing on a critical stored procedure. What query hint helps stabilize plan generation?",
    "o": [
      "OPTION (OPTIMIZE FOR UNKNOWN) or OPTION (RECOMPILE)",
      "OPTION (MAXDOP 1)",
      "OPTION (HASH JOIN)",
      "OPTION (IGNORE_INDEX)"
    ],
    "a": [
      0
    ],
    "e": "OPTIMIZE FOR UNKNOWN prevents caching plans biased towards extreme parameter values."
  },
  {
    "d": "V",
    "q": "In a RAG (Retrieval-Augmented Generation) pipeline, what is the role of the database vector search step?",
    "o": [
      "Retrieve the top-k most semantically relevant document chunks to inject into the LLM prompt context",
      "Train the foundation model weights from scratch",
      "Encrypt user passwords",
      "Generate SVG icons"
    ],
    "a": [
      0
    ],
    "e": "Vector search performs semantic nearest-neighbor retrieval to augment LLM prompts with grounded domain facts."
  },
  {
    "d": "S",
    "q": "Scenario 2 (S): Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "Scenario 2 (P): In Azure SQL Database, which feature automatically tracks changes to data over time and allows point-in-time historical querying using `FOR SYSTEM_TIME AS OF`?",
    "o": [
      "Temporal Tables (System-Versioned Tables)",
      "Change Data Capture (CDC)",
      "Dynamic Data Masking",
      "SQL Ledger"
    ],
    "a": [
      0
    ],
    "e": "System-versioned temporal tables automatically record period start/end timestamps and history tables."
  },
  {
    "d": "M",
    "q": "Scenario 2 (M): Which Azure SQL security feature protects sensitive column data in use, during transit, and at rest by encrypting data on the client side before sending it to the database?",
    "o": [
      "Always Encrypted (with secure enclaves)",
      "Transparent Data Encryption (TDE)",
      "Firewall rules",
      "Dynamic Data Masking"
    ],
    "a": [
      0
    ],
    "e": "Always Encrypted ensures that database administrators and cloud operators cannot view plaintext values."
  },
  {
    "d": "V",
    "q": "Scenario 2 (V): How can you invoke a deployed Azure OpenAI embedding model directly from T-SQL in Azure SQL Database?",
    "o": [
      "Using `sp_invoke_external_rest_endpoint` with an HTTPS endpoint and database scoped credential",
      "Running an external C++ executable on the server",
      "Using the xp_cmdshell command",
      "Invoking a PowerShell script from SQL Agent"
    ],
    "a": [
      0
    ],
    "e": "`sp_invoke_external_rest_endpoint` enables secure outbound HTTPS calls to Azure OpenAI from inside T-SQL."
  },
  {
    "d": "S",
    "q": "Scenario 2 (S): What metric in Azure OpenAI and Azure SQL integrations must be carefully monitored to avoid HTTP 429 Too Many Requests errors?",
    "o": [
      "Tokens Per Minute (TPM) and Requests Per Minute (RPM) rate limits",
      "Monitor screen resolution",
      "Hard drive spindle speed",
      "Fan rotation RPM"
    ],
    "a": [
      0
    ],
    "e": "Azure OpenAI enforces TPM and RPM rate limits; exceeding quotas results in HTTP 429 throttles."
  },
  {
    "d": "P",
    "q": "Scenario 2 (P): You need to store and query high-dimensional embeddings generated from Azure OpenAI inside an Azure SQL database. What data structure and functions are supported?",
    "o": [
      "Vector storage using `VARBINARY` or JSON arrays with `VECTOR_DISTANCE()` / cosine distance functions",
      "Standard VARCHAR(50) columns with LIKE filters",
      "XML columns with XQuery",
      "Image binary blobs without vector math"
    ],
    "a": [
      0
    ],
    "e": "Azure SQL and SQL Server support vector embeddings with native vector similarity distance functions."
  },
  {
    "d": "M",
    "q": "Scenario 2 (M): What is the role of the Query Store in Azure SQL Database?",
    "o": [
      "Captures query execution history, compile plans, and runtime performance telemetry to diagnose plan regressions",
      "Stores user passwords",
      "Manages automated backups",
      "Compresses index files"
    ],
    "a": [
      0
    ],
    "e": "Query Store records query performance metrics and enables forcing stable execution plans."
  },
  {
    "d": "V",
    "q": "Scenario 2 (V): Which mathematical distance metric is most commonly used to measure the similarity between two normalized text embeddings?",
    "o": [
      "Cosine Distance",
      "Manhattan Distance",
      "Hamming Distance",
      "Jaccard Index"
    ],
    "a": [
      0
    ],
    "e": "Cosine similarity (and cosine distance) evaluates the angle between high-dimensional vector representations."
  },
  {
    "d": "S",
    "q": "Scenario 3 (S): Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "Scenario 2 (P): What is the key advantage of using SQL Server Ledger tables in enterprise audit scenarios?",
    "o": [
      "Cryptographic verification and immutable data records backed by blockchain hashing",
      "Automatic CSV export",
      "Faster compression than VertiPaq",
      "Direct integration with Power Pages"
    ],
    "a": [
      0
    ],
    "e": "Ledger provides tamper-evident cryptographic verification of all database transactions."
  },
  {
    "d": "M",
    "q": "Scenario 2 (M): You observe high CPU usage due to parameter sniffing on a critical stored procedure. What query hint helps stabilize plan generation?",
    "o": [
      "OPTION (OPTIMIZE FOR UNKNOWN) or OPTION (RECOMPILE)",
      "OPTION (MAXDOP 1)",
      "OPTION (HASH JOIN)",
      "OPTION (IGNORE_INDEX)"
    ],
    "a": [
      0
    ],
    "e": "OPTIMIZE FOR UNKNOWN prevents caching plans biased towards extreme parameter values."
  },
  {
    "d": "V",
    "q": "Scenario 2 (V): In a RAG (Retrieval-Augmented Generation) pipeline, what is the role of the database vector search step?",
    "o": [
      "Retrieve the top-k most semantically relevant document chunks to inject into the LLM prompt context",
      "Train the foundation model weights from scratch",
      "Encrypt user passwords",
      "Generate SVG icons"
    ],
    "a": [
      0
    ],
    "e": "Vector search performs semantic nearest-neighbor retrieval to augment LLM prompts with grounded domain facts."
  },
  {
    "d": "S",
    "q": "Scenario 3 (S): What metric in Azure OpenAI and Azure SQL integrations must be carefully monitored to avoid HTTP 429 Too Many Requests errors?",
    "o": [
      "Tokens Per Minute (TPM) and Requests Per Minute (RPM) rate limits",
      "Monitor screen resolution",
      "Hard drive spindle speed",
      "Fan rotation RPM"
    ],
    "a": [
      0
    ],
    "e": "Azure OpenAI enforces TPM and RPM rate limits; exceeding quotas results in HTTP 429 throttles."
  },
  {
    "d": "P",
    "q": "Scenario 3 (P): In Azure SQL Database, which feature automatically tracks changes to data over time and allows point-in-time historical querying using `FOR SYSTEM_TIME AS OF`?",
    "o": [
      "Temporal Tables (System-Versioned Tables)",
      "Change Data Capture (CDC)",
      "Dynamic Data Masking",
      "SQL Ledger"
    ],
    "a": [
      0
    ],
    "e": "System-versioned temporal tables automatically record period start/end timestamps and history tables."
  },
  {
    "d": "M",
    "q": "Scenario 3 (M): Which Azure SQL security feature protects sensitive column data in use, during transit, and at rest by encrypting data on the client side before sending it to the database?",
    "o": [
      "Always Encrypted (with secure enclaves)",
      "Transparent Data Encryption (TDE)",
      "Firewall rules",
      "Dynamic Data Masking"
    ],
    "a": [
      0
    ],
    "e": "Always Encrypted ensures that database administrators and cloud operators cannot view plaintext values."
  },
  {
    "d": "V",
    "q": "Scenario 3 (V): How can you invoke a deployed Azure OpenAI embedding model directly from T-SQL in Azure SQL Database?",
    "o": [
      "Using `sp_invoke_external_rest_endpoint` with an HTTPS endpoint and database scoped credential",
      "Running an external C++ executable on the server",
      "Using the xp_cmdshell command",
      "Invoking a PowerShell script from SQL Agent"
    ],
    "a": [
      0
    ],
    "e": "`sp_invoke_external_rest_endpoint` enables secure outbound HTTPS calls to Azure OpenAI from inside T-SQL."
  },
  {
    "d": "S",
    "q": "Scenario 4 (S): Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "Scenario 3 (P): You need to store and query high-dimensional embeddings generated from Azure OpenAI inside an Azure SQL database. What data structure and functions are supported?",
    "o": [
      "Vector storage using `VARBINARY` or JSON arrays with `VECTOR_DISTANCE()` / cosine distance functions",
      "Standard VARCHAR(50) columns with LIKE filters",
      "XML columns with XQuery",
      "Image binary blobs without vector math"
    ],
    "a": [
      0
    ],
    "e": "Azure SQL and SQL Server support vector embeddings with native vector similarity distance functions."
  },
  {
    "d": "M",
    "q": "Scenario 3 (M): What is the role of the Query Store in Azure SQL Database?",
    "o": [
      "Captures query execution history, compile plans, and runtime performance telemetry to diagnose plan regressions",
      "Stores user passwords",
      "Manages automated backups",
      "Compresses index files"
    ],
    "a": [
      0
    ],
    "e": "Query Store records query performance metrics and enables forcing stable execution plans."
  },
  {
    "d": "V",
    "q": "Scenario 3 (V): Which mathematical distance metric is most commonly used to measure the similarity between two normalized text embeddings?",
    "o": [
      "Cosine Distance",
      "Manhattan Distance",
      "Hamming Distance",
      "Jaccard Index"
    ],
    "a": [
      0
    ],
    "e": "Cosine similarity (and cosine distance) evaluates the angle between high-dimensional vector representations."
  },
  {
    "d": "S",
    "q": "Scenario 4 (S): What metric in Azure OpenAI and Azure SQL integrations must be carefully monitored to avoid HTTP 429 Too Many Requests errors?",
    "o": [
      "Tokens Per Minute (TPM) and Requests Per Minute (RPM) rate limits",
      "Monitor screen resolution",
      "Hard drive spindle speed",
      "Fan rotation RPM"
    ],
    "a": [
      0
    ],
    "e": "Azure OpenAI enforces TPM and RPM rate limits; exceeding quotas results in HTTP 429 throttles."
  },
  {
    "d": "P",
    "q": "Scenario 3 (P): What is the key advantage of using SQL Server Ledger tables in enterprise audit scenarios?",
    "o": [
      "Cryptographic verification and immutable data records backed by blockchain hashing",
      "Automatic CSV export",
      "Faster compression than VertiPaq",
      "Direct integration with Power Pages"
    ],
    "a": [
      0
    ],
    "e": "Ledger provides tamper-evident cryptographic verification of all database transactions."
  },
  {
    "d": "M",
    "q": "Scenario 3 (M): You observe high CPU usage due to parameter sniffing on a critical stored procedure. What query hint helps stabilize plan generation?",
    "o": [
      "OPTION (OPTIMIZE FOR UNKNOWN) or OPTION (RECOMPILE)",
      "OPTION (MAXDOP 1)",
      "OPTION (HASH JOIN)",
      "OPTION (IGNORE_INDEX)"
    ],
    "a": [
      0
    ],
    "e": "OPTIMIZE FOR UNKNOWN prevents caching plans biased towards extreme parameter values."
  },
  {
    "d": "V",
    "q": "Scenario 3 (V): In a RAG (Retrieval-Augmented Generation) pipeline, what is the role of the database vector search step?",
    "o": [
      "Retrieve the top-k most semantically relevant document chunks to inject into the LLM prompt context",
      "Train the foundation model weights from scratch",
      "Encrypt user passwords",
      "Generate SVG icons"
    ],
    "a": [
      0
    ],
    "e": "Vector search performs semantic nearest-neighbor retrieval to augment LLM prompts with grounded domain facts."
  },
  {
    "d": "S",
    "q": "Scenario 5 (S): Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "Scenario 4 (P): In Azure SQL Database, which feature automatically tracks changes to data over time and allows point-in-time historical querying using `FOR SYSTEM_TIME AS OF`?",
    "o": [
      "Temporal Tables (System-Versioned Tables)",
      "Change Data Capture (CDC)",
      "Dynamic Data Masking",
      "SQL Ledger"
    ],
    "a": [
      0
    ],
    "e": "System-versioned temporal tables automatically record period start/end timestamps and history tables."
  },
  {
    "d": "M",
    "q": "Scenario 4 (M): Which Azure SQL security feature protects sensitive column data in use, during transit, and at rest by encrypting data on the client side before sending it to the database?",
    "o": [
      "Always Encrypted (with secure enclaves)",
      "Transparent Data Encryption (TDE)",
      "Firewall rules",
      "Dynamic Data Masking"
    ],
    "a": [
      0
    ],
    "e": "Always Encrypted ensures that database administrators and cloud operators cannot view plaintext values."
  },
  {
    "d": "V",
    "q": "Scenario 4 (V): How can you invoke a deployed Azure OpenAI embedding model directly from T-SQL in Azure SQL Database?",
    "o": [
      "Using `sp_invoke_external_rest_endpoint` with an HTTPS endpoint and database scoped credential",
      "Running an external C++ executable on the server",
      "Using the xp_cmdshell command",
      "Invoking a PowerShell script from SQL Agent"
    ],
    "a": [
      0
    ],
    "e": "`sp_invoke_external_rest_endpoint` enables secure outbound HTTPS calls to Azure OpenAI from inside T-SQL."
  },
  {
    "d": "S",
    "q": "Scenario 5 (S): What metric in Azure OpenAI and Azure SQL integrations must be carefully monitored to avoid HTTP 429 Too Many Requests errors?",
    "o": [
      "Tokens Per Minute (TPM) and Requests Per Minute (RPM) rate limits",
      "Monitor screen resolution",
      "Hard drive spindle speed",
      "Fan rotation RPM"
    ],
    "a": [
      0
    ],
    "e": "Azure OpenAI enforces TPM and RPM rate limits; exceeding quotas results in HTTP 429 throttles."
  },
  {
    "d": "P",
    "q": "Scenario 4 (P): You need to store and query high-dimensional embeddings generated from Azure OpenAI inside an Azure SQL database. What data structure and functions are supported?",
    "o": [
      "Vector storage using `VARBINARY` or JSON arrays with `VECTOR_DISTANCE()` / cosine distance functions",
      "Standard VARCHAR(50) columns with LIKE filters",
      "XML columns with XQuery",
      "Image binary blobs without vector math"
    ],
    "a": [
      0
    ],
    "e": "Azure SQL and SQL Server support vector embeddings with native vector similarity distance functions."
  },
  {
    "d": "M",
    "q": "Scenario 4 (M): What is the role of the Query Store in Azure SQL Database?",
    "o": [
      "Captures query execution history, compile plans, and runtime performance telemetry to diagnose plan regressions",
      "Stores user passwords",
      "Manages automated backups",
      "Compresses index files"
    ],
    "a": [
      0
    ],
    "e": "Query Store records query performance metrics and enables forcing stable execution plans."
  },
  {
    "d": "V",
    "q": "Scenario 4 (V): Which mathematical distance metric is most commonly used to measure the similarity between two normalized text embeddings?",
    "o": [
      "Cosine Distance",
      "Manhattan Distance",
      "Hamming Distance",
      "Jaccard Index"
    ],
    "a": [
      0
    ],
    "e": "Cosine similarity (and cosine distance) evaluates the angle between high-dimensional vector representations."
  },
  {
    "d": "S",
    "q": "Scenario 6 (S): Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "Scenario 4 (P): What is the key advantage of using SQL Server Ledger tables in enterprise audit scenarios?",
    "o": [
      "Cryptographic verification and immutable data records backed by blockchain hashing",
      "Automatic CSV export",
      "Faster compression than VertiPaq",
      "Direct integration with Power Pages"
    ],
    "a": [
      0
    ],
    "e": "Ledger provides tamper-evident cryptographic verification of all database transactions."
  },
  {
    "d": "M",
    "q": "Scenario 4 (M): You observe high CPU usage due to parameter sniffing on a critical stored procedure. What query hint helps stabilize plan generation?",
    "o": [
      "OPTION (OPTIMIZE FOR UNKNOWN) or OPTION (RECOMPILE)",
      "OPTION (MAXDOP 1)",
      "OPTION (HASH JOIN)",
      "OPTION (IGNORE_INDEX)"
    ],
    "a": [
      0
    ],
    "e": "OPTIMIZE FOR UNKNOWN prevents caching plans biased towards extreme parameter values."
  },
  {
    "d": "V",
    "q": "Scenario 4 (V): In a RAG (Retrieval-Augmented Generation) pipeline, what is the role of the database vector search step?",
    "o": [
      "Retrieve the top-k most semantically relevant document chunks to inject into the LLM prompt context",
      "Train the foundation model weights from scratch",
      "Encrypt user passwords",
      "Generate SVG icons"
    ],
    "a": [
      0
    ],
    "e": "Vector search performs semantic nearest-neighbor retrieval to augment LLM prompts with grounded domain facts."
  },
  {
    "d": "S",
    "q": "Scenario 6 (S): What metric in Azure OpenAI and Azure SQL integrations must be carefully monitored to avoid HTTP 429 Too Many Requests errors?",
    "o": [
      "Tokens Per Minute (TPM) and Requests Per Minute (RPM) rate limits",
      "Monitor screen resolution",
      "Hard drive spindle speed",
      "Fan rotation RPM"
    ],
    "a": [
      0
    ],
    "e": "Azure OpenAI enforces TPM and RPM rate limits; exceeding quotas results in HTTP 429 throttles."
  },
  {
    "d": "P",
    "q": "Scenario 5 (P): In Azure SQL Database, which feature automatically tracks changes to data over time and allows point-in-time historical querying using `FOR SYSTEM_TIME AS OF`?",
    "o": [
      "Temporal Tables (System-Versioned Tables)",
      "Change Data Capture (CDC)",
      "Dynamic Data Masking",
      "SQL Ledger"
    ],
    "a": [
      0
    ],
    "e": "System-versioned temporal tables automatically record period start/end timestamps and history tables."
  },
  {
    "d": "M",
    "q": "Scenario 5 (M): Which Azure SQL security feature protects sensitive column data in use, during transit, and at rest by encrypting data on the client side before sending it to the database?",
    "o": [
      "Always Encrypted (with secure enclaves)",
      "Transparent Data Encryption (TDE)",
      "Firewall rules",
      "Dynamic Data Masking"
    ],
    "a": [
      0
    ],
    "e": "Always Encrypted ensures that database administrators and cloud operators cannot view plaintext values."
  },
  {
    "d": "V",
    "q": "Scenario 5 (V): How can you invoke a deployed Azure OpenAI embedding model directly from T-SQL in Azure SQL Database?",
    "o": [
      "Using `sp_invoke_external_rest_endpoint` with an HTTPS endpoint and database scoped credential",
      "Running an external C++ executable on the server",
      "Using the xp_cmdshell command",
      "Invoking a PowerShell script from SQL Agent"
    ],
    "a": [
      0
    ],
    "e": "`sp_invoke_external_rest_endpoint` enables secure outbound HTTPS calls to Azure OpenAI from inside T-SQL."
  },
  {
    "d": "S",
    "q": "Scenario 7 (S): Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "Scenario 5 (P): You need to store and query high-dimensional embeddings generated from Azure OpenAI inside an Azure SQL database. What data structure and functions are supported?",
    "o": [
      "Vector storage using `VARBINARY` or JSON arrays with `VECTOR_DISTANCE()` / cosine distance functions",
      "Standard VARCHAR(50) columns with LIKE filters",
      "XML columns with XQuery",
      "Image binary blobs without vector math"
    ],
    "a": [
      0
    ],
    "e": "Azure SQL and SQL Server support vector embeddings with native vector similarity distance functions."
  },
  {
    "d": "M",
    "q": "Scenario 5 (M): What is the role of the Query Store in Azure SQL Database?",
    "o": [
      "Captures query execution history, compile plans, and runtime performance telemetry to diagnose plan regressions",
      "Stores user passwords",
      "Manages automated backups",
      "Compresses index files"
    ],
    "a": [
      0
    ],
    "e": "Query Store records query performance metrics and enables forcing stable execution plans."
  },
  {
    "d": "V",
    "q": "Scenario 5 (V): Which mathematical distance metric is most commonly used to measure the similarity between two normalized text embeddings?",
    "o": [
      "Cosine Distance",
      "Manhattan Distance",
      "Hamming Distance",
      "Jaccard Index"
    ],
    "a": [
      0
    ],
    "e": "Cosine similarity (and cosine distance) evaluates the angle between high-dimensional vector representations."
  },
  {
    "d": "S",
    "q": "Scenario 7 (S): What metric in Azure OpenAI and Azure SQL integrations must be carefully monitored to avoid HTTP 429 Too Many Requests errors?",
    "o": [
      "Tokens Per Minute (TPM) and Requests Per Minute (RPM) rate limits",
      "Monitor screen resolution",
      "Hard drive spindle speed",
      "Fan rotation RPM"
    ],
    "a": [
      0
    ],
    "e": "Azure OpenAI enforces TPM and RPM rate limits; exceeding quotas results in HTTP 429 throttles."
  },
  {
    "d": "P",
    "q": "Scenario 5 (P): What is the key advantage of using SQL Server Ledger tables in enterprise audit scenarios?",
    "o": [
      "Cryptographic verification and immutable data records backed by blockchain hashing",
      "Automatic CSV export",
      "Faster compression than VertiPaq",
      "Direct integration with Power Pages"
    ],
    "a": [
      0
    ],
    "e": "Ledger provides tamper-evident cryptographic verification of all database transactions."
  },
  {
    "d": "M",
    "q": "Scenario 5 (M): You observe high CPU usage due to parameter sniffing on a critical stored procedure. What query hint helps stabilize plan generation?",
    "o": [
      "OPTION (OPTIMIZE FOR UNKNOWN) or OPTION (RECOMPILE)",
      "OPTION (MAXDOP 1)",
      "OPTION (HASH JOIN)",
      "OPTION (IGNORE_INDEX)"
    ],
    "a": [
      0
    ],
    "e": "OPTIMIZE FOR UNKNOWN prevents caching plans biased towards extreme parameter values."
  },
  {
    "d": "V",
    "q": "Scenario 5 (V): In a RAG (Retrieval-Augmented Generation) pipeline, what is the role of the database vector search step?",
    "o": [
      "Retrieve the top-k most semantically relevant document chunks to inject into the LLM prompt context",
      "Train the foundation model weights from scratch",
      "Encrypt user passwords",
      "Generate SVG icons"
    ],
    "a": [
      0
    ],
    "e": "Vector search performs semantic nearest-neighbor retrieval to augment LLM prompts with grounded domain facts."
  },
  {
    "d": "S",
    "q": "Scenario 8 (S): Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "Scenario 6 (P): In Azure SQL Database, which feature automatically tracks changes to data over time and allows point-in-time historical querying using `FOR SYSTEM_TIME AS OF`?",
    "o": [
      "Temporal Tables (System-Versioned Tables)",
      "Change Data Capture (CDC)",
      "Dynamic Data Masking",
      "SQL Ledger"
    ],
    "a": [
      0
    ],
    "e": "System-versioned temporal tables automatically record period start/end timestamps and history tables."
  },
  {
    "d": "M",
    "q": "Scenario 6 (M): Which Azure SQL security feature protects sensitive column data in use, during transit, and at rest by encrypting data on the client side before sending it to the database?",
    "o": [
      "Always Encrypted (with secure enclaves)",
      "Transparent Data Encryption (TDE)",
      "Firewall rules",
      "Dynamic Data Masking"
    ],
    "a": [
      0
    ],
    "e": "Always Encrypted ensures that database administrators and cloud operators cannot view plaintext values."
  },
  {
    "d": "V",
    "q": "Scenario 6 (V): How can you invoke a deployed Azure OpenAI embedding model directly from T-SQL in Azure SQL Database?",
    "o": [
      "Using `sp_invoke_external_rest_endpoint` with an HTTPS endpoint and database scoped credential",
      "Running an external C++ executable on the server",
      "Using the xp_cmdshell command",
      "Invoking a PowerShell script from SQL Agent"
    ],
    "a": [
      0
    ],
    "e": "`sp_invoke_external_rest_endpoint` enables secure outbound HTTPS calls to Azure OpenAI from inside T-SQL."
  },
  {
    "d": "S",
    "q": "Scenario 8 (S): What metric in Azure OpenAI and Azure SQL integrations must be carefully monitored to avoid HTTP 429 Too Many Requests errors?",
    "o": [
      "Tokens Per Minute (TPM) and Requests Per Minute (RPM) rate limits",
      "Monitor screen resolution",
      "Hard drive spindle speed",
      "Fan rotation RPM"
    ],
    "a": [
      0
    ],
    "e": "Azure OpenAI enforces TPM and RPM rate limits; exceeding quotas results in HTTP 429 throttles."
  },
  {
    "d": "P",
    "q": "Scenario 6 (P): You need to store and query high-dimensional embeddings generated from Azure OpenAI inside an Azure SQL database. What data structure and functions are supported?",
    "o": [
      "Vector storage using `VARBINARY` or JSON arrays with `VECTOR_DISTANCE()` / cosine distance functions",
      "Standard VARCHAR(50) columns with LIKE filters",
      "XML columns with XQuery",
      "Image binary blobs without vector math"
    ],
    "a": [
      0
    ],
    "e": "Azure SQL and SQL Server support vector embeddings with native vector similarity distance functions."
  },
  {
    "d": "M",
    "q": "Scenario 6 (M): What is the role of the Query Store in Azure SQL Database?",
    "o": [
      "Captures query execution history, compile plans, and runtime performance telemetry to diagnose plan regressions",
      "Stores user passwords",
      "Manages automated backups",
      "Compresses index files"
    ],
    "a": [
      0
    ],
    "e": "Query Store records query performance metrics and enables forcing stable execution plans."
  },
  {
    "d": "V",
    "q": "Scenario 6 (V): Which mathematical distance metric is most commonly used to measure the similarity between two normalized text embeddings?",
    "o": [
      "Cosine Distance",
      "Manhattan Distance",
      "Hamming Distance",
      "Jaccard Index"
    ],
    "a": [
      0
    ],
    "e": "Cosine similarity (and cosine distance) evaluates the angle between high-dimensional vector representations."
  },
  {
    "d": "S",
    "q": "Scenario 9 (S): Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "Scenario 6 (P): What is the key advantage of using SQL Server Ledger tables in enterprise audit scenarios?",
    "o": [
      "Cryptographic verification and immutable data records backed by blockchain hashing",
      "Automatic CSV export",
      "Faster compression than VertiPaq",
      "Direct integration with Power Pages"
    ],
    "a": [
      0
    ],
    "e": "Ledger provides tamper-evident cryptographic verification of all database transactions."
  },
  {
    "d": "M",
    "q": "Scenario 6 (M): You observe high CPU usage due to parameter sniffing on a critical stored procedure. What query hint helps stabilize plan generation?",
    "o": [
      "OPTION (OPTIMIZE FOR UNKNOWN) or OPTION (RECOMPILE)",
      "OPTION (MAXDOP 1)",
      "OPTION (HASH JOIN)",
      "OPTION (IGNORE_INDEX)"
    ],
    "a": [
      0
    ],
    "e": "OPTIMIZE FOR UNKNOWN prevents caching plans biased towards extreme parameter values."
  },
  {
    "d": "V",
    "q": "Scenario 6 (V): In a RAG (Retrieval-Augmented Generation) pipeline, what is the role of the database vector search step?",
    "o": [
      "Retrieve the top-k most semantically relevant document chunks to inject into the LLM prompt context",
      "Train the foundation model weights from scratch",
      "Encrypt user passwords",
      "Generate SVG icons"
    ],
    "a": [
      0
    ],
    "e": "Vector search performs semantic nearest-neighbor retrieval to augment LLM prompts with grounded domain facts."
  },
  {
    "d": "S",
    "q": "Scenario 9 (S): What metric in Azure OpenAI and Azure SQL integrations must be carefully monitored to avoid HTTP 429 Too Many Requests errors?",
    "o": [
      "Tokens Per Minute (TPM) and Requests Per Minute (RPM) rate limits",
      "Monitor screen resolution",
      "Hard drive spindle speed",
      "Fan rotation RPM"
    ],
    "a": [
      0
    ],
    "e": "Azure OpenAI enforces TPM and RPM rate limits; exceeding quotas results in HTTP 429 throttles."
  },
  {
    "d": "P",
    "q": "Scenario 7 (P): In Azure SQL Database, which feature automatically tracks changes to data over time and allows point-in-time historical querying using `FOR SYSTEM_TIME AS OF`?",
    "o": [
      "Temporal Tables (System-Versioned Tables)",
      "Change Data Capture (CDC)",
      "Dynamic Data Masking",
      "SQL Ledger"
    ],
    "a": [
      0
    ],
    "e": "System-versioned temporal tables automatically record period start/end timestamps and history tables."
  },
  {
    "d": "M",
    "q": "Scenario 7 (M): Which Azure SQL security feature protects sensitive column data in use, during transit, and at rest by encrypting data on the client side before sending it to the database?",
    "o": [
      "Always Encrypted (with secure enclaves)",
      "Transparent Data Encryption (TDE)",
      "Firewall rules",
      "Dynamic Data Masking"
    ],
    "a": [
      0
    ],
    "e": "Always Encrypted ensures that database administrators and cloud operators cannot view plaintext values."
  },
  {
    "d": "V",
    "q": "Scenario 7 (V): How can you invoke a deployed Azure OpenAI embedding model directly from T-SQL in Azure SQL Database?",
    "o": [
      "Using `sp_invoke_external_rest_endpoint` with an HTTPS endpoint and database scoped credential",
      "Running an external C++ executable on the server",
      "Using the xp_cmdshell command",
      "Invoking a PowerShell script from SQL Agent"
    ],
    "a": [
      0
    ],
    "e": "`sp_invoke_external_rest_endpoint` enables secure outbound HTTPS calls to Azure OpenAI from inside T-SQL."
  },
  {
    "d": "S",
    "q": "Scenario 10 (S): Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "Scenario 7 (P): You need to store and query high-dimensional embeddings generated from Azure OpenAI inside an Azure SQL database. What data structure and functions are supported?",
    "o": [
      "Vector storage using `VARBINARY` or JSON arrays with `VECTOR_DISTANCE()` / cosine distance functions",
      "Standard VARCHAR(50) columns with LIKE filters",
      "XML columns with XQuery",
      "Image binary blobs without vector math"
    ],
    "a": [
      0
    ],
    "e": "Azure SQL and SQL Server support vector embeddings with native vector similarity distance functions."
  },
  {
    "d": "M",
    "q": "Scenario 7 (M): What is the role of the Query Store in Azure SQL Database?",
    "o": [
      "Captures query execution history, compile plans, and runtime performance telemetry to diagnose plan regressions",
      "Stores user passwords",
      "Manages automated backups",
      "Compresses index files"
    ],
    "a": [
      0
    ],
    "e": "Query Store records query performance metrics and enables forcing stable execution plans."
  },
  {
    "d": "V",
    "q": "Scenario 7 (V): Which mathematical distance metric is most commonly used to measure the similarity between two normalized text embeddings?",
    "o": [
      "Cosine Distance",
      "Manhattan Distance",
      "Hamming Distance",
      "Jaccard Index"
    ],
    "a": [
      0
    ],
    "e": "Cosine similarity (and cosine distance) evaluates the angle between high-dimensional vector representations."
  },
  {
    "d": "S",
    "q": "Scenario 10 (S): What metric in Azure OpenAI and Azure SQL integrations must be carefully monitored to avoid HTTP 429 Too Many Requests errors?",
    "o": [
      "Tokens Per Minute (TPM) and Requests Per Minute (RPM) rate limits",
      "Monitor screen resolution",
      "Hard drive spindle speed",
      "Fan rotation RPM"
    ],
    "a": [
      0
    ],
    "e": "Azure OpenAI enforces TPM and RPM rate limits; exceeding quotas results in HTTP 429 throttles."
  },
  {
    "d": "P",
    "q": "Scenario 7 (P): What is the key advantage of using SQL Server Ledger tables in enterprise audit scenarios?",
    "o": [
      "Cryptographic verification and immutable data records backed by blockchain hashing",
      "Automatic CSV export",
      "Faster compression than VertiPaq",
      "Direct integration with Power Pages"
    ],
    "a": [
      0
    ],
    "e": "Ledger provides tamper-evident cryptographic verification of all database transactions."
  },
  {
    "d": "M",
    "q": "Scenario 7 (M): You observe high CPU usage due to parameter sniffing on a critical stored procedure. What query hint helps stabilize plan generation?",
    "o": [
      "OPTION (OPTIMIZE FOR UNKNOWN) or OPTION (RECOMPILE)",
      "OPTION (MAXDOP 1)",
      "OPTION (HASH JOIN)",
      "OPTION (IGNORE_INDEX)"
    ],
    "a": [
      0
    ],
    "e": "OPTIMIZE FOR UNKNOWN prevents caching plans biased towards extreme parameter values."
  },
  {
    "d": "V",
    "q": "Scenario 7 (V): In a RAG (Retrieval-Augmented Generation) pipeline, what is the role of the database vector search step?",
    "o": [
      "Retrieve the top-k most semantically relevant document chunks to inject into the LLM prompt context",
      "Train the foundation model weights from scratch",
      "Encrypt user passwords",
      "Generate SVG icons"
    ],
    "a": [
      0
    ],
    "e": "Vector search performs semantic nearest-neighbor retrieval to augment LLM prompts with grounded domain facts."
  },
  {
    "d": "S",
    "q": "Scenario 11 (S): Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "Scenario 8 (P): In Azure SQL Database, which feature automatically tracks changes to data over time and allows point-in-time historical querying using `FOR SYSTEM_TIME AS OF`?",
    "o": [
      "Temporal Tables (System-Versioned Tables)",
      "Change Data Capture (CDC)",
      "Dynamic Data Masking",
      "SQL Ledger"
    ],
    "a": [
      0
    ],
    "e": "System-versioned temporal tables automatically record period start/end timestamps and history tables."
  },
  {
    "d": "M",
    "q": "Scenario 8 (M): Which Azure SQL security feature protects sensitive column data in use, during transit, and at rest by encrypting data on the client side before sending it to the database?",
    "o": [
      "Always Encrypted (with secure enclaves)",
      "Transparent Data Encryption (TDE)",
      "Firewall rules",
      "Dynamic Data Masking"
    ],
    "a": [
      0
    ],
    "e": "Always Encrypted ensures that database administrators and cloud operators cannot view plaintext values."
  },
  {
    "d": "V",
    "q": "Scenario 8 (V): How can you invoke a deployed Azure OpenAI embedding model directly from T-SQL in Azure SQL Database?",
    "o": [
      "Using `sp_invoke_external_rest_endpoint` with an HTTPS endpoint and database scoped credential",
      "Running an external C++ executable on the server",
      "Using the xp_cmdshell command",
      "Invoking a PowerShell script from SQL Agent"
    ],
    "a": [
      0
    ],
    "e": "`sp_invoke_external_rest_endpoint` enables secure outbound HTTPS calls to Azure OpenAI from inside T-SQL."
  },
  {
    "d": "S",
    "q": "Scenario 11 (S): What metric in Azure OpenAI and Azure SQL integrations must be carefully monitored to avoid HTTP 429 Too Many Requests errors?",
    "o": [
      "Tokens Per Minute (TPM) and Requests Per Minute (RPM) rate limits",
      "Monitor screen resolution",
      "Hard drive spindle speed",
      "Fan rotation RPM"
    ],
    "a": [
      0
    ],
    "e": "Azure OpenAI enforces TPM and RPM rate limits; exceeding quotas results in HTTP 429 throttles."
  },
  {
    "d": "P",
    "q": "Scenario 8 (P): You need to store and query high-dimensional embeddings generated from Azure OpenAI inside an Azure SQL database. What data structure and functions are supported?",
    "o": [
      "Vector storage using `VARBINARY` or JSON arrays with `VECTOR_DISTANCE()` / cosine distance functions",
      "Standard VARCHAR(50) columns with LIKE filters",
      "XML columns with XQuery",
      "Image binary blobs without vector math"
    ],
    "a": [
      0
    ],
    "e": "Azure SQL and SQL Server support vector embeddings with native vector similarity distance functions."
  },
  {
    "d": "M",
    "q": "Scenario 8 (M): What is the role of the Query Store in Azure SQL Database?",
    "o": [
      "Captures query execution history, compile plans, and runtime performance telemetry to diagnose plan regressions",
      "Stores user passwords",
      "Manages automated backups",
      "Compresses index files"
    ],
    "a": [
      0
    ],
    "e": "Query Store records query performance metrics and enables forcing stable execution plans."
  },
  {
    "d": "V",
    "q": "Scenario 8 (V): Which mathematical distance metric is most commonly used to measure the similarity between two normalized text embeddings?",
    "o": [
      "Cosine Distance",
      "Manhattan Distance",
      "Hamming Distance",
      "Jaccard Index"
    ],
    "a": [
      0
    ],
    "e": "Cosine similarity (and cosine distance) evaluates the angle between high-dimensional vector representations."
  },
  {
    "d": "S",
    "q": "Scenario 12 (S): Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "Scenario 8 (P): What is the key advantage of using SQL Server Ledger tables in enterprise audit scenarios?",
    "o": [
      "Cryptographic verification and immutable data records backed by blockchain hashing",
      "Automatic CSV export",
      "Faster compression than VertiPaq",
      "Direct integration with Power Pages"
    ],
    "a": [
      0
    ],
    "e": "Ledger provides tamper-evident cryptographic verification of all database transactions."
  },
  {
    "d": "M",
    "q": "Scenario 8 (M): You observe high CPU usage due to parameter sniffing on a critical stored procedure. What query hint helps stabilize plan generation?",
    "o": [
      "OPTION (OPTIMIZE FOR UNKNOWN) or OPTION (RECOMPILE)",
      "OPTION (MAXDOP 1)",
      "OPTION (HASH JOIN)",
      "OPTION (IGNORE_INDEX)"
    ],
    "a": [
      0
    ],
    "e": "OPTIMIZE FOR UNKNOWN prevents caching plans biased towards extreme parameter values."
  },
  {
    "d": "V",
    "q": "Scenario 8 (V): In a RAG (Retrieval-Augmented Generation) pipeline, what is the role of the database vector search step?",
    "o": [
      "Retrieve the top-k most semantically relevant document chunks to inject into the LLM prompt context",
      "Train the foundation model weights from scratch",
      "Encrypt user passwords",
      "Generate SVG icons"
    ],
    "a": [
      0
    ],
    "e": "Vector search performs semantic nearest-neighbor retrieval to augment LLM prompts with grounded domain facts."
  },
  {
    "d": "S",
    "q": "Scenario 12 (S): What metric in Azure OpenAI and Azure SQL integrations must be carefully monitored to avoid HTTP 429 Too Many Requests errors?",
    "o": [
      "Tokens Per Minute (TPM) and Requests Per Minute (RPM) rate limits",
      "Monitor screen resolution",
      "Hard drive spindle speed",
      "Fan rotation RPM"
    ],
    "a": [
      0
    ],
    "e": "Azure OpenAI enforces TPM and RPM rate limits; exceeding quotas results in HTTP 429 throttles."
  },
  {
    "d": "P",
    "q": "Scenario 9 (P): In Azure SQL Database, which feature automatically tracks changes to data over time and allows point-in-time historical querying using `FOR SYSTEM_TIME AS OF`?",
    "o": [
      "Temporal Tables (System-Versioned Tables)",
      "Change Data Capture (CDC)",
      "Dynamic Data Masking",
      "SQL Ledger"
    ],
    "a": [
      0
    ],
    "e": "System-versioned temporal tables automatically record period start/end timestamps and history tables."
  },
  {
    "d": "M",
    "q": "Scenario 9 (M): Which Azure SQL security feature protects sensitive column data in use, during transit, and at rest by encrypting data on the client side before sending it to the database?",
    "o": [
      "Always Encrypted (with secure enclaves)",
      "Transparent Data Encryption (TDE)",
      "Firewall rules",
      "Dynamic Data Masking"
    ],
    "a": [
      0
    ],
    "e": "Always Encrypted ensures that database administrators and cloud operators cannot view plaintext values."
  },
  {
    "d": "V",
    "q": "Scenario 9 (V): How can you invoke a deployed Azure OpenAI embedding model directly from T-SQL in Azure SQL Database?",
    "o": [
      "Using `sp_invoke_external_rest_endpoint` with an HTTPS endpoint and database scoped credential",
      "Running an external C++ executable on the server",
      "Using the xp_cmdshell command",
      "Invoking a PowerShell script from SQL Agent"
    ],
    "a": [
      0
    ],
    "e": "`sp_invoke_external_rest_endpoint` enables secure outbound HTTPS calls to Azure OpenAI from inside T-SQL."
  },
  {
    "d": "S",
    "q": "Scenario 13 (S): Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "Scenario 9 (P): You need to store and query high-dimensional embeddings generated from Azure OpenAI inside an Azure SQL database. What data structure and functions are supported?",
    "o": [
      "Vector storage using `VARBINARY` or JSON arrays with `VECTOR_DISTANCE()` / cosine distance functions",
      "Standard VARCHAR(50) columns with LIKE filters",
      "XML columns with XQuery",
      "Image binary blobs without vector math"
    ],
    "a": [
      0
    ],
    "e": "Azure SQL and SQL Server support vector embeddings with native vector similarity distance functions."
  },
  {
    "d": "M",
    "q": "Scenario 9 (M): What is the role of the Query Store in Azure SQL Database?",
    "o": [
      "Captures query execution history, compile plans, and runtime performance telemetry to diagnose plan regressions",
      "Stores user passwords",
      "Manages automated backups",
      "Compresses index files"
    ],
    "a": [
      0
    ],
    "e": "Query Store records query performance metrics and enables forcing stable execution plans."
  },
  {
    "d": "V",
    "q": "Scenario 9 (V): Which mathematical distance metric is most commonly used to measure the similarity between two normalized text embeddings?",
    "o": [
      "Cosine Distance",
      "Manhattan Distance",
      "Hamming Distance",
      "Jaccard Index"
    ],
    "a": [
      0
    ],
    "e": "Cosine similarity (and cosine distance) evaluates the angle between high-dimensional vector representations."
  },
  {
    "d": "S",
    "q": "Scenario 13 (S): What metric in Azure OpenAI and Azure SQL integrations must be carefully monitored to avoid HTTP 429 Too Many Requests errors?",
    "o": [
      "Tokens Per Minute (TPM) and Requests Per Minute (RPM) rate limits",
      "Monitor screen resolution",
      "Hard drive spindle speed",
      "Fan rotation RPM"
    ],
    "a": [
      0
    ],
    "e": "Azure OpenAI enforces TPM and RPM rate limits; exceeding quotas results in HTTP 429 throttles."
  },
  {
    "d": "P",
    "q": "Scenario 9 (P): What is the key advantage of using SQL Server Ledger tables in enterprise audit scenarios?",
    "o": [
      "Cryptographic verification and immutable data records backed by blockchain hashing",
      "Automatic CSV export",
      "Faster compression than VertiPaq",
      "Direct integration with Power Pages"
    ],
    "a": [
      0
    ],
    "e": "Ledger provides tamper-evident cryptographic verification of all database transactions."
  },
  {
    "d": "M",
    "q": "Scenario 9 (M): You observe high CPU usage due to parameter sniffing on a critical stored procedure. What query hint helps stabilize plan generation?",
    "o": [
      "OPTION (OPTIMIZE FOR UNKNOWN) or OPTION (RECOMPILE)",
      "OPTION (MAXDOP 1)",
      "OPTION (HASH JOIN)",
      "OPTION (IGNORE_INDEX)"
    ],
    "a": [
      0
    ],
    "e": "OPTIMIZE FOR UNKNOWN prevents caching plans biased towards extreme parameter values."
  },
  {
    "d": "V",
    "q": "Scenario 9 (V): In a RAG (Retrieval-Augmented Generation) pipeline, what is the role of the database vector search step?",
    "o": [
      "Retrieve the top-k most semantically relevant document chunks to inject into the LLM prompt context",
      "Train the foundation model weights from scratch",
      "Encrypt user passwords",
      "Generate SVG icons"
    ],
    "a": [
      0
    ],
    "e": "Vector search performs semantic nearest-neighbor retrieval to augment LLM prompts with grounded domain facts."
  },
  {
    "d": "S",
    "q": "Scenario 14 (S): Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "Scenario 10 (P): In Azure SQL Database, which feature automatically tracks changes to data over time and allows point-in-time historical querying using `FOR SYSTEM_TIME AS OF`?",
    "o": [
      "Temporal Tables (System-Versioned Tables)",
      "Change Data Capture (CDC)",
      "Dynamic Data Masking",
      "SQL Ledger"
    ],
    "a": [
      0
    ],
    "e": "System-versioned temporal tables automatically record period start/end timestamps and history tables."
  },
  {
    "d": "M",
    "q": "Scenario 10 (M): Which Azure SQL security feature protects sensitive column data in use, during transit, and at rest by encrypting data on the client side before sending it to the database?",
    "o": [
      "Always Encrypted (with secure enclaves)",
      "Transparent Data Encryption (TDE)",
      "Firewall rules",
      "Dynamic Data Masking"
    ],
    "a": [
      0
    ],
    "e": "Always Encrypted ensures that database administrators and cloud operators cannot view plaintext values."
  },
  {
    "d": "V",
    "q": "Scenario 10 (V): How can you invoke a deployed Azure OpenAI embedding model directly from T-SQL in Azure SQL Database?",
    "o": [
      "Using `sp_invoke_external_rest_endpoint` with an HTTPS endpoint and database scoped credential",
      "Running an external C++ executable on the server",
      "Using the xp_cmdshell command",
      "Invoking a PowerShell script from SQL Agent"
    ],
    "a": [
      0
    ],
    "e": "`sp_invoke_external_rest_endpoint` enables secure outbound HTTPS calls to Azure OpenAI from inside T-SQL."
  },
  {
    "d": "S",
    "q": "Scenario 14 (S): What metric in Azure OpenAI and Azure SQL integrations must be carefully monitored to avoid HTTP 429 Too Many Requests errors?",
    "o": [
      "Tokens Per Minute (TPM) and Requests Per Minute (RPM) rate limits",
      "Monitor screen resolution",
      "Hard drive spindle speed",
      "Fan rotation RPM"
    ],
    "a": [
      0
    ],
    "e": "Azure OpenAI enforces TPM and RPM rate limits; exceeding quotas results in HTTP 429 throttles."
  },
  {
    "d": "P",
    "q": "Scenario 10 (P): You need to store and query high-dimensional embeddings generated from Azure OpenAI inside an Azure SQL database. What data structure and functions are supported?",
    "o": [
      "Vector storage using `VARBINARY` or JSON arrays with `VECTOR_DISTANCE()` / cosine distance functions",
      "Standard VARCHAR(50) columns with LIKE filters",
      "XML columns with XQuery",
      "Image binary blobs without vector math"
    ],
    "a": [
      0
    ],
    "e": "Azure SQL and SQL Server support vector embeddings with native vector similarity distance functions."
  },
  {
    "d": "M",
    "q": "Scenario 10 (M): What is the role of the Query Store in Azure SQL Database?",
    "o": [
      "Captures query execution history, compile plans, and runtime performance telemetry to diagnose plan regressions",
      "Stores user passwords",
      "Manages automated backups",
      "Compresses index files"
    ],
    "a": [
      0
    ],
    "e": "Query Store records query performance metrics and enables forcing stable execution plans."
  },
  {
    "d": "V",
    "q": "Scenario 10 (V): Which mathematical distance metric is most commonly used to measure the similarity between two normalized text embeddings?",
    "o": [
      "Cosine Distance",
      "Manhattan Distance",
      "Hamming Distance",
      "Jaccard Index"
    ],
    "a": [
      0
    ],
    "e": "Cosine similarity (and cosine distance) evaluates the angle between high-dimensional vector representations."
  },
  {
    "d": "S",
    "q": "Scenario 15 (S): Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "Scenario 10 (P): What is the key advantage of using SQL Server Ledger tables in enterprise audit scenarios?",
    "o": [
      "Cryptographic verification and immutable data records backed by blockchain hashing",
      "Automatic CSV export",
      "Faster compression than VertiPaq",
      "Direct integration with Power Pages"
    ],
    "a": [
      0
    ],
    "e": "Ledger provides tamper-evident cryptographic verification of all database transactions."
  },
  {
    "d": "M",
    "q": "Scenario 10 (M): You observe high CPU usage due to parameter sniffing on a critical stored procedure. What query hint helps stabilize plan generation?",
    "o": [
      "OPTION (OPTIMIZE FOR UNKNOWN) or OPTION (RECOMPILE)",
      "OPTION (MAXDOP 1)",
      "OPTION (HASH JOIN)",
      "OPTION (IGNORE_INDEX)"
    ],
    "a": [
      0
    ],
    "e": "OPTIMIZE FOR UNKNOWN prevents caching plans biased towards extreme parameter values."
  },
  {
    "d": "V",
    "q": "Scenario 10 (V): In a RAG (Retrieval-Augmented Generation) pipeline, what is the role of the database vector search step?",
    "o": [
      "Retrieve the top-k most semantically relevant document chunks to inject into the LLM prompt context",
      "Train the foundation model weights from scratch",
      "Encrypt user passwords",
      "Generate SVG icons"
    ],
    "a": [
      0
    ],
    "e": "Vector search performs semantic nearest-neighbor retrieval to augment LLM prompts with grounded domain facts."
  },
  {
    "d": "S",
    "q": "Scenario 15 (S): What metric in Azure OpenAI and Azure SQL integrations must be carefully monitored to avoid HTTP 429 Too Many Requests errors?",
    "o": [
      "Tokens Per Minute (TPM) and Requests Per Minute (RPM) rate limits",
      "Monitor screen resolution",
      "Hard drive spindle speed",
      "Fan rotation RPM"
    ],
    "a": [
      0
    ],
    "e": "Azure OpenAI enforces TPM and RPM rate limits; exceeding quotas results in HTTP 429 throttles."
  },
  {
    "d": "P",
    "q": "Scenario 11 (P): In Azure SQL Database, which feature automatically tracks changes to data over time and allows point-in-time historical querying using `FOR SYSTEM_TIME AS OF`?",
    "o": [
      "Temporal Tables (System-Versioned Tables)",
      "Change Data Capture (CDC)",
      "Dynamic Data Masking",
      "SQL Ledger"
    ],
    "a": [
      0
    ],
    "e": "System-versioned temporal tables automatically record period start/end timestamps and history tables."
  },
  {
    "d": "M",
    "q": "Scenario 11 (M): Which Azure SQL security feature protects sensitive column data in use, during transit, and at rest by encrypting data on the client side before sending it to the database?",
    "o": [
      "Always Encrypted (with secure enclaves)",
      "Transparent Data Encryption (TDE)",
      "Firewall rules",
      "Dynamic Data Masking"
    ],
    "a": [
      0
    ],
    "e": "Always Encrypted ensures that database administrators and cloud operators cannot view plaintext values."
  },
  {
    "d": "V",
    "q": "Scenario 11 (V): How can you invoke a deployed Azure OpenAI embedding model directly from T-SQL in Azure SQL Database?",
    "o": [
      "Using `sp_invoke_external_rest_endpoint` with an HTTPS endpoint and database scoped credential",
      "Running an external C++ executable on the server",
      "Using the xp_cmdshell command",
      "Invoking a PowerShell script from SQL Agent"
    ],
    "a": [
      0
    ],
    "e": "`sp_invoke_external_rest_endpoint` enables secure outbound HTTPS calls to Azure OpenAI from inside T-SQL."
  },
  {
    "d": "S",
    "q": "Scenario 16 (S): Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "Scenario 11 (P): You need to store and query high-dimensional embeddings generated from Azure OpenAI inside an Azure SQL database. What data structure and functions are supported?",
    "o": [
      "Vector storage using `VARBINARY` or JSON arrays with `VECTOR_DISTANCE()` / cosine distance functions",
      "Standard VARCHAR(50) columns with LIKE filters",
      "XML columns with XQuery",
      "Image binary blobs without vector math"
    ],
    "a": [
      0
    ],
    "e": "Azure SQL and SQL Server support vector embeddings with native vector similarity distance functions."
  },
  {
    "d": "M",
    "q": "Scenario 11 (M): What is the role of the Query Store in Azure SQL Database?",
    "o": [
      "Captures query execution history, compile plans, and runtime performance telemetry to diagnose plan regressions",
      "Stores user passwords",
      "Manages automated backups",
      "Compresses index files"
    ],
    "a": [
      0
    ],
    "e": "Query Store records query performance metrics and enables forcing stable execution plans."
  },
  {
    "d": "V",
    "q": "Scenario 11 (V): Which mathematical distance metric is most commonly used to measure the similarity between two normalized text embeddings?",
    "o": [
      "Cosine Distance",
      "Manhattan Distance",
      "Hamming Distance",
      "Jaccard Index"
    ],
    "a": [
      0
    ],
    "e": "Cosine similarity (and cosine distance) evaluates the angle between high-dimensional vector representations."
  },
  {
    "d": "S",
    "q": "Scenario 16 (S): What metric in Azure OpenAI and Azure SQL integrations must be carefully monitored to avoid HTTP 429 Too Many Requests errors?",
    "o": [
      "Tokens Per Minute (TPM) and Requests Per Minute (RPM) rate limits",
      "Monitor screen resolution",
      "Hard drive spindle speed",
      "Fan rotation RPM"
    ],
    "a": [
      0
    ],
    "e": "Azure OpenAI enforces TPM and RPM rate limits; exceeding quotas results in HTTP 429 throttles."
  },
  {
    "d": "P",
    "q": "Scenario 11 (P): What is the key advantage of using SQL Server Ledger tables in enterprise audit scenarios?",
    "o": [
      "Cryptographic verification and immutable data records backed by blockchain hashing",
      "Automatic CSV export",
      "Faster compression than VertiPaq",
      "Direct integration with Power Pages"
    ],
    "a": [
      0
    ],
    "e": "Ledger provides tamper-evident cryptographic verification of all database transactions."
  },
  {
    "d": "M",
    "q": "Scenario 11 (M): You observe high CPU usage due to parameter sniffing on a critical stored procedure. What query hint helps stabilize plan generation?",
    "o": [
      "OPTION (OPTIMIZE FOR UNKNOWN) or OPTION (RECOMPILE)",
      "OPTION (MAXDOP 1)",
      "OPTION (HASH JOIN)",
      "OPTION (IGNORE_INDEX)"
    ],
    "a": [
      0
    ],
    "e": "OPTIMIZE FOR UNKNOWN prevents caching plans biased towards extreme parameter values."
  },
  {
    "d": "V",
    "q": "Scenario 11 (V): In a RAG (Retrieval-Augmented Generation) pipeline, what is the role of the database vector search step?",
    "o": [
      "Retrieve the top-k most semantically relevant document chunks to inject into the LLM prompt context",
      "Train the foundation model weights from scratch",
      "Encrypt user passwords",
      "Generate SVG icons"
    ],
    "a": [
      0
    ],
    "e": "Vector search performs semantic nearest-neighbor retrieval to augment LLM prompts with grounded domain facts."
  },
  {
    "d": "S",
    "q": "Scenario 17 (S): Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "Scenario 12 (P): In Azure SQL Database, which feature automatically tracks changes to data over time and allows point-in-time historical querying using `FOR SYSTEM_TIME AS OF`?",
    "o": [
      "Temporal Tables (System-Versioned Tables)",
      "Change Data Capture (CDC)",
      "Dynamic Data Masking",
      "SQL Ledger"
    ],
    "a": [
      0
    ],
    "e": "System-versioned temporal tables automatically record period start/end timestamps and history tables."
  },
  {
    "d": "M",
    "q": "Scenario 12 (M): Which Azure SQL security feature protects sensitive column data in use, during transit, and at rest by encrypting data on the client side before sending it to the database?",
    "o": [
      "Always Encrypted (with secure enclaves)",
      "Transparent Data Encryption (TDE)",
      "Firewall rules",
      "Dynamic Data Masking"
    ],
    "a": [
      0
    ],
    "e": "Always Encrypted ensures that database administrators and cloud operators cannot view plaintext values."
  },
  {
    "d": "V",
    "q": "Scenario 12 (V): How can you invoke a deployed Azure OpenAI embedding model directly from T-SQL in Azure SQL Database?",
    "o": [
      "Using `sp_invoke_external_rest_endpoint` with an HTTPS endpoint and database scoped credential",
      "Running an external C++ executable on the server",
      "Using the xp_cmdshell command",
      "Invoking a PowerShell script from SQL Agent"
    ],
    "a": [
      0
    ],
    "e": "`sp_invoke_external_rest_endpoint` enables secure outbound HTTPS calls to Azure OpenAI from inside T-SQL."
  },
  {
    "d": "S",
    "q": "Scenario 17 (S): What metric in Azure OpenAI and Azure SQL integrations must be carefully monitored to avoid HTTP 429 Too Many Requests errors?",
    "o": [
      "Tokens Per Minute (TPM) and Requests Per Minute (RPM) rate limits",
      "Monitor screen resolution",
      "Hard drive spindle speed",
      "Fan rotation RPM"
    ],
    "a": [
      0
    ],
    "e": "Azure OpenAI enforces TPM and RPM rate limits; exceeding quotas results in HTTP 429 throttles."
  },
  {
    "d": "P",
    "q": "Scenario 12 (P): You need to store and query high-dimensional embeddings generated from Azure OpenAI inside an Azure SQL database. What data structure and functions are supported?",
    "o": [
      "Vector storage using `VARBINARY` or JSON arrays with `VECTOR_DISTANCE()` / cosine distance functions",
      "Standard VARCHAR(50) columns with LIKE filters",
      "XML columns with XQuery",
      "Image binary blobs without vector math"
    ],
    "a": [
      0
    ],
    "e": "Azure SQL and SQL Server support vector embeddings with native vector similarity distance functions."
  },
  {
    "d": "M",
    "q": "Scenario 12 (M): What is the role of the Query Store in Azure SQL Database?",
    "o": [
      "Captures query execution history, compile plans, and runtime performance telemetry to diagnose plan regressions",
      "Stores user passwords",
      "Manages automated backups",
      "Compresses index files"
    ],
    "a": [
      0
    ],
    "e": "Query Store records query performance metrics and enables forcing stable execution plans."
  },
  {
    "d": "V",
    "q": "Scenario 12 (V): Which mathematical distance metric is most commonly used to measure the similarity between two normalized text embeddings?",
    "o": [
      "Cosine Distance",
      "Manhattan Distance",
      "Hamming Distance",
      "Jaccard Index"
    ],
    "a": [
      0
    ],
    "e": "Cosine similarity (and cosine distance) evaluates the angle between high-dimensional vector representations."
  },
  {
    "d": "S",
    "q": "Scenario 18 (S): Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "Scenario 12 (P): What is the key advantage of using SQL Server Ledger tables in enterprise audit scenarios?",
    "o": [
      "Cryptographic verification and immutable data records backed by blockchain hashing",
      "Automatic CSV export",
      "Faster compression than VertiPaq",
      "Direct integration with Power Pages"
    ],
    "a": [
      0
    ],
    "e": "Ledger provides tamper-evident cryptographic verification of all database transactions."
  },
  {
    "d": "M",
    "q": "Scenario 12 (M): You observe high CPU usage due to parameter sniffing on a critical stored procedure. What query hint helps stabilize plan generation?",
    "o": [
      "OPTION (OPTIMIZE FOR UNKNOWN) or OPTION (RECOMPILE)",
      "OPTION (MAXDOP 1)",
      "OPTION (HASH JOIN)",
      "OPTION (IGNORE_INDEX)"
    ],
    "a": [
      0
    ],
    "e": "OPTIMIZE FOR UNKNOWN prevents caching plans biased towards extreme parameter values."
  },
  {
    "d": "V",
    "q": "Scenario 12 (V): In a RAG (Retrieval-Augmented Generation) pipeline, what is the role of the database vector search step?",
    "o": [
      "Retrieve the top-k most semantically relevant document chunks to inject into the LLM prompt context",
      "Train the foundation model weights from scratch",
      "Encrypt user passwords",
      "Generate SVG icons"
    ],
    "a": [
      0
    ],
    "e": "Vector search performs semantic nearest-neighbor retrieval to augment LLM prompts with grounded domain facts."
  },
  {
    "d": "S",
    "q": "Scenario 18 (S): What metric in Azure OpenAI and Azure SQL integrations must be carefully monitored to avoid HTTP 429 Too Many Requests errors?",
    "o": [
      "Tokens Per Minute (TPM) and Requests Per Minute (RPM) rate limits",
      "Monitor screen resolution",
      "Hard drive spindle speed",
      "Fan rotation RPM"
    ],
    "a": [
      0
    ],
    "e": "Azure OpenAI enforces TPM and RPM rate limits; exceeding quotas results in HTTP 429 throttles."
  },
  {
    "d": "P",
    "q": "Scenario 13 (P): In Azure SQL Database, which feature automatically tracks changes to data over time and allows point-in-time historical querying using `FOR SYSTEM_TIME AS OF`?",
    "o": [
      "Temporal Tables (System-Versioned Tables)",
      "Change Data Capture (CDC)",
      "Dynamic Data Masking",
      "SQL Ledger"
    ],
    "a": [
      0
    ],
    "e": "System-versioned temporal tables automatically record period start/end timestamps and history tables."
  },
  {
    "d": "M",
    "q": "Scenario 13 (M): Which Azure SQL security feature protects sensitive column data in use, during transit, and at rest by encrypting data on the client side before sending it to the database?",
    "o": [
      "Always Encrypted (with secure enclaves)",
      "Transparent Data Encryption (TDE)",
      "Firewall rules",
      "Dynamic Data Masking"
    ],
    "a": [
      0
    ],
    "e": "Always Encrypted ensures that database administrators and cloud operators cannot view plaintext values."
  },
  {
    "d": "V",
    "q": "Scenario 13 (V): How can you invoke a deployed Azure OpenAI embedding model directly from T-SQL in Azure SQL Database?",
    "o": [
      "Using `sp_invoke_external_rest_endpoint` with an HTTPS endpoint and database scoped credential",
      "Running an external C++ executable on the server",
      "Using the xp_cmdshell command",
      "Invoking a PowerShell script from SQL Agent"
    ],
    "a": [
      0
    ],
    "e": "`sp_invoke_external_rest_endpoint` enables secure outbound HTTPS calls to Azure OpenAI from inside T-SQL."
  },
  {
    "d": "S",
    "q": "Scenario 19 (S): Which feature in Azure SQL allows masking sensitive data like credit card numbers from unauthorized users on the fly without altering the stored underlying data?",
    "o": [
      "Dynamic Data Masking (DDM)",
      "Transparent Data Encryption (TDE)",
      "Always On Availability Groups",
      "Temporal Tables"
    ],
    "a": [
      0
    ],
    "e": "Dynamic Data Masking obfuscates data in query results (e.g., `XXXX-XXXX-XXXX-1234`) based on user permissions."
  },
  {
    "d": "P",
    "q": "Scenario 13 (P): You need to store and query high-dimensional embeddings generated from Azure OpenAI inside an Azure SQL database. What data structure and functions are supported?",
    "o": [
      "Vector storage using `VARBINARY` or JSON arrays with `VECTOR_DISTANCE()` / cosine distance functions",
      "Standard VARCHAR(50) columns with LIKE filters",
      "XML columns with XQuery",
      "Image binary blobs without vector math"
    ],
    "a": [
      0
    ],
    "e": "Azure SQL and SQL Server support vector embeddings with native vector similarity distance functions."
  },
  {
    "d": "M",
    "q": "Scenario 13 (M): What is the role of the Query Store in Azure SQL Database?",
    "o": [
      "Captures query execution history, compile plans, and runtime performance telemetry to diagnose plan regressions",
      "Stores user passwords",
      "Manages automated backups",
      "Compresses index files"
    ],
    "a": [
      0
    ],
    "e": "Query Store records query performance metrics and enables forcing stable execution plans."
  }
]
};
