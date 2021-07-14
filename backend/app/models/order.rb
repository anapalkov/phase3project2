class Order < ActiveRecord::Base
    # belongs_to :user
    
    # has_many :order_products
    # has_many :products, through: :order_products

    has_many :orders
    has_many :users, through: orders
end