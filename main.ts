import {Address, SendMode} from "@ton/core";
import {mnemonicToWalletKey} from "@ton/crypto";
import {TonClient, WalletContractV5R1,internal} from "@ton/ton";
import {getHttpEndpoint} from "@orbs-network/ton-access";

async function main() {

    // const mnemonic = "remind often exchange assist foil volume bus lend loyal gallery legal genre repeat address lunch film broccoli anchor close vehicle bar call oil alone"
    const mnemonic = "border door tool planet area display north powder deposit garlic search describe route farm escape culture piano keen sight honey plastic silly corn consider"
    const key = await mnemonicToWalletKey(mnemonic.split(" "));
    console.log(key)
    const wallet = WalletContractV5R1.create({
        publicKey: key.publicKey,
        workchain: 0,
    });

    let endpoint = await getHttpEndpoint({
        network: "mainnet",
    });
    let client = new TonClient({
        endpoint: endpoint,
        apiKey: "",
    });
    // const client = new TonClient({
    //     endpoint: "https://go.getblock.io/b4f8e60fd91a417994c69fab25651716",
    //     apiKey: "",
    // });

    if (await client.isContractDeployed(wallet.address)) {
        console.log("Contract is deployed");
        return;
    }
    console.log("Contract is not deployed");
    // let contract = await client.open(wallet);


//   console.log(contract)

  // create a transfer
//   let seqno = await contract.getSeqno();
//   await contract.sendTransfer({
//     secretKey:key.secretKey,
//     seqno: seqno,
//     sendMode: SendMode.PAY_GAS_SEPARATELY + SendMode.IGNORE_ERRORS,
//     messages: [
//         internal({
//             to: Address.parse("EQC0000000000000000000000000000000000000000000000000000000000000000"),
//             value: "0.01",
//             bounce: false,
//             body: 'Hello World'
//         }),
//     ]
//   });

}

main();
