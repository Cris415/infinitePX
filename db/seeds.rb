require 'open-uri'

User.delete_all
Post.delete_all
Follow.delete_all
Comment.delete_all
Tag.delete_all
TaggedPost.delete_all

####### CREATE TAGS #######

tagNames = ['architecture', 'building', 'vibes','iconic', 'destination', 
  'mood', 'vacay', 'perspectives','view','unfiltered','angles','inspiration',
  'views','landscape','portrait','process','panoramic','panorama','skyline',
  'cityscape','nature','natural','urban','rural','life','plants',
  'wonders','wonder','still life','food','suburban','skyscraper','bridge',
  'rainforest','jungle','sunrise','dawn','dusk','sunset','stadium',
  'mugshot','filtered','garden','lake','river','ocean','beach','flower','love',
  'scene','scenic','attitude','altitude','snow','rain','sun','moon','stars','sky',
  'green','art','sculpture','museum','office','library','street','church',
  'concert','home','house','hotel','joy','earth','toys','breakfast','lunch',
  'dinner','snack','desert','thirsty', 'editing',
  'headshot','cover','professional','amateur','sponsored','free','boy','girl',
  'baby','daddy','dad','mother','father','brother','sister','daughter','son',
  'mom','mommy', 'pet','pets','troublemaker','trouble','perception','scenes',
  'peek','glance','photograph','moments','moment','icon','artistic','artist',
  'showstopper','showstopping','brilliant','focused','sharp',
  'black and white', 'before and after','now and then', 'no people', 'outdoors', 
  'travel destinations', 'travel', 'tree', 'plant', 'sunlight', 'fog', 'grass',
  'horizontal', 'city', 'shadow', 'nightscape', 'basktball', 'flag', 'macro',
  'mountains', 'water', 'details', 'abstract', 'dog', 'milk', 'coffee', 'close up'
]

tagNames.each do |name|
  Tag.create!({name: name})
end

####### CREATE USERS #######

demo = User.create!(
  username: 'demo_user',
  password: 'password'
)

diane = User.create!(
  username: 'Diane',
  password: 'password'
)
annie = User.create!(
  username: 'Annie',
  password: 'password'
)

robert = User.create!(
  username: 'Robert',
  password: 'password'
)
steve = User.create!(
  username: 'Steve',
  password: 'password'
)

edward = User.create!(
  username: 'Edward',
  password: 'password'
)
alfred = User.create!(
  username: 'Alfred',
  password: 'password'
)

irving = User.create!(
  username: 'Irving',
  password: 'password'
)

cindy = User.create!(
  username: 'Cindy',
  password: 'password'
)
amy = User.create!(
  username: 'Amy',
  password: 'password'
)
drew = User.create!(
  username: 'Drew',
  password: 'password'
)
john = User.create!(
  username: 'John',
  password: 'password'
)
kate = User.create!(
  username: 'Kate',
  password: 'password'
)
jazz = User.create!(
  username: 'Jasmine',
  password: 'password'
)

####### CREATE FOLLOW #######

Follow.create({followed_id: annie.id, follower_id: robert.id})
Follow.create({followed_id: annie.id, follower_id: diane.id})
Follow.create({followed_id: diane.id, follower_id: robert.id})
Follow.create({followed_id: robert.id, follower_id: demo.id})

Follow.create({followed_id: steve.id, follower_id: irving.id})
Follow.create({followed_id: edward.id, follower_id: cindy.id})
Follow.create({followed_id: steve.id, follower_id: irving.id})

Follow.create({followed_id: cindy.id, follower_id: demo.id})
Follow.create({followed_id: irving.id, follower_id: robert.id})
Follow.create({followed_id: cindy.id, follower_id: steve.id})

Follow.create({followed_id: amy.id, follower_id: john.id})
Follow.create({followed_id: irving.id, follower_id: kate.id})
Follow.create({followed_id: kate.id, follower_id: jazz.id})

Follow.create({followed_id: jazz.id, follower_id: drew.id})
Follow.create({followed_id: drew.id, follower_id: john.id})
Follow.create({followed_id: cindy.id, follower_id: steve.id})

Follow.create({followed_id: john.id, follower_id: irving.id})
Follow.create({followed_id: jazz.id, follower_id: amy.id})
Follow.create({followed_id: amy.id, follower_id: diane.id})

