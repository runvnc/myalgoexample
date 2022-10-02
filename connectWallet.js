import MyAlgoConnect from "@randlabs/myalgo-connect"

const myAlgoWallet = new MyAlgoConnect()

const connectButton = document.querySelector(".connect-wallet")

async function connectToMyAlgo() {
  try {
    const accounts = await myAlgoWallet.connect()
    const addresses = accounts.map((account) => account.address)
    console.log(addresses)
  } catch (err) {
    console.error(err)
  }
}

function connectToMyAlgo_() {
  connectToMyAlgo().catch(console.error)
}

connectButton.addEventListener("click", connectToMyAlgo_)
