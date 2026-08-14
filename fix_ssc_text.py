with open("src/data/services.tsx", "r") as f:
    content = f.read()

content = content.replace("SSC পরীক্ষা, রেজাল্ট ও বোর্ড চ্যালেঞ্জ", "SSC পরীক্ষার রেজাল্ট ও বোর্ড চ্যালেঞ্জ")
content = content.replace("একাদশ শ্রেণিতে কলেজ ভর্তি আবেদন", "কলেজ ভর্তি আবেদন")

with open("src/data/services.tsx", "w") as f:
    f.write(content)
