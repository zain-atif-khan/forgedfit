import os
import re

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.ts') or file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # The bad URLs look like: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48://images.unsplash.com/photo-...'
            # We need to replace 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48://' with 'https://'
            
            new_content = re.sub(r'https://images\.unsplash\.com/photo-1534438327276-14e5300c3a48://', 'https://', content)
            
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)

print("Fixed URLs!")