Follow.create({followed_id: amy.id, follower_id: annie.id})
Follow.create({followed_id: jazz.id, follower_id: annie.id})
Follow.create({followed_id: robert.id, follower_id: drew.id})

Follow.create({followed_id: jazz.id, follower_id: cindy.id})
Follow.create({followed_id: edward.id, follower_id: jazz.id})
Follow.create({followed_id: cindy.id, follower_id: steve.id})

Follow.create({followed_id: drew.id, follower_id: edward.id})
Follow.create({followed_id: cindy.id, follower_id: amy.id})
Follow.create({followed_id: jazz.id, follower_id: diane.id})

####### IMPORT IMAGES #######

file1 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/daytona.jpeg')
file2 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/moon.jpeg')
file3 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/basketballhoop.JPG')
file4 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/architecture.JPG')
file5 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/daytona2.jpeg')
file6 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/fire.jpeg')
file7 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/frozenguy.JPG')
file8 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/goldengate.jpeg')
file9 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/flower.jpeg')
file10 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/sunset.jpeg')
file11 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/transamerica.JPG')
file12 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/underdock.jpeg')
file13 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/watergate.JPG')
file14 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/windows.JPG')
file15 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/bike.jpg')
file16 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/building.JPG')
file17 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/camilo.jpeg')
file18 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/capital.jpg')
file19 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/cityhall.jpeg')
file20 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/coffee.jpeg')
file21 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/couch.jpeg')
file22 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/cupcake.jpeg')
file23 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/daytona.jpeg')
file24 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/ferry.jpeg')
file25 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/flag.jpeg')
file26 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/flower1.jpeg')
file27 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/flower2.jpeg')
file28 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/lime.JPG')
file29 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/mars.jpg')
file30 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/nyc.JPG')
file31 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/ruf.jpeg')
file32 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/rufino2.JPG')
file33 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/statue.jpeg')


####### CREATE POSTS #######

post1 = Post.new(title:'Sunset in Daytona Beach', description: 'Sunset at Daytona Beach near Hilton Hotel.',  user_id: diane.id)
post2 = Post.new(title:'Moon', description: 'Captured in the evening.',  user_id: robert.id)
post3 = Post.new(title:'Basketball hoop', description: 'View of the silhouette a of a basketball hoop.',  user_id: annie.id  )
post4 = Post.new(title:'Guggenheim', description: 'Looking up at the inside the Guggenheim museum.',  user_id: steve.id)
post5 = Post.new(title:'The beach', description: 'Panorama of the beach in the morning.',  user_id: diane.id  )
post6 = Post.new(title:'Let there be Light', description: 'Closeup of a candle wick.',  user_id: alfred.id  )
post7 = Post.new(title:'Frozen guy', description: 'Captured from the Portrait Gallery!',  user_id: irving.id)
post8 = Post.new(title:'Golden Gate Bridge', description: 'A very cold and foggy day at the Golden Gate bridge!',  user_id: edward.id  )
post9 = Post.new(title:'Flower', description: 'Beautiful flower.',  user_id: cindy.id  )
post10 = Post.new(title:'Sunset', description: 'Sunset landscape captured from my balcony.',  user_id: diane.id)
post11 = Post.new(title:'Transamerica Tower', description: 'Looking up at the Transamerica tower',  user_id: robert.id  )
post12 = Post.new(title:'Underneath a dock', description: 'Love the lines made by this dock.',  user_id: cindy.id  )
post13 = Post.new(title:'Scandal', description: "Famous hotel in the nation's capital.",  user_id: cindy.id  )
post14 = Post.new(title:'Untitled', description: 'windows.',  user_id: alfred.id  )
post15 = Post.new(title:'Frozen Bike', description: 'A chill morning at the National Gallery of Art',  user_id: jazz.id  )
post16 = Post.new(title:'Church in the Wild', description: 'Walking around Palo Alto, when I spotted this interesting looking church.',  user_id: drew.id  )
post17 = Post.new(title:'Laser eyes', description: 'Camilo probably wants a treat!',  user_id: amy.id  )
post18 = Post.new(title:'Nations Capital', description: 'Crisp morning in the Nation\'s Capital',  user_id: kate.id  )
post19 = Post.new(title:'Power', description: 'San Francisco City Hall at an angle.',  user_id: john.id  )
post20 = Post.new(title:'My Morning', description: 'Still life of a coffee and cream',  user_id: alfred.id  )
post21 = Post.new(title:'Couch Vibes', description: 'Capture of my couch with the tv on',  user_id: jazz.id  )
post22 = Post.new(title:'Churro Cupcake', description: 'Closeup photo of a Churro Cupcake',  user_id: amy.id  )
post23 = Post.new(title:'Beach Vibes', description: 'Panorama of a beach in Daytona, Fl',  user_id: jazz.id  )
post24 = Post.new(title:'Dock of the Bay', description: 'Looking up at the Ferry Building in San Francisco, CA',  user_id: annie.id  )
post25 = Post.new(title:'Looking up At the Flag', description: 'A flag hanging down in Boston, MA for Memorial Day weekend',  user_id: kate.id  )
post26 = Post.new(title:'Closeup on Nature', description: 'A close up photo of a lily flower',  user_id: amy.id  )
post27 = Post.new(title:'Magenta Magic', description: 'Photo of a vibrant lily flower',  user_id: amy.id  )
post28 = Post.new(title:'Lime', description: 'Macro still of a dried up lime',  user_id: jazz.id  )
post29 = Post.new(title:'Mars', description: 'Ocean Beach in San Francisco, edited a bit :)',  user_id: diane.id  )
post30 = Post.new(title:'Carrying the Weight of the World', description: 'Statue near Rockefeller Center in NYC',  user_id: robert.id  )
post31 = Post.new(title:'Loving Eyes', description: 'Rufino waiting for a treat',  user_id: jazz.id  )
post32 = Post.new(title:'Treats', description: 'Just got woke up from a nap',  user_id: jazz.id  )
post33 = Post.new(title:'Statue', description: 'Black and white still of a statue in a museum',  user_id: drew.id  )

