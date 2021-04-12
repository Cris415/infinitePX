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

# Post.create(title:'Sunset in Daytona Beach', description: 'Epic sunset at the Daytona Beach near Hilton Hotel',  user_id: user1.id)
# Post.create(title:'Moonrise over Mountain View ', description: 'Waited until late in the afternoon to capture this image.',  user_id: user2.id  )
# Post.create(title:'Trees', description: 'A silhouette of trees in the distance',  user_id: user3.id  )

