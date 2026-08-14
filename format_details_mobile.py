import os

files = ['src/components/SSCDetails.tsx', 'src/components/CollegeAdmissionDetails.tsx']

for file_path in files:
    with open(file_path, "r") as f:
        content = f.read()

    # Make list items text-[15px]
    content = content.replace('text-sm md:text-base', 'text-[15px] md:text-base')
    
    # Make headers larger slightly
    content = content.replace('text-3xl md:text-4xl lg:text-5xl', 'text-3xl sm:text-4xl lg:text-5xl')
    
    with open(file_path, "w") as f:
        f.write(content)
