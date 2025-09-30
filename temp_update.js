// Update the Jobs Done page with GB Foods Nigeria client information
const fs = require('fs');

// Read the current file
let content = fs.readFileSync('src/pages/Jobs-Done.jsx', 'utf8');

// Update project 6 (Tomato Industry Position Paper) with GB Foods Nigeria information
const updatedContent = content.replace(
  /name: "Tomato Industry Position Paper: Market-Oriented Policy Framework",[\s\S]*?contact: "Richard Ogundele",[\s\S]*?phone: "\+2348129460848",/,
  `name: "Tomato Industry Position Paper: Market-Oriented Policy Framework",
    dates: "November 2021",
    client: "The GB Foods Nigeria",
    category: "Policy Development",
    status: "Completed",
    brief: "Development of strategic policy recommendations to make the Nigerian tomato sector work better for industry players and stimulate economic growth, value addition, and job creation.",
    fullDescription: "An in-depth review of the tomato sector vis-à-vis the policy direction of the Federal Government of Nigeria towards controlling importation of tomato products due to shortage from internal production and processing. The paper provided strategic approaches for making the tomato sector more effective for all actors, especially smallholder farmers.",
    outcomes: [
      "Comprehensive tomato sector policy analysis",
      "Strategic framework for sector improvement",
      "Import substitution strategy recommendations",
      "Smallholder farmer empowerment guidelines"
    ],
    contact: "Dr Ted Ngu",
    email: "Tngu@thegbfoods.com",
    phone: "+2348058021258",`
);

// Write the updated content back
fs.writeFileSync('src/pages/Jobs-Done.jsx', updatedContent);

console.log('Jobs Done page updated successfully!');