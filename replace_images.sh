#!/bin/bash

# List of unique luxury fitness/wellness images
IMAGES=(
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef"
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b"
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7"
  "https://images.unsplash.com/photo-1517838277536-f5f99be501cd"
  "https://images.unsplash.com/photo-1576678927484-cc909957088c"
  "https://images.unsplash.com/photo-1507652313519-d4e9174996dd"
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
  "https://images.unsplash.com/photo-1545205597-3d9d02c29597"
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773"
  "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed"
  "https://images.unsplash.com/photo-1574680096145-d05b474e2155"
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
  "https://images.unsplash.com/photo-1518310383802-640c2de311b2"
  "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f"
  "https://images.unsplash.com/photo-1548690312-e3b507d8c110"
  "https://images.unsplash.com/photo-1594381898411-846e7d193883"
  "https://images.unsplash.com/photo-1517963879433-6ad2b056d712"
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  "https://images.unsplash.com/photo-1566073771259-6a8506099945"
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a"
  "https://images.unsplash.com/photo-1538805060514-97d9cc17730c"
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
  "https://images.unsplash.com/photo-1550345332-09e3ac987658"
  "https://images.unsplash.com/photo-1571388208497-71bedc66e932"
  "https://images.unsplash.com/photo-1522898467493-49726bf28798"
  "https://images.unsplash.com/photo-1570829460005-c840387bd1ea"
  "https://images.unsplash.com/photo-1579758629938-03607ccdbaba"
  "https://images.unsplash.com/photo-1599058945522-28d584b6f4ff"
  "https://images.unsplash.com/photo-1590487988256-9ed24133863e"
  "https://images.unsplash.com/photo-1588726585160-c9a1ff0eefec"
  "https://images.unsplash.com/photo-1580261450046-d0a30080dc9b"
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5"
  "https://images.unsplash.com/photo-1518609878373-06d740f60d8b"
  "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2"
  "https://images.unsplash.com/photo-1579758682665-53a1a614eea6"
  "https://images.unsplash.com/photo-1558017490-6725838ccb21"
  "https://images.unsplash.com/photo-1518611012118-696072aa579a"
  "https://images.unsplash.com/photo-1561043433-8a329d44c803"
  "https://images.unsplash.com/photo-1564759228495-9d83df2425b7"
  "https://images.unsplash.com/photo-1549476464-37392f717541"
  "https://images.unsplash.com/photo-1534258936925-c58bed479fcb"
  "https://images.unsplash.com/photo-1550259979-ed79b48d2a30"
  "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906"
  "https://images.unsplash.com/photo-1526506114642-5321fa75069b"
  "https://images.unsplash.com/photo-1574680096145-d05b474e2155"
  "https://images.unsplash.com/photo-1561043433-0bd27f51950e"
  "https://images.unsplash.com/photo-1584985392231-33dc0f26191a"
  "https://images.unsplash.com/photo-1591258739299-5b65d5cbb235"
  "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0"
  "https://images.unsplash.com/photo-1570174006371-70ca2b0fb2c5"
  "https://images.unsplash.com/photo-1522898467493-49726bf28798"
  "https://images.unsplash.com/photo-1573059881822-b5e82bba71ec"
  "https://images.unsplash.com/photo-1562771379-eafdca7a02f8"
)

# Extract all image URLs currently in the codebase
URLS=$(grep -roP 'https://images.unsplash.com/photo-[a-zA-Z0-9\-]+' src/ | cut -d: -f2 | sort | uniq)

index=0
for url in $URLS; do
  if [ $index -lt ${#IMAGES[@]} ]; then
    new_url=${IMAGES[$index]}
    # find and replace across src/
    find src/ -type f -exec sed -i "s|$url|$new_url|g" {} +
    ((index++))
  fi
done

echo "Replaced $index images."
