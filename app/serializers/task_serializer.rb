class TaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :completed_at, :description, :notes, :title
end
