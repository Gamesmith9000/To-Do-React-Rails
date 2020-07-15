class TaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :completed, :created_at, :description, :title
end
