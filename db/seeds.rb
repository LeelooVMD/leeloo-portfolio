# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'Destroy portfolio'
Portfolio.destroy_all

puts 'Adding portfolio'
Portfolio.create(name: 'Perfect Watch', company: 'Nicolas, Sixtine, Brice & myself', url: 'https://www.perfect-watch.net/', thumbnail: 'none')
Portfolio.create(name: 'Sitter on the way', company: 'Nicolas, Sixtine, Brice & myself', url: 'https://sitter-on-the-way.herokuapp.com/', thumbnail: 'none')
Portfolio.create(name: 'Laurence et Jean Leccia', company: 'Les Ateliers Leccia', url: 'https://laurenceetjeanleccia.com/', thumbnail: 'none')
Portfolio.create(name: 'Les Ateliers Leccia', company: 'Les Ateliers Leccia', url: 'https://lesateliersleccia.com/', thumbnail: 'none')
puts 'Portfolio added'