post1.photo.attach(io: file1, filename: 'daytona.jpeg')
post2.photo.attach(io: file2, filename: 'moon.jpeg')
post3.photo.attach(io: file3, filename: 'basketballhoop.JPG')
post4.photo.attach(io: file4, filename: 'architecture.JPG')
post5.photo.attach(io: file5, filename: 'daytona2.jpeg')
post6.photo.attach(io: file6, filename: 'fire.jpeg')
post7.photo.attach(io: file7, filename: 'frozenguy.JPG')
post8.photo.attach(io: file8, filename: 'goldengate.jpeg')
post9.photo.attach(io: file9, filename: 'flower.jpeg')
post10.photo.attach(io: file10, filename: 'sunset.jpeg')
post11.photo.attach(io: file11, filename: 'transamerica.JPG')
post12.photo.attach(io: file12, filename: 'underdock.jpeg')
post13.photo.attach(io: file13, filename: 'watergate.JPG')
post14.photo.attach(io: file14, filename: 'windows.JPG')

post15.photo.attach(io: file15, filename: 'bike.jpg')
post16.photo.attach(io: file16, filename: 'building.JPG')
post17.photo.attach(io: file17, filename: 'camilo.jpeg')
post18.photo.attach(io: file18, filename: 'capital.jpeg')
post19.photo.attach(io: file19, filename: 'cityhall.jpeg')
post20.photo.attach(io: file20, filename: 'coffee.jpeg')
post21.photo.attach(io: file21, filename: 'couch.jpeg')
post22.photo.attach(io: file22, filename: 'cupcake.jpeg')
post23.photo.attach(io: file23, filename: 'daytona.jpeg')
post24.photo.attach(io: file24, filename: 'ferry.jpeg')
post25.photo.attach(io: file25, filename: 'flag.jpeg')
post26.photo.attach(io: file26, filename: 'flower1.jpeg')
post27.photo.attach(io: file27, filename: 'flower2.jpeg')
post28.photo.attach(io: file28, filename: 'lime.JPG')
post29.photo.attach(io: file29, filename: 'mars.jpg')
post30.photo.attach(io: file30, filename: 'nyc.JPG')
post31.photo.attach(io: file31, filename: 'ruf.jpeg')
post32.photo.attach(io: file32, filename: 'rufino2.JPG')
post33.photo.attach(io: file33, filename: 'statue.jpeg')

