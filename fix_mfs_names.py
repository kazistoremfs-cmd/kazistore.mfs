with open("src/data/services.tsx", "r") as f:
    content = f.read()

content = content.replace("'bKash – Send Money/Cash In / Out'", "'bKash'")
content = content.replace("'Nagad – Cash In / Out'", "'Nagad'")
content = content.replace("'Rocket – Cash In / Out'", "'Rocket'")

with open("src/data/services.tsx", "w") as f:
    f.write(content)
