import requests
import json
import csv

with open('./PrimeTxns.csv', 'r+') as f:
    reader = csv.DictReader(f, delimiter=',')
    for row in reader:
        if row['Method'] in ['Whitelist Mint', 'Mint']:
            res = requests.post('http://172.23.0.67:8000/api/leaderboard', data={
                'address': row['From']
            })
            print(res.json())