post1.save!
post2.save!
post3.save!
post4.save!
post5.save!
post6.save!
post7.save!
post8.save!
post9.save!
post10.save!
post11.save!
post12.save!
post13.save!
post14.save!
post15.save!
post16.save!
post17.save!
post18.save!
post19.save!
post20.save!
post21.save!
post22.save!
# post23.save!
post24.save!
post25.save!
post26.save!
post27.save!
post28.save!
post29.save!
post30.save!
post31.save!
post32.save!
post33.save!

###### COMMENTS #######

Comment.create!({post_id: post1.id, author_id: diane.id, comment: 'Loving the beach theme'})
Comment.create!({post_id: post2.id, author_id: annie.id, comment: 'Love seeing pictures of the moon'})
Comment.create!({post_id: post3.id, author_id: robert.id, comment: 'Great colors!'})
Comment.create!({post_id: post4.id, author_id: steve.id, comment: 'Good composition'})
Comment.create!({post_id: post5.id, author_id: edward.id, comment: 'This makes me miss the beach.'})
Comment.create!({post_id: post6.id, author_id: alfred.id, comment: 'Love the detail in the wick!'})
Comment.create!({post_id: post7.id, author_id: irving.id, comment: 'Good composition'})
Comment.create!({post_id: post8.id, author_id: cindy.id, comment: 'The Golden Gate is wonderful!'})
Comment.create!({post_id: post9.id, author_id: amy.id, comment: 'Love the details in the flower.'})
Comment.create!({post_id: post10.id, author_id: drew.id, comment: 'Wow that is an epic sunset'})
Comment.create!({post_id: post11.id, author_id: john.id, comment: 'This makes me miss SF!'})
Comment.create!({post_id: post12.id, author_id: kate.id, comment: 'The picture is so vivid, I can hear the waves crashing.'})
Comment.create!({post_id: post13.id, author_id: jazz.id, comment: 'I\'ve been to this hotel, not bad'})
Comment.create!({post_id: post14.id, author_id: diane.id, comment: 'Love the National Gallery, and angles made by windows.'})
Comment.create!({post_id: post15.id, author_id: annie.id, comment: 'Such a beautiful building!'})
Comment.create!({post_id: post16.id, author_id: robert.id, comment: 'What a cool building!'})
Comment.create!({post_id: post17.id, author_id: steve.id, comment: 'What a cute dog!'})
Comment.create!({post_id: post18.id, author_id: edward.id, comment: 'What an ideal image of the Capitol Building'})
Comment.create!({post_id: post19.id, author_id: alfred.id, comment: 'Love the angle this was taken at.'})
Comment.create!({post_id: post21.id, author_id: cindy.id, comment: 'Loving the vibes'})
Comment.create!({post_id: post22.id, author_id: amy.id, comment: 'Loving the detail in the frosting!'})
Comment.create!({post_id: post22.id, author_id: drew.id, comment: 'This is making me hungry'})
Comment.create!({post_id: post24.id, author_id: john.id, comment: 'Now I miss San Francisco'})
Comment.create!({post_id: post25.id, author_id: kate.id, comment: 'Super vibrant colors'})
Comment.create!({post_id: post26.id, author_id: jazz.id, comment: 'Loving the details of the flower'})
Comment.create!({post_id: post27.id, author_id: diane.id, comment: 'Awesome colors'})
Comment.create!({post_id: post28.id, author_id: annie.id, comment: 'Really cool details and colors'})
Comment.create!({post_id: post29.id, author_id: robert.id, comment: 'Looks like another planet'})
Comment.create!({post_id: post30.id, author_id: steve.id, comment: 'Loving the composition'})
Comment.create!({post_id: post31.id, author_id: edward.id, comment: 'Beautiful light and composition'})
Comment.create!({post_id: post32.id, author_id: alfred.id, comment: 'awww'})
Comment.create!({post_id: post33.id, author_id: jazz.id, comment: 'awesome'})


####### LINK TAGS AND POSTS #######

