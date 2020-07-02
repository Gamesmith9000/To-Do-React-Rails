class TaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :completed, :description, :notes, :title
end
