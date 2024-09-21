import requests
params_value = {'key1':'value1', 'key2':'value2'}
response = requests.post('http://localhost:3000/search?keywords=5:20am')
print(response)