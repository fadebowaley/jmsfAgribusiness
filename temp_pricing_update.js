// Update the pricing structure in Book-Consultation.jsx
const fs = require('fs');

// Read the current file
let content = fs.readFileSync('src/pages/Book-Consultation.jsx', 'utf8');

// Update the pricing tiers
const updatedContent = content.replace(
  /const pricingTiers = \[[\s\S]*?\];/,
  `const pricingTiers = [
    {
      type: "Students",
      price: "$10.00",
      description: "1-hour consultation session",
      requirement: "Valid student ID required",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      popular: false,
    },
    {
      type: "Cooperatives",
      price: "$40.00",
      description: "1-hour consultation session",
      requirement: "Certificate of registration required",
      icon: UserCheck,
      color: "from-green-500 to-green-600",
      popular: false,
    },
    {
      type: "Corporate/Institutions",
      price: "$100.00",
      description: "1-hour consultation session",
      requirement: "Corporate entities, institutions, government agencies",
      icon: Briefcase,
      color: "from-orange-500 to-orange-600",
      popular: true,
    },
    {
      type: "International Clients",
      price: "$100.00",
      description: "1-hour consultation session",
      requirement: "Corporate & individuals in diaspora",
      icon: Globe,
      color: "from-red-500 to-red-600",
      popular: false,
    },
    {
      type: "Startups",
      price: "$25.00",
      description: "1-hour consultation session",
      requirement: "Registration proof (under 18 months)",
      icon: Rocket,
      color: "from-purple-500 to-purple-600",
      popular: false,
    },
    {
      type: "Women-led SMEs",
      price: "$50.00",
      description: "1-hour consultation session",
      requirement: "Proof of women-led business registration",
      icon: UserCheck,
      color: "from-pink-500 to-pink-600",
      popular: false,
    },
  ];`
);

// Update the form options
const finalContent = updatedContent.replace(
  /<option value="student">Students \(\$10\.00\)<\/option>[\s\S]*?<option value="international">International Clients \(\$100\.00\)<\/option>/,
  `<option value="student">Students ($10.00)</option>
                        <option value="cooperative">Cooperatives ($40.00)</option>
                        <option value="corporate">Corporate/Institutions ($100.00)</option>
                        <option value="international">International Clients ($100.00)</option>
                        <option value="startup">Startups ($25.00)</option>
                        <option value="women-sme">Women-led SMEs ($50.00)</option>`
);

// Write the updated content back
fs.writeFileSync('src/pages/Book-Consultation.jsx', finalContent);

console.log('Book Consultation pricing updated successfully!');
