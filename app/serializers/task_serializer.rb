class TaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :completed, :created_at, :description, :notes, :title
end
