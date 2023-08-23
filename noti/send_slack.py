import requests

def send_slack_message(content):
    url = 'https://hooks.slack.com/services/YOUR/WEBHOOK/URL'
    data = {'text': content}
    response = requests.post(url, json=data)

# 조건을 검사한 후, 메시지 발송
if some_condition:
    send_slack_message('Content Here')
