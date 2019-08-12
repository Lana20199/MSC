# Mango Supply Chain

This repository containts an Ethereum DApp that demonstrates Ethereum DApp of Mango supply chain. Buyer can purchase mango boxes from the blockchain after it’s added by the farmer. A farmer can mark an item as Shipped, and similarly a Buyer can mark an item as Received.


## Actors
- Farmer
- Distributor
- Retailer
- Consumer

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Truffle v5.0.26
Solidity v0.4.24 (solc-js)
Node v10.15.2
Web3.js v1.0.0-beta.37
```

### UML
- Activity Diagram
![Activity Diagram](https://github.com/Lana20199/MSC/blob/master/Activity.png)
- Class Diagram
![Class Diagram](https://github.com/Lana20199/MSC/blob/master/UML/ClassDiagram.png)
- Sequence Diagram
![Sequence Diagram](https://github.com/Lana20199/MSC/blob/master/UML/SequenceDiagram.png)
- State Diagram
![State Diagram](https://github.com/Lana20199/MSC/blob/master/UML/State.png)

### Rinkeby Deployed Contract 
- Transaction Hash:0x22f1e1e2f08ab3f01e3dab19d1754ba02b83ca232e5cd24d3fcd14ff2a42695e
- Contract Address: 0x598cda79F84BB8481EbcE5D4CFE3fd37A65c3cD0

### Installing

A step by step series of examples that tell you have to get a development env running

1. Clone this repository:

```
git clone 
```

2. Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

3. Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

4. In a separate terminal window, Compile smart contracts:

```
truffle compile
```

5. Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

6. Test smart contracts:

```
truffle test
```

All 10 tests should pass.

In a separate terminal window, launch the DApp:

```
npm run dev
```
Transaction History 
![History](https://github.com/Lana20199/MSC/blob/master/History.png)
