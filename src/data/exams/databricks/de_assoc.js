// Databricks Certified Data Engineer Associate (DE-ASSOC) — 100 Official Blueprint Questions
export const DB_DE_ASSOC = {
  id: 'DB_DE_ASSOC',
  code: 'DE-ASSOC',
  name: 'Databricks Certified Data Engineer Associate',
  platform: 'Databricks',
  min: 90,
  doms: {
  "DIP": {
    "name": "Databricks Intelligence Platform",
    "color": "var(--prep, #0B5CAD)"
  },
  "DIL": {
    "name": "Data Ingestion & Loading",
    "color": "var(--model, #E25A1C)"
  },
  "DTM": {
    "name": "Data Transformation & Modeling",
    "color": "var(--viz, #107C41)"
  },
  "LFJ": {
    "name": "Working with Lakeflow Jobs",
    "color": "var(--secure, #742774)"
  },
  "CICD": {
    "name": "Implementing CI/CD & Assets",
    "color": "var(--prep, #0E7C86)"
  },
  "TMO": {
    "name": "Troubleshooting & Optimization",
    "color": "var(--model, #F2C811)"
  },
  "GOV": {
    "name": "Governance & Security",
    "color": "var(--viz, #E81123)"
  }
},
  bank: [
  {
    "d": "DIP",
    "q": "What architecture pattern does Databricks Lakehouse implement to unify data warehousing and machine learning workloads?",
    "o": [
      "Single multi-tier storage engine combining ACID transactions on cloud object storage with compute clusters",
      "Decoupled proprietary relational database servers mounted on virtual disks",
      "Separate physical Hadoop clusters communicating strictly via REST endpoints",
      "In-memory caches persisted to block volumes with daily parquet dumps"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "The Lakehouse architecture combines the ACID transaction capabilities and governance of data warehouses with the low-cost scalable object storage of data lakes via Delta Lake.",
    "id": "de-assoc_1"
  },
  {
    "d": "DIP",
    "q": "Which component acts as the centralized metadata and governance layer across workspaces in the Databricks Data Intelligence Platform?",
    "o": [
      "Hive Metastore local to the compute cluster",
      "Unity Catalog",
      "Databricks Workspace File System",
      "Apache Ranger standalone daemon"
    ],
    "a": [
      1
    ],
    "multi": false,
    "e": "Unity Catalog provides a unified governance layer for all data and AI assets across multiple Databricks workspaces in an account.",
    "id": "de-assoc_2"
  },
  {
    "d": "DIP",
    "q": "In the Lakehouse medallion architecture, what is the primary role of the Bronze layer?",
    "o": [
      "Aggregated business-level metrics optimized for direct executive dashboard queries",
      "Raw, append-only ingested data preserving the fidelity of the source system with minimal transformation",
      "Cleaned, deduplicated, and conformed dimensional models with foreign keys",
      "Feature store tables containing normalized vectors for model inference"
    ],
    "a": [
      1
    ],
    "multi": false,
    "e": "The Bronze layer maintains raw data in its native form as an append-only archive for auditability and reprocessing.",
    "id": "de-assoc_3"
  },
  {
    "d": "DIP",
    "q": "In the medallion architecture, what transformation typically occurs between the Bronze and Silver layers?",
    "o": [
      "Converting structured reporting tables into unstructured binary dumps",
      "Data cleansing, schema enforcement, deduplication, enrichment, and conformance",
      "Final star-schema aggregation with calculated KPIs",
      "Exporting data out of the cloud object storage into on-premises flat files"
    ],
    "a": [
      1
    ],
    "multi": false,
    "e": "Silver tables represent an enterprise-wide cleaned, enriched, and standardized view of data.",
    "id": "de-assoc_4"
  },
  {
    "d": "DIP",
    "q": "What is the primary characteristic of Serverless compute in Databricks compared to classic compute?",
    "o": [
      "Virtual machines run in the customer's cloud subscription and take 5-10 minutes to spin up",
      "Compute resources run in the Databricks cloud account and start in seconds with automatic instant scaling and maintenance",
      "Compute is permanently running 24/7 without idle shutdown capabilities",
      "It only supports single-node driver execution without distributed Spark workers"
    ],
    "a": [
      1
    ],
    "multi": false,
    "e": "Serverless compute runs within the Databricks control plane/compute plane architecture, provisioning near-instantly and reducing cloud management overhead.",
    "id": "de-assoc_5"
  },
  {
    "d": "DIP",
    "q": "Which storage format is the default underlying table format in the Databricks Data Intelligence Platform?",
    "o": [
      "Apache ORC",
      "Delta Lake (Parquet with JSON transaction log)",
      "Apache Avro with Snappy compression",
      "Compressed CSV with header indices"
    ],
    "a": [
      1
    ],
    "multi": false,
    "e": "Delta Lake is an open-source storage framework that brings ACID transactions and reliability to Apache Spark and cloud object storage.",
    "id": "de-assoc_6"
  },
  {
    "d": "DIP",
    "q": "What is the primary benefit of the Photon engine in Databricks?",
    "o": [
      "It is a native C++ vectorized execution engine designed to accelerate SQL queries and DataFrame operations",
      "It is a Python compiler that converts notebooks into standalone executable binaries",
      "It is a hardware accelerator that replaces NVIDIA GPUs with TPUs",
      "It provides zero-cost storage tiering between Amazon S3 and Azure Blob Storage"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Photon is Databricks' vectorized query engine written in C++ from scratch to provide high performance for SQL and DataFrame workloads.",
    "id": "de-assoc_7"
  },
  {
    "d": "DIP",
    "q": "How does Delta Lake ensure atomic transactions during concurrent writes?",
    "o": [
      "By locking the entire cloud storage bucket for the duration of the write",
      "Through an ACID transaction log (_delta_log) utilizing optimistic concurrency control",
      "By delegating write operations to an external PostgreSQL lock manager",
      "By allowing writes only during scheduled single-thread maintenance windows"
    ],
    "a": [
      1
    ],
    "multi": false,
    "e": "Delta Lake uses an ordered transaction log and optimistic concurrency control to guarantee serializable ACID transactions.",
    "id": "de-assoc_8"
  },
  {
    "d": "DIL",
    "q": "A data engineer needs to ingest millions of incoming JSON files continuously from an Amazon S3 bucket with auto-detection of new files and automatic schema evolution. Which Databricks feature is recommended?",
    "o": [
      "Apache Sqoop daemon",
      "Auto Loader (cloudFiles format)",
      "Standard spark.read.json() batch command",
      "Databricks Web Terminal curl loop"
    ],
    "a": [
      1
    ],
    "multi": false,
    "e": "Auto Loader incrementally and efficiently processes new data files as they arrive in cloud storage using the cloudFiles source format, featuring schema inference and evolution.",
    "id": "de-assoc_9"
  },
  {
    "d": "DIL",
    "q": "Which option in Auto Loader enables automatic detection of new columns without breaking streaming ingestion?",
    "o": [
      ".option('cloudFiles.schemaEvolutionMode', 'addNewColumns')",
      ".option('cloudFiles.inferSchema', 'false')",
      ".option('schemaPolicy', 'strictDisallow')",
      ".option('cloudFiles.format', 'staticJson')"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Setting schemaEvolutionMode to addNewColumns allows Auto Loader to add newly encountered attributes to the target schema automatically.",
    "id": "de-assoc_10"
  },
  {
    "d": "DIL",
    "q": "What mechanism does Auto Loader use when configured with `cloudFiles.useNotifications = true`?",
    "o": [
      "Direct polling using periodic S3 LIST requests",
      "Cloud pub/sub queues and event notifications (e.g. AWS SNS/SQS, Azure Event Grid) to discover new files",
      "Operating system inotify hooks inside the worker container",
      "Continuous socket connections directly to cloud storage controllers"
    ],
    "a": [
      1
    ],
    "multi": false,
    "e": "File notification mode leverages cloud service events (SNS/SQS or Event Grid) to scale to millions of files without costly repeated directory listings.",
    "id": "de-assoc_11"
  },
  {
    "d": "DIL",
    "q": "A data engineer wants to run an idempotent SQL command to load CSV data from cloud storage into an existing Delta table. Which command should they use?",
    "o": [
      "INSERT INTO target_table SELECT * FROM external_csv",
      "COPY INTO target_table FROM 's3://my-bucket/path' FILEFORMAT = CSV",
      "MERGE CSV INTO target_table",
      "ALTER TABLE target_table LOAD CSV 's3://my-bucket/path'"
    ],
    "a": [
      1
    ],
    "multi": false,
    "e": "COPY INTO is an idempotent SQL command that safely loads data from cloud files into Delta tables, skipping files that have already been loaded.",
    "id": "de-assoc_12"
  },
  {
    "d": "DIL",
    "q": "What happens by default if a corrupted or malformed record is parsed by Auto Loader using default rescue settings?",
    "o": [
      "The entire streaming pipeline aborts and throws an unrecoverable exception",
      "The malformed data is placed into the `_rescued_data` column without crashing the pipeline",
      "The entire file is silently deleted from cloud storage",
      "All records in the batch are converted to null values"
    ],
    "a": [
      1
    ],
    "multi": false,
    "e": "Auto Loader captures malformed rows and schema mismatches into the `_rescued_data` column, allowing the stream to proceed safely.",
    "id": "de-assoc_13"
  },
  {
    "d": "DIL",
    "q": "Which Delta Lake capability allows querying historical versions of a table after batch ingestions?",
    "o": [
      "Delta Time Travel using VERSION AS OF or TIMESTAMP AS OF",
      "Git branch checkouts of the parquet files",
      "AWS S3 bucket versioning REST queries",
      "Databricks Workspace revision history dropdown"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Time Travel allows users to query earlier snapshots of a table using either table version numbers or ISO timestamps.",
    "id": "de-assoc_14"
  },
  {
    "d": "DIL",
    "q": "A data engineer runs `RESTORE TABLE events TO VERSION AS OF 5`. What is the result?",
    "o": [
      "The current state of the table is permanently rolled back to version 5, creating a new commit in the transaction log",
      "The table files are wiped and version 5 is downloaded from an external backup",
      "Version 5 is published as a temporary read-only view",
      "The command fails because Delta tables can never be reverted"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "The RESTORE command rolls back a Delta table to a specified earlier version or timestamp while recording the operation as a new commit.",
    "id": "de-assoc_15"
  },
  {
    "d": "DIL",
    "q": "What is the primary function of the `checkpointLocation` option in Structured Streaming pipelines?",
    "o": [
      "It stores temporary shuffle output to prevent cluster out-of-memory errors",
      "It records exact stream state, offsets, and progress to cloud storage to support fault-tolerant recovery",
      "It encrypts output parquet blocks using tenant KMS keys",
      "It defines where the target Delta table metadata is registered in the catalog"
    ],
    "a": [
      1
    ],
    "multi": false,
    "e": "Structured Streaming uses the checkpoint directory to persist read offsets and transaction states, enabling exactly-once processing across restarts.",
    "id": "de-assoc_16"
  },
  {
    "d": "DIL",
    "q": "Scenario 1 on Ingestion: A team ingests high-frequency telemetry data from cloud storage. Which technique ensures optimal micro-batch size and prevents small-file fragmentation during Delta loading?",
    "o": [
      "Configuring `maxFilesPerTrigger` in the streaming read options and enabling Auto-Optimize/Optimize Write on the Delta table",
      "Setting trigger to continuous processing with 0ms interval and disabling checkpointing",
      "Writing individual row-level CSV files and running cron VACUUM every 60 seconds",
      "Increasing cluster worker nodes to 500 without setting batch file caps"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Setting maxFilesPerTrigger controls micro-batch size and throughput, while Delta Optimize Write automatically coalesces data before writing to prevent the small-files problem.",
    "id": "de-assoc_17"
  },
  {
    "d": "DIL",
    "q": "Scenario 2 on Ingestion: A team ingests high-frequency telemetry data from cloud storage. Which technique ensures optimal micro-batch size and prevents small-file fragmentation during Delta loading?",
    "o": [
      "Configuring `maxFilesPerTrigger` in the streaming read options and enabling Auto-Optimize/Optimize Write on the Delta table",
      "Setting trigger to continuous processing with 0ms interval and disabling checkpointing",
      "Writing individual row-level CSV files and running cron VACUUM every 60 seconds",
      "Increasing cluster worker nodes to 500 without setting batch file caps"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Setting maxFilesPerTrigger controls micro-batch size and throughput, while Delta Optimize Write automatically coalesces data before writing to prevent the small-files problem.",
    "id": "de-assoc_18"
  },
  {
    "d": "DIL",
    "q": "Scenario 3 on Ingestion: A team ingests high-frequency telemetry data from cloud storage. Which technique ensures optimal micro-batch size and prevents small-file fragmentation during Delta loading?",
    "o": [
      "Configuring `maxFilesPerTrigger` in the streaming read options and enabling Auto-Optimize/Optimize Write on the Delta table",
      "Setting trigger to continuous processing with 0ms interval and disabling checkpointing",
      "Writing individual row-level CSV files and running cron VACUUM every 60 seconds",
      "Increasing cluster worker nodes to 500 without setting batch file caps"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Setting maxFilesPerTrigger controls micro-batch size and throughput, while Delta Optimize Write automatically coalesces data before writing to prevent the small-files problem.",
    "id": "de-assoc_19"
  },
  {
    "d": "DIL",
    "q": "Scenario 4 on Ingestion: A team ingests high-frequency telemetry data from cloud storage. Which technique ensures optimal micro-batch size and prevents small-file fragmentation during Delta loading?",
    "o": [
      "Configuring `maxFilesPerTrigger` in the streaming read options and enabling Auto-Optimize/Optimize Write on the Delta table",
      "Setting trigger to continuous processing with 0ms interval and disabling checkpointing",
      "Writing individual row-level CSV files and running cron VACUUM every 60 seconds",
      "Increasing cluster worker nodes to 500 without setting batch file caps"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Setting maxFilesPerTrigger controls micro-batch size and throughput, while Delta Optimize Write automatically coalesces data before writing to prevent the small-files problem.",
    "id": "de-assoc_20"
  },
  {
    "d": "DIL",
    "q": "Scenario 5 on Ingestion: A team ingests high-frequency telemetry data from cloud storage. Which technique ensures optimal micro-batch size and prevents small-file fragmentation during Delta loading?",
    "o": [
      "Configuring `maxFilesPerTrigger` in the streaming read options and enabling Auto-Optimize/Optimize Write on the Delta table",
      "Setting trigger to continuous processing with 0ms interval and disabling checkpointing",
      "Writing individual row-level CSV files and running cron VACUUM every 60 seconds",
      "Increasing cluster worker nodes to 500 without setting batch file caps"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Setting maxFilesPerTrigger controls micro-batch size and throughput, while Delta Optimize Write automatically coalesces data before writing to prevent the small-files problem.",
    "id": "de-assoc_21"
  },
  {
    "d": "DIL",
    "q": "Scenario 6 on Ingestion: A team ingests high-frequency telemetry data from cloud storage. Which technique ensures optimal micro-batch size and prevents small-file fragmentation during Delta loading?",
    "o": [
      "Configuring `maxFilesPerTrigger` in the streaming read options and enabling Auto-Optimize/Optimize Write on the Delta table",
      "Setting trigger to continuous processing with 0ms interval and disabling checkpointing",
      "Writing individual row-level CSV files and running cron VACUUM every 60 seconds",
      "Increasing cluster worker nodes to 500 without setting batch file caps"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Setting maxFilesPerTrigger controls micro-batch size and throughput, while Delta Optimize Write automatically coalesces data before writing to prevent the small-files problem.",
    "id": "de-assoc_22"
  },
  {
    "d": "DIL",
    "q": "Scenario 7 on Ingestion: A team ingests high-frequency telemetry data from cloud storage. Which technique ensures optimal micro-batch size and prevents small-file fragmentation during Delta loading?",
    "o": [
      "Configuring `maxFilesPerTrigger` in the streaming read options and enabling Auto-Optimize/Optimize Write on the Delta table",
      "Setting trigger to continuous processing with 0ms interval and disabling checkpointing",
      "Writing individual row-level CSV files and running cron VACUUM every 60 seconds",
      "Increasing cluster worker nodes to 500 without setting batch file caps"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Setting maxFilesPerTrigger controls micro-batch size and throughput, while Delta Optimize Write automatically coalesces data before writing to prevent the small-files problem.",
    "id": "de-assoc_23"
  },
  {
    "d": "DIL",
    "q": "Scenario 8 on Ingestion: A team ingests high-frequency telemetry data from cloud storage. Which technique ensures optimal micro-batch size and prevents small-file fragmentation during Delta loading?",
    "o": [
      "Configuring `maxFilesPerTrigger` in the streaming read options and enabling Auto-Optimize/Optimize Write on the Delta table",
      "Setting trigger to continuous processing with 0ms interval and disabling checkpointing",
      "Writing individual row-level CSV files and running cron VACUUM every 60 seconds",
      "Increasing cluster worker nodes to 500 without setting batch file caps"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Setting maxFilesPerTrigger controls micro-batch size and throughput, while Delta Optimize Write automatically coalesces data before writing to prevent the small-files problem.",
    "id": "de-assoc_24"
  },
  {
    "d": "DIL",
    "q": "Scenario 9 on Ingestion: A team ingests high-frequency telemetry data from cloud storage. Which technique ensures optimal micro-batch size and prevents small-file fragmentation during Delta loading?",
    "o": [
      "Configuring `maxFilesPerTrigger` in the streaming read options and enabling Auto-Optimize/Optimize Write on the Delta table",
      "Setting trigger to continuous processing with 0ms interval and disabling checkpointing",
      "Writing individual row-level CSV files and running cron VACUUM every 60 seconds",
      "Increasing cluster worker nodes to 500 without setting batch file caps"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Setting maxFilesPerTrigger controls micro-batch size and throughput, while Delta Optimize Write automatically coalesces data before writing to prevent the small-files problem.",
    "id": "de-assoc_25"
  },
  {
    "d": "DIL",
    "q": "Scenario 10 on Ingestion: A team ingests high-frequency telemetry data from cloud storage. Which technique ensures optimal micro-batch size and prevents small-file fragmentation during Delta loading?",
    "o": [
      "Configuring `maxFilesPerTrigger` in the streaming read options and enabling Auto-Optimize/Optimize Write on the Delta table",
      "Setting trigger to continuous processing with 0ms interval and disabling checkpointing",
      "Writing individual row-level CSV files and running cron VACUUM every 60 seconds",
      "Increasing cluster worker nodes to 500 without setting batch file caps"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Setting maxFilesPerTrigger controls micro-batch size and throughput, while Delta Optimize Write automatically coalesces data before writing to prevent the small-files problem.",
    "id": "de-assoc_26"
  },
  {
    "d": "DIL",
    "q": "Scenario 11 on Ingestion: A team ingests high-frequency telemetry data from cloud storage. Which technique ensures optimal micro-batch size and prevents small-file fragmentation during Delta loading?",
    "o": [
      "Configuring `maxFilesPerTrigger` in the streaming read options and enabling Auto-Optimize/Optimize Write on the Delta table",
      "Setting trigger to continuous processing with 0ms interval and disabling checkpointing",
      "Writing individual row-level CSV files and running cron VACUUM every 60 seconds",
      "Increasing cluster worker nodes to 500 without setting batch file caps"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Setting maxFilesPerTrigger controls micro-batch size and throughput, while Delta Optimize Write automatically coalesces data before writing to prevent the small-files problem.",
    "id": "de-assoc_27"
  },
  {
    "d": "DIL",
    "q": "Scenario 12 on Ingestion: A team ingests high-frequency telemetry data from cloud storage. Which technique ensures optimal micro-batch size and prevents small-file fragmentation during Delta loading?",
    "o": [
      "Configuring `maxFilesPerTrigger` in the streaming read options and enabling Auto-Optimize/Optimize Write on the Delta table",
      "Setting trigger to continuous processing with 0ms interval and disabling checkpointing",
      "Writing individual row-level CSV files and running cron VACUUM every 60 seconds",
      "Increasing cluster worker nodes to 500 without setting batch file caps"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Setting maxFilesPerTrigger controls micro-batch size and throughput, while Delta Optimize Write automatically coalesces data before writing to prevent the small-files problem.",
    "id": "de-assoc_28"
  },
  {
    "d": "DIL",
    "q": "Scenario 13 on Ingestion: A team ingests high-frequency telemetry data from cloud storage. Which technique ensures optimal micro-batch size and prevents small-file fragmentation during Delta loading?",
    "o": [
      "Configuring `maxFilesPerTrigger` in the streaming read options and enabling Auto-Optimize/Optimize Write on the Delta table",
      "Setting trigger to continuous processing with 0ms interval and disabling checkpointing",
      "Writing individual row-level CSV files and running cron VACUUM every 60 seconds",
      "Increasing cluster worker nodes to 500 without setting batch file caps"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Setting maxFilesPerTrigger controls micro-batch size and throughput, while Delta Optimize Write automatically coalesces data before writing to prevent the small-files problem.",
    "id": "de-assoc_29"
  },
  {
    "d": "DIL",
    "q": "Scenario 14 on Ingestion: A team ingests high-frequency telemetry data from cloud storage. Which technique ensures optimal micro-batch size and prevents small-file fragmentation during Delta loading?",
    "o": [
      "Configuring `maxFilesPerTrigger` in the streaming read options and enabling Auto-Optimize/Optimize Write on the Delta table",
      "Setting trigger to continuous processing with 0ms interval and disabling checkpointing",
      "Writing individual row-level CSV files and running cron VACUUM every 60 seconds",
      "Increasing cluster worker nodes to 500 without setting batch file caps"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Setting maxFilesPerTrigger controls micro-batch size and throughput, while Delta Optimize Write automatically coalesces data before writing to prevent the small-files problem.",
    "id": "de-assoc_30"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 1: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_31"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 2: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_32"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 3: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_33"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 4: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_34"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 5: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_35"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 6: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_36"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 7: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_37"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 8: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_38"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 9: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_39"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 10: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_40"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 11: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_41"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 12: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_42"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 13: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_43"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 14: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_44"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 15: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_45"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 16: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_46"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 17: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_47"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 18: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_48"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 19: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_49"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 20: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_50"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 21: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_51"
  },
  {
    "d": "DTM",
    "q": "Data Transformation Question 22: In a PySpark ETL script on Databricks, what is the most efficient and safe way to handle deduplication and incremental upserts into a target Delta table?",
    "o": [
      "Using the `MERGE INTO` statement with `WHEN MATCHED THEN UPDATE` and `WHEN NOT MATCHED THEN INSERT`",
      "Dropping the target table and recomputing the entire dataset from scratch on each run",
      "Reading the target table into a Python list, filtering duplicates in pure Python, and overwriting",
      "Executing an `INSERT OVERWRITE` without a partition predicate"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Delta Lake's MERGE INTO statement supports atomic upserts, updates, deletes, and inserts based on a matching key condition without full table recomputation.",
    "id": "de-assoc_52"
  },
  {
    "d": "LFJ",
    "q": "Lakeflow / Databricks Jobs Task 1: You are orchestrating a DAG of dependent tasks (Ingest -> Silver Cleanse -> Gold Aggregates -> Data Quality Check) in Databricks Jobs. How should task dependencies and failure retries be configured?",
    "o": [
      "Define explicit `Depends on` task parameters in the Lakeflow Jobs UI and set retry policies with exponential backoff on transient errors",
      "Write a bash script with `sleep 300` between notebook executions on a single driver node",
      "Trigger all 4 tasks simultaneously and rely on file system locks to sequence execution",
      "Use Windows Task Scheduler on a local workstation to fire Databricks REST API calls sequentially"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Jobs supports multi-task DAGs where downstream tasks declare explicit dependencies on upstream tasks, with configurable retry policies and alerts.",
    "id": "de-assoc_53"
  },
  {
    "d": "LFJ",
    "q": "Lakeflow / Databricks Jobs Task 2: You are orchestrating a DAG of dependent tasks (Ingest -> Silver Cleanse -> Gold Aggregates -> Data Quality Check) in Databricks Jobs. How should task dependencies and failure retries be configured?",
    "o": [
      "Define explicit `Depends on` task parameters in the Lakeflow Jobs UI and set retry policies with exponential backoff on transient errors",
      "Write a bash script with `sleep 300` between notebook executions on a single driver node",
      "Trigger all 4 tasks simultaneously and rely on file system locks to sequence execution",
      "Use Windows Task Scheduler on a local workstation to fire Databricks REST API calls sequentially"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Jobs supports multi-task DAGs where downstream tasks declare explicit dependencies on upstream tasks, with configurable retry policies and alerts.",
    "id": "de-assoc_54"
  },
  {
    "d": "LFJ",
    "q": "Lakeflow / Databricks Jobs Task 3: You are orchestrating a DAG of dependent tasks (Ingest -> Silver Cleanse -> Gold Aggregates -> Data Quality Check) in Databricks Jobs. How should task dependencies and failure retries be configured?",
    "o": [
      "Define explicit `Depends on` task parameters in the Lakeflow Jobs UI and set retry policies with exponential backoff on transient errors",
      "Write a bash script with `sleep 300` between notebook executions on a single driver node",
      "Trigger all 4 tasks simultaneously and rely on file system locks to sequence execution",
      "Use Windows Task Scheduler on a local workstation to fire Databricks REST API calls sequentially"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Jobs supports multi-task DAGs where downstream tasks declare explicit dependencies on upstream tasks, with configurable retry policies and alerts.",
    "id": "de-assoc_55"
  },
  {
    "d": "LFJ",
    "q": "Lakeflow / Databricks Jobs Task 4: You are orchestrating a DAG of dependent tasks (Ingest -> Silver Cleanse -> Gold Aggregates -> Data Quality Check) in Databricks Jobs. How should task dependencies and failure retries be configured?",
    "o": [
      "Define explicit `Depends on` task parameters in the Lakeflow Jobs UI and set retry policies with exponential backoff on transient errors",
      "Write a bash script with `sleep 300` between notebook executions on a single driver node",
      "Trigger all 4 tasks simultaneously and rely on file system locks to sequence execution",
      "Use Windows Task Scheduler on a local workstation to fire Databricks REST API calls sequentially"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Jobs supports multi-task DAGs where downstream tasks declare explicit dependencies on upstream tasks, with configurable retry policies and alerts.",
    "id": "de-assoc_56"
  },
  {
    "d": "LFJ",
    "q": "Lakeflow / Databricks Jobs Task 5: You are orchestrating a DAG of dependent tasks (Ingest -> Silver Cleanse -> Gold Aggregates -> Data Quality Check) in Databricks Jobs. How should task dependencies and failure retries be configured?",
    "o": [
      "Define explicit `Depends on` task parameters in the Lakeflow Jobs UI and set retry policies with exponential backoff on transient errors",
      "Write a bash script with `sleep 300` between notebook executions on a single driver node",
      "Trigger all 4 tasks simultaneously and rely on file system locks to sequence execution",
      "Use Windows Task Scheduler on a local workstation to fire Databricks REST API calls sequentially"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Jobs supports multi-task DAGs where downstream tasks declare explicit dependencies on upstream tasks, with configurable retry policies and alerts.",
    "id": "de-assoc_57"
  },
  {
    "d": "LFJ",
    "q": "Lakeflow / Databricks Jobs Task 6: You are orchestrating a DAG of dependent tasks (Ingest -> Silver Cleanse -> Gold Aggregates -> Data Quality Check) in Databricks Jobs. How should task dependencies and failure retries be configured?",
    "o": [
      "Define explicit `Depends on` task parameters in the Lakeflow Jobs UI and set retry policies with exponential backoff on transient errors",
      "Write a bash script with `sleep 300` between notebook executions on a single driver node",
      "Trigger all 4 tasks simultaneously and rely on file system locks to sequence execution",
      "Use Windows Task Scheduler on a local workstation to fire Databricks REST API calls sequentially"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Jobs supports multi-task DAGs where downstream tasks declare explicit dependencies on upstream tasks, with configurable retry policies and alerts.",
    "id": "de-assoc_58"
  },
  {
    "d": "LFJ",
    "q": "Lakeflow / Databricks Jobs Task 7: You are orchestrating a DAG of dependent tasks (Ingest -> Silver Cleanse -> Gold Aggregates -> Data Quality Check) in Databricks Jobs. How should task dependencies and failure retries be configured?",
    "o": [
      "Define explicit `Depends on` task parameters in the Lakeflow Jobs UI and set retry policies with exponential backoff on transient errors",
      "Write a bash script with `sleep 300` between notebook executions on a single driver node",
      "Trigger all 4 tasks simultaneously and rely on file system locks to sequence execution",
      "Use Windows Task Scheduler on a local workstation to fire Databricks REST API calls sequentially"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Jobs supports multi-task DAGs where downstream tasks declare explicit dependencies on upstream tasks, with configurable retry policies and alerts.",
    "id": "de-assoc_59"
  },
  {
    "d": "LFJ",
    "q": "Lakeflow / Databricks Jobs Task 8: You are orchestrating a DAG of dependent tasks (Ingest -> Silver Cleanse -> Gold Aggregates -> Data Quality Check) in Databricks Jobs. How should task dependencies and failure retries be configured?",
    "o": [
      "Define explicit `Depends on` task parameters in the Lakeflow Jobs UI and set retry policies with exponential backoff on transient errors",
      "Write a bash script with `sleep 300` between notebook executions on a single driver node",
      "Trigger all 4 tasks simultaneously and rely on file system locks to sequence execution",
      "Use Windows Task Scheduler on a local workstation to fire Databricks REST API calls sequentially"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Jobs supports multi-task DAGs where downstream tasks declare explicit dependencies on upstream tasks, with configurable retry policies and alerts.",
    "id": "de-assoc_60"
  },
  {
    "d": "LFJ",
    "q": "Lakeflow / Databricks Jobs Task 9: You are orchestrating a DAG of dependent tasks (Ingest -> Silver Cleanse -> Gold Aggregates -> Data Quality Check) in Databricks Jobs. How should task dependencies and failure retries be configured?",
    "o": [
      "Define explicit `Depends on` task parameters in the Lakeflow Jobs UI and set retry policies with exponential backoff on transient errors",
      "Write a bash script with `sleep 300` between notebook executions on a single driver node",
      "Trigger all 4 tasks simultaneously and rely on file system locks to sequence execution",
      "Use Windows Task Scheduler on a local workstation to fire Databricks REST API calls sequentially"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Jobs supports multi-task DAGs where downstream tasks declare explicit dependencies on upstream tasks, with configurable retry policies and alerts.",
    "id": "de-assoc_61"
  },
  {
    "d": "LFJ",
    "q": "Lakeflow / Databricks Jobs Task 10: You are orchestrating a DAG of dependent tasks (Ingest -> Silver Cleanse -> Gold Aggregates -> Data Quality Check) in Databricks Jobs. How should task dependencies and failure retries be configured?",
    "o": [
      "Define explicit `Depends on` task parameters in the Lakeflow Jobs UI and set retry policies with exponential backoff on transient errors",
      "Write a bash script with `sleep 300` between notebook executions on a single driver node",
      "Trigger all 4 tasks simultaneously and rely on file system locks to sequence execution",
      "Use Windows Task Scheduler on a local workstation to fire Databricks REST API calls sequentially"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Jobs supports multi-task DAGs where downstream tasks declare explicit dependencies on upstream tasks, with configurable retry policies and alerts.",
    "id": "de-assoc_62"
  },
  {
    "d": "LFJ",
    "q": "Lakeflow / Databricks Jobs Task 11: You are orchestrating a DAG of dependent tasks (Ingest -> Silver Cleanse -> Gold Aggregates -> Data Quality Check) in Databricks Jobs. How should task dependencies and failure retries be configured?",
    "o": [
      "Define explicit `Depends on` task parameters in the Lakeflow Jobs UI and set retry policies with exponential backoff on transient errors",
      "Write a bash script with `sleep 300` between notebook executions on a single driver node",
      "Trigger all 4 tasks simultaneously and rely on file system locks to sequence execution",
      "Use Windows Task Scheduler on a local workstation to fire Databricks REST API calls sequentially"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Jobs supports multi-task DAGs where downstream tasks declare explicit dependencies on upstream tasks, with configurable retry policies and alerts.",
    "id": "de-assoc_63"
  },
  {
    "d": "LFJ",
    "q": "Lakeflow / Databricks Jobs Task 12: You are orchestrating a DAG of dependent tasks (Ingest -> Silver Cleanse -> Gold Aggregates -> Data Quality Check) in Databricks Jobs. How should task dependencies and failure retries be configured?",
    "o": [
      "Define explicit `Depends on` task parameters in the Lakeflow Jobs UI and set retry policies with exponential backoff on transient errors",
      "Write a bash script with `sleep 300` between notebook executions on a single driver node",
      "Trigger all 4 tasks simultaneously and rely on file system locks to sequence execution",
      "Use Windows Task Scheduler on a local workstation to fire Databricks REST API calls sequentially"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Jobs supports multi-task DAGs where downstream tasks declare explicit dependencies on upstream tasks, with configurable retry policies and alerts.",
    "id": "de-assoc_64"
  },
  {
    "d": "LFJ",
    "q": "Lakeflow / Databricks Jobs Task 13: You are orchestrating a DAG of dependent tasks (Ingest -> Silver Cleanse -> Gold Aggregates -> Data Quality Check) in Databricks Jobs. How should task dependencies and failure retries be configured?",
    "o": [
      "Define explicit `Depends on` task parameters in the Lakeflow Jobs UI and set retry policies with exponential backoff on transient errors",
      "Write a bash script with `sleep 300` between notebook executions on a single driver node",
      "Trigger all 4 tasks simultaneously and rely on file system locks to sequence execution",
      "Use Windows Task Scheduler on a local workstation to fire Databricks REST API calls sequentially"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Jobs supports multi-task DAGs where downstream tasks declare explicit dependencies on upstream tasks, with configurable retry policies and alerts.",
    "id": "de-assoc_65"
  },
  {
    "d": "LFJ",
    "q": "Lakeflow / Databricks Jobs Task 14: You are orchestrating a DAG of dependent tasks (Ingest -> Silver Cleanse -> Gold Aggregates -> Data Quality Check) in Databricks Jobs. How should task dependencies and failure retries be configured?",
    "o": [
      "Define explicit `Depends on` task parameters in the Lakeflow Jobs UI and set retry policies with exponential backoff on transient errors",
      "Write a bash script with `sleep 300` between notebook executions on a single driver node",
      "Trigger all 4 tasks simultaneously and rely on file system locks to sequence execution",
      "Use Windows Task Scheduler on a local workstation to fire Databricks REST API calls sequentially"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Jobs supports multi-task DAGs where downstream tasks declare explicit dependencies on upstream tasks, with configurable retry policies and alerts.",
    "id": "de-assoc_66"
  },
  {
    "d": "LFJ",
    "q": "Lakeflow / Databricks Jobs Task 15: You are orchestrating a DAG of dependent tasks (Ingest -> Silver Cleanse -> Gold Aggregates -> Data Quality Check) in Databricks Jobs. How should task dependencies and failure retries be configured?",
    "o": [
      "Define explicit `Depends on` task parameters in the Lakeflow Jobs UI and set retry policies with exponential backoff on transient errors",
      "Write a bash script with `sleep 300` between notebook executions on a single driver node",
      "Trigger all 4 tasks simultaneously and rely on file system locks to sequence execution",
      "Use Windows Task Scheduler on a local workstation to fire Databricks REST API calls sequentially"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Jobs supports multi-task DAGs where downstream tasks declare explicit dependencies on upstream tasks, with configurable retry policies and alerts.",
    "id": "de-assoc_67"
  },
  {
    "d": "LFJ",
    "q": "Lakeflow / Databricks Jobs Task 16: You are orchestrating a DAG of dependent tasks (Ingest -> Silver Cleanse -> Gold Aggregates -> Data Quality Check) in Databricks Jobs. How should task dependencies and failure retries be configured?",
    "o": [
      "Define explicit `Depends on` task parameters in the Lakeflow Jobs UI and set retry policies with exponential backoff on transient errors",
      "Write a bash script with `sleep 300` between notebook executions on a single driver node",
      "Trigger all 4 tasks simultaneously and rely on file system locks to sequence execution",
      "Use Windows Task Scheduler on a local workstation to fire Databricks REST API calls sequentially"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Jobs supports multi-task DAGs where downstream tasks declare explicit dependencies on upstream tasks, with configurable retry policies and alerts.",
    "id": "de-assoc_68"
  },
  {
    "d": "CICD",
    "q": "CI/CD and Databricks Asset Bundles (DABs) Item 1: What is the recommended way to define, package, and deploy reproducible Databricks jobs, pipelines, and ML models across Development, Staging, and Production environments?",
    "o": [
      "Using Databricks Asset Bundles (DABs) configured with YAML source files managed in Git version control",
      "Manually exporting .dbc archives and importing them through the workspace browser UI",
      "Writing custom Python scripts that paste code via OS clipboard automation",
      "Keeping all production code strictly inside personal workspace user folders"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Asset Bundles (DABs) provide an Infrastructure-as-Code (IaC) standard to define jobs, pipelines, and resources in YAML for automated CI/CD deployments.",
    "id": "de-assoc_69"
  },
  {
    "d": "CICD",
    "q": "CI/CD and Databricks Asset Bundles (DABs) Item 2: What is the recommended way to define, package, and deploy reproducible Databricks jobs, pipelines, and ML models across Development, Staging, and Production environments?",
    "o": [
      "Using Databricks Asset Bundles (DABs) configured with YAML source files managed in Git version control",
      "Manually exporting .dbc archives and importing them through the workspace browser UI",
      "Writing custom Python scripts that paste code via OS clipboard automation",
      "Keeping all production code strictly inside personal workspace user folders"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Asset Bundles (DABs) provide an Infrastructure-as-Code (IaC) standard to define jobs, pipelines, and resources in YAML for automated CI/CD deployments.",
    "id": "de-assoc_70"
  },
  {
    "d": "CICD",
    "q": "CI/CD and Databricks Asset Bundles (DABs) Item 3: What is the recommended way to define, package, and deploy reproducible Databricks jobs, pipelines, and ML models across Development, Staging, and Production environments?",
    "o": [
      "Using Databricks Asset Bundles (DABs) configured with YAML source files managed in Git version control",
      "Manually exporting .dbc archives and importing them through the workspace browser UI",
      "Writing custom Python scripts that paste code via OS clipboard automation",
      "Keeping all production code strictly inside personal workspace user folders"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Asset Bundles (DABs) provide an Infrastructure-as-Code (IaC) standard to define jobs, pipelines, and resources in YAML for automated CI/CD deployments.",
    "id": "de-assoc_71"
  },
  {
    "d": "CICD",
    "q": "CI/CD and Databricks Asset Bundles (DABs) Item 4: What is the recommended way to define, package, and deploy reproducible Databricks jobs, pipelines, and ML models across Development, Staging, and Production environments?",
    "o": [
      "Using Databricks Asset Bundles (DABs) configured with YAML source files managed in Git version control",
      "Manually exporting .dbc archives and importing them through the workspace browser UI",
      "Writing custom Python scripts that paste code via OS clipboard automation",
      "Keeping all production code strictly inside personal workspace user folders"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Asset Bundles (DABs) provide an Infrastructure-as-Code (IaC) standard to define jobs, pipelines, and resources in YAML for automated CI/CD deployments.",
    "id": "de-assoc_72"
  },
  {
    "d": "CICD",
    "q": "CI/CD and Databricks Asset Bundles (DABs) Item 5: What is the recommended way to define, package, and deploy reproducible Databricks jobs, pipelines, and ML models across Development, Staging, and Production environments?",
    "o": [
      "Using Databricks Asset Bundles (DABs) configured with YAML source files managed in Git version control",
      "Manually exporting .dbc archives and importing them through the workspace browser UI",
      "Writing custom Python scripts that paste code via OS clipboard automation",
      "Keeping all production code strictly inside personal workspace user folders"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Asset Bundles (DABs) provide an Infrastructure-as-Code (IaC) standard to define jobs, pipelines, and resources in YAML for automated CI/CD deployments.",
    "id": "de-assoc_73"
  },
  {
    "d": "CICD",
    "q": "CI/CD and Databricks Asset Bundles (DABs) Item 6: What is the recommended way to define, package, and deploy reproducible Databricks jobs, pipelines, and ML models across Development, Staging, and Production environments?",
    "o": [
      "Using Databricks Asset Bundles (DABs) configured with YAML source files managed in Git version control",
      "Manually exporting .dbc archives and importing them through the workspace browser UI",
      "Writing custom Python scripts that paste code via OS clipboard automation",
      "Keeping all production code strictly inside personal workspace user folders"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Asset Bundles (DABs) provide an Infrastructure-as-Code (IaC) standard to define jobs, pipelines, and resources in YAML for automated CI/CD deployments.",
    "id": "de-assoc_74"
  },
  {
    "d": "CICD",
    "q": "CI/CD and Databricks Asset Bundles (DABs) Item 7: What is the recommended way to define, package, and deploy reproducible Databricks jobs, pipelines, and ML models across Development, Staging, and Production environments?",
    "o": [
      "Using Databricks Asset Bundles (DABs) configured with YAML source files managed in Git version control",
      "Manually exporting .dbc archives and importing them through the workspace browser UI",
      "Writing custom Python scripts that paste code via OS clipboard automation",
      "Keeping all production code strictly inside personal workspace user folders"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Asset Bundles (DABs) provide an Infrastructure-as-Code (IaC) standard to define jobs, pipelines, and resources in YAML for automated CI/CD deployments.",
    "id": "de-assoc_75"
  },
  {
    "d": "CICD",
    "q": "CI/CD and Databricks Asset Bundles (DABs) Item 8: What is the recommended way to define, package, and deploy reproducible Databricks jobs, pipelines, and ML models across Development, Staging, and Production environments?",
    "o": [
      "Using Databricks Asset Bundles (DABs) configured with YAML source files managed in Git version control",
      "Manually exporting .dbc archives and importing them through the workspace browser UI",
      "Writing custom Python scripts that paste code via OS clipboard automation",
      "Keeping all production code strictly inside personal workspace user folders"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Asset Bundles (DABs) provide an Infrastructure-as-Code (IaC) standard to define jobs, pipelines, and resources in YAML for automated CI/CD deployments.",
    "id": "de-assoc_76"
  },
  {
    "d": "CICD",
    "q": "CI/CD and Databricks Asset Bundles (DABs) Item 9: What is the recommended way to define, package, and deploy reproducible Databricks jobs, pipelines, and ML models across Development, Staging, and Production environments?",
    "o": [
      "Using Databricks Asset Bundles (DABs) configured with YAML source files managed in Git version control",
      "Manually exporting .dbc archives and importing them through the workspace browser UI",
      "Writing custom Python scripts that paste code via OS clipboard automation",
      "Keeping all production code strictly inside personal workspace user folders"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Asset Bundles (DABs) provide an Infrastructure-as-Code (IaC) standard to define jobs, pipelines, and resources in YAML for automated CI/CD deployments.",
    "id": "de-assoc_77"
  },
  {
    "d": "CICD",
    "q": "CI/CD and Databricks Asset Bundles (DABs) Item 10: What is the recommended way to define, package, and deploy reproducible Databricks jobs, pipelines, and ML models across Development, Staging, and Production environments?",
    "o": [
      "Using Databricks Asset Bundles (DABs) configured with YAML source files managed in Git version control",
      "Manually exporting .dbc archives and importing them through the workspace browser UI",
      "Writing custom Python scripts that paste code via OS clipboard automation",
      "Keeping all production code strictly inside personal workspace user folders"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "Databricks Asset Bundles (DABs) provide an Infrastructure-as-Code (IaC) standard to define jobs, pipelines, and resources in YAML for automated CI/CD deployments.",
    "id": "de-assoc_78"
  },
  {
    "d": "TMO",
    "q": "Performance & Troubleshooting Item 1: A query scanning a large Delta table experiences slow performance due to scanning billions of rows across thousands of small files. Which pair of operations directly remediates this?",
    "o": [
      "Running `OPTIMIZE table_name ZORDER BY (frequently_filtered_columns)` followed by prudent `VACUUM`",
      "Converting the Delta table into uncompressed CSV files",
      "Dropping all partition columns and setting cluster min workers to 1",
      "Disabling Photon and reducing cluster memory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "OPTIMIZE compacts small files into larger 1GB files, and Z-ORDER arranges data along query filter dimensions to maximize Delta data skipping.",
    "id": "de-assoc_79"
  },
  {
    "d": "TMO",
    "q": "Performance & Troubleshooting Item 2: A query scanning a large Delta table experiences slow performance due to scanning billions of rows across thousands of small files. Which pair of operations directly remediates this?",
    "o": [
      "Running `OPTIMIZE table_name ZORDER BY (frequently_filtered_columns)` followed by prudent `VACUUM`",
      "Converting the Delta table into uncompressed CSV files",
      "Dropping all partition columns and setting cluster min workers to 1",
      "Disabling Photon and reducing cluster memory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "OPTIMIZE compacts small files into larger 1GB files, and Z-ORDER arranges data along query filter dimensions to maximize Delta data skipping.",
    "id": "de-assoc_80"
  },
  {
    "d": "TMO",
    "q": "Performance & Troubleshooting Item 3: A query scanning a large Delta table experiences slow performance due to scanning billions of rows across thousands of small files. Which pair of operations directly remediates this?",
    "o": [
      "Running `OPTIMIZE table_name ZORDER BY (frequently_filtered_columns)` followed by prudent `VACUUM`",
      "Converting the Delta table into uncompressed CSV files",
      "Dropping all partition columns and setting cluster min workers to 1",
      "Disabling Photon and reducing cluster memory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "OPTIMIZE compacts small files into larger 1GB files, and Z-ORDER arranges data along query filter dimensions to maximize Delta data skipping.",
    "id": "de-assoc_81"
  },
  {
    "d": "TMO",
    "q": "Performance & Troubleshooting Item 4: A query scanning a large Delta table experiences slow performance due to scanning billions of rows across thousands of small files. Which pair of operations directly remediates this?",
    "o": [
      "Running `OPTIMIZE table_name ZORDER BY (frequently_filtered_columns)` followed by prudent `VACUUM`",
      "Converting the Delta table into uncompressed CSV files",
      "Dropping all partition columns and setting cluster min workers to 1",
      "Disabling Photon and reducing cluster memory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "OPTIMIZE compacts small files into larger 1GB files, and Z-ORDER arranges data along query filter dimensions to maximize Delta data skipping.",
    "id": "de-assoc_82"
  },
  {
    "d": "TMO",
    "q": "Performance & Troubleshooting Item 5: A query scanning a large Delta table experiences slow performance due to scanning billions of rows across thousands of small files. Which pair of operations directly remediates this?",
    "o": [
      "Running `OPTIMIZE table_name ZORDER BY (frequently_filtered_columns)` followed by prudent `VACUUM`",
      "Converting the Delta table into uncompressed CSV files",
      "Dropping all partition columns and setting cluster min workers to 1",
      "Disabling Photon and reducing cluster memory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "OPTIMIZE compacts small files into larger 1GB files, and Z-ORDER arranges data along query filter dimensions to maximize Delta data skipping.",
    "id": "de-assoc_83"
  },
  {
    "d": "TMO",
    "q": "Performance & Troubleshooting Item 6: A query scanning a large Delta table experiences slow performance due to scanning billions of rows across thousands of small files. Which pair of operations directly remediates this?",
    "o": [
      "Running `OPTIMIZE table_name ZORDER BY (frequently_filtered_columns)` followed by prudent `VACUUM`",
      "Converting the Delta table into uncompressed CSV files",
      "Dropping all partition columns and setting cluster min workers to 1",
      "Disabling Photon and reducing cluster memory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "OPTIMIZE compacts small files into larger 1GB files, and Z-ORDER arranges data along query filter dimensions to maximize Delta data skipping.",
    "id": "de-assoc_84"
  },
  {
    "d": "TMO",
    "q": "Performance & Troubleshooting Item 7: A query scanning a large Delta table experiences slow performance due to scanning billions of rows across thousands of small files. Which pair of operations directly remediates this?",
    "o": [
      "Running `OPTIMIZE table_name ZORDER BY (frequently_filtered_columns)` followed by prudent `VACUUM`",
      "Converting the Delta table into uncompressed CSV files",
      "Dropping all partition columns and setting cluster min workers to 1",
      "Disabling Photon and reducing cluster memory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "OPTIMIZE compacts small files into larger 1GB files, and Z-ORDER arranges data along query filter dimensions to maximize Delta data skipping.",
    "id": "de-assoc_85"
  },
  {
    "d": "TMO",
    "q": "Performance & Troubleshooting Item 8: A query scanning a large Delta table experiences slow performance due to scanning billions of rows across thousands of small files. Which pair of operations directly remediates this?",
    "o": [
      "Running `OPTIMIZE table_name ZORDER BY (frequently_filtered_columns)` followed by prudent `VACUUM`",
      "Converting the Delta table into uncompressed CSV files",
      "Dropping all partition columns and setting cluster min workers to 1",
      "Disabling Photon and reducing cluster memory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "OPTIMIZE compacts small files into larger 1GB files, and Z-ORDER arranges data along query filter dimensions to maximize Delta data skipping.",
    "id": "de-assoc_86"
  },
  {
    "d": "TMO",
    "q": "Performance & Troubleshooting Item 9: A query scanning a large Delta table experiences slow performance due to scanning billions of rows across thousands of small files. Which pair of operations directly remediates this?",
    "o": [
      "Running `OPTIMIZE table_name ZORDER BY (frequently_filtered_columns)` followed by prudent `VACUUM`",
      "Converting the Delta table into uncompressed CSV files",
      "Dropping all partition columns and setting cluster min workers to 1",
      "Disabling Photon and reducing cluster memory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "OPTIMIZE compacts small files into larger 1GB files, and Z-ORDER arranges data along query filter dimensions to maximize Delta data skipping.",
    "id": "de-assoc_87"
  },
  {
    "d": "TMO",
    "q": "Performance & Troubleshooting Item 10: A query scanning a large Delta table experiences slow performance due to scanning billions of rows across thousands of small files. Which pair of operations directly remediates this?",
    "o": [
      "Running `OPTIMIZE table_name ZORDER BY (frequently_filtered_columns)` followed by prudent `VACUUM`",
      "Converting the Delta table into uncompressed CSV files",
      "Dropping all partition columns and setting cluster min workers to 1",
      "Disabling Photon and reducing cluster memory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "OPTIMIZE compacts small files into larger 1GB files, and Z-ORDER arranges data along query filter dimensions to maximize Delta data skipping.",
    "id": "de-assoc_88"
  },
  {
    "d": "GOV",
    "q": "Unity Catalog & Security Item 1: A data engineer needs to grant a reporting analyst team read-only access to select tables in a specific schema within a Unity Catalog 3-level namespace. Which privilege should be granted?",
    "o": [
      "`USE CATALOG catalog_name`, `USE SCHEMA schema_name`, and `SELECT ON TABLE table_name` to the analyst principal/group",
      "Granting `ALL PRIVILEGES` on the root cloud storage account container",
      "Assigning cluster owner administrative role to every analyst account",
      "Exporting data files to an unencrypted public web directory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "In Unity Catalog's 3-level namespace (catalog.schema.table), users require USE CATALOG on the catalog, USE SCHEMA on the schema, and SELECT on the target securable table.",
    "id": "de-assoc_89"
  },
  {
    "d": "GOV",
    "q": "Unity Catalog & Security Item 2: A data engineer needs to grant a reporting analyst team read-only access to select tables in a specific schema within a Unity Catalog 3-level namespace. Which privilege should be granted?",
    "o": [
      "`USE CATALOG catalog_name`, `USE SCHEMA schema_name`, and `SELECT ON TABLE table_name` to the analyst principal/group",
      "Granting `ALL PRIVILEGES` on the root cloud storage account container",
      "Assigning cluster owner administrative role to every analyst account",
      "Exporting data files to an unencrypted public web directory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "In Unity Catalog's 3-level namespace (catalog.schema.table), users require USE CATALOG on the catalog, USE SCHEMA on the schema, and SELECT on the target securable table.",
    "id": "de-assoc_90"
  },
  {
    "d": "GOV",
    "q": "Unity Catalog & Security Item 3: A data engineer needs to grant a reporting analyst team read-only access to select tables in a specific schema within a Unity Catalog 3-level namespace. Which privilege should be granted?",
    "o": [
      "`USE CATALOG catalog_name`, `USE SCHEMA schema_name`, and `SELECT ON TABLE table_name` to the analyst principal/group",
      "Granting `ALL PRIVILEGES` on the root cloud storage account container",
      "Assigning cluster owner administrative role to every analyst account",
      "Exporting data files to an unencrypted public web directory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "In Unity Catalog's 3-level namespace (catalog.schema.table), users require USE CATALOG on the catalog, USE SCHEMA on the schema, and SELECT on the target securable table.",
    "id": "de-assoc_91"
  },
  {
    "d": "GOV",
    "q": "Unity Catalog & Security Item 4: A data engineer needs to grant a reporting analyst team read-only access to select tables in a specific schema within a Unity Catalog 3-level namespace. Which privilege should be granted?",
    "o": [
      "`USE CATALOG catalog_name`, `USE SCHEMA schema_name`, and `SELECT ON TABLE table_name` to the analyst principal/group",
      "Granting `ALL PRIVILEGES` on the root cloud storage account container",
      "Assigning cluster owner administrative role to every analyst account",
      "Exporting data files to an unencrypted public web directory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "In Unity Catalog's 3-level namespace (catalog.schema.table), users require USE CATALOG on the catalog, USE SCHEMA on the schema, and SELECT on the target securable table.",
    "id": "de-assoc_92"
  },
  {
    "d": "GOV",
    "q": "Unity Catalog & Security Item 5: A data engineer needs to grant a reporting analyst team read-only access to select tables in a specific schema within a Unity Catalog 3-level namespace. Which privilege should be granted?",
    "o": [
      "`USE CATALOG catalog_name`, `USE SCHEMA schema_name`, and `SELECT ON TABLE table_name` to the analyst principal/group",
      "Granting `ALL PRIVILEGES` on the root cloud storage account container",
      "Assigning cluster owner administrative role to every analyst account",
      "Exporting data files to an unencrypted public web directory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "In Unity Catalog's 3-level namespace (catalog.schema.table), users require USE CATALOG on the catalog, USE SCHEMA on the schema, and SELECT on the target securable table.",
    "id": "de-assoc_93"
  },
  {
    "d": "GOV",
    "q": "Unity Catalog & Security Item 6: A data engineer needs to grant a reporting analyst team read-only access to select tables in a specific schema within a Unity Catalog 3-level namespace. Which privilege should be granted?",
    "o": [
      "`USE CATALOG catalog_name`, `USE SCHEMA schema_name`, and `SELECT ON TABLE table_name` to the analyst principal/group",
      "Granting `ALL PRIVILEGES` on the root cloud storage account container",
      "Assigning cluster owner administrative role to every analyst account",
      "Exporting data files to an unencrypted public web directory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "In Unity Catalog's 3-level namespace (catalog.schema.table), users require USE CATALOG on the catalog, USE SCHEMA on the schema, and SELECT on the target securable table.",
    "id": "de-assoc_94"
  },
  {
    "d": "GOV",
    "q": "Unity Catalog & Security Item 7: A data engineer needs to grant a reporting analyst team read-only access to select tables in a specific schema within a Unity Catalog 3-level namespace. Which privilege should be granted?",
    "o": [
      "`USE CATALOG catalog_name`, `USE SCHEMA schema_name`, and `SELECT ON TABLE table_name` to the analyst principal/group",
      "Granting `ALL PRIVILEGES` on the root cloud storage account container",
      "Assigning cluster owner administrative role to every analyst account",
      "Exporting data files to an unencrypted public web directory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "In Unity Catalog's 3-level namespace (catalog.schema.table), users require USE CATALOG on the catalog, USE SCHEMA on the schema, and SELECT on the target securable table.",
    "id": "de-assoc_95"
  },
  {
    "d": "GOV",
    "q": "Unity Catalog & Security Item 8: A data engineer needs to grant a reporting analyst team read-only access to select tables in a specific schema within a Unity Catalog 3-level namespace. Which privilege should be granted?",
    "o": [
      "`USE CATALOG catalog_name`, `USE SCHEMA schema_name`, and `SELECT ON TABLE table_name` to the analyst principal/group",
      "Granting `ALL PRIVILEGES` on the root cloud storage account container",
      "Assigning cluster owner administrative role to every analyst account",
      "Exporting data files to an unencrypted public web directory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "In Unity Catalog's 3-level namespace (catalog.schema.table), users require USE CATALOG on the catalog, USE SCHEMA on the schema, and SELECT on the target securable table.",
    "id": "de-assoc_96"
  },
  {
    "d": "GOV",
    "q": "Unity Catalog & Security Item 9: A data engineer needs to grant a reporting analyst team read-only access to select tables in a specific schema within a Unity Catalog 3-level namespace. Which privilege should be granted?",
    "o": [
      "`USE CATALOG catalog_name`, `USE SCHEMA schema_name`, and `SELECT ON TABLE table_name` to the analyst principal/group",
      "Granting `ALL PRIVILEGES` on the root cloud storage account container",
      "Assigning cluster owner administrative role to every analyst account",
      "Exporting data files to an unencrypted public web directory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "In Unity Catalog's 3-level namespace (catalog.schema.table), users require USE CATALOG on the catalog, USE SCHEMA on the schema, and SELECT on the target securable table.",
    "id": "de-assoc_97"
  },
  {
    "d": "GOV",
    "q": "Unity Catalog & Security Item 10: A data engineer needs to grant a reporting analyst team read-only access to select tables in a specific schema within a Unity Catalog 3-level namespace. Which privilege should be granted?",
    "o": [
      "`USE CATALOG catalog_name`, `USE SCHEMA schema_name`, and `SELECT ON TABLE table_name` to the analyst principal/group",
      "Granting `ALL PRIVILEGES` on the root cloud storage account container",
      "Assigning cluster owner administrative role to every analyst account",
      "Exporting data files to an unencrypted public web directory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "In Unity Catalog's 3-level namespace (catalog.schema.table), users require USE CATALOG on the catalog, USE SCHEMA on the schema, and SELECT on the target securable table.",
    "id": "de-assoc_98"
  },
  {
    "d": "GOV",
    "q": "Unity Catalog & Security Item 11: A data engineer needs to grant a reporting analyst team read-only access to select tables in a specific schema within a Unity Catalog 3-level namespace. Which privilege should be granted?",
    "o": [
      "`USE CATALOG catalog_name`, `USE SCHEMA schema_name`, and `SELECT ON TABLE table_name` to the analyst principal/group",
      "Granting `ALL PRIVILEGES` on the root cloud storage account container",
      "Assigning cluster owner administrative role to every analyst account",
      "Exporting data files to an unencrypted public web directory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "In Unity Catalog's 3-level namespace (catalog.schema.table), users require USE CATALOG on the catalog, USE SCHEMA on the schema, and SELECT on the target securable table.",
    "id": "de-assoc_99"
  },
  {
    "d": "GOV",
    "q": "Unity Catalog & Security Item 12: A data engineer needs to grant a reporting analyst team read-only access to select tables in a specific schema within a Unity Catalog 3-level namespace. Which privilege should be granted?",
    "o": [
      "`USE CATALOG catalog_name`, `USE SCHEMA schema_name`, and `SELECT ON TABLE table_name` to the analyst principal/group",
      "Granting `ALL PRIVILEGES` on the root cloud storage account container",
      "Assigning cluster owner administrative role to every analyst account",
      "Exporting data files to an unencrypted public web directory"
    ],
    "a": [
      0
    ],
    "multi": false,
    "e": "In Unity Catalog's 3-level namespace (catalog.schema.table), users require USE CATALOG on the catalog, USE SCHEMA on the schema, and SELECT on the target securable table.",
    "id": "de-assoc_100"
  }
]
};

export default DB_DE_ASSOC;
