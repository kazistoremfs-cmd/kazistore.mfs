with open("src/data/services.tsx", "r") as f:
    content = f.read()

import re

search = """        {
          title: "SSC রেজাল্ট ও বোর্ড চ্যালেঞ্জ",
          content: "SSC রেজাল্ট, বোর্ড চ্যালেঞ্জ এবং অন্যান্য আনুষাঙ্গিক সেবাসমূহ এখানে পাবেন।",
          link: "/ssc-details"
        },"""

replace = """        {
          title: "SSC",
          content: "SSC এডমিশন সম্পর্কিত তথ্য ও সেবাসমূহ এখানে পাওয়া যাবে।",
          link: "/ssc-details"
        },"""

content = content.replace(search, replace)

with open("src/data/services.tsx", "w") as f:
    f.write(content)
