with open("src/data/services.tsx", "r") as f:
    lines = f.read()

import re

insertion = """    }
    
    let corners = undefined;
    if (item.id === 'edu-admission') {
      corners = [
        {
          title: "SSC",
          content: "SSC এডমিশন সম্পর্কিত তথ্য ও সেবাসমূহ এখানে পাওয়া যাবে।"
        },
        {
          title: "HSC",
          content: "HSC এডমিশন সম্পর্কিত তথ্য ও সেবাসমূহ এখানে পাওয়া যাবে।"
        },
        {
          title: "Hon's",
          content: "অনার্স এডমিশন সম্পর্কিত তথ্য ও সেবাসমূহ এখানে পাওয়া যাবে।"
        },
        {
          title: "Master's",
          content: "মাস্টার্স এডমিশন সম্পর্কিত তথ্য ও সেবাসমূহ এখানে পাওয়া যাবে।"
        }
      ];
    }

    return {"""

lines = lines.replace("    }\n\n    return {", insertion)

lines = lines.replace("bg: 'bg-[#0F172A]',", "bg: 'bg-[#0F172A]',\n      corners,")

with open("src/data/services.tsx", "w") as f:
    f.write(lines)
