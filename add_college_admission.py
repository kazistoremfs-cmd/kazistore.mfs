with open("src/data/services.tsx", "r") as f:
    content = f.read()

search = """        {
          title: "HSC",
          content: "HSC এডমিশন সম্পর্কিত তথ্য ও সেবাসমূহ এখানে পাওয়া যাবে।"
        },"""

replace = """        {
          title: "কলেজ ভর্তি আবেদন",
          content: "একাদশ শ্রেণিতে ভর্তি আবেদন, নিশ্চায়ন এবং অন্যান্য সেবাসমূহ এখানে পাবেন।",
          link: "/college-admission-details"
        },
        {
          title: "HSC",
          content: "HSC এডমিশন সম্পর্কিত তথ্য ও সেবাসমূহ এখানে পাওয়া যাবে।"
        },"""

content = content.replace(search, replace)

with open("src/data/services.tsx", "w") as f:
    f.write(content)
