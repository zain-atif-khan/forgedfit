import re
import os

images_pool = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    "https://images.unsplash.com/photo-1576678927484-cc909957088c",
    "https://images.unsplash.com/photo-1507652313519-d4e9174996dd",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed",
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    "https://images.unsplash.com/photo-1518310383802-640c2de311b2",
    "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f",
    "https://images.unsplash.com/photo-1548690312-e3b507d8c110",
    "https://images.unsplash.com/photo-1594381898411-846e7d193883",
    "https://images.unsplash.com/photo-1517963879433-6ad2b056d712",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
    "https://images.unsplash.com/photo-1538805060514-97d9cc17730c",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    "https://images.unsplash.com/photo-1550345332-09e3ac987658",
    "https://images.unsplash.com/photo-1571388208497-71bedc66e932",
    "https://images.unsplash.com/photo-1522898467493-49726bf28798",
    "https://images.unsplash.com/photo-1570829460005-c840387bd1ea",
    "https://images.unsplash.com/photo-1579758629938-03607ccdbaba",
    "https://images.unsplash.com/photo-1599058945522-28d584b6f4ff",
    "https://images.unsplash.com/photo-1590487988256-9ed24133863e",
    "https://images.unsplash.com/photo-1588726585160-c9a1ff0eefec",
    "https://images.unsplash.com/photo-1580261450046-d0a30080dc9b",
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
    "https://images.unsplash.com/photo-1518609878373-06d740f60d8b",
    "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2",
    "https://images.unsplash.com/photo-1579758682665-53a1a614eea6",
    "https://images.unsplash.com/photo-1558017490-6725838ccb21",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a",
    "https://images.unsplash.com/photo-1561043433-8a329d44c803",
    "https://images.unsplash.com/photo-1564759228495-9d83df2425b7",
    "https://images.unsplash.com/photo-1549476464-37392f717541",
    "https://images.unsplash.com/photo-1534258936925-c58bed479fcb",
    "https://images.unsplash.com/photo-1550259979-ed79b48d2a30",
    "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906",
    "https://images.unsplash.com/photo-1526506114642-5321fa75069b",
    "https://images.unsplash.com/photo-1584985392231-33dc0f26191a",
    "https://images.unsplash.com/photo-1591258739299-5b65d5cbb235",
    "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0",
    "https://images.unsplash.com/photo-1570174006371-70ca2b0fb2c5",
    "https://images.unsplash.com/photo-1573059881822-b5e82bba71ec",
    "https://images.unsplash.com/photo-1562771379-eafdca7a02f8",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9"
]

# We want to replace each distinct Unsplash photo ID in commercialScenes.ts and component files
targets = ['src/data/commercialScenes.ts', 'src/components/CircularGallery.tsx', 'src/components/HeroSection.tsx', 'src/components/SanctuaryTrailSection.tsx', 'src/components/PersonalizedCareSection.tsx']

pool_idx = 0
used_ids = set()

for target in targets:
    if os.path.exists(target):
        with open(target, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all unsplash photo urls
        urls = re.findall(r'https://images\.unsplash\.com/photo-[a-zA-Z0-9\-]+', content)
        for url in urls:
            if url in used_ids or pool_idx < len(images_pool):
                new_base = images_pool[pool_idx % len(images_pool)]
                pool_idx += 1
                content = content.replace(url, new_base, 1)
                used_ids.add(new_base)
        
        with open(target, 'w', encoding='utf-8') as f:
            f.write(content)

print("Updated component and scene images for uniqueness!")