TaggedPost.create({post_id: post1.id, tag_id: Tag.find_by({name: 'beach'}).id})
TaggedPost.create({post_id: post1.id, tag_id: Tag.find_by({name: 'view'}).id})
TaggedPost.create({post_id: post1.id, tag_id: Tag.find_by({name: 'travel destinations'}).id})

TaggedPost.create({post_id: post2.id, tag_id: Tag.find_by({name: 'moon'}).id})
TaggedPost.create({post_id: post2.id, tag_id: Tag.find_by({name: 'sky'}).id})
TaggedPost.create({post_id: post2.id, tag_id: Tag.find_by({name: 'iconic'}).id})

TaggedPost.create({post_id: post3.id, tag_id: Tag.find_by({name: 'basktball'}).id})
TaggedPost.create({post_id: post3.id, tag_id: Tag.find_by({name: 'city'}).id})
TaggedPost.create({post_id: post3.id, tag_id: Tag.find_by({name: 'sunset'}).id})
TaggedPost.create({post_id: post3.id, tag_id: Tag.find_by({name: 'vibes'}).id})

TaggedPost.create({post_id: post4.id, tag_id: Tag.find_by({name: 'architecture'}).id})
TaggedPost.create({post_id: post4.id, tag_id: Tag.find_by({name: 'building'}).id})
TaggedPost.create({post_id: post4.id, tag_id: Tag.find_by({name: 'iconic'}).id})

TaggedPost.create({post_id: post5.id, tag_id: Tag.find_by({name: 'beach'}).id})
TaggedPost.create({post_id: post5.id, tag_id: Tag.find_by({name: 'ocean'}).id})
TaggedPost.create({post_id: post5.id, tag_id: Tag.find_by({name: 'landscape'}).id})
TaggedPost.create({post_id: post5.id, tag_id: Tag.find_by({name: 'scenic'}).id})

TaggedPost.create({post_id: post6.id, tag_id: Tag.find_by({name: 'wonder'}).id})
TaggedPost.create({post_id: post6.id, tag_id: Tag.find_by({name: 'art'}).id})
TaggedPost.create({post_id: post6.id, tag_id: Tag.find_by({name: 'mood'}).id})

TaggedPost.create({post_id: post7.id, tag_id: Tag.find_by({name: 'architecture'}).id})
TaggedPost.create({post_id: post7.id, tag_id: Tag.find_by({name: 'street'}).id})
TaggedPost.create({post_id: post7.id, tag_id: Tag.find_by({name: 'moment'}).id})
TaggedPost.create({post_id: post7.id, tag_id: Tag.find_by({name: 'glance'}).id})

TaggedPost.create({post_id: post8.id, tag_id: Tag.find_by({name: 'architecture'}).id})
TaggedPost.create({post_id: post8.id, tag_id: Tag.find_by({name: 'icon'}).id})
TaggedPost.create({post_id: post8.id, tag_id: Tag.find_by({name: 'wonder'}).id})

TaggedPost.create({post_id: post9.id, tag_id: Tag.find_by({name: 'details'}).id})
TaggedPost.create({post_id: post9.id, tag_id: Tag.find_by({name: 'flower'}).id})
TaggedPost.create({post_id: post9.id, tag_id: Tag.find_by({name: 'plants'}).id})
TaggedPost.create({post_id: post9.id, tag_id: Tag.find_by({name: 'life'}).id})

TaggedPost.create({post_id: post10.id, tag_id: Tag.find_by({name: 'sunset'}).id})
TaggedPost.create({post_id: post10.id, tag_id: Tag.find_by({name: 'landscape'}).id})
TaggedPost.create({post_id: post10.id, tag_id: Tag.find_by({name: 'dusk'}).id})

TaggedPost.create({post_id: post11.id, tag_id: Tag.find_by({name: 'architecture'}).id})
TaggedPost.create({post_id: post11.id, tag_id: Tag.find_by({name: 'angles'}).id})
TaggedPost.create({post_id: post11.id, tag_id: Tag.find_by({name: 'street'}).id})
TaggedPost.create({post_id: post11.id, tag_id: Tag.find_by({name: 'icon'}).id})

TaggedPost.create({post_id: post12.id, tag_id: Tag.find_by({name: 'ocean'}).id})
TaggedPost.create({post_id: post12.id, tag_id: Tag.find_by({name: 'beach'}).id})

