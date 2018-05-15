require 'xcodeproj'
xcproj = Xcodeproj::Project.open("pizza.xcodeproj")
xcproj.recreate_user_schemes
xcproj.save
