class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.string :message
<<<<<<< HEAD
      
=======

>>>>>>> d83b8cf5b8c04e8d0d19d2a2f24826a8c51e5f3c
      t.timestamps
    end
  end
end
