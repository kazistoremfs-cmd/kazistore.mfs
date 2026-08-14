with open("src/data/services.tsx", "r") as f:
    content = f.read()

search = """        {
          title: "SSC",
          content: "SSC পরীক্ষা, রেজাল্ট, বোর্ড চ্যালেঞ্জ এবং একাদশ শ্রেণিতে কলেজ ভর্তি সংক্রান্ত সেবাসমূহ।",
          links: [
            { label: "রেজাল্ট ও বোর্ড চ্যালেঞ্জ", url: "/ssc-details" },
            { label: "কলেজ ভর্তি আবেদন", url: "/college-admission-details" }
          ]
        },"""

replace = """        {
          title: "SSC",
          subItems: [
            {
              content: "SSC পরীক্ষা, রেজাল্ট ও বোর্ড চ্যালেঞ্জ",
              link: "/ssc-details"
            },
            {
              content: "একাদশ শ্রেণিতে কলেজ ভর্তি আবেদন",
              link: "/college-admission-details"
            }
          ]
        },"""

content = content.replace(search, replace)

with open("src/data/services.tsx", "w") as f:
    f.write(content)
