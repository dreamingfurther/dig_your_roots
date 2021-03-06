# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170608024602) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attendees", force: :cascade do |t|
    t.integer  "user_id",                              null: false
    t.integer  "event_id",                             null: false
    t.boolean  "rsvp"
    t.text     "user_notes"
    t.text     "admin_notes"
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.boolean  "plus_one_invited",     default: false, null: false
    t.boolean  "plus_one_attending"
    t.string   "plus_one_fullname"
    t.integer  "email_count",          default: 0,     null: false
    t.text     "food_choice"
    t.text     "plus_one_food_choice"
    t.text     "dance_question"
    t.index ["event_id"], name: "index_attendees_on_event_id", using: :btree
    t.index ["user_id"], name: "index_attendees_on_user_id", using: :btree
  end

  create_table "event_details", force: :cascade do |t|
    t.string  "name"
    t.text    "body"
    t.integer "event_id"
    t.index ["event_id"], name: "index_event_details_on_event_id", using: :btree
  end

  create_table "events", force: :cascade do |t|
    t.string  "name",                             null: false
    t.date    "date",                             null: false
    t.string  "time"
    t.text    "description"
    t.string  "city"
    t.string  "state"
    t.text    "rsvp_description"
    t.boolean "food_options",     default: false
    t.string  "picture"
    t.boolean "dance_question",   default: false
  end

  create_table "users", force: :cascade do |t|
    t.string  "first_name",                           null: false
    t.string  "last_name",                            null: false
    t.string  "email",                                null: false
    t.string  "phone"
    t.string  "password_hash"
    t.boolean "admin",                default: false, null: false
    t.string  "password_reset_token"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

end
