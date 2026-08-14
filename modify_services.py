with open("src/data/services.tsx", "r") as f:
    content = f.read()

search = """        {
          title: "SSC",
          content: "SSC এডমিশন সম্পর্কিত তথ্য ও সেবাসমূহ এখানে পাওয়া যাবে।",
          link: "/ssc-details"
        },
        {
          title: "কলেজ ভর্তি আবেদন",
          content: "একাদশ শ্রেণিতে ভর্তি আবেদন, নিশ্চায়ন এবং অন্যান্য সেবাসমূহ এখানে পাবেন।",
          link: "/college-admission-details"
        },"""

replace = """        {
          title: "SSC",
          content: "SSC পরীক্ষা, রেজাল্ট, বোর্ড চ্যালেঞ্জ এবং একাদশ শ্রেণিতে কলেজ ভর্তি সংক্রান্ত সেবাসমূহ।",
          links: [
            { label: "রেজাল্ট ও বোর্ড চ্যালেঞ্জ", url: "/ssc-details" },
            { label: "কলেজ ভর্তি আবেদন", url: "/college-admission-details" }
          ]
        },"""

content = content.replace(search, replace)

with open("src/data/services.tsx", "w") as f:
    f.write(content)
