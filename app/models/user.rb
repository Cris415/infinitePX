class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 8 }, allow_nil: true

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :posts,
    foreign_key: :user_id,
    class_name: :Post

  has_many :group_of_follows,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :group_of_followers,
    foreign_key: :followed_id,
    class_name: :Follow

  has_many :comments,
    foreign_key: :author_id,
    class_name: :Comments

  has_many :followers,
    through: :group_of_followers,
    source: :follower

  has_many :follows,
    through: :group_of_follows,
    source: :followed

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
  
end
