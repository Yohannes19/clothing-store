class HomeController < ApplicationController
 def index
    @main_categories = Category.all
    @featured_products = Product.all
 end
end
