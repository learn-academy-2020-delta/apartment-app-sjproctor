user = [
  {
    email: "test@test.com",
    password: "123456",
    password_confirmation: "123456",
  }
]
user.each do |attribute|
  User.create attribute
end

apartments = [
  {
    street: "221B Baker St",
    city: "London",
    state: "N/A",
    manager: "Ms. Hudson",
    email: "ms-hud@uk.com",
    price: "1000",
    bedrooms: 2,
    bathrooms: 2,
    pets: "no",
  },
  {
    street: "742 Evergreen Terrace",
    city: "Springfield",
    state: "Unknown",
    manager: "Homer",
    email: "hs@donut.com",
    price: "500",
    bedrooms: 3,
    bathrooms: 2,
    pets: "yes",
  },
  {
    street: "1640 Riverside Drive",
    city: "Hill Valley",
    state: "California",
    manager: "Emmet Brown",
    email: "julesfan@2015.com",
    price: "2000",
    bedrooms: 6,
    bathrooms: 4,
    pets: "yes",
  }
]

test_user = User.first

apartments.each do |attribute|
  test_user.apartments.create attribute
  puts apartment: "#{attribute}"
end
