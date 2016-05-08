class Accident < ActiveRecord::Base
  acts_as_geolocated latitude: 'latitude_column_name', longitude: 'longitude_column_name'
end