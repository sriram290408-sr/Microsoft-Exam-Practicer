// DP-800: Developing AI-Enabled Database Solutions
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
  }
]
};

export default DP800;
