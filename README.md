## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false,unique: true|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :tweetsテーブル
- has many :user_groupテーブル

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupename|string|null: false|
|username|string||
|user_id|integer|null:false, foreign_key: true|
### Association
- belong_to :userテーブル
- has_many :tweetsテーブル

## user_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false,foreign_key: true|
|group_id|integer|null: false,foreign_key: true|
### Association
- belong_to :usersテーブル
- belong_to :groupテーブル

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|comment||
|image|text||
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :userテーブル
- has_many  :groupテーブル
