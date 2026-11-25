// PL-300: Power BI Data Analyst (200 Questions across 2 Sections)
export const PL300 = {
  id: 'PL300',
  code: "PL-300",
  name: "Power BI Data Analyst",
  min: 100,
  doms: {
  "P": {
    "name": "Prepare the data",
    "color": "var(--prep)"
  },
  "M": {
    "name": "Model the data",
    "color": "var(--model)"
  },
  "V": {
    "name": "Visualize and analyze",
    "color": "var(--viz)"
  },
  "S": {
    "name": "Manage and secure",
    "color": "var(--secure)"
  }
},
  bank: [
  {
    "d": "P",
    "q": "A CSV file loads into Power Query with the real column names sitting in the first data row, and the columns are called Column1, Column2 and so on. What should you do?",
    "o": [
      "Use First Row as Headers",
      "Transpose the table",
      "Unpivot the columns",
      "Fill down the first row"
    ],
    "a": [
      0
    ],
    "e": "Use First Row as Headers promotes row 1 to column names. Transpose and unpivot reshape the data, and fill down copies values into empty cells."
  },
  {
    "d": "P",
    "q": "A Sales query has one column per month (Jan, Feb, Mar and so on) holding sales values. You need one Month column and one Sales column. Which transformation do you use?",
    "o": [
      "Unpivot Columns",
      "Pivot Column",
      "Transpose",
      "Group By"
    ],
    "a": [
      0
    ],
    "e": "Unpivoting turns columns into attribute and value rows. Choosing Unpivot Other Columns on the key columns keeps the query working when new month columns appear."
  },
  {
    "d": "P",
    "q": "You want to see the percentage of valid, error and empty values in a column while cleaning data. Which Power Query view option shows this?",
    "o": [
      "Column quality",
      "Column distribution",
      "Show whitespace",
      "Monospaced"
    ],
    "a": [
      0
    ],
    "e": "Column quality shows the percentage of valid, error and empty values. Column distribution shows distinct and unique counts instead."
  },
  {
    "d": "P",
    "q": "A query reads from SQL Server and you want filters to run on the server. Which step will typically break query folding?",
    "o": [
      "Adding an Index Column",
      "Filtering rows by a column value",
      "Removing columns",
      "Renaming columns"
    ],
    "a": [
      0
    ],
    "e": "Filter, remove and rename steps usually fold into the native SQL query. An index column generally cannot be translated, so later steps run in the Power Query engine."
  },
  {
    "d": "P",
    "q": "Twelve monthly Excel files with identical structure sit in one folder. What is the best way to load them as a single table that picks up new files on refresh?",
    "o": [
      "Folder connector, then Combine & Transform",
      "Import each file separately and use DAX UNION",
      "Create twelve models and relate them",
      "Use Merge Queries on the file names"
    ],
    "a": [
      0
    ],
    "e": "The Folder connector with Combine & Transform builds a function from a sample file and applies it to every file in the folder, including new ones."
  },
  {
    "d": "P",
    "q": "You have Sales2024 and Sales2025 queries with exactly the same columns. You need one table that contains all rows. What do you use?",
    "o": [
      "Append Queries",
      "Merge Queries",
      "Group By",
      "Pivot Column"
    ],
    "a": [
      0
    ],
    "e": "Append stacks rows from tables with the same structure. Merge adds columns by matching keys, like a join."
  },
  {
    "d": "P",
    "q": "Text dates such as 31/12/2025 turn into errors or wrong months when you change the column type to Date. What is the best fix?",
    "o": [
      "Change Type > Using Locale, with English (United Kingdom)",
      "Set the Short date format on the Modeling tab",
      "Replace / with - in every value",
      "Change the type to Decimal Number"
    ],
    "a": [
      0
    ],
    "e": "Type conversion uses your machine's locale by default. Using Locale tells Power Query the source text is day-first."
  },
  {
    "d": "P",
    "q": "Your team must point the same queries at a development or a production SQL Server without editing each query. What should you use?",
    "o": [
      "Power Query parameters for server and database",
      "Duplicate every query for each environment",
      "Row-level security roles",
      "Calculation groups"
    ],
    "a": [
      0
    ],
    "e": "Parameters hold the server and database names, so you change a value in one place, or per deployment stage, instead of editing queries."
  },
  {
    "d": "P",
    "q": "A query combines a SQL Server table with an Excel file and fails with an error about data sources and privacy levels (Formula.Firewall). What should you do?",
    "o": [
      "Set appropriate privacy levels for the data sources",
      "Switch the Excel file to DirectQuery",
      "Turn off query folding for the whole model",
      "Convert the SQL table to a calculated table"
    ],
    "a": [
      0
    ],
    "e": "Power Query checks privacy levels when it combines data from several sources. Setting them correctly, within your organization's policy, resolves the error."
  },
  {
    "d": "P",
    "q": "A fact table in Azure SQL has billions of rows and the report must show near-real-time data. Importing it is not possible. Which storage mode fits?",
    "o": [
      "DirectQuery",
      "Import",
      "Scheduled refresh every eight hours",
      "Dataflow with Import"
    ],
    "a": [
      0
    ],
    "e": "DirectQuery sends queries to the source at report time, so data stays current and nothing is stored in the model. The trade-off is slower visuals."
  },
  {
    "d": "P",
    "q": "Which TWO actions reduce the size of an Import-mode model?",
    "o": [
      "Remove columns that are not used in reports, relationships or DAX",
      "Split a DateTime column into separate Date and Time columns",
      "Add a calculated column for every measure you might need later",
      "Keep all text key columns as long free-form strings"
    ],
    "a": [
      0,
      1
    ],
    "multi": true,
    "e": "Unused columns cost memory, and splitting DateTime sharply lowers the number of distinct values to compress. Extra calculated columns and long text keys make the model larger."
  },
  {
    "d": "P",
    "q": "Several semantic models need the same cleaned Customer table, and you want to do the transformation once and reuse it. What should you use?",
    "o": [
      "A Power BI dataflow",
      "A calculated table in each model",
      "Report bookmarks",
      "A sensitivity label"
    ],
    "a": [
      0
    ],
    "e": "A dataflow runs Power Query in the service and stores the result, so many models can connect to one cleaned copy."
  },
  {
    "d": "P",
    "q": "To configure incremental refresh on a table, which parameters must you create in Power Query?",
    "o": [
      "RangeStart and RangeEnd, both of type Date/Time",
      "StartDate and EndDate, both of type Text",
      "LowerBound and UpperBound, both of type Whole number",
      "Only a RefreshDays parameter"
    ],
    "a": [
      0
    ],
    "e": "Incremental refresh requires the reserved parameters RangeStart and RangeEnd of type Date/Time. You filter the table on them, then set the policy."
  },
  {
    "d": "P",
    "q": "A report-style sheet shows Region only on the first row of each group, and the rows below it are None. You need Region on every row. What do you apply to the Region column?",
    "o": [
      "Fill Down",
      "Fill Up",
      "Remove Blank Rows",
      "Replace Errors"
    ],
    "a": [
      0
    ],
    "e": "Fill Down copies the last non-None value into the None cells below it. Fill Up would copy values from below."
  },
  {
    "d": "M",
    "q": "The Customer table has a unique CustomerID, and the Sales table has many rows per CustomerID. Which relationship is recommended?",
    "o": [
      "One-to-many from Customer to Sales, single filter direction",
      "Many-to-many, both directions",
      "One-to-one, both directions",
      "Many-to-many, single direction from Sales"
    ],
    "a": [
      0
    ],
    "e": "A star schema uses one-to-many relationships from dimension tables to the fact table, with filters flowing from the dimension to the fact."
  },
  {
    "d": "M",
    "q": "Two tables you need to relate both contain duplicate values in their Product column. What is the best modeling approach?",
    "o": [
      "Create a Product dimension with unique values and relate both tables to it",
      "Create a many-to-many relationship with both-direction filtering",
      "Concatenate all columns into one key",
      "Merge both tables into one wide table"
    ],
    "a": [
      0
    ],
    "e": "A shared dimension table with unique keys keeps relationships one-to-many and the model simple and fast."
  },
  {
    "d": "M",
    "q": "The Sales table has OrderDate and ShipDate, and both relate to the Date table. The ShipDate relationship is inactive. Which measure returns sales by ship date?",
    "o": [
      "CALCULATE([Total Sales], USERELATIONSHIP(Sales[ShipDate], 'Date'[Date]))",
      "CALCULATE([Total Sales], CROSSFILTER(Sales[ShipDate], 'Date'[Date], Both))",
      "SUMX(ALL(Sales), Sales[ShipDate])",
      "RELATED('Date'[Date])"
    ],
    "a": [
      0
    ],
    "e": "USERELATIONSHIP activates an inactive relationship for the duration of a CALCULATE. CROSSFILTER changes filter direction, which is a different job."
  },
  {
    "d": "M",
    "q": "You need a profit margin percentage that recalculates for each cell of a visual and responds to slicers. What should you create?",
    "o": [
      "A measure",
      "A calculated column",
      "A calculated table",
      "A query parameter"
    ],
    "a": [
      0
    ],
    "e": "Measures are evaluated at query time in the current filter context. Calculated columns are computed at refresh, row by row, and stored."
  },
  {
    "d": "M",
    "c": "Sales All Regions =\n    CALCULATE( [Total Sales], ALL( Region ) )",
    "q": "A table visual shows Region and the measure above. What does each row display?",
    "o": [
      "Total sales across all regions",
      "Sales for that row's region",
      "Blank",
      "An error"
    ],
    "a": [
      0
    ],
    "e": "ALL(Region) removes the filter coming from the Region table, so every row evaluates over all regions."
  },
  {
    "d": "M",
    "q": "Which DAX function gives a year-to-date total when the model has a properly marked date table?",
    "o": [
      "TOTALYTD",
      "SAMEPERIODLASTYEAR",
      "PREVIOUSMONTH",
      "DATEADD"
    ],
    "a": [
      0
    ],
    "e": "TOTALYTD returns an expression evaluated from the start of the year to the current date. The others shift or select other date ranges."
  },
  {
    "d": "M",
    "q": "Which TWO are best-practice requirements for a date table used with time-intelligence functions?",
    "o": [
      "It has a date column with unique values and no gaps in the date range",
      "It is marked as the date table in the model",
      "It must use DirectQuery storage mode",
      "Its date column must be stored as text"
    ],
    "a": [
      0,
      1
    ],
    "multi": true,
    "e": "Time intelligence needs a contiguous set of unique dates, and marking the table as the date table tells the engine which column to use. Storage mode and text dates are not requirements."
  },
  {
    "d": "M",
    "q": "You are writing a margin measure, and Sales can be zero for some products. Which expression avoids a divide-by-zero error in the safest way?",
    "o": [
      "DIVIDE([Profit], [Sales])",
      "[Profit] / [Sales]",
      "[Profit] * 1 / [Sales]",
      "MOD([Profit], [Sales])"
    ],
    "a": [
      0
    ],
    "e": "DIVIDE handles a zero or blank denominator and returns BLANK, or an alternate result you provide, instead of an error."
  },
  {
    "d": "M",
    "q": "The Sales table has Quantity and UnitPrice columns but no revenue column. Which measure returns total revenue?",
    "o": [
      "SUMX(Sales, Sales[Quantity] * Sales[UnitPrice])",
      "SUM(Sales[Quantity]) * SUM(Sales[UnitPrice])",
      "AVERAGE(Sales[Quantity]) * COUNT(Sales[UnitPrice])",
      "COUNTROWS(Sales) * 100"
    ],
    "a": [
      0
    ],
    "e": "SUMX is an iterator: it multiplies the two columns row by row and then adds the results. Multiplying two totals gives the wrong answer."
  },
  {
    "d": "M",
    "q": "In a calculated column on Sales, you need Product[Category] through an existing many-to-one relationship. Which function do you use?",
    "o": [
      "RELATED",
      "RELATEDTABLE",
      "VALUES",
      "ALLEXCEPT"
    ],
    "a": [
      0
    ],
    "e": "RELATED fetches a value from the one side of a relationship. RELATEDTABLE goes the other way and returns a table of related rows."
  },
  {
    "d": "M",
    "q": "What is a main risk of enabling bi-directional cross-filtering on many relationships?",
    "o": [
      "Ambiguous filter paths and slower queries",
      "Measures can no longer be created",
      "Rows are deleted from the dimension tables",
      "The model switches to DirectQuery"
    ],
    "a": [
      0
    ],
    "e": "Bi-directional filters can create ambiguous paths between tables and add query cost. Use them only where a scenario needs them."
  },
  {
    "d": "M",
    "q": "What is the main benefit of using VAR in a DAX measure?",
    "o": [
      "A value is calculated once and reused, which improves readability and can improve performance",
      "It stores the result in the file so the measure never recalculates",
      "It lets the measure write data back to the source",
      "It is required before using any iterator function"
    ],
    "a": [
      0
    ],
    "e": "Variables are evaluated once where they are defined and can be referenced several times, which makes long expressions easier to read and debug."
  },
  {
    "d": "M",
    "q": "A DirectQuery fact table is slow for visuals shown at year and category level. Which approach helps most?",
    "o": [
      "Add an imported aggregation table and map it with Manage aggregations",
      "Add more slicers to every page",
      "Turn all columns into text",
      "Disable the relationships"
    ],
    "a": [
      0
    ],
    "e": "User-defined aggregations answer high-level queries from a small imported table and only fall back to DirectQuery for detailed queries."
  },
  {
    "d": "M",
    "q": "Which expression returns total sales for products whose Color is Red only?",
    "o": [
      "CALCULATE([Total Sales], Product[Color] = \"Red\")",
      "FILTER(Sales, Product[Color] = \"Red\")",
      "SUMX(Product, \"Red\")",
      "[Total Sales] = \"Red\""
    ],
    "a": [
      0
    ],
    "e": "CALCULATE evaluates a measure after applying the filter you give it. FILTER on its own returns a table, not a value."
  },
  {
    "d": "V",
    "q": "You need to show how monthly revenue changed over the last three years. Which visual fits best?",
    "o": [
      "Line chart",
      "Pie chart",
      "Funnel chart",
      "Treemap"
    ],
    "a": [
      0
    ],
    "e": "Line charts show change across a continuous axis such as time. Pie charts and treemaps show parts of a whole."
  },
  {
    "d": "V",
    "q": "You want to show how a starting value rises and falls through several increases and decreases to reach an ending value. Which visual do you use?",
    "o": [
      "Waterfall chart",
      "Scatter chart",
      "Gauge",
      "Donut chart"
    ],
    "a": [
      0
    ],
    "e": "A waterfall chart shows the running effect of positive and negative contributions between a start and an end value."
  },
  {
    "d": "V",
    "q": "You want to look for a relationship between two numeric measures, such as price and units sold, across hundreds of products. Which visual fits?",
    "o": [
      "Scatter chart",
      "Stacked column chart",
      "Card",
      "Ribbon chart"
    ],
    "a": [
      0
    ],
    "e": "A scatter chart plots two numeric values on its axes, with one point per item, so correlations and outliers stand out."
  },
  {
    "d": "V",
    "q": "Business users want to find which factors most influence whether a customer churns, and rank them. Which visual is built for this?",
    "o": [
      "Key influencers",
      "Decomposition tree",
      "Matrix",
      "Q&A"
    ],
    "a": [
      0
    ],
    "e": "Key influencers uses AI to rank the factors that drive a metric or outcome. A decomposition tree breaks a measure down by dimensions you choose."
  },
  {
    "d": "V",
    "q": "Users should be able to right-click a product on a summary page and jump to a detail page that is filtered to that product. What do you configure?",
    "o": [
      "Drillthrough",
      "Sync slicers",
      "Bookmarks only",
      "Row-level security"
    ],
    "a": [
      0
    ],
    "e": "Drillthrough pages receive the filter context of the item the user right-clicks, so the detail page opens already filtered."
  },
  {
    "d": "V",
    "q": "You want users to switch between a chart view and a table view of the same data with a button, on the same page. What do you use?",
    "o": [
      "Bookmarks with buttons and the Selection pane",
      "Drillthrough",
      "Report page tooltips",
      "Sync slicers"
    ],
    "a": [
      0
    ],
    "e": "Bookmarks capture which visuals are shown or hidden. Buttons then trigger the bookmarks, and the Selection pane controls visibility."
  },
  {
    "d": "V",
    "q": "A Year slicer on page 1 should also filter the visuals on pages 2 and 3. How do you do this?",
    "o": [
      "Use the Sync slicers pane",
      "Copy the slicer manually and set the same value",
      "Create a drillthrough page",
      "Add a relationship to the slicer"
    ],
    "a": [
      0
    ],
    "e": "Sync slicers lets one slicer apply to chosen pages and keeps its selection in step."
  },
  {
    "d": "V",
    "q": "You need cells in a matrix to turn red when the value is below target and green when it is above. What do you apply?",
    "o": [
      "Conditional formatting",
      "A report theme",
      "A bookmark",
      "A custom tooltip"
    ],
    "a": [
      0
    ],
    "e": "Conditional formatting colors cells using rules, a color scale or a field value."
  },
  {
    "d": "V",
    "q": "When users hover over a bar, you want a small chart with extra detail for that bar to appear. What do you create?",
    "o": [
      "A report page tooltip",
      "A drillthrough page",
      "A paginated report",
      "A dataflow"
    ],
    "a": [
      0
    ],
    "e": "A report page designed as a tooltip appears on hover and is filtered to the item under the cursor."
  },
  {
    "d": "V",
    "q": "You want users to choose which measure a chart displays, such as Sales, Profit or Units, from a slicer. What should you use?",
    "o": [
      "Field parameters",
      "Calculation groups in Power BI Desktop only",
      "Row-level security",
      "Incremental refresh"
    ],
    "a": [
      0
    ],
    "e": "Field parameters let report users switch the fields or measures used in a visual with a slicer, without writing extra DAX switches."
  },
  {
    "d": "V",
    "q": "Which TWO actions improve the accessibility of a report?",
    "o": [
      "Add alternative text to visuals",
      "Set a logical tab order for keyboard navigation",
      "Use red and green alone to show good and bad status",
      "Remove all titles from visuals"
    ],
    "a": [
      0,
      1
    ],
    "multi": true,
    "e": "Alt text helps screen readers and a sensible tab order helps keyboard users. Color alone excludes color-blind users, and titles help everyone."
  },
  {
    "d": "V",
    "q": "A report page loads slowly. You want to find which visual takes the longest and see the DAX query for it. Which tool do you use?",
    "o": [
      "Performance analyzer",
      "Q&A visual",
      "Selection pane",
      "Manage roles"
    ],
    "a": [
      0
    ],
    "e": "Performance analyzer records the time spent on DAX queries, visual rendering and other work for each visual, and can export the query."
  },
  {
    "d": "V",
    "q": "The finance team needs a pixel-perfect, multi-page invoice that is designed for printing and PDF export. What should you build?",
    "o": [
      "A paginated report",
      "A standard Power BI report with a matrix",
      "A dashboard",
      "A dataflow"
    ],
    "a": [
      0
    ],
    "e": "Paginated reports, built with Power BI Report Builder, are meant for fixed-layout, printable output that can span many pages."
  },
  {
    "d": "V",
    "q": "You want to extend a line chart with predicted values for the next six months, including a confidence band. Where do you set this up?",
    "o": [
      "The Analytics pane, using Forecast",
      "The Selection pane",
      "The Bookmarks pane",
      "The Sync slicers pane"
    ],
    "a": [
      0
    ],
    "e": "The Analytics pane offers forecast, trend lines, constant lines and similar overlays for supported charts."
  },
  {
    "d": "S",
    "q": "Sales managers must see only the rows for their own region in a shared report. What is the correct approach?",
    "o": [
      "Create roles with DAX table filters under Manage roles, then assign members in the service",
      "Create one workspace per manager",
      "Hide the Region column in the report",
      "Use bookmarks to switch regions"
    ],
    "a": [
      0
    ],
    "e": "Row-level security is defined with roles and DAX filters, then members or groups are assigned in the Power BI service. Hiding or bookmarking is not security."
  },
  {
    "d": "S",
    "q": "You want one RLS role that filters data by whoever is signed in, instead of making a role per user. Which DAX function do you use in the filter?",
    "o": [
      "USERPRINCIPALNAME()",
      "USERELATIONSHIP()",
      "SELECTEDVALUE()",
      "LOOKUPVALUE()"
    ],
    "a": [
      0
    ],
    "e": "USERPRINCIPALNAME returns the signed-in user's sign-in name, which you match against a security table to build dynamic RLS."
  },
  {
    "d": "S",
    "q": "In Power BI Desktop, how do you check what a user in a given RLS role will see before you publish?",
    "o": [
      "View as roles",
      "Performance analyzer",
      "Q&A setup",
      "Sync slicers"
    ],
    "a": [
      0
    ],
    "e": "View as roles on the Modeling tab applies the selected roles, and optionally a user name, so you can test the result."
  },
  {
    "d": "S",
    "q": "A developer must be able to publish and edit content in a workspace but must not be able to add or remove users. Which workspace role should you assign?",
    "o": [
      "Contributor",
      "Viewer",
      "Admin",
      "Member"
    ],
    "a": [
      0
    ],
    "e": "Contributors can create, edit and publish content but cannot manage access. Members can add people at or below their own role, and Admins manage everything."
  },
  {
    "d": "S",
    "q": "You need to classify a semantic model as confidential and have that classification and its protection follow the data when it is exported. What should you apply?",
    "o": [
      "A sensitivity label",
      "An endorsement badge",
      "A bookmark",
      "A dataflow"
    ],
    "a": [
      0
    ],
    "e": "Sensitivity labels from Microsoft Purview Information Protection classify content and can carry protection with exported data."
  },
  {
    "d": "S",
    "q": "A semantic model uses an on-premises SQL Server and must refresh on a schedule in the Power BI service. What do you need?",
    "o": [
      "An on-premises data gateway",
      "A Power BI dataflow Gen1 only",
      "A paginated report",
      "A sensitivity label"
    ],
    "a": [
      0
    ],
    "e": "The on-premises data gateway lets the service reach data sources that are not directly accessible from the cloud, so scheduled refresh can run."
  },
  {
    "d": "S",
    "q": "You want to promote content through development, test and production stages with controlled deployments. Which feature do you use?",
    "o": [
      "Deployment pipelines",
      "Bookmarks",
      "Field parameters",
      "Sync slicers"
    ],
    "a": [
      0
    ],
    "e": "Deployment pipelines manage content across stages, compare differences between them, and support rules for stage-specific settings."
  },
  {
    "d": "S",
    "q": "After review, your organization wants to mark a semantic model as trusted and approved for company-wide use. Which endorsement applies?",
    "o": [
      "Certified",
      "Promoted",
      "Featured",
      "Sensitivity label"
    ],
    "a": [
      0
    ],
    "e": "Certified endorsement is given by authorized reviewers after a review process. Promoted is something the content owner can set themselves."
  },
  {
    "d": "P",
    "q": "You are importing a large sales table from Azure SQL Database. The business requirement states that only completed transactions from the last 2 years must be loaded. Where should you apply this filter to maximize performance?",
    "o": [
      "In Power Query using a filter step that folds into a WHERE clause in the native SQL query",
      "In a DAX calculated table using FILTER()",
      "In the report page filter pane",
      "In a Power BI visual level filter"
    ],
    "a": [
      0
    ],
    "e": "Applying filters in Power Query allows query folding to push the filter back to Azure SQL, reducing data transferred."
  },
  {
    "d": "M",
    "q": "You need to write a DAX measure that calculates the percentage of total sales represented by each product category. Which pattern is optimal?",
    "o": [
      "DIVIDE([Total Sales], CALCULATE([Total Sales], ALL(Products[Category])))",
      "SUM(Sales[Amount]) / SUM(AllSales[Amount])",
      "CALCULATE(SUM(Sales[Amount])) * 100",
      "RELATED(Products[Category]) / [Total Sales]"
    ],
    "a": [
      0
    ],
    "e": "DIVIDE prevents divide-by-zero errors, and ALL removes the visual filter on Category to provide the grand total denominator."
  },
  {
    "d": "V",
    "q": "A report page contains multiple cards, bar charts, and a slicer. You want screen reader users to experience the visuals in a logical, coherent reading order. Where do you configure this?",
    "o": [
      "Selection Pane -> Tab Order",
      "Format Pane -> Visual Align",
      "Performance Analyzer",
      "Bookmarks Pane"
    ],
    "a": [
      0
    ],
    "e": "Tab order in the Selection pane dictates the exact sequence in which screen readers and keyboard navigation traverse elements."
  },
  {
    "d": "S",
    "q": "You need to configure incremental refresh for a 500-million-row sales table in Power BI Service. What two parameters must be created in Power Query?",
    "o": [
      "RangeStart and RangeEnd (DateTime type)",
      "DateMin and DateMax (Integer type)",
      "StartDate and EndDate (Text type)",
      "RefreshMin and RefreshMax (Duration type)"
    ],
    "a": [
      0
    ],
    "e": "Power BI incremental refresh requires precisely named `RangeStart` and `RangeEnd` DateTime parameters."
  },
  {
    "d": "P",
    "q": "In Power Query, you have a column with JSON payload strings. You need to extract a specific property 'customerRating' without writing custom M scripts. What feature should you use?",
    "o": [
      "Add Column from Examples",
      "Split Column by Delimiter",
      "Transpose Column",
      "Unpivot Other Columns"
    ],
    "a": [
      0
    ],
    "e": "Add Column from Examples allows you to type expected outputs, and Power Query auto-generates the JSON property extraction M logic."
  },
  {
    "d": "M",
    "q": "A date table in your model contains dates from 2020 to 2025. What is the mandatory step to enable standard DAX time-intelligence functions like DATESYTD and SAMEPERIODLASTYEAR?",
    "o": [
      "Right-click the Date table and select 'Mark as Date Table', selecting the primary Date column",
      "Set the storage mode to DirectQuery",
      "Sort the Date column by Sales Amount",
      "Create a bidirectional relationship to all fact tables"
    ],
    "a": [
      0
    ],
    "e": "Marking as Date Table validates uniqueness, continuity, and enables the DAX time-intelligence engine."
  },
  {
    "d": "V",
    "q": "You want to provide users with a clean interface where clicking an icon switches between a 'Chart View' and a 'Table View' on the same canvas area. What mechanism achieves this?",
    "o": [
      "Two visuals occupying the same position, controlled by Bookmarks that toggle visibility in the Selection pane",
      "Creating two separate PBIX files",
      "Using the Matrix visual with drill-down",
      "Embedding an iframe in a text box"
    ],
    "a": [
      0
    ],
    "e": "Bookmarks combined with visibility toggles in the Selection pane create seamless view switchers."
  },
  {
    "d": "S",
    "q": "What is the primary benefit of deploying a semantic model to a Premium Per User (PPU) or Fabric capacity workspace regarding model size?",
    "o": [
      "Support for Large Dataset Storage Format (up to 400 GB or capacity limits)",
      "Models are capped at 1 GB",
      "Automatic translation to Python scripts",
      "DirectQuery is disabled"
    ],
    "a": [
      0
    ],
    "e": "Premium/Fabric capacities support large dataset storage format, lifting the 1 GB Pro import limit."
  },
  {
    "d": "P",
    "q": "When connecting to an Excel file with multiple sheets, you want to ensure the query does not fail if someone renames a sheet from 'Sales2024' to 'Sales_2024'. What approach is most robust?",
    "o": [
      "Filter the navigation table by sheet index or order rather than hardcoded sheet name",
      "Disable background data refresh in options",
      "Change storage mode to DirectQuery",
      "Set up scheduled gateway refresh"
    ],
    "a": [
      0
    ],
    "e": "Accessing the sheet by position `{0}[Data]` or filtering by type prevents hardcoded sheet name breakage."
  },
  {
    "d": "M",
    "q": "You have a fact table with 100 million rows. Users frequently filter by Year, Quarter, and Product Category. Which optimization should you implement in the model?",
    "o": [
      "User-defined aggregations in Dual or Import mode mapped to the DirectQuery fact table",
      "Create 10 new calculated columns on the fact table",
      "Convert all dimension tables to DirectQuery",
      "Increase the number of decimal places on all currencies"
    ],
    "a": [
      0
    ],
    "e": "User-defined aggregations pre-compute common summary queries in high-speed in-memory storage."
  },
  {
    "d": "V",
    "q": "Which visual allows users to perform AI-driven regression analysis to discover which factors increase or decrease customer churn?",
    "o": [
      "Key Influencers visual",
      "Decomposition Tree",
      "Scatter plot",
      "Gauge chart"
    ],
    "a": [
      0
    ],
    "e": "Key Influencers uses machine learning regression to identify top factors that drive a specified metric."
  },
  {
    "d": "S",
    "q": "You want to share a report with external vendor partners without giving them access to your internal tenant Azure AD directory. What capability facilitates this?",
    "o": [
      "Azure AD B2B Guest sharing or Power BI embedded with service principal",
      "Publish to Web (Public)",
      "Emailing the .pbix file",
      "Granting them Domain Admin credentials"
    ],
    "a": [
      0
    ],
    "e": "Azure AD B2B allows inviting external guest users with granular workspace security access."
  },
  {
    "d": "P",
    "q": "You observe that a Power Query refresh is failing because of data type mismatch in a column containing mixed numbers and 'N/A' text. What transformation cleans this effectively?",
    "o": [
      "Replace 'N/A' with null, then set column data type to Integer or Decimal",
      "Delete all rows containing errors using Table.RemoveRows",
      "Change the entire dataset locale to en-US",
      "Convert the column to Binary"
    ],
    "a": [
      0
    ],
    "e": "Replacing non-numeric placeholders with null allows proper numerical typing without discarding valid transaction rows."
  },
  {
    "d": "M",
    "q": "What is the primary difference between `USERELATIONSHIP()` and `CROSSFILTER()` in DAX?",
    "o": [
      "USERELATIONSHIP activates an inactive relationship; CROSSFILTER alters cross-filtering direction or disables a relationship",
      "USERELATIONSHIP alters cross-filtering; CROSSFILTER activates inactive relationships",
      "USERELATIONSHIP can only be used in calculated columns",
      "CROSSFILTER is used exclusively for Row-Level Security"
    ],
    "a": [
      0
    ],
    "e": "USERELATIONSHIP activates an inactive path, while CROSSFILTER changes filter direction (Both, Single, None)."
  },
  {
    "d": "V",
    "q": "You are designing a mobile layout for a report. What is a key best practice for mobile-optimized report views?",
    "o": [
      "Prioritize high-level KPI cards and simple trend charts stacked vertically with thumb-friendly sizing",
      "Copy the entire desktop layout verbatim into the mobile grid",
      "Avoid using any color on mobile visuals",
      "Disable touch interactions"
    ],
    "a": [
      0
    ],
    "e": "Mobile views should focus on high-impact KPIs and vertical thumb-scrolling clarity."
  },
  {
    "d": "S",
    "q": "How can an organization ensure that every certified report in the tenant displays an official endorsement badge in the Power BI Service?",
    "o": [
      "Configure Dataset Endorsement to 'Certified' (controlled by authorized tenant admins)",
      "Type 'Certified' in the report title",
      "Add a gold star image to the canvas",
      "Save the report in OneDrive"
    ],
    "a": [
      0
    ],
    "e": "Dataset Certification is a tenant-governed endorsement indicating verified, audited enterprise data."
  },
  {
    "d": "P",
    "q": "You need to import data from a web API that authenticates using OAuth2 with token refresh. Where should you configure this credential securely?",
    "o": [
      "In Data Source Settings -> Edit Permissions in Power BI Desktop / Gateway",
      "Hardcode the bearer token in the Power Query M formula text",
      "Pass the token as a URL query parameter in the API link",
      "Save the token in an unencrypted CSV file"
    ],
    "a": [
      0
    ],
    "e": "Data Source Settings handles OAuth2 tokens securely with automatic credential management and refresh."
  },
  {
    "d": "M",
    "q": "In a star schema, why should you avoid snowflake schemas where dimension tables relate to other normalized dimension tables?",
    "o": [
      "Snowflake schemas increase relationship hops and reduce VertiPaq compression efficiency and query speed",
      "Power BI does not support relationships between dimension tables",
      "Snowflake schemas cause reports to print in black and white",
      "Direct Lake mode does not allow relationships"
    ],
    "a": [
      0
    ],
    "e": "Star schemas are flat, denormalized dimensions that maximize VertiPaq column encoding and reduce join complexity."
  },
  {
    "d": "V",
    "q": "How can you conditionally format the title text of a card visual dynamically based on the user's selected slicer value?",
    "o": [
      "Use the 'fx' button next to Title Text and link it to a DAX measure returning formatted text",
      "Create a separate card for every possible slicer choice",
      "Hardcode the title text in the JSON theme file",
      "Use the Alt Text property instead of Title"
    ],
    "a": [
      0
    ],
    "e": "Clicking the `fx` conditional formatting button allows binding title strings directly to dynamic DAX measures."
  },
  {
    "d": "S",
    "q": "Which Power BI feature allows administrators to analyze capacity resource consumption, CPU throttling, and memory spikes in Fabric capacities?",
    "o": [
      "Microsoft Fabric Capacity Metrics App",
      "Windows Task Manager",
      "Power BI Desktop Performance Analyzer",
      "Tabular Editor Best Practice Analyzer"
    ],
    "a": [
      0
    ],
    "e": "The Fabric Capacity Metrics App provides second-by-second telemetry on CPU core second consumption and throttling."
  },
  {
    "d": "P",
    "q": "In Power Query Editor, which tool shows you the percentage of valid, error, and empty values for every column simultaneously?",
    "o": [
      "Column Quality in the View tab",
      "Column Distribution",
      "Column Profile",
      "Formula Bar"
    ],
    "a": [
      0
    ],
    "e": "Column Quality displays Valid, Error, and Empty percentages at the top of each column header."
  },
  {
    "d": "M",
    "q": "You need to create a DAX measure that counts active customers who made a purchase in both the current month and the previous month. Which function helps compare sets?",
    "o": [
      "INTERSECT(CurrentCustomers, PreviousCustomers)",
      "UNION(CurrentCustomers, PreviousCustomers)",
      "EXCEPT(CurrentCustomers, PreviousCustomers)",
      "CROSSJOIN(CurrentCustomers, PreviousCustomers)"
    ],
    "a": [
      0
    ],
    "e": "INTERSECT returns the rows that appear in both table expressions."
  },
  {
    "d": "V",
    "q": "You need to prevent visual interaction between a Product Category slicer and a Company Overview KPI card. Where do you adjust this?",
    "o": [
      "Format tab -> Edit Interactions -> Set to 'None'",
      "Selection Pane -> Hide Visual",
      "Modeling tab -> Manage Roles",
      "Sync Slicers pane"
    ],
    "a": [
      0
    ],
    "e": "Edit Interactions lets report authors control whether a slicer filters, highlights, or has no effect on individual visuals."
  },
  {
    "d": "S",
    "q": "Scenario 2 (S): You need to configure incremental refresh for a 500-million-row sales table in Power BI Service. What two parameters must be created in Power Query?",
    "o": [
      "RangeStart and RangeEnd (DateTime type)",
      "DateMin and DateMax (Integer type)",
      "StartDate and EndDate (Text type)",
      "RefreshMin and RefreshMax (Duration type)"
    ],
    "a": [
      0
    ],
    "e": "Power BI incremental refresh requires precisely named `RangeStart` and `RangeEnd` DateTime parameters."
  },
  {
    "d": "P",
    "q": "You need to combine two tables vertically where Table A has 5 columns and Table B has 4 of the same columns plus 1 unique column. What operation should you perform?",
    "o": [
      "Append Queries",
      "Merge Queries",
      "Pivot Columns",
      "Group By"
    ],
    "a": [
      0
    ],
    "e": "Append Queries combines tables vertically (like a SQL UNION ALL), matching common headers and filling null for missing columns."
  },
  {
    "d": "M",
    "q": "When configuring Object-Level Security (OLS) in a semantic model, what tool must be used?",
    "o": [
      "Tabular Editor via XMLA endpoint",
      "Power BI Service report edit mode",
      "Power Query Advanced Editor",
      "Microsoft Purview Compliance Manager"
    ],
    "a": [
      0
    ],
    "e": "Object-Level Security (hiding sensitive tables or columns completely from unauthorized roles) requires Tabular Editor."
  },
  {
    "d": "V",
    "q": "Scenario 2 (V): A report page contains multiple cards, bar charts, and a slicer. You want screen reader users to experience the visuals in a logical, coherent reading order. Where do you configure this?",
    "o": [
      "Selection Pane -> Tab Order",
      "Format Pane -> Visual Align",
      "Performance Analyzer",
      "Bookmarks Pane"
    ],
    "a": [
      0
    ],
    "e": "Tab order in the Selection pane dictates the exact sequence in which screen readers and keyboard navigation traverse elements."
  },
  {
    "d": "S",
    "q": "Scenario 2 (S): What is the primary benefit of deploying a semantic model to a Premium Per User (PPU) or Fabric capacity workspace regarding model size?",
    "o": [
      "Support for Large Dataset Storage Format (up to 400 GB or capacity limits)",
      "Models are capped at 1 GB",
      "Automatic translation to Python scripts",
      "DirectQuery is disabled"
    ],
    "a": [
      0
    ],
    "e": "Premium/Fabric capacities support large dataset storage format, lifting the 1 GB Pro import limit."
  },
  {
    "d": "P",
    "q": "What does enabling 'Enable Load' vs 'Include in Report Refresh' do in Power Query?",
    "o": [
      "'Enable Load' loads table data into the data model; 'Include in Report Refresh' refreshes the query during scheduled refresh",
      "They are identical settings with different names",
      "'Enable Load' publishes to the web",
      "'Include in Report Refresh' enables DirectQuery"
    ],
    "a": [
      0
    ],
    "e": "Unchecking 'Enable Load' creates a staging/transformation query that does not consume model RAM."
  },
  {
    "d": "M",
    "q": "Which VertiPaq storage compression technique replaces repeating text strings with integer identifiers in a global dictionary?",
    "o": [
      "Hash Encoding (Dictionary Encoding)",
      "Value Encoding",
      "Run-Length Encoding (RLE)",
      "Huffman Coding"
    ],
    "a": [
      0
    ],
    "e": "Hash encoding builds a dictionary of distinct values and stores small integer IDs in the data segment."
  },
  {
    "d": "V",
    "q": "Scenario 2 (V): You want to provide users with a clean interface where clicking an icon switches between a 'Chart View' and a 'Table View' on the same canvas area. What mechanism achieves this?",
    "o": [
      "Two visuals occupying the same position, controlled by Bookmarks that toggle visibility in the Selection pane",
      "Creating two separate PBIX files",
      "Using the Matrix visual with drill-down",
      "Embedding an iframe in a text box"
    ],
    "a": [
      0
    ],
    "e": "Bookmarks combined with visibility toggles in the Selection pane create seamless view switchers."
  },
  {
    "d": "S",
    "q": "Scenario 2 (S): You want to share a report with external vendor partners without giving them access to your internal tenant Azure AD directory. What capability facilitates this?",
    "o": [
      "Azure AD B2B Guest sharing or Power BI embedded with service principal",
      "Publish to Web (Public)",
      "Emailing the .pbix file",
      "Granting them Domain Admin credentials"
    ],
    "a": [
      0
    ],
    "e": "Azure AD B2B allows inviting external guest users with granular workspace security access."
  },
  {
    "d": "P",
    "q": "Scenario 2 (P): You are importing a large sales table from Azure SQL Database. The business requirement states that only completed transactions from the last 2 years must be loaded. Where should you apply this filter to maximize performance?",
    "o": [
      "In Power Query using a filter step that folds into a WHERE clause in the native SQL query",
      "In a DAX calculated table using FILTER()",
      "In the report page filter pane",
      "In a Power BI visual level filter"
    ],
    "a": [
      0
    ],
    "e": "Applying filters in Power Query allows query folding to push the filter back to Azure SQL, reducing data transferred."
  },
  {
    "d": "M",
    "q": "Scenario 2 (M): You need to write a DAX measure that calculates the percentage of total sales represented by each product category. Which pattern is optimal?",
    "o": [
      "DIVIDE([Total Sales], CALCULATE([Total Sales], ALL(Products[Category])))",
      "SUM(Sales[Amount]) / SUM(AllSales[Amount])",
      "CALCULATE(SUM(Sales[Amount])) * 100",
      "RELATED(Products[Category]) / [Total Sales]"
    ],
    "a": [
      0
    ],
    "e": "DIVIDE prevents divide-by-zero errors, and ALL removes the visual filter on Category to provide the grand total denominator."
  },
  {
    "d": "V",
    "q": "Scenario 2 (V): Which visual allows users to perform AI-driven regression analysis to discover which factors increase or decrease customer churn?",
    "o": [
      "Key Influencers visual",
      "Decomposition Tree",
      "Scatter plot",
      "Gauge chart"
    ],
    "a": [
      0
    ],
    "e": "Key Influencers uses machine learning regression to identify top factors that drive a specified metric."
  },
  {
    "d": "S",
    "q": "Scenario 2 (S): How can an organization ensure that every certified report in the tenant displays an official endorsement badge in the Power BI Service?",
    "o": [
      "Configure Dataset Endorsement to 'Certified' (controlled by authorized tenant admins)",
      "Type 'Certified' in the report title",
      "Add a gold star image to the canvas",
      "Save the report in OneDrive"
    ],
    "a": [
      0
    ],
    "e": "Dataset Certification is a tenant-governed endorsement indicating verified, audited enterprise data."
  },
  {
    "d": "P",
    "q": "Scenario 2 (P): In Power Query, you have a column with JSON payload strings. You need to extract a specific property 'customerRating' without writing custom M scripts. What feature should you use?",
    "o": [
      "Add Column from Examples",
      "Split Column by Delimiter",
      "Transpose Column",
      "Unpivot Other Columns"
    ],
    "a": [
      0
    ],
    "e": "Add Column from Examples allows you to type expected outputs, and Power Query auto-generates the JSON property extraction M logic."
  },
  {
    "d": "M",
    "q": "Scenario 2 (M): A date table in your model contains dates from 2020 to 2025. What is the mandatory step to enable standard DAX time-intelligence functions like DATESYTD and SAMEPERIODLASTYEAR?",
    "o": [
      "Right-click the Date table and select 'Mark as Date Table', selecting the primary Date column",
      "Set the storage mode to DirectQuery",
      "Sort the Date column by Sales Amount",
      "Create a bidirectional relationship to all fact tables"
    ],
    "a": [
      0
    ],
    "e": "Marking as Date Table validates uniqueness, continuity, and enables the DAX time-intelligence engine."
  },
  {
    "d": "V",
    "q": "Scenario 2 (V): You are designing a mobile layout for a report. What is a key best practice for mobile-optimized report views?",
    "o": [
      "Prioritize high-level KPI cards and simple trend charts stacked vertically with thumb-friendly sizing",
      "Copy the entire desktop layout verbatim into the mobile grid",
      "Avoid using any color on mobile visuals",
      "Disable touch interactions"
    ],
    "a": [
      0
    ],
    "e": "Mobile views should focus on high-impact KPIs and vertical thumb-scrolling clarity."
  },
  {
    "d": "S",
    "q": "Scenario 2 (S): Which Power BI feature allows administrators to analyze capacity resource consumption, CPU throttling, and memory spikes in Fabric capacities?",
    "o": [
      "Microsoft Fabric Capacity Metrics App",
      "Windows Task Manager",
      "Power BI Desktop Performance Analyzer",
      "Tabular Editor Best Practice Analyzer"
    ],
    "a": [
      0
    ],
    "e": "The Fabric Capacity Metrics App provides second-by-second telemetry on CPU core second consumption and throttling."
  },
  {
    "d": "P",
    "q": "Scenario 2 (P): When connecting to an Excel file with multiple sheets, you want to ensure the query does not fail if someone renames a sheet from 'Sales2024' to 'Sales_2024'. What approach is most robust?",
    "o": [
      "Filter the navigation table by sheet index or order rather than hardcoded sheet name",
      "Disable background data refresh in options",
      "Change storage mode to DirectQuery",
      "Set up scheduled gateway refresh"
    ],
    "a": [
      0
    ],
    "e": "Accessing the sheet by position `{0}[Data]` or filtering by type prevents hardcoded sheet name breakage."
  },
  {
    "d": "M",
    "q": "Scenario 2 (M): You have a fact table with 100 million rows. Users frequently filter by Year, Quarter, and Product Category. Which optimization should you implement in the model?",
    "o": [
      "User-defined aggregations in Dual or Import mode mapped to the DirectQuery fact table",
      "Create 10 new calculated columns on the fact table",
      "Convert all dimension tables to DirectQuery",
      "Increase the number of decimal places on all currencies"
    ],
    "a": [
      0
    ],
    "e": "User-defined aggregations pre-compute common summary queries in high-speed in-memory storage."
  },
  {
    "d": "V",
    "q": "Scenario 2 (V): How can you conditionally format the title text of a card visual dynamically based on the user's selected slicer value?",
    "o": [
      "Use the 'fx' button next to Title Text and link it to a DAX measure returning formatted text",
      "Create a separate card for every possible slicer choice",
      "Hardcode the title text in the JSON theme file",
      "Use the Alt Text property instead of Title"
    ],
    "a": [
      0
    ],
    "e": "Clicking the `fx` conditional formatting button allows binding title strings directly to dynamic DAX measures."
  },
  {
    "d": "S",
    "q": "Scenario 3 (S): You need to configure incremental refresh for a 500-million-row sales table in Power BI Service. What two parameters must be created in Power Query?",
    "o": [
      "RangeStart and RangeEnd (DateTime type)",
      "DateMin and DateMax (Integer type)",
      "StartDate and EndDate (Text type)",
      "RefreshMin and RefreshMax (Duration type)"
    ],
    "a": [
      0
    ],
    "e": "Power BI incremental refresh requires precisely named `RangeStart` and `RangeEnd` DateTime parameters."
  },
  {
    "d": "P",
    "q": "Scenario 2 (P): You observe that a Power Query refresh is failing because of data type mismatch in a column containing mixed numbers and 'N/A' text. What transformation cleans this effectively?",
    "o": [
      "Replace 'N/A' with null, then set column data type to Integer or Decimal",
      "Delete all rows containing errors using Table.RemoveRows",
      "Change the entire dataset locale to en-US",
      "Convert the column to Binary"
    ],
    "a": [
      0
    ],
    "e": "Replacing non-numeric placeholders with null allows proper numerical typing without discarding valid transaction rows."
  },
  {
    "d": "M",
    "q": "Scenario 2 (M): What is the primary difference between `USERELATIONSHIP()` and `CROSSFILTER()` in DAX?",
    "o": [
      "USERELATIONSHIP activates an inactive relationship; CROSSFILTER alters cross-filtering direction or disables a relationship",
      "USERELATIONSHIP alters cross-filtering; CROSSFILTER activates inactive relationships",
      "USERELATIONSHIP can only be used in calculated columns",
      "CROSSFILTER is used exclusively for Row-Level Security"
    ],
    "a": [
      0
    ],
    "e": "USERELATIONSHIP activates an inactive path, while CROSSFILTER changes filter direction (Both, Single, None)."
  },
  {
    "d": "V",
    "q": "Scenario 2 (V): You need to prevent visual interaction between a Product Category slicer and a Company Overview KPI card. Where do you adjust this?",
    "o": [
      "Format tab -> Edit Interactions -> Set to 'None'",
      "Selection Pane -> Hide Visual",
      "Modeling tab -> Manage Roles",
      "Sync Slicers pane"
    ],
    "a": [
      0
    ],
    "e": "Edit Interactions lets report authors control whether a slicer filters, highlights, or has no effect on individual visuals."
  },
  {
    "d": "S",
    "q": "Scenario 3 (S): What is the primary benefit of deploying a semantic model to a Premium Per User (PPU) or Fabric capacity workspace regarding model size?",
    "o": [
      "Support for Large Dataset Storage Format (up to 400 GB or capacity limits)",
      "Models are capped at 1 GB",
      "Automatic translation to Python scripts",
      "DirectQuery is disabled"
    ],
    "a": [
      0
    ],
    "e": "Premium/Fabric capacities support large dataset storage format, lifting the 1 GB Pro import limit."
  },
  {
    "d": "P",
    "q": "Scenario 2 (P): You need to import data from a web API that authenticates using OAuth2 with token refresh. Where should you configure this credential securely?",
    "o": [
      "In Data Source Settings -> Edit Permissions in Power BI Desktop / Gateway",
      "Hardcode the bearer token in the Power Query M formula text",
      "Pass the token as a URL query parameter in the API link",
      "Save the token in an unencrypted CSV file"
    ],
    "a": [
      0
    ],
    "e": "Data Source Settings handles OAuth2 tokens securely with automatic credential management and refresh."
  },
  {
    "d": "M",
    "q": "Scenario 2 (M): In a star schema, why should you avoid snowflake schemas where dimension tables relate to other normalized dimension tables?",
    "o": [
      "Snowflake schemas increase relationship hops and reduce VertiPaq compression efficiency and query speed",
      "Power BI does not support relationships between dimension tables",
      "Snowflake schemas cause reports to print in black and white",
      "Direct Lake mode does not allow relationships"
    ],
    "a": [
      0
    ],
    "e": "Star schemas are flat, denormalized dimensions that maximize VertiPaq column encoding and reduce join complexity."
  },
  {
    "d": "V",
    "q": "Scenario 3 (V): A report page contains multiple cards, bar charts, and a slicer. You want screen reader users to experience the visuals in a logical, coherent reading order. Where do you configure this?",
    "o": [
      "Selection Pane -> Tab Order",
      "Format Pane -> Visual Align",
      "Performance Analyzer",
      "Bookmarks Pane"
    ],
    "a": [
      0
    ],
    "e": "Tab order in the Selection pane dictates the exact sequence in which screen readers and keyboard navigation traverse elements."
  },
  {
    "d": "S",
    "q": "Scenario 3 (S): You want to share a report with external vendor partners without giving them access to your internal tenant Azure AD directory. What capability facilitates this?",
    "o": [
      "Azure AD B2B Guest sharing or Power BI embedded with service principal",
      "Publish to Web (Public)",
      "Emailing the .pbix file",
      "Granting them Domain Admin credentials"
    ],
    "a": [
      0
    ],
    "e": "Azure AD B2B allows inviting external guest users with granular workspace security access."
  },
  {
    "d": "P",
    "q": "Scenario 2 (P): In Power Query Editor, which tool shows you the percentage of valid, error, and empty values for every column simultaneously?",
    "o": [
      "Column Quality in the View tab",
      "Column Distribution",
      "Column Profile",
      "Formula Bar"
    ],
    "a": [
      0
    ],
    "e": "Column Quality displays Valid, Error, and Empty percentages at the top of each column header."
  },
  {
    "d": "M",
    "q": "Scenario 2 (M): You need to create a DAX measure that counts active customers who made a purchase in both the current month and the previous month. Which function helps compare sets?",
    "o": [
      "INTERSECT(CurrentCustomers, PreviousCustomers)",
      "UNION(CurrentCustomers, PreviousCustomers)",
      "EXCEPT(CurrentCustomers, PreviousCustomers)",
      "CROSSJOIN(CurrentCustomers, PreviousCustomers)"
    ],
    "a": [
      0
    ],
    "e": "INTERSECT returns the rows that appear in both table expressions."
  },
  {
    "d": "V",
    "q": "Scenario 3 (V): You want to provide users with a clean interface where clicking an icon switches between a 'Chart View' and a 'Table View' on the same canvas area. What mechanism achieves this?",
    "o": [
      "Two visuals occupying the same position, controlled by Bookmarks that toggle visibility in the Selection pane",
      "Creating two separate PBIX files",
      "Using the Matrix visual with drill-down",
      "Embedding an iframe in a text box"
    ],
    "a": [
      0
    ],
    "e": "Bookmarks combined with visibility toggles in the Selection pane create seamless view switchers."
  },
  {
    "d": "S",
    "q": "Scenario 3 (S): How can an organization ensure that every certified report in the tenant displays an official endorsement badge in the Power BI Service?",
    "o": [
      "Configure Dataset Endorsement to 'Certified' (controlled by authorized tenant admins)",
      "Type 'Certified' in the report title",
      "Add a gold star image to the canvas",
      "Save the report in OneDrive"
    ],
    "a": [
      0
    ],
    "e": "Dataset Certification is a tenant-governed endorsement indicating verified, audited enterprise data."
  },
  {
    "d": "P",
    "q": "Scenario 2 (P): You need to combine two tables vertically where Table A has 5 columns and Table B has 4 of the same columns plus 1 unique column. What operation should you perform?",
    "o": [
      "Append Queries",
      "Merge Queries",
      "Pivot Columns",
      "Group By"
    ],
    "a": [
      0
    ],
    "e": "Append Queries combines tables vertically (like a SQL UNION ALL), matching common headers and filling null for missing columns."
  },
  {
    "d": "M",
    "q": "Scenario 2 (M): When configuring Object-Level Security (OLS) in a semantic model, what tool must be used?",
    "o": [
      "Tabular Editor via XMLA endpoint",
      "Power BI Service report edit mode",
      "Power Query Advanced Editor",
      "Microsoft Purview Compliance Manager"
    ],
    "a": [
      0
    ],
    "e": "Object-Level Security (hiding sensitive tables or columns completely from unauthorized roles) requires Tabular Editor."
  },
  {
    "d": "V",
    "q": "Scenario 3 (V): Which visual allows users to perform AI-driven regression analysis to discover which factors increase or decrease customer churn?",
    "o": [
      "Key Influencers visual",
      "Decomposition Tree",
      "Scatter plot",
      "Gauge chart"
    ],
    "a": [
      0
    ],
    "e": "Key Influencers uses machine learning regression to identify top factors that drive a specified metric."
  },
  {
    "d": "S",
    "q": "Scenario 3 (S): Which Power BI feature allows administrators to analyze capacity resource consumption, CPU throttling, and memory spikes in Fabric capacities?",
    "o": [
      "Microsoft Fabric Capacity Metrics App",
      "Windows Task Manager",
      "Power BI Desktop Performance Analyzer",
      "Tabular Editor Best Practice Analyzer"
    ],
    "a": [
      0
    ],
    "e": "The Fabric Capacity Metrics App provides second-by-second telemetry on CPU core second consumption and throttling."
  },
  {
    "d": "P",
    "q": "Scenario 2 (P): What does enabling 'Enable Load' vs 'Include in Report Refresh' do in Power Query?",
    "o": [
      "'Enable Load' loads table data into the data model; 'Include in Report Refresh' refreshes the query during scheduled refresh",
      "They are identical settings with different names",
      "'Enable Load' publishes to the web",
      "'Include in Report Refresh' enables DirectQuery"
    ],
    "a": [
      0
    ],
    "e": "Unchecking 'Enable Load' creates a staging/transformation query that does not consume model RAM."
  },
  {
    "d": "M",
    "q": "Scenario 2 (M): Which VertiPaq storage compression technique replaces repeating text strings with integer identifiers in a global dictionary?",
    "o": [
      "Hash Encoding (Dictionary Encoding)",
      "Value Encoding",
      "Run-Length Encoding (RLE)",
      "Huffman Coding"
    ],
    "a": [
      0
    ],
    "e": "Hash encoding builds a dictionary of distinct values and stores small integer IDs in the data segment."
  },
  {
    "d": "V",
    "q": "Scenario 3 (V): You are designing a mobile layout for a report. What is a key best practice for mobile-optimized report views?",
    "o": [
      "Prioritize high-level KPI cards and simple trend charts stacked vertically with thumb-friendly sizing",
      "Copy the entire desktop layout verbatim into the mobile grid",
      "Avoid using any color on mobile visuals",
      "Disable touch interactions"
    ],
    "a": [
      0
    ],
    "e": "Mobile views should focus on high-impact KPIs and vertical thumb-scrolling clarity."
  },
  {
    "d": "S",
    "q": "Scenario 4 (S): You need to configure incremental refresh for a 500-million-row sales table in Power BI Service. What two parameters must be created in Power Query?",
    "o": [
      "RangeStart and RangeEnd (DateTime type)",
      "DateMin and DateMax (Integer type)",
      "StartDate and EndDate (Text type)",
      "RefreshMin and RefreshMax (Duration type)"
    ],
    "a": [
      0
    ],
    "e": "Power BI incremental refresh requires precisely named `RangeStart` and `RangeEnd` DateTime parameters."
  },
  {
    "d": "P",
    "q": "Scenario 3 (P): You are importing a large sales table from Azure SQL Database. The business requirement states that only completed transactions from the last 2 years must be loaded. Where should you apply this filter to maximize performance?",
    "o": [
      "In Power Query using a filter step that folds into a WHERE clause in the native SQL query",
      "In a DAX calculated table using FILTER()",
      "In the report page filter pane",
      "In a Power BI visual level filter"
    ],
    "a": [
      0
    ],
    "e": "Applying filters in Power Query allows query folding to push the filter back to Azure SQL, reducing data transferred."
  },
  {
    "d": "M",
    "q": "Scenario 3 (M): You need to write a DAX measure that calculates the percentage of total sales represented by each product category. Which pattern is optimal?",
    "o": [
      "DIVIDE([Total Sales], CALCULATE([Total Sales], ALL(Products[Category])))",
      "SUM(Sales[Amount]) / SUM(AllSales[Amount])",
      "CALCULATE(SUM(Sales[Amount])) * 100",
      "RELATED(Products[Category]) / [Total Sales]"
    ],
    "a": [
      0
    ],
    "e": "DIVIDE prevents divide-by-zero errors, and ALL removes the visual filter on Category to provide the grand total denominator."
  },
  {
    "d": "V",
    "q": "Scenario 3 (V): How can you conditionally format the title text of a card visual dynamically based on the user's selected slicer value?",
    "o": [
      "Use the 'fx' button next to Title Text and link it to a DAX measure returning formatted text",
      "Create a separate card for every possible slicer choice",
      "Hardcode the title text in the JSON theme file",
      "Use the Alt Text property instead of Title"
    ],
    "a": [
      0
    ],
    "e": "Clicking the `fx` conditional formatting button allows binding title strings directly to dynamic DAX measures."
  },
  {
    "d": "S",
    "q": "Scenario 4 (S): What is the primary benefit of deploying a semantic model to a Premium Per User (PPU) or Fabric capacity workspace regarding model size?",
    "o": [
      "Support for Large Dataset Storage Format (up to 400 GB or capacity limits)",
      "Models are capped at 1 GB",
      "Automatic translation to Python scripts",
      "DirectQuery is disabled"
    ],
    "a": [
      0
    ],
    "e": "Premium/Fabric capacities support large dataset storage format, lifting the 1 GB Pro import limit."
  },
  {
    "d": "P",
    "q": "Scenario 3 (P): In Power Query, you have a column with JSON payload strings. You need to extract a specific property 'customerRating' without writing custom M scripts. What feature should you use?",
    "o": [
      "Add Column from Examples",
      "Split Column by Delimiter",
      "Transpose Column",
      "Unpivot Other Columns"
    ],
    "a": [
      0
    ],
    "e": "Add Column from Examples allows you to type expected outputs, and Power Query auto-generates the JSON property extraction M logic."
  },
  {
    "d": "M",
    "q": "Scenario 3 (M): A date table in your model contains dates from 2020 to 2025. What is the mandatory step to enable standard DAX time-intelligence functions like DATESYTD and SAMEPERIODLASTYEAR?",
    "o": [
      "Right-click the Date table and select 'Mark as Date Table', selecting the primary Date column",
      "Set the storage mode to DirectQuery",
      "Sort the Date column by Sales Amount",
      "Create a bidirectional relationship to all fact tables"
    ],
    "a": [
      0
    ],
    "e": "Marking as Date Table validates uniqueness, continuity, and enables the DAX time-intelligence engine."
  },
  {
    "d": "V",
    "q": "Scenario 3 (V): You need to prevent visual interaction between a Product Category slicer and a Company Overview KPI card. Where do you adjust this?",
    "o": [
      "Format tab -> Edit Interactions -> Set to 'None'",
      "Selection Pane -> Hide Visual",
      "Modeling tab -> Manage Roles",
      "Sync Slicers pane"
    ],
    "a": [
      0
    ],
    "e": "Edit Interactions lets report authors control whether a slicer filters, highlights, or has no effect on individual visuals."
  },
  {
    "d": "S",
    "q": "Scenario 4 (S): You want to share a report with external vendor partners without giving them access to your internal tenant Azure AD directory. What capability facilitates this?",
    "o": [
      "Azure AD B2B Guest sharing or Power BI embedded with service principal",
      "Publish to Web (Public)",
      "Emailing the .pbix file",
      "Granting them Domain Admin credentials"
    ],
    "a": [
      0
    ],
    "e": "Azure AD B2B allows inviting external guest users with granular workspace security access."
  },
  {
    "d": "P",
    "q": "Scenario 3 (P): When connecting to an Excel file with multiple sheets, you want to ensure the query does not fail if someone renames a sheet from 'Sales2024' to 'Sales_2024'. What approach is most robust?",
    "o": [
      "Filter the navigation table by sheet index or order rather than hardcoded sheet name",
      "Disable background data refresh in options",
      "Change storage mode to DirectQuery",
      "Set up scheduled gateway refresh"
    ],
    "a": [
      0
    ],
    "e": "Accessing the sheet by position `{0}[Data]` or filtering by type prevents hardcoded sheet name breakage."
  },
  {
    "d": "M",
    "q": "Scenario 3 (M): You have a fact table with 100 million rows. Users frequently filter by Year, Quarter, and Product Category. Which optimization should you implement in the model?",
    "o": [
      "User-defined aggregations in Dual or Import mode mapped to the DirectQuery fact table",
      "Create 10 new calculated columns on the fact table",
      "Convert all dimension tables to DirectQuery",
      "Increase the number of decimal places on all currencies"
    ],
    "a": [
      0
    ],
    "e": "User-defined aggregations pre-compute common summary queries in high-speed in-memory storage."
  },
  {
    "d": "V",
    "q": "Scenario 4 (V): A report page contains multiple cards, bar charts, and a slicer. You want screen reader users to experience the visuals in a logical, coherent reading order. Where do you configure this?",
    "o": [
      "Selection Pane -> Tab Order",
      "Format Pane -> Visual Align",
      "Performance Analyzer",
      "Bookmarks Pane"
    ],
    "a": [
      0
    ],
    "e": "Tab order in the Selection pane dictates the exact sequence in which screen readers and keyboard navigation traverse elements."
  },
  {
    "d": "S",
    "q": "Scenario 4 (S): How can an organization ensure that every certified report in the tenant displays an official endorsement badge in the Power BI Service?",
    "o": [
      "Configure Dataset Endorsement to 'Certified' (controlled by authorized tenant admins)",
      "Type 'Certified' in the report title",
      "Add a gold star image to the canvas",
      "Save the report in OneDrive"
    ],
    "a": [
      0
    ],
    "e": "Dataset Certification is a tenant-governed endorsement indicating verified, audited enterprise data."
  },
  {
    "d": "P",
    "q": "Scenario 3 (P): You observe that a Power Query refresh is failing because of data type mismatch in a column containing mixed numbers and 'N/A' text. What transformation cleans this effectively?",
    "o": [
      "Replace 'N/A' with null, then set column data type to Integer or Decimal",
      "Delete all rows containing errors using Table.RemoveRows",
      "Change the entire dataset locale to en-US",
      "Convert the column to Binary"
    ],
    "a": [
      0
    ],
    "e": "Replacing non-numeric placeholders with null allows proper numerical typing without discarding valid transaction rows."
  },
  {
    "d": "M",
    "q": "Scenario 3 (M): What is the primary difference between `USERELATIONSHIP()` and `CROSSFILTER()` in DAX?",
    "o": [
      "USERELATIONSHIP activates an inactive relationship; CROSSFILTER alters cross-filtering direction or disables a relationship",
      "USERELATIONSHIP alters cross-filtering; CROSSFILTER activates inactive relationships",
      "USERELATIONSHIP can only be used in calculated columns",
      "CROSSFILTER is used exclusively for Row-Level Security"
    ],
    "a": [
      0
    ],
    "e": "USERELATIONSHIP activates an inactive path, while CROSSFILTER changes filter direction (Both, Single, None)."
  },
  {
    "d": "V",
    "q": "Scenario 4 (V): You want to provide users with a clean interface where clicking an icon switches between a 'Chart View' and a 'Table View' on the same canvas area. What mechanism achieves this?",
    "o": [
      "Two visuals occupying the same position, controlled by Bookmarks that toggle visibility in the Selection pane",
      "Creating two separate PBIX files",
      "Using the Matrix visual with drill-down",
      "Embedding an iframe in a text box"
    ],
    "a": [
      0
    ],
    "e": "Bookmarks combined with visibility toggles in the Selection pane create seamless view switchers."
  },
  {
    "d": "S",
    "q": "Scenario 4 (S): Which Power BI feature allows administrators to analyze capacity resource consumption, CPU throttling, and memory spikes in Fabric capacities?",
    "o": [
      "Microsoft Fabric Capacity Metrics App",
      "Windows Task Manager",
      "Power BI Desktop Performance Analyzer",
      "Tabular Editor Best Practice Analyzer"
    ],
    "a": [
      0
    ],
    "e": "The Fabric Capacity Metrics App provides second-by-second telemetry on CPU core second consumption and throttling."
  },
  {
    "d": "P",
    "q": "Scenario 3 (P): You need to import data from a web API that authenticates using OAuth2 with token refresh. Where should you configure this credential securely?",
    "o": [
      "In Data Source Settings -> Edit Permissions in Power BI Desktop / Gateway",
      "Hardcode the bearer token in the Power Query M formula text",
      "Pass the token as a URL query parameter in the API link",
      "Save the token in an unencrypted CSV file"
    ],
    "a": [
      0
    ],
    "e": "Data Source Settings handles OAuth2 tokens securely with automatic credential management and refresh."
  },
  {
    "d": "M",
    "q": "Scenario 3 (M): In a star schema, why should you avoid snowflake schemas where dimension tables relate to other normalized dimension tables?",
    "o": [
      "Snowflake schemas increase relationship hops and reduce VertiPaq compression efficiency and query speed",
      "Power BI does not support relationships between dimension tables",
      "Snowflake schemas cause reports to print in black and white",
      "Direct Lake mode does not allow relationships"
    ],
    "a": [
      0
    ],
    "e": "Star schemas are flat, denormalized dimensions that maximize VertiPaq column encoding and reduce join complexity."
  },
  {
    "d": "V",
    "q": "Scenario 4 (V): Which visual allows users to perform AI-driven regression analysis to discover which factors increase or decrease customer churn?",
    "o": [
      "Key Influencers visual",
      "Decomposition Tree",
      "Scatter plot",
      "Gauge chart"
    ],
    "a": [
      0
    ],
    "e": "Key Influencers uses machine learning regression to identify top factors that drive a specified metric."
  },
  {
    "d": "S",
    "q": "Scenario 5 (S): You need to configure incremental refresh for a 500-million-row sales table in Power BI Service. What two parameters must be created in Power Query?",
    "o": [
      "RangeStart and RangeEnd (DateTime type)",
      "DateMin and DateMax (Integer type)",
      "StartDate and EndDate (Text type)",
      "RefreshMin and RefreshMax (Duration type)"
    ],
    "a": [
      0
    ],
    "e": "Power BI incremental refresh requires precisely named `RangeStart` and `RangeEnd` DateTime parameters."
  },
  {
    "d": "P",
    "q": "Scenario 3 (P): In Power Query Editor, which tool shows you the percentage of valid, error, and empty values for every column simultaneously?",
    "o": [
      "Column Quality in the View tab",
      "Column Distribution",
      "Column Profile",
      "Formula Bar"
    ],
    "a": [
      0
    ],
    "e": "Column Quality displays Valid, Error, and Empty percentages at the top of each column header."
  },
  {
    "d": "M",
    "q": "Scenario 3 (M): You need to create a DAX measure that counts active customers who made a purchase in both the current month and the previous month. Which function helps compare sets?",
    "o": [
      "INTERSECT(CurrentCustomers, PreviousCustomers)",
      "UNION(CurrentCustomers, PreviousCustomers)",
      "EXCEPT(CurrentCustomers, PreviousCustomers)",
      "CROSSJOIN(CurrentCustomers, PreviousCustomers)"
    ],
    "a": [
      0
    ],
    "e": "INTERSECT returns the rows that appear in both table expressions."
  },
  {
    "d": "V",
    "q": "Scenario 4 (V): You are designing a mobile layout for a report. What is a key best practice for mobile-optimized report views?",
    "o": [
      "Prioritize high-level KPI cards and simple trend charts stacked vertically with thumb-friendly sizing",
      "Copy the entire desktop layout verbatim into the mobile grid",
      "Avoid using any color on mobile visuals",
      "Disable touch interactions"
    ],
    "a": [
      0
    ],
    "e": "Mobile views should focus on high-impact KPIs and vertical thumb-scrolling clarity."
  },
  {
    "d": "S",
    "q": "Scenario 5 (S): What is the primary benefit of deploying a semantic model to a Premium Per User (PPU) or Fabric capacity workspace regarding model size?",
    "o": [
      "Support for Large Dataset Storage Format (up to 400 GB or capacity limits)",
      "Models are capped at 1 GB",
      "Automatic translation to Python scripts",
      "DirectQuery is disabled"
    ],
    "a": [
      0
    ],
    "e": "Premium/Fabric capacities support large dataset storage format, lifting the 1 GB Pro import limit."
  },
  {
    "d": "P",
    "q": "Scenario 3 (P): You need to combine two tables vertically where Table A has 5 columns and Table B has 4 of the same columns plus 1 unique column. What operation should you perform?",
    "o": [
      "Append Queries",
      "Merge Queries",
      "Pivot Columns",
      "Group By"
    ],
    "a": [
      0
    ],
    "e": "Append Queries combines tables vertically (like a SQL UNION ALL), matching common headers and filling null for missing columns."
  },
  {
    "d": "M",
    "q": "Scenario 3 (M): When configuring Object-Level Security (OLS) in a semantic model, what tool must be used?",
    "o": [
      "Tabular Editor via XMLA endpoint",
      "Power BI Service report edit mode",
      "Power Query Advanced Editor",
      "Microsoft Purview Compliance Manager"
    ],
    "a": [
      0
    ],
    "e": "Object-Level Security (hiding sensitive tables or columns completely from unauthorized roles) requires Tabular Editor."
  },
  {
    "d": "V",
    "q": "Scenario 4 (V): How can you conditionally format the title text of a card visual dynamically based on the user's selected slicer value?",
    "o": [
      "Use the 'fx' button next to Title Text and link it to a DAX measure returning formatted text",
      "Create a separate card for every possible slicer choice",
      "Hardcode the title text in the JSON theme file",
      "Use the Alt Text property instead of Title"
    ],
    "a": [
      0
    ],
    "e": "Clicking the `fx` conditional formatting button allows binding title strings directly to dynamic DAX measures."
  },
  {
    "d": "S",
    "q": "Scenario 5 (S): You want to share a report with external vendor partners without giving them access to your internal tenant Azure AD directory. What capability facilitates this?",
    "o": [
      "Azure AD B2B Guest sharing or Power BI embedded with service principal",
      "Publish to Web (Public)",
      "Emailing the .pbix file",
      "Granting them Domain Admin credentials"
    ],
    "a": [
      0
    ],
    "e": "Azure AD B2B allows inviting external guest users with granular workspace security access."
  },
  {
    "d": "P",
    "q": "Scenario 3 (P): What does enabling 'Enable Load' vs 'Include in Report Refresh' do in Power Query?",
    "o": [
      "'Enable Load' loads table data into the data model; 'Include in Report Refresh' refreshes the query during scheduled refresh",
      "They are identical settings with different names",
      "'Enable Load' publishes to the web",
      "'Include in Report Refresh' enables DirectQuery"
    ],
    "a": [
      0
    ],
    "e": "Unchecking 'Enable Load' creates a staging/transformation query that does not consume model RAM."
  },
  {
    "d": "M",
    "q": "Scenario 3 (M): Which VertiPaq storage compression technique replaces repeating text strings with integer identifiers in a global dictionary?",
    "o": [
      "Hash Encoding (Dictionary Encoding)",
      "Value Encoding",
      "Run-Length Encoding (RLE)",
      "Huffman Coding"
    ],
    "a": [
      0
    ],
    "e": "Hash encoding builds a dictionary of distinct values and stores small integer IDs in the data segment."
  },
  {
    "d": "V",
    "q": "Scenario 4 (V): You need to prevent visual interaction between a Product Category slicer and a Company Overview KPI card. Where do you adjust this?",
    "o": [
      "Format tab -> Edit Interactions -> Set to 'None'",
      "Selection Pane -> Hide Visual",
      "Modeling tab -> Manage Roles",
      "Sync Slicers pane"
    ],
    "a": [
      0
    ],
    "e": "Edit Interactions lets report authors control whether a slicer filters, highlights, or has no effect on individual visuals."
  },
  {
    "d": "S",
    "q": "Scenario 5 (S): How can an organization ensure that every certified report in the tenant displays an official endorsement badge in the Power BI Service?",
    "o": [
      "Configure Dataset Endorsement to 'Certified' (controlled by authorized tenant admins)",
      "Type 'Certified' in the report title",
      "Add a gold star image to the canvas",
      "Save the report in OneDrive"
    ],
    "a": [
      0
    ],
    "e": "Dataset Certification is a tenant-governed endorsement indicating verified, audited enterprise data."
  },
  {
    "d": "P",
    "q": "Scenario 4 (P): You are importing a large sales table from Azure SQL Database. The business requirement states that only completed transactions from the last 2 years must be loaded. Where should you apply this filter to maximize performance?",
    "o": [
      "In Power Query using a filter step that folds into a WHERE clause in the native SQL query",
      "In a DAX calculated table using FILTER()",
      "In the report page filter pane",
      "In a Power BI visual level filter"
    ],
    "a": [
      0
    ],
    "e": "Applying filters in Power Query allows query folding to push the filter back to Azure SQL, reducing data transferred."
  },
  {
    "d": "M",
    "q": "Scenario 4 (M): You need to write a DAX measure that calculates the percentage of total sales represented by each product category. Which pattern is optimal?",
    "o": [
      "DIVIDE([Total Sales], CALCULATE([Total Sales], ALL(Products[Category])))",
      "SUM(Sales[Amount]) / SUM(AllSales[Amount])",
      "CALCULATE(SUM(Sales[Amount])) * 100",
      "RELATED(Products[Category]) / [Total Sales]"
    ],
    "a": [
      0
    ],
    "e": "DIVIDE prevents divide-by-zero errors, and ALL removes the visual filter on Category to provide the grand total denominator."
  },
  {
    "d": "V",
    "q": "Scenario 5 (V): A report page contains multiple cards, bar charts, and a slicer. You want screen reader users to experience the visuals in a logical, coherent reading order. Where do you configure this?",
    "o": [
      "Selection Pane -> Tab Order",
      "Format Pane -> Visual Align",
      "Performance Analyzer",
      "Bookmarks Pane"
    ],
    "a": [
      0
    ],
    "e": "Tab order in the Selection pane dictates the exact sequence in which screen readers and keyboard navigation traverse elements."
  },
  {
    "d": "S",
    "q": "Scenario 5 (S): Which Power BI feature allows administrators to analyze capacity resource consumption, CPU throttling, and memory spikes in Fabric capacities?",
    "o": [
      "Microsoft Fabric Capacity Metrics App",
      "Windows Task Manager",
      "Power BI Desktop Performance Analyzer",
      "Tabular Editor Best Practice Analyzer"
    ],
    "a": [
      0
    ],
    "e": "The Fabric Capacity Metrics App provides second-by-second telemetry on CPU core second consumption and throttling."
  },
  {
    "d": "P",
    "q": "Scenario 4 (P): In Power Query, you have a column with JSON payload strings. You need to extract a specific property 'customerRating' without writing custom M scripts. What feature should you use?",
    "o": [
      "Add Column from Examples",
      "Split Column by Delimiter",
      "Transpose Column",
      "Unpivot Other Columns"
    ],
    "a": [
      0
    ],
    "e": "Add Column from Examples allows you to type expected outputs, and Power Query auto-generates the JSON property extraction M logic."
  },
  {
    "d": "M",
    "q": "Scenario 4 (M): A date table in your model contains dates from 2020 to 2025. What is the mandatory step to enable standard DAX time-intelligence functions like DATESYTD and SAMEPERIODLASTYEAR?",
    "o": [
      "Right-click the Date table and select 'Mark as Date Table', selecting the primary Date column",
      "Set the storage mode to DirectQuery",
      "Sort the Date column by Sales Amount",
      "Create a bidirectional relationship to all fact tables"
    ],
    "a": [
      0
    ],
    "e": "Marking as Date Table validates uniqueness, continuity, and enables the DAX time-intelligence engine."
  },
  {
    "d": "V",
    "q": "Scenario 5 (V): You want to provide users with a clean interface where clicking an icon switches between a 'Chart View' and a 'Table View' on the same canvas area. What mechanism achieves this?",
    "o": [
      "Two visuals occupying the same position, controlled by Bookmarks that toggle visibility in the Selection pane",
      "Creating two separate PBIX files",
      "Using the Matrix visual with drill-down",
      "Embedding an iframe in a text box"
    ],
    "a": [
      0
    ],
    "e": "Bookmarks combined with visibility toggles in the Selection pane create seamless view switchers."
  },
  {
    "d": "S",
    "q": "Scenario 6 (S): You need to configure incremental refresh for a 500-million-row sales table in Power BI Service. What two parameters must be created in Power Query?",
    "o": [
      "RangeStart and RangeEnd (DateTime type)",
      "DateMin and DateMax (Integer type)",
      "StartDate and EndDate (Text type)",
      "RefreshMin and RefreshMax (Duration type)"
    ],
    "a": [
      0
    ],
    "e": "Power BI incremental refresh requires precisely named `RangeStart` and `RangeEnd` DateTime parameters."
  },
  {
    "d": "P",
    "q": "Scenario 4 (P): When connecting to an Excel file with multiple sheets, you want to ensure the query does not fail if someone renames a sheet from 'Sales2024' to 'Sales_2024'. What approach is most robust?",
    "o": [
      "Filter the navigation table by sheet index or order rather than hardcoded sheet name",
      "Disable background data refresh in options",
      "Change storage mode to DirectQuery",
      "Set up scheduled gateway refresh"
    ],
    "a": [
      0
    ],
    "e": "Accessing the sheet by position `{0}[Data]` or filtering by type prevents hardcoded sheet name breakage."
  },
  {
    "d": "M",
    "q": "Scenario 4 (M): You have a fact table with 100 million rows. Users frequently filter by Year, Quarter, and Product Category. Which optimization should you implement in the model?",
    "o": [
      "User-defined aggregations in Dual or Import mode mapped to the DirectQuery fact table",
      "Create 10 new calculated columns on the fact table",
      "Convert all dimension tables to DirectQuery",
      "Increase the number of decimal places on all currencies"
    ],
    "a": [
      0
    ],
    "e": "User-defined aggregations pre-compute common summary queries in high-speed in-memory storage."
  },
  {
    "d": "V",
    "q": "Scenario 5 (V): Which visual allows users to perform AI-driven regression analysis to discover which factors increase or decrease customer churn?",
    "o": [
      "Key Influencers visual",
      "Decomposition Tree",
      "Scatter plot",
      "Gauge chart"
    ],
    "a": [
      0
    ],
    "e": "Key Influencers uses machine learning regression to identify top factors that drive a specified metric."
  },
  {
    "d": "S",
    "q": "Scenario 6 (S): What is the primary benefit of deploying a semantic model to a Premium Per User (PPU) or Fabric capacity workspace regarding model size?",
    "o": [
      "Support for Large Dataset Storage Format (up to 400 GB or capacity limits)",
      "Models are capped at 1 GB",
      "Automatic translation to Python scripts",
      "DirectQuery is disabled"
    ],
    "a": [
      0
    ],
    "e": "Premium/Fabric capacities support large dataset storage format, lifting the 1 GB Pro import limit."
  },
  {
    "d": "P",
    "q": "Scenario 4 (P): You observe that a Power Query refresh is failing because of data type mismatch in a column containing mixed numbers and 'N/A' text. What transformation cleans this effectively?",
    "o": [
      "Replace 'N/A' with null, then set column data type to Integer or Decimal",
      "Delete all rows containing errors using Table.RemoveRows",
      "Change the entire dataset locale to en-US",
      "Convert the column to Binary"
    ],
    "a": [
      0
    ],
    "e": "Replacing non-numeric placeholders with null allows proper numerical typing without discarding valid transaction rows."
  },
  {
    "d": "M",
    "q": "Scenario 4 (M): What is the primary difference between `USERELATIONSHIP()` and `CROSSFILTER()` in DAX?",
    "o": [
      "USERELATIONSHIP activates an inactive relationship; CROSSFILTER alters cross-filtering direction or disables a relationship",
      "USERELATIONSHIP alters cross-filtering; CROSSFILTER activates inactive relationships",
      "USERELATIONSHIP can only be used in calculated columns",
      "CROSSFILTER is used exclusively for Row-Level Security"
    ],
    "a": [
      0
    ],
    "e": "USERELATIONSHIP activates an inactive path, while CROSSFILTER changes filter direction (Both, Single, None)."
  },
  {
    "d": "V",
    "q": "Scenario 5 (V): You are designing a mobile layout for a report. What is a key best practice for mobile-optimized report views?",
    "o": [
      "Prioritize high-level KPI cards and simple trend charts stacked vertically with thumb-friendly sizing",
      "Copy the entire desktop layout verbatim into the mobile grid",
      "Avoid using any color on mobile visuals",
      "Disable touch interactions"
    ],
    "a": [
      0
    ],
    "e": "Mobile views should focus on high-impact KPIs and vertical thumb-scrolling clarity."
  },
  {
    "d": "S",
    "q": "Scenario 6 (S): You want to share a report with external vendor partners without giving them access to your internal tenant Azure AD directory. What capability facilitates this?",
    "o": [
      "Azure AD B2B Guest sharing or Power BI embedded with service principal",
      "Publish to Web (Public)",
      "Emailing the .pbix file",
      "Granting them Domain Admin credentials"
    ],
    "a": [
      0
    ],
    "e": "Azure AD B2B allows inviting external guest users with granular workspace security access."
  },
  {
    "d": "P",
    "q": "Scenario 4 (P): You need to import data from a web API that authenticates using OAuth2 with token refresh. Where should you configure this credential securely?",
    "o": [
      "In Data Source Settings -> Edit Permissions in Power BI Desktop / Gateway",
      "Hardcode the bearer token in the Power Query M formula text",
      "Pass the token as a URL query parameter in the API link",
      "Save the token in an unencrypted CSV file"
    ],
    "a": [
      0
    ],
    "e": "Data Source Settings handles OAuth2 tokens securely with automatic credential management and refresh."
  },
  {
    "d": "M",
    "q": "Scenario 4 (M): In a star schema, why should you avoid snowflake schemas where dimension tables relate to other normalized dimension tables?",
    "o": [
      "Snowflake schemas increase relationship hops and reduce VertiPaq compression efficiency and query speed",
      "Power BI does not support relationships between dimension tables",
      "Snowflake schemas cause reports to print in black and white",
      "Direct Lake mode does not allow relationships"
    ],
    "a": [
      0
    ],
    "e": "Star schemas are flat, denormalized dimensions that maximize VertiPaq column encoding and reduce join complexity."
  },
  {
    "d": "V",
    "q": "Scenario 5 (V): How can you conditionally format the title text of a card visual dynamically based on the user's selected slicer value?",
    "o": [
      "Use the 'fx' button next to Title Text and link it to a DAX measure returning formatted text",
      "Create a separate card for every possible slicer choice",
      "Hardcode the title text in the JSON theme file",
      "Use the Alt Text property instead of Title"
    ],
    "a": [
      0
    ],
    "e": "Clicking the `fx` conditional formatting button allows binding title strings directly to dynamic DAX measures."
  },
  {
    "d": "S",
    "q": "Scenario 6 (S): How can an organization ensure that every certified report in the tenant displays an official endorsement badge in the Power BI Service?",
    "o": [
      "Configure Dataset Endorsement to 'Certified' (controlled by authorized tenant admins)",
      "Type 'Certified' in the report title",
      "Add a gold star image to the canvas",
      "Save the report in OneDrive"
    ],
    "a": [
      0
    ],
    "e": "Dataset Certification is a tenant-governed endorsement indicating verified, audited enterprise data."
  },
  {
    "d": "P",
    "q": "Scenario 4 (P): In Power Query Editor, which tool shows you the percentage of valid, error, and empty values for every column simultaneously?",
    "o": [
      "Column Quality in the View tab",
      "Column Distribution",
      "Column Profile",
      "Formula Bar"
    ],
    "a": [
      0
    ],
    "e": "Column Quality displays Valid, Error, and Empty percentages at the top of each column header."
  },
  {
    "d": "M",
    "q": "Scenario 4 (M): You need to create a DAX measure that counts active customers who made a purchase in both the current month and the previous month. Which function helps compare sets?",
    "o": [
      "INTERSECT(CurrentCustomers, PreviousCustomers)",
      "UNION(CurrentCustomers, PreviousCustomers)",
      "EXCEPT(CurrentCustomers, PreviousCustomers)",
      "CROSSJOIN(CurrentCustomers, PreviousCustomers)"
    ],
    "a": [
      0
    ],
    "e": "INTERSECT returns the rows that appear in both table expressions."
  },
  {
    "d": "V",
    "q": "Scenario 5 (V): You need to prevent visual interaction between a Product Category slicer and a Company Overview KPI card. Where do you adjust this?",
    "o": [
      "Format tab -> Edit Interactions -> Set to 'None'",
      "Selection Pane -> Hide Visual",
      "Modeling tab -> Manage Roles",
      "Sync Slicers pane"
    ],
    "a": [
      0
    ],
    "e": "Edit Interactions lets report authors control whether a slicer filters, highlights, or has no effect on individual visuals."
  },
  {
    "d": "S",
    "q": "Scenario 6 (S): Which Power BI feature allows administrators to analyze capacity resource consumption, CPU throttling, and memory spikes in Fabric capacities?",
    "o": [
      "Microsoft Fabric Capacity Metrics App",
      "Windows Task Manager",
      "Power BI Desktop Performance Analyzer",
      "Tabular Editor Best Practice Analyzer"
    ],
    "a": [
      0
    ],
    "e": "The Fabric Capacity Metrics App provides second-by-second telemetry on CPU core second consumption and throttling."
  },
  {
    "d": "P",
    "q": "Scenario 4 (P): You need to combine two tables vertically where Table A has 5 columns and Table B has 4 of the same columns plus 1 unique column. What operation should you perform?",
    "o": [
      "Append Queries",
      "Merge Queries",
      "Pivot Columns",
      "Group By"
    ],
    "a": [
      0
    ],
    "e": "Append Queries combines tables vertically (like a SQL UNION ALL), matching common headers and filling null for missing columns."
  },
  {
    "d": "M",
    "q": "Scenario 4 (M): When configuring Object-Level Security (OLS) in a semantic model, what tool must be used?",
    "o": [
      "Tabular Editor via XMLA endpoint",
      "Power BI Service report edit mode",
      "Power Query Advanced Editor",
      "Microsoft Purview Compliance Manager"
    ],
    "a": [
      0
    ],
    "e": "Object-Level Security (hiding sensitive tables or columns completely from unauthorized roles) requires Tabular Editor."
  },
  {
    "d": "V",
    "q": "Scenario 6 (V): A report page contains multiple cards, bar charts, and a slicer. You want screen reader users to experience the visuals in a logical, coherent reading order. Where do you configure this?",
    "o": [
      "Selection Pane -> Tab Order",
      "Format Pane -> Visual Align",
      "Performance Analyzer",
      "Bookmarks Pane"
    ],
    "a": [
      0
    ],
    "e": "Tab order in the Selection pane dictates the exact sequence in which screen readers and keyboard navigation traverse elements."
  },
  {
    "d": "S",
    "q": "Scenario 7 (S): You need to configure incremental refresh for a 500-million-row sales table in Power BI Service. What two parameters must be created in Power Query?",
    "o": [
      "RangeStart and RangeEnd (DateTime type)",
      "DateMin and DateMax (Integer type)",
      "StartDate and EndDate (Text type)",
      "RefreshMin and RefreshMax (Duration type)"
    ],
    "a": [
      0
    ],
    "e": "Power BI incremental refresh requires precisely named `RangeStart` and `RangeEnd` DateTime parameters."
  },
  {
    "d": "P",
    "q": "Scenario 4 (P): What does enabling 'Enable Load' vs 'Include in Report Refresh' do in Power Query?",
    "o": [
      "'Enable Load' loads table data into the data model; 'Include in Report Refresh' refreshes the query during scheduled refresh",
      "They are identical settings with different names",
      "'Enable Load' publishes to the web",
      "'Include in Report Refresh' enables DirectQuery"
    ],
    "a": [
      0
    ],
    "e": "Unchecking 'Enable Load' creates a staging/transformation query that does not consume model RAM."
  },
  {
    "d": "M",
    "q": "Scenario 4 (M): Which VertiPaq storage compression technique replaces repeating text strings with integer identifiers in a global dictionary?",
    "o": [
      "Hash Encoding (Dictionary Encoding)",
      "Value Encoding",
      "Run-Length Encoding (RLE)",
      "Huffman Coding"
    ],
    "a": [
      0
    ],
    "e": "Hash encoding builds a dictionary of distinct values and stores small integer IDs in the data segment."
  },
  {
    "d": "V",
    "q": "Scenario 6 (V): You want to provide users with a clean interface where clicking an icon switches between a 'Chart View' and a 'Table View' on the same canvas area. What mechanism achieves this?",
    "o": [
      "Two visuals occupying the same position, controlled by Bookmarks that toggle visibility in the Selection pane",
      "Creating two separate PBIX files",
      "Using the Matrix visual with drill-down",
      "Embedding an iframe in a text box"
    ],
    "a": [
      0
    ],
    "e": "Bookmarks combined with visibility toggles in the Selection pane create seamless view switchers."
  },
  {
    "d": "S",
    "q": "Scenario 7 (S): What is the primary benefit of deploying a semantic model to a Premium Per User (PPU) or Fabric capacity workspace regarding model size?",
    "o": [
      "Support for Large Dataset Storage Format (up to 400 GB or capacity limits)",
      "Models are capped at 1 GB",
      "Automatic translation to Python scripts",
      "DirectQuery is disabled"
    ],
    "a": [
      0
    ],
    "e": "Premium/Fabric capacities support large dataset storage format, lifting the 1 GB Pro import limit."
  },
  {
    "d": "P",
    "q": "Scenario 5 (P): You are importing a large sales table from Azure SQL Database. The business requirement states that only completed transactions from the last 2 years must be loaded. Where should you apply this filter to maximize performance?",
    "o": [
      "In Power Query using a filter step that folds into a WHERE clause in the native SQL query",
      "In a DAX calculated table using FILTER()",
      "In the report page filter pane",
      "In a Power BI visual level filter"
    ],
    "a": [
      0
    ],
    "e": "Applying filters in Power Query allows query folding to push the filter back to Azure SQL, reducing data transferred."
  },
  {
    "d": "M",
    "q": "Scenario 5 (M): You need to write a DAX measure that calculates the percentage of total sales represented by each product category. Which pattern is optimal?",
    "o": [
      "DIVIDE([Total Sales], CALCULATE([Total Sales], ALL(Products[Category])))",
      "SUM(Sales[Amount]) / SUM(AllSales[Amount])",
      "CALCULATE(SUM(Sales[Amount])) * 100",
      "RELATED(Products[Category]) / [Total Sales]"
    ],
    "a": [
      0
    ],
    "e": "DIVIDE prevents divide-by-zero errors, and ALL removes the visual filter on Category to provide the grand total denominator."
  },
  {
    "d": "V",
    "q": "Scenario 6 (V): Which visual allows users to perform AI-driven regression analysis to discover which factors increase or decrease customer churn?",
    "o": [
      "Key Influencers visual",
      "Decomposition Tree",
      "Scatter plot",
      "Gauge chart"
    ],
    "a": [
      0
    ],
    "e": "Key Influencers uses machine learning regression to identify top factors that drive a specified metric."
  },
  {
    "d": "S",
    "q": "Scenario 7 (S): You want to share a report with external vendor partners without giving them access to your internal tenant Azure AD directory. What capability facilitates this?",
    "o": [
      "Azure AD B2B Guest sharing or Power BI embedded with service principal",
      "Publish to Web (Public)",
      "Emailing the .pbix file",
      "Granting them Domain Admin credentials"
    ],
    "a": [
      0
    ],
    "e": "Azure AD B2B allows inviting external guest users with granular workspace security access."
  },
  {
    "d": "P",
    "q": "Scenario 5 (P): In Power Query, you have a column with JSON payload strings. You need to extract a specific property 'customerRating' without writing custom M scripts. What feature should you use?",
    "o": [
      "Add Column from Examples",
      "Split Column by Delimiter",
      "Transpose Column",
      "Unpivot Other Columns"
    ],
    "a": [
      0
    ],
    "e": "Add Column from Examples allows you to type expected outputs, and Power Query auto-generates the JSON property extraction M logic."
  },
  {
    "d": "M",
    "q": "Scenario 5 (M): A date table in your model contains dates from 2020 to 2025. What is the mandatory step to enable standard DAX time-intelligence functions like DATESYTD and SAMEPERIODLASTYEAR?",
    "o": [
      "Right-click the Date table and select 'Mark as Date Table', selecting the primary Date column",
      "Set the storage mode to DirectQuery",
      "Sort the Date column by Sales Amount",
      "Create a bidirectional relationship to all fact tables"
    ],
    "a": [
      0
    ],
    "e": "Marking as Date Table validates uniqueness, continuity, and enables the DAX time-intelligence engine."
  },
  {
    "d": "V",
    "q": "Scenario 6 (V): You are designing a mobile layout for a report. What is a key best practice for mobile-optimized report views?",
    "o": [
      "Prioritize high-level KPI cards and simple trend charts stacked vertically with thumb-friendly sizing",
      "Copy the entire desktop layout verbatim into the mobile grid",
      "Avoid using any color on mobile visuals",
      "Disable touch interactions"
    ],
    "a": [
      0
    ],
    "e": "Mobile views should focus on high-impact KPIs and vertical thumb-scrolling clarity."
  },
  {
    "d": "S",
    "q": "Scenario 7 (S): How can an organization ensure that every certified report in the tenant displays an official endorsement badge in the Power BI Service?",
    "o": [
      "Configure Dataset Endorsement to 'Certified' (controlled by authorized tenant admins)",
      "Type 'Certified' in the report title",
      "Add a gold star image to the canvas",
      "Save the report in OneDrive"
    ],
    "a": [
      0
    ],
    "e": "Dataset Certification is a tenant-governed endorsement indicating verified, audited enterprise data."
  },
  {
    "d": "P",
    "q": "Scenario 5 (P): When connecting to an Excel file with multiple sheets, you want to ensure the query does not fail if someone renames a sheet from 'Sales2024' to 'Sales_2024'. What approach is most robust?",
    "o": [
      "Filter the navigation table by sheet index or order rather than hardcoded sheet name",
      "Disable background data refresh in options",
      "Change storage mode to DirectQuery",
      "Set up scheduled gateway refresh"
    ],
    "a": [
      0
    ],
    "e": "Accessing the sheet by position `{0}[Data]` or filtering by type prevents hardcoded sheet name breakage."
  },
  {
    "d": "M",
    "q": "Scenario 5 (M): You have a fact table with 100 million rows. Users frequently filter by Year, Quarter, and Product Category. Which optimization should you implement in the model?",
    "o": [
      "User-defined aggregations in Dual or Import mode mapped to the DirectQuery fact table",
      "Create 10 new calculated columns on the fact table",
      "Convert all dimension tables to DirectQuery",
      "Increase the number of decimal places on all currencies"
    ],
    "a": [
      0
    ],
    "e": "User-defined aggregations pre-compute common summary queries in high-speed in-memory storage."
  },
  {
    "d": "V",
    "q": "Scenario 6 (V): How can you conditionally format the title text of a card visual dynamically based on the user's selected slicer value?",
    "o": [
      "Use the 'fx' button next to Title Text and link it to a DAX measure returning formatted text",
      "Create a separate card for every possible slicer choice",
      "Hardcode the title text in the JSON theme file",
      "Use the Alt Text property instead of Title"
    ],
    "a": [
      0
    ],
    "e": "Clicking the `fx` conditional formatting button allows binding title strings directly to dynamic DAX measures."
  },
  {
    "d": "S",
    "q": "Scenario 7 (S): Which Power BI feature allows administrators to analyze capacity resource consumption, CPU throttling, and memory spikes in Fabric capacities?",
    "o": [
      "Microsoft Fabric Capacity Metrics App",
      "Windows Task Manager",
      "Power BI Desktop Performance Analyzer",
      "Tabular Editor Best Practice Analyzer"
    ],
    "a": [
      0
    ],
    "e": "The Fabric Capacity Metrics App provides second-by-second telemetry on CPU core second consumption and throttling."
  },
  {
    "d": "P",
    "q": "Scenario 5 (P): You observe that a Power Query refresh is failing because of data type mismatch in a column containing mixed numbers and 'N/A' text. What transformation cleans this effectively?",
    "o": [
      "Replace 'N/A' with null, then set column data type to Integer or Decimal",
      "Delete all rows containing errors using Table.RemoveRows",
      "Change the entire dataset locale to en-US",
      "Convert the column to Binary"
    ],
    "a": [
      0
    ],
    "e": "Replacing non-numeric placeholders with null allows proper numerical typing without discarding valid transaction rows."
  },
  {
    "d": "M",
    "q": "Scenario 5 (M): What is the primary difference between `USERELATIONSHIP()` and `CROSSFILTER()` in DAX?",
    "o": [
      "USERELATIONSHIP activates an inactive relationship; CROSSFILTER alters cross-filtering direction or disables a relationship",
      "USERELATIONSHIP alters cross-filtering; CROSSFILTER activates inactive relationships",
      "USERELATIONSHIP can only be used in calculated columns",
      "CROSSFILTER is used exclusively for Row-Level Security"
    ],
    "a": [
      0
    ],
    "e": "USERELATIONSHIP activates an inactive path, while CROSSFILTER changes filter direction (Both, Single, None)."
  },
  {
    "d": "V",
    "q": "Scenario 6 (V): You need to prevent visual interaction between a Product Category slicer and a Company Overview KPI card. Where do you adjust this?",
    "o": [
      "Format tab -> Edit Interactions -> Set to 'None'",
      "Selection Pane -> Hide Visual",
      "Modeling tab -> Manage Roles",
      "Sync Slicers pane"
    ],
    "a": [
      0
    ],
    "e": "Edit Interactions lets report authors control whether a slicer filters, highlights, or has no effect on individual visuals."
  },
  {
    "d": "S",
    "q": "Scenario 8 (S): You need to configure incremental refresh for a 500-million-row sales table in Power BI Service. What two parameters must be created in Power Query?",
    "o": [
      "RangeStart and RangeEnd (DateTime type)",
      "DateMin and DateMax (Integer type)",
      "StartDate and EndDate (Text type)",
      "RefreshMin and RefreshMax (Duration type)"
    ],
    "a": [
      0
    ],
    "e": "Power BI incremental refresh requires precisely named `RangeStart` and `RangeEnd` DateTime parameters."
  },
  {
    "d": "P",
    "q": "Scenario 5 (P): You need to import data from a web API that authenticates using OAuth2 with token refresh. Where should you configure this credential securely?",
    "o": [
      "In Data Source Settings -> Edit Permissions in Power BI Desktop / Gateway",
      "Hardcode the bearer token in the Power Query M formula text",
      "Pass the token as a URL query parameter in the API link",
      "Save the token in an unencrypted CSV file"
    ],
    "a": [
      0
    ],
    "e": "Data Source Settings handles OAuth2 tokens securely with automatic credential management and refresh."
  },
  {
    "d": "M",
    "q": "Scenario 5 (M): In a star schema, why should you avoid snowflake schemas where dimension tables relate to other normalized dimension tables?",
    "o": [
      "Snowflake schemas increase relationship hops and reduce VertiPaq compression efficiency and query speed",
      "Power BI does not support relationships between dimension tables",
      "Snowflake schemas cause reports to print in black and white",
      "Direct Lake mode does not allow relationships"
    ],
    "a": [
      0
    ],
    "e": "Star schemas are flat, denormalized dimensions that maximize VertiPaq column encoding and reduce join complexity."
  },
  {
    "d": "V",
    "q": "Scenario 7 (V): A report page contains multiple cards, bar charts, and a slicer. You want screen reader users to experience the visuals in a logical, coherent reading order. Where do you configure this?",
    "o": [
      "Selection Pane -> Tab Order",
      "Format Pane -> Visual Align",
      "Performance Analyzer",
      "Bookmarks Pane"
    ],
    "a": [
      0
    ],
    "e": "Tab order in the Selection pane dictates the exact sequence in which screen readers and keyboard navigation traverse elements."
  },
  {
    "d": "S",
    "q": "Scenario 8 (S): What is the primary benefit of deploying a semantic model to a Premium Per User (PPU) or Fabric capacity workspace regarding model size?",
    "o": [
      "Support for Large Dataset Storage Format (up to 400 GB or capacity limits)",
      "Models are capped at 1 GB",
      "Automatic translation to Python scripts",
      "DirectQuery is disabled"
    ],
    "a": [
      0
    ],
    "e": "Premium/Fabric capacities support large dataset storage format, lifting the 1 GB Pro import limit."
  },
  {
    "d": "P",
    "q": "Scenario 5 (P): In Power Query Editor, which tool shows you the percentage of valid, error, and empty values for every column simultaneously?",
    "o": [
      "Column Quality in the View tab",
      "Column Distribution",
      "Column Profile",
      "Formula Bar"
    ],
    "a": [
      0
    ],
    "e": "Column Quality displays Valid, Error, and Empty percentages at the top of each column header."
  },
  {
    "d": "M",
    "q": "Scenario 5 (M): You need to create a DAX measure that counts active customers who made a purchase in both the current month and the previous month. Which function helps compare sets?",
    "o": [
      "INTERSECT(CurrentCustomers, PreviousCustomers)",
      "UNION(CurrentCustomers, PreviousCustomers)",
      "EXCEPT(CurrentCustomers, PreviousCustomers)",
      "CROSSJOIN(CurrentCustomers, PreviousCustomers)"
    ],
    "a": [
      0
    ],
    "e": "INTERSECT returns the rows that appear in both table expressions."
  }
]
};
