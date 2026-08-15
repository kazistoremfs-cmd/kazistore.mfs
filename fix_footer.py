with open("src/components/Footer.tsx", "r") as f:
    content = f.read()

content = content.replace("text-slate-400", "text-slate-300")
content = content.replace("text-slate-500", "text-slate-400")

with open("src/components/Footer.tsx", "w") as f:
    f.write(content)
