json.content @message.content
json.data @message.created_at.strftime("%Y/%m/%d %H:%M")
json.username @message.user.name
json.image @message.image