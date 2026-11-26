// Existing Microsoft certifications (preserved intact)
import { PL300 } from './pl300.js';
import { PL900 } from './pl900.js';
import { DP600 } from './dp600.js';
import { DP700 } from './dp700.js';
import { DP800 } from './dp800.js';

// New Certifications: Databricks
import { DB_DE_ASSOC } from './databricks/de_assoc.js';
import { DB_DA_ASSOC } from './databricks/da_assoc.js';

// New Certifications: Snowflake
import { SNOW_COF } from './snowflake/cof_c03.js';

// New Certifications: Microsoft Azure
import { MS_DP750 } from './microsoft/dp750.js';
import { MS_AI103 } from './microsoft/ai103.js';
import { MS_AB620 } from './microsoft/ab620.js';

// New Certifications: Anthropic Claude
import { ANTH_CCDV_F } from './anthropic/ccdv_f.js';

// Ensure platform metadata is enriched on existing certifications
PL300.platform = 'Microsoft';
PL900.platform = 'Microsoft';
DP600.platform = 'Microsoft';
DP700.platform = 'Microsoft';
DP800.platform = 'Microsoft';

export const EXAMS = {
  // Existing
  PL300,
  PL900,
  DP600,
  DP700,
  DP800,
  // Databricks
  DB_DE_ASSOC,
  DB_DA_ASSOC,
  // Snowflake
  SNOW_COF,
  // Microsoft Azure / AI / Copilot
  MS_DP750,
  MS_AI103,
  MS_AB620,
  // Anthropic Claude
  ANTH_CCDV_F
};

export const EXAM_LIST = [
  // Existing
  PL300,
  PL900,
  DP600,
  DP700,
  DP800,
  // Databricks
  DB_DE_ASSOC,
  DB_DA_ASSOC,
  // Snowflake
  SNOW_COF,
  // Microsoft
  MS_DP750,
  MS_AI103,
  MS_AB620,
  // Anthropic
  ANTH_CCDV_F
];

export const PLATFORMS = ['All', 'Microsoft', 'Databricks', 'Snowflake', 'Anthropic'];

export default EXAMS;
