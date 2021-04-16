require 'open-uri'

User.delete_all
Post.delete_all
Follow.delete_all

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


file1 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/daytona.jpeg')
file2 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/moon.jpeg')
file3 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/basketballhoop.JPG')
file4 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/architecture.JPG')
file5 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/daytona2.jpeg')
file6 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/fire.jpeg')
file7 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/frozenguy.jpeg')
file8 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/goldengate.jpeg')
file9 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/flower.jpeg')
file10 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/sunset.jpeg')
file11 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/transamerica.jpeg')
file12 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/underdock.jpeg')
file13 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/watergate.jpeg')
file14 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/windows.jpeg')

# diane robert annie steve edward alfred irving cindy
post1 = Post.new(title:'Sunset in Daytona Beach', description: 'Sunset at Daytona Beach near Hilton Hotel.',  user_id: diane.id)
post2 
post3 = Post.new(title:'Basketball hoop', description: 'View of the silhouette a of a basketball hoop.',  user_id: annie.id  )

post4 = Post.new(title:'Guggenheim', description: 'Looking up at the inside the Guggenheim museum.',  user_id: steve.id)
post5 = Post.new(title:'The beach', description: 'Panorama of the beach in the morning.',  user_id: diane.id  )
post6 = Post.new(title:'Let there be Light', description: 'Closeup of a candle wich.',  user_id: alfred.id  )
post7 = Post.new(title:'Frozen guy', description: 'Captured from the Portrait Gallery!',  user_id: irving.id)
post8 = Post.new(title:'Golden Gate Bridge', description: 'A very cold and foggy day at the Golden Gate bridge!',  user_id: edward.id  )
post9 = Post.new(title:'Flower', description: 'Beautiful flower.',  user_id: cindy.id  )
post10 = Post.new(title:'Sunset', description: 'Sunset landscape captured from my balcony.',  user_id: diane.id)
post11 = Post.new(title:'Transamerica Tower', description: 'Looking up at the Transamerica tower',  user_id: robert.id  )
post12 = Post.new(title:'Underneath a dock', description: 'Love the lines made by this dock.',  user_id: cindy.id  )
post13 = Post.new(title:'Scandal', description: "Famous hotel in the nation's capital.",  user_id: cindy.id  )
post14 = Post.new(title:'Untitled', description: 'windows.',  user_id: alfred.id  )

post1.photo.attach(io: file1, filename: 'daytona.jpeg')
post2.photo.attach(io: file2, filename: 'moon.jpeg')
post3.photo.attach(io: file3, filename: 'basketballhoop.JPG')
post4.photo.attach(io: file4, filename: 'architecture.JPG')
post5.photo.attach(io: file5, filename: 'daytona2.jpeg')
post6.photo.attach(io: file6, filename: 'fire.jpeg')
post7.photo.attach(io: file7, filename: 'frozenguy.jpeg')
post8.photo.attach(io: file8, filename: 'goldengate.jpeg')
post9.photo.attach(io: file9, filename: 'flower.jpeg')
post10.photo.attach(io: file10, filename: 'sunset.jpeg')
post11.photo.attach(io: file11, filename: 'transamerica.jpeg')
post12.photo.attach(io: file12, filename: 'underdock.jpeg')
post13.photo.attach(io: file13, filename: 'watergate.jpeg')
post14.photo.attach(io: file14, filename: 'windows.jpeg')

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