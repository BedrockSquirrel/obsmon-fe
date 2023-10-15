import Environment from './Environment.js';
import EnvSelector from './EnvSelector.js'

function App() {
  const devEnv = {
    name: "dev-testnet"
  }
  const uatEnv = {
    name: "uat-testnet"
  }
  const sepoliaEnv = {
    name: "sepolia-testnet"
  }
  const environments = [sepoliaEnv, uatEnv, devEnv]
  const selectedEnvironment = uatEnv

  return (
    <div className="flex text-gray-400 bg-gray-800 h-screen whitespace-nowrap">
      <EnvSelector envs={environments} selected={selectedEnvironment.name} />
      <Environment env={selectedEnvironment}></Environment>
    </div>
  );
}

export default App;
