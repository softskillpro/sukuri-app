import requests
import json
import csv
from web3 import Web3

existing = []

with open('./PrimeTxns.csv', 'r+') as f:
    reader = csv.DictReader(f, delimiter=',')
    for row in reader:
        if row['Method'] in ['Whitelist Mint', 'Mint']:
            if Web3.to_checksum_address(row['From']) in existing:
                continue
            res = requests.post('http://172.23.1.115:8000/api/leaderboard', data={
                'address': Web3.to_checksum_address(row['From'])
            })
            print(res.json())