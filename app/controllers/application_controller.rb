class ApplicationController < ActionController::Base

    protected

    def after_sign_in_path_for(resource)
        if resource.admin?
          admin_dashboard_path  # Replace with your admin dashboard path
        else
          user_dashboard_path   # Replace with your regular user dashboard path
        end
      end
end
