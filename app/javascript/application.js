// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import DashboardController from "controllers/dashboard_controller";
application.register("dashboard", DashboardController);

import NavbarController from "controllers/navbar_controller";
application.register("navbar", NavbarController);
  
