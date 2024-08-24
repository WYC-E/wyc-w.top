import requests


API_BASE_URL = "https://api.cloudflare.com/client/v4/accounts/367db2ae93a347061824a19b73120716/ai/run/"
headers = {"Authorization": "Bearer Uy9Hxs7y8w8u-lmPFahzlQmXMB-d2r-M6EcCRzeR"}


def run(model, inputs):
    input = { "messages": inputs }
    response = requests.post(f"{API_BASE_URL}{model}", headers=headers, json=input)
    return response.json()


inputs = [
    { "role": "system", "content": "你是一个AI助手，名字叫OrangeAI，你的语言是中文。" },
    { "role": "user", "content": "你叫什么？"}
];
output = run("@cf/meta/llama-3-8b-instruct", inputs)
print(output)