TaggedPost.create({post_id: post13.id, tag_id: Tag.find_by({name: 'architecture'}).id})
TaggedPost.create({post_id: post13.id, tag_id: Tag.find_by({name: 'icon'}).id})
TaggedPost.create({post_id: post13.id, tag_id: Tag.find_by({name: 'black and white'}).id})

TaggedPost.create({post_id: post14.id, tag_id: Tag.find_by({name: 'abstract'}).id})
TaggedPost.create({post_id: post14.id, tag_id: Tag.find_by({name: 'art'}).id})
TaggedPost.create({post_id: post14.id, tag_id: Tag.find_by({name: 'architecture'}).id})
TaggedPost.create({post_id: post14.id, tag_id: Tag.find_by({name: 'museum'}).id})

TaggedPost.create({post_id: post15.id, tag_id: Tag.find_by({name: 'museum'}).id})
TaggedPost.create({post_id: post15.id, tag_id: Tag.find_by({name: 'architecture'}).id})
TaggedPost.create({post_id: post15.id, tag_id: Tag.find_by({name: 'moment'}).id})
TaggedPost.create({post_id: post15.id, tag_id: Tag.find_by({name: 'street'}).id})

TaggedPost.create({post_id: post16.id, tag_id: Tag.find_by({name: 'building'}).id})
TaggedPost.create({post_id: post16.id, tag_id: Tag.find_by({name: 'architecture'}).id})
TaggedPost.create({post_id: post16.id, tag_id: Tag.find_by({name: 'angles'}).id})

TaggedPost.create({post_id: post17.id, tag_id: Tag.find_by({name: 'dog'}).id})
TaggedPost.create({post_id: post17.id, tag_id: Tag.find_by({name: 'black and white'}).id})
TaggedPost.create({post_id: post17.id, tag_id: Tag.find_by({name: 'sharp'}).id})
TaggedPost.create({post_id: post17.id, tag_id: Tag.find_by({name: 'pet'}).id})

TaggedPost.create({post_id: post18.id, tag_id: Tag.find_by({name: 'architecture'}).id})
TaggedPost.create({post_id: post18.id, tag_id: Tag.find_by({name: 'icon'}).id})
TaggedPost.create({post_id: post18.id, tag_id: Tag.find_by({name: 'no people'}).id})
TaggedPost.create({post_id: post18.id, tag_id: Tag.find_by({name: 'city'}).id})
TaggedPost.create({post_id: post18.id, tag_id: Tag.find_by({name: 'building'}).id})

TaggedPost.create({post_id: post19.id, tag_id: Tag.find_by({name: 'building'}).id})
TaggedPost.create({post_id: post19.id, tag_id: Tag.find_by({name: 'city'}).id})
TaggedPost.create({post_id: post19.id, tag_id: Tag.find_by({name: 'architecture'}).id})
TaggedPost.create({post_id: post19.id, tag_id: Tag.find_by({name: 'no people'}).id})

TaggedPost.create({post_id: post20.id, tag_id: Tag.find_by({name: 'still life'}).id})
TaggedPost.create({post_id: post20.id, tag_id: Tag.find_by({name: 'food'}).id})
TaggedPost.create({post_id: post20.id, tag_id: Tag.find_by({name: 'milk'}).id})
TaggedPost.create({post_id: post20.id, tag_id: Tag.find_by({name: 'coffee'}).id})

TaggedPost.create({post_id: post21.id, tag_id: Tag.find_by({name: 'vibes'}).id})
TaggedPost.create({post_id: post21.id, tag_id: Tag.find_by({name: 'home'}).id})
TaggedPost.create({post_id: post21.id, tag_id: Tag.find_by({name: 'house'}).id})

TaggedPost.create({post_id: post22.id, tag_id: Tag.find_by({name: 'food'}).id})
TaggedPost.create({post_id: post22.id, tag_id: Tag.find_by({name: 'desert'}).id})
TaggedPost.create({post_id: post22.id, tag_id: Tag.find_by({name: 'close up'}).id})
TaggedPost.create({post_id: post22.id, tag_id: Tag.find_by({name: 'macro'}).id})
TaggedPost.create({post_id: post22.id, tag_id: Tag.find_by({name: 'joy'}).id})

