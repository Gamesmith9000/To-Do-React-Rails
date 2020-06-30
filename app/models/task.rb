class Task < ApplicationRecord
    def completed?
        # Verify that 'this' keyword isn't needed here
        return (completed_at != nil)
    end
end
