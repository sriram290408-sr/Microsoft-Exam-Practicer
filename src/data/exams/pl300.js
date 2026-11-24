// PL-300: Power BI Data Analyst
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
    "q": "A report-style sheet shows Region only on the first row of each group, and the rows below it are null. You need Region on every row. What do you apply to the Region column?",
    "o": [
      "Fill Down",
      "Fill Up",
      "Remove Blank Rows",
      "Replace Errors"
    ],
    "a": [
      0
    ],
    "e": "Fill Down copies the last non-null value into the null cells below it. Fill Up would copy values from below."
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
  }
]
};

export default PL300;
