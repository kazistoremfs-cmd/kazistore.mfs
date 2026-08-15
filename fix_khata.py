with open("src/components/SSCDetails.tsx", "r") as f:
    content = f.read()

content = content.replace("বোর্ড চ্যালেঞ্জ (খাতা পুনঃনিরীক্ষণ)", "বোর্ড চ্যালেঞ্জ")
content = content.replace("(খাতা পুনঃনিরীক্ষণ) ", "")

with open("src/components/SSCDetails.tsx", "w") as f:
    f.write(content)
