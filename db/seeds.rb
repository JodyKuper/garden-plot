# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Garden.delete_all
User.delete_all
Plot.delete_all
Plant.delete_all

# n1 = User.create(username: "Joel", password: "123", location: "Portland", comments: "just planted green beans", profile_img: "images.jpg")
# # n1.image.attach(io File.open(Rails.root.join("app.assets/images/images.jpg")),filename:images.jpg)
# n2 = User.create(username: "Jenny", password: "123", location: "Beaverton", comments: "Great looking garden", profile_img: "images-1.jpg")
# n3 = User.create(username: "Leah", password: "123", location: "Portland", comments: "Time to plant", profile_img: "images-2.jpg")

# g1 = Garden.create(season: "spring", image_url: "community-garden-plots-downtown-calgary-growing-plants-food-community-garden-plots-downtown-calgary-alberta-198389094.jpg", user_id: n1.id)
# g2 = Garden.create(season: "spring", image_url: "community-garden-plots-downtown-calgary-growing-plants-food-community-garden-plots-downtown-calgary-alberta-198389094.jpg", user_id: n2.id)
# g3 = Garden.create(season: "spring", image_url: "community-garden-plots-downtown-calgary-growing-plants-food-community-garden-plots-downtown-calgary-alberta-198389094.jpg", user_id: n3.id)

# p1 = Plot.create(name: "A", length: 10.2, width: 5, sun: "full", garden_id: g2.id)
# p2 = Plot.create(name: "B", length: 6.2, width: 5, sun: "partial", garden_id: g1.id)
# p3 = Plot.create(name: "D", length: 8.2, width: 5.5, sun: "full",  garden_id: g3.id)
# p4 = Plot.create(name: "C", length: 10.2, width: 4.5, sun: "full",  garden_id: g1.id)

# Plant.create(name: "tomato", date_planted: 2021-05-15, date_harvested: 2021-9-10, need_sun: "full sun", image_url: "images-3.jpg", plot_id: p1.id)
# Plant.create(name: "green beans", date_planted: 2021-05-15, date_harvested: 2012-8-14, need_sun: "full sun", image_url: "download.jpg", plot_id: p2.id)
# Plant.create(name: "chard", date_planted: 2021-05-15, date_harvested: 2021-7-20, need_sun: "partial sun", image_url: "images-4.jpg", plot_id: p3.id)

puts "seeded"