import re

# High quality curated list of unique luxury fitness, wellness, spa, gym, nutrition, architecture images
unique_images = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop", # Gym interior / weights
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop", # Personal trainer
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop", # Spa / Massage
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop", # Fine dining / Organic restaurant
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop", # Luxury Pool / Recovery
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop", # Crossfit / Powerlifting
    "https://images.unsplash.com/photo-1576678927484-cc909957088c?q=80&w=1200&auto=format&fit=crop", # Dumbbells rack
    "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop", # Sauna / Steam room
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop", # Athlete training
    "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop", # Yoga / Meditation studio
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop", # Yoga pose sunset
    "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop", # Boxing gym / Ring
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop", # Pilates reformer
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop", # Fitness portrait male
    "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop", # Fitness portrait female
    "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=1200&auto=format&fit=crop", # Running track
    "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1200&auto=format&fit=crop", # Rowing machine
    "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1200&auto=format&fit=crop", # Athlete female workout
    "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1200&auto=format&fit=crop", # Cryotherapy / Cold plunge
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop", # Luxury Lounge architecture
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop", # Hotel / Resort pool
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop", # Luxury bathroom / Spa towels
    "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1200&auto=format&fit=crop", # Treadmill cardio
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop", # Luxury hotel entrance
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop", # Executive male avatar
    "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1200&auto=format&fit=crop", # Stretching / Mobility
    "https://images.unsplash.com/photo-1571388208497-71bedc66e932?q=80&w=1200&auto=format&fit=crop", # Modern gym equipment
    "https://images.unsplash.com/photo-1522898467493-49726bf28798?q=80&w=1200&auto=format&fit=crop", # Spinning / Indoor cycle studio
    "https://images.unsplash.com/photo-1570829460005-c840387bd1ea?q=80&w=1200&auto=format&fit=crop", # Hydration / Protein bar
    "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1200&auto=format&fit=crop", # High intensity training
    "https://images.unsplash.com/photo-1599058945522-28d584b6f4ff?q=80&w=1200&auto=format&fit=crop", # Kinesis machine / Cables
    "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1200&auto=format&fit=crop", # Weight plates gold accent
    "https://images.unsplash.com/photo-1588726585160-c9a1ff0eefec?q=80&w=1200&auto=format&fit=crop", # Infrared sauna
    "https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?q=80&w=1200&auto=format&fit=crop", # Kettlebell workout
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1200&auto=format&fit=crop", # Running male athlete
    "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1200&auto=format&fit=crop", # Gym ropes training
    "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?q=80&w=1200&auto=format&fit=crop", # Swimming pool indoor
    "https://images.unsplash.com/photo-1579758682665-53a1a614eea6?q=80&w=1200&auto=format&fit=crop", # Heavy lifting rack
    "https://images.unsplash.com/photo-1558017490-6725838ccb21?q=80&w=1200&auto=format&fit=crop", # Gym interior panoramic
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop", # Female gymnast / flex
    "https://images.unsplash.com/photo-1561043433-8a329d44c803?q=80&w=1200&auto=format&fit=crop", # Barbell detail
    "https://images.unsplash.com/photo-1564759228495-9d83df2425b7?q=80&w=1200&auto=format&fit=crop", # Healthy gourmet salad
    "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1200&auto=format&fit=crop", # Gym dumbbells bronze
    "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1200&auto=format&fit=crop", # Outdoor rooftop workout
    "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=1200&auto=format&fit=crop", # Fresh smoothie / juice
    "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?q=80&w=1200&auto=format&fit=crop", # Organic meal prep
    "https://images.unsplash.com/photo-1526506114642-5321fa75069b?q=80&w=1200&auto=format&fit=crop", # Gym studio lighting
    "https://images.unsplash.com/photo-1584985392231-33dc0f26191a?q=80&w=1200&auto=format&fit=crop", # Modern locker room
    "https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?q=80&w=1200&auto=format&fit=crop", # Luxury shower suite
    "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=1200&auto=format&fit=crop", # Punching bag training
    "https://images.unsplash.com/photo-1570174006371-70ca2b0fb2c5?q=80&w=1200&auto=format&fit=crop", # Facial treatment / spa
    "https://images.unsplash.com/photo-1573059881822-b5e82bba71ec?q=80&w=1200&auto=format&fit=crop", # Hyperbaric oxygen chamber
    "https://images.unsplash.com/photo-1562771379-eafdca7a02f8?q=80&w=1200&auto=format&fit=crop", # Athletic track night
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", # Male portrait
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop", # Female portrait
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", # Executive female
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop", # Female coach
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop", # Male executive
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"  # Male trainer
]

with open('src/data/clubData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all occurrences of image properties sequentially with unique URLs from our pool
img_index = 0

def replace_img(match):
    global img_index
    if img_index < len(unique_images):
        url = unique_images[img_index]
        img_index += 1
    else:
        url = unique_images[img_index % len(unique_images)]
        img_index += 1
    
    prop_name = match.group(1) # 'image' or 'beforeImage' or 'afterImage' or 'avatar'
    return f"{prop_name}: '{url}'"

# Pattern matches: image: '...' or avatar: '...' or beforeImage: '...' or afterImage: '...'
new_content = re.sub(r"(image|avatar|beforeImage|afterImage):\s*'https://images\.unsplash\.com/[^']+'", replace_img, content)

with open('src/data/clubData.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Replaced {img_index} images in clubData.ts with unique high quality images!")
