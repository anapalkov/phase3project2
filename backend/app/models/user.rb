class User < ActiveRecord::Base
  # I think we need to cut User from direct access to product. A user can have many orders and orders can have many product and vice versa.
  has_many :products

  has_many :orders

end
