json.tags do json.partial! "api/tags/tags", tags: @tags end
json.tagSearch @tags.pluck(:id)
