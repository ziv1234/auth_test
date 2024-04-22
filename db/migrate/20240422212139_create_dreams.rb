class CreateDreams < ActiveRecord::Migration[7.1]
  def change
    create_table :dreams do |t|
      t.references :user, null: false, foreign_key: true
      t.text :summary
      t.text :description

      t.timestamps
    end
  end
end
