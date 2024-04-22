json.extract! dream, :id, :user_id, :summary, :description, :images, :created_at, :updated_at
json.url dream_url(dream, format: :json)
json.images do
  json.array!(dream.images) do |image|
    json.id image.id
    json.url url_for(image)
  end
end
