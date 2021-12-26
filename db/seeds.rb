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
Portfolio.create(name: 'Perfect Watch', company: 'Nicolas, Sixtine, Brice & myself', description: 'Website developped with Le Wagon school, concept was to help users to find a movie in 5 minutes depending on their platforms', url: 'https://www.perfect-watch.net/', thumbnail: 'none')
Portfolio.create(name: 'Sitter on the way', company: 'Nicolas, Sixtine, Brice & myself', description: 'Website developped with Le Wagon school, concept was to develop a website based on a marketplace as AirBnb', url: 'https://sitter-on-the-way.herokuapp.com/', thumbnail: 'none')
Portfolio.create(name: 'Laurence et Jean Leccia', company: 'Les Ateliers Leccia', description: 'This website was created for two painters that wanted to promote their paintings and have a minimalist way to display their work.', url: 'https://laurenceetjeanleccia.com/', thumbnail: 'none')
Portfolio.create(name: 'Les Ateliers Leccia', company: 'Les Ateliers Leccia', description: 'A school that propose differents type of services, such as painting and sewing.', url: 'https://lesateliersleccia.com/', thumbnail: 'none')
puts 'Portfolio added'
