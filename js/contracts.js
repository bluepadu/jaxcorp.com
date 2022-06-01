const abis = {
    ubi: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"colony_external_key","type":"address"},{"indexed":false,"internalType":"uint128","name":"tx_tax","type":"uint128"},{"indexed":false,"internalType":"string","name":"colony_policy_link","type":"string"},{"indexed":false,"internalType":"bytes32","name":"colony_policy_hash","type":"bytes32"},{"indexed":false,"internalType":"address","name":"mother_colony_external_key","type":"address"}],"name":"Register_Colony","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"Request_Update","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"address","name":"colony","type":"address"}],"name":"Set_Colony_Address","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"old_admin","type":"address"},{"indexed":false,"internalType":"address","name":"new_admin","type":"address"}],"name":"Set_Jax_Admin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"jax_corp_dao_wallet","type":"address"},{"indexed":false,"internalType":"uint128","name":"tx_tax","type":"uint128"},{"indexed":false,"internalType":"string","name":"policy_link","type":"string"},{"indexed":false,"internalType":"bytes32","name":"policy_hash","type":"bytes32"}],"name":"Set_Jax_Corp_Dao","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"min_tx_tax","type":"uint256"}],"name":"Set_Min_Transaction_Tax","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"newOwnerLocktime","type":"uint256"}],"name":"Set_New_Owner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"ubi_tax","type":"uint256"},{"indexed":false,"internalType":"address","name":"ubi_tax_wallet","type":"address"}],"name":"Set_Ubi_Tax","type":"event"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getColony","outputs":[{"components":[{"internalType":"uint128","name":"level","type":"uint128"},{"internalType":"uint128","name":"transaction_tax","type":"uint128"},{"internalType":"bytes32","name":"_policy_hash","type":"bytes32"},{"internalType":"string","name":"_policy_link","type":"string"}],"internalType":"struct IJaxPlanet.Colony","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getMotherColonyAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getUserColonyAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_jaxAdmin","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"jaxAdmin","outputs":[{"internalType":"contract IJaxAdmin","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jaxcorp_dao_wallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"min_transaction_tax","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"new_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"new_owner_locktime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint128","name":"tx_tax","type":"uint128"},{"internalType":"string","name":"colony_policy_link","type":"string"},{"internalType":"bytes32","name":"colony_policy_hash","type":"bytes32"},{"internalType":"address","name":"mother_colony_external_key","type":"address"}],"name":"registerColony","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"colony","type":"address"}],"name":"setColonyAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newJaxAdmin","type":"address"}],"name":"setJaxAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"jaxCorpDao_wallet","type":"address"},{"internalType":"uint128","name":"tx_tax","type":"uint128"},{"internalType":"string","name":"policy_link","type":"string"},{"internalType":"bytes32","name":"policy_hash","type":"bytes32"}],"name":"setJaxCorpDAO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint128","name":"min_tx_tax","type":"uint128"}],"name":"setMinTransactionTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"setNewOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ubi_tax","type":"uint256"},{"internalType":"address","name":"wallet","type":"address"}],"name":"setUbiTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ubi_tax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ubi_tax_wallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"updateOwner","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    erc20: [{ "inputs": [], "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tx_fee", "type": "uint256" }], "name": "setTransactionFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_wallet", "type": "address" }], "name": "setTransactionFeeWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "transaction_fee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "transaction_fee_decimal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "tx_fee_wallet", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }]
}

const addresses = {
    ubi: '0x9a7B81542e9EBb9Be499660D1599b6ba60e7a4e2',
    wjax: '0xAfa6A1663805C74a718923b828E1B3dEf68A2561',
}