TaggedPost.create({post_id: post24.id, tag_id: Tag.find_by({name: 'architecture'}).id})
TaggedPost.create({post_id: post24.id, tag_id: Tag.find_by({name: 'ocean'}).id})
TaggedPost.create({post_id: post24.id, tag_id: Tag.find_by({name: 'iconic'}).id})

TaggedPost.create({post_id: post25.id, tag_id: Tag.find_by({name: 'building'}).id})
TaggedPost.create({post_id: post25.id, tag_id: Tag.find_by({name: 'iconic'}).id})
TaggedPost.create({post_id: post25.id, tag_id: Tag.find_by({name: 'flag'}).id})

TaggedPost.create({post_id: post26.id, tag_id: Tag.find_by({name: 'close up'}).id})
TaggedPost.create({post_id: post26.id, tag_id: Tag.find_by({name: 'macro'}).id})
TaggedPost.create({post_id: post26.id, tag_id: Tag.find_by({name: 'flower'}).id})
TaggedPost.create({post_id: post26.id, tag_id: Tag.find_by({name: 'wonder'}).id})
TaggedPost.create({post_id: post26.id, tag_id: Tag.find_by({name: 'plant'}).id})

TaggedPost.create({post_id: post27.id, tag_id: Tag.find_by({name: 'flower'}).id})
TaggedPost.create({post_id: post27.id, tag_id: Tag.find_by({name: 'macro'}).id})
TaggedPost.create({post_id: post27.id, tag_id: Tag.find_by({name: 'close up'}).id})
TaggedPost.create({post_id: post27.id, tag_id: Tag.find_by({name: 'plant'}).id})
TaggedPost.create({post_id: post27.id, tag_id: Tag.find_by({name: 'details'}).id})

TaggedPost.create({post_id: post28.id, tag_id: Tag.find_by({name: 'close up'}).id})
TaggedPost.create({post_id: post28.id, tag_id: Tag.find_by({name: 'macro'}).id})
TaggedPost.create({post_id: post28.id, tag_id: Tag.find_by({name: 'green'}).id})
TaggedPost.create({post_id: post28.id, tag_id: Tag.find_by({name: 'food'}).id})
TaggedPost.create({post_id: post28.id, tag_id: Tag.find_by({name: 'details'}).id})

TaggedPost.create({post_id: post29.id, tag_id: Tag.find_by({name: 'ocean'}).id})
TaggedPost.create({post_id: post29.id, tag_id: Tag.find_by({name: 'beach'}).id})
TaggedPost.create({post_id: post29.id, tag_id: Tag.find_by({name: 'editing'}).id})

TaggedPost.create({post_id: post30.id, tag_id: Tag.find_by({name: 'architecture'}).id})
TaggedPost.create({post_id: post30.id, tag_id: Tag.find_by({name: 'travel'}).id})
TaggedPost.create({post_id: post30.id, tag_id: Tag.find_by({name: 'skyscraper'}).id})
TaggedPost.create({post_id: post30.id, tag_id: Tag.find_by({name: 'urban'}).id})

TaggedPost.create({post_id: post31.id, tag_id: Tag.find_by({name: 'pet'}).id})
TaggedPost.create({post_id: post31.id, tag_id: Tag.find_by({name: 'pets'}).id})
TaggedPost.create({post_id: post31.id, tag_id: Tag.find_by({name: 'dog'}).id})
TaggedPost.create({post_id: post31.id, tag_id: Tag.find_by({name: 'black and white'}).id})

TaggedPost.create({post_id: post32.id, tag_id: Tag.find_by({name: 'pet'}).id})
TaggedPost.create({post_id: post32.id, tag_id: Tag.find_by({name: 'pets'}).id})
TaggedPost.create({post_id: post32.id, tag_id: Tag.find_by({name: 'dog'}).id})

TaggedPost.create({post_id: post33.id, tag_id: Tag.find_by({name: 'black and white'}).id})
TaggedPost.create({post_id: post33.id, tag_id: Tag.find_by({name: 'museum'}).id})
TaggedPost.create({post_id: post33.id, tag_id: Tag.find_by({name: 'art'}).id})
TaggedPost.create({post_id: post33.id, tag_id: Tag.find_by({name: 'sculpture'}).id})