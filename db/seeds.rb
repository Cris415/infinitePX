require 'open-uri'

User.delete_all
Post.delete_all

user1 = User.create!(
  username: 'demo_user',
  password: 'password'
)

user2 = User.create!(
  username: 'Ansel',
  password: 'password'
)

user3 = User.create!(
  username: 'Henri',
  password: 'password'
)

user4 = User.create!(
  username: 'Annie',
  password: 'password'
)

file1 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/daytona.jpeg')
file2 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/moon.jpeg')
file3 = URI.open('https://infinitepx-seeds.s3-us-west-1.amazonaws.com/basketballhoop.JPG')


post1 = Post.new(title:'Sunset in Daytona Beach', description: 'Sunset at Daytona Beach near Hilton Hotel.',  user_id: user4.id)
post2 = Post.new(title:'Moonrise over Mountain View ', description: 'Waited until late in the afternoon to capture this image.',  user_id: user2.id  )
post3 = Post.new(title:'Basketball hoop', description: 'View of the silhouette a of a basketball hoop.',  user_id: user3.id  )

post1.photo.attach(io: file1, filename: 'daytona.jpeg')
post2.photo.attach(io: file2, filename: 'moon.jpeg')
post3.photo.attach(io: file3, filename: 'basketballhoop.JPG')

post1.save!
post2.save!
post3.save!
