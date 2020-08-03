/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractFactory, Signer} from 'ethers';
import {Provider} from 'ethers/providers';
import {UnsignedTransaction} from 'ethers/utils/transaction';

import {TransactionOverrides} from '.';
import {ReserveLogic} from './ReserveLogic';

export class ReserveLogicFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<ReserveLogic> {
    return super.deploy(overrides) as Promise<ReserveLogic>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): ReserveLogic {
    return super.attach(address) as ReserveLogic;
  }
  connect(signer: Signer): ReserveLogicFactory {
    return super.connect(signer) as ReserveLogicFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ReserveLogic {
    return new Contract(address, _abi, signerOrProvider) as ReserveLogic;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'reserve',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'liquidityRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'stableBorrowRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'averageStableBorrowRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'variableBorrowRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'liquidityIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'variableBorrowIndex',
        type: 'uint256',
      },
    ],
    name: 'ReserveDataUpdated',
    type: 'event',
  },
];

const _bytecode =
  '0x610fb1610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061006c5760003560e01c80630c1282ce1461007157806358ba22fa146100af5780637d368d2e146100d25780638acb830b146100ef578063b5887a641461013c578063fade6ba01461018d575b600080fd5b61009d6004803603604081101561008757600080fd5b50803590602001356001600160a01b03166101b9565b60408051918252519081900360200190f35b61009d600480360360408110156100c557600080fd5b508035906020013561021e565b61009d600480360360208110156100e857600080fd5b503561023f565b8180156100fb57600080fd5b5061013a600480360360a081101561011257600080fd5b508035906001600160a01b0360208201351690604081013590606081013590608001356102dd565b005b81801561014857600080fd5b5061013a600480360360a081101561015f57600080fd5b508035906001600160a01b036020820135811691604081013582169160608201358116916080013516610329565b61009d600480360360408110156101a357600080fd5b50803590602001356001600160a01b0316610426565b6000806101c584610459565b9050806101d6576000915050610218565b60006101f16001600160a01b0385163063ffffffff61055916565b9050610213610206828463ffffffff61060316565b839063ffffffff61065d16565b925050505b92915050565b60008260030154600014610236578260030154610238565b815b9392505050565b60008160020154600014156102d1578160090160009054906101000a90046001600160a01b03166001600160a01b03166334762ca56040518163ffffffff1660e01b815260040160206040518083038186803b15801561029e57600080fd5b505afa1580156102b2573d6000803e3d6000fd5b505050506040513d60208110156102c857600080fd5b505190506102d8565b5060028101545b919050565b6102e6856106a1565b60006103016102f487610459565b859063ffffffff61060316565b905061031486828563ffffffff61075916565b61032186868560006107b7565b505050505050565b60068501546001600160a01b0316156103735760405162461bcd60e51b8152600401808060200182810382526024815260200180610f376024913960400191505060405180910390fd5b6103a36040518060400160405280600f81526020016e31b0b63634b7339034b734ba17171760891b815250610aa4565b84546103b4576103b1610be6565b85555b60048501546103cb576103c5610be6565b60048601555b6006850180546001600160a01b03199081166001600160a01b03968716179091556007860180548216948616949094179093556008850180548416928516929092179091556009909301805490911692909116919091179055565b600061023861043484610459565b61044d6001600160a01b0385163063ffffffff61055916565b9063ffffffff61060316565b60006102188260080160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104ae57600080fd5b505afa1580156104c2573d6000803e3d6000fd5b505050506040513d60208110156104d857600080fd5b50516007840154604080516318160ddd60e01b815290516001600160a01b03909216916318160ddd91600480820192602092909190829003018186803b15801561052157600080fd5b505afa158015610535573d6000803e3d6000fd5b505050506040513d602081101561054b57600080fd5b50519063ffffffff61060316565b600061056483610bf6565b1561057a57506001600160a01b03811631610218565b826001600160a01b03166370a08231836040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156105d057600080fd5b505afa1580156105e4573d6000803e3d6000fd5b505050506040513d60208110156105fa57600080fd5b50519050610218565b600082820183811015610238576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000600282046106998361068d610680876b033b2e3c9fd0803ce8000000610c1b565b849063ffffffff61060316565b9063ffffffff610c7416565b949350505050565b60006106ac82610459565b9050801561073557600182015460098301546000916106d891600160a01b900464ffffffffff16610cb6565b83549091506106ee90829063ffffffff610d0116565b83556002830154600984015460009161071491600160a01b900464ffffffffff16610d39565b905061072d846004015482610d0190919063ffffffff16565b600485015550505b50600901805464ffffffffff60a01b1916600160a01b4264ffffffffff1602179055565b600061077c61076784610d88565b61077084610d88565b9063ffffffff61065d16565b9050600061079861078b610be6565b839063ffffffff61060316565b85549091506107ae90829063ffffffff610d0116565b90945550505050565b60078401546040805163487b7e7960e11b815290516000926001600160a01b0316916390f6fcf2916004808301926020929190829003018186803b1580156107fe57600080fd5b505afa158015610812573d6000803e3d6000fd5b505050506040513d602081101561082857600080fd5b50516006860154909150600090610851906001600160a01b03878116911663ffffffff61055916565b6009870154909150600090819081906001600160a01b03166357e37af08961088f89610883898d63ffffffff61060316565b9063ffffffff610d9e16565b8c60070160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156108df57600080fd5b505afa1580156108f3573d6000803e3d6000fd5b505050506040513d602081101561090957600080fd5b505160088e0154604080516318160ddd60e01b815290516001600160a01b03909216916318160ddd91600480820192602092909190829003018186803b15801561095257600080fd5b505afa158015610966573d6000803e3d6000fd5b505050506040513d602081101561097c57600080fd5b5051604080516001600160e01b031960e088901b1681526001600160a01b039095166004860152602485019390935260448401919091526064830152608482018990525160a4808301926060929190829003018186803b1580156109df57600080fd5b505afa1580156109f3573d6000803e3d6000fd5b505050506040513d6060811015610a0957600080fd5b50805160208083015160409384015160018e0184905560038e0182905560028e018190558d5460048f015486518681529485018490528487018c905260608501839052608085019190915260a0840152935192965094509192506001600160a01b038a16917f131cf1f61e39fd78f61f07d78533f5b6c13629c80ef6965983e92c72efbaa4a4919081900360c00190a2505050505050505050565b6040516020602482018181528351604484015283516000936a636f6e736f6c652e6c6f67938693928392606401918501908083838a5b83811015610af2578181015183820152602001610ada565b50505050905090810190601f168015610b1f5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b031663104c13eb60e21b178152905182519295509350839250908083835b60208310610b7a5780518252601f199092019160209182019101610b5b565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114610bda576040519150601f19603f3d011682016040523d82523d6000602084013e610bdf565b606091505b5050505050565b6b033b2e3c9fd0803ce800000090565b6001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14919050565b600082610c2a57506000610218565b82820282848281610c3757fe5b04146102385760405162461bcd60e51b8152600401808060200182810382526021815260200180610f5b6021913960400191505060405180910390fd5b600061023883836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610de0565b600080610cd04264ffffffffff851663ffffffff610d9e16565b90506000610ce46107676301e13380610d88565b9050610213610cf1610be6565b61044d878463ffffffff610d0116565b60006102386b033b2e3c9fd0803ce800000061068d610d26868663ffffffff610c1b16565b6b019d971e4fe8401e7400000090610603565b600080610d534264ffffffffff851663ffffffff610d9e16565b90506000610d6b856301e1338063ffffffff610c7416565b905061021382610d7c610680610be6565b9063ffffffff610e8216565b600061021882633b9aca0063ffffffff610c1b16565b600061023883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610edc565b60008183610e6c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610e31578181015183820152602001610e19565b50505050905090810190601f168015610e5e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610e7857fe5b0495945050505050565b600060028206610e9e576b033b2e3c9fd0803ce8000000610ea0565b825b90506002820491505b811561021857610eb98384610d01565b92506002820615610ed157610ece8184610d01565b90505b600282049150610ea9565b60008184841115610f2e5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610e31578181015183820152602001610e19565b50505090039056fe526573657276652068617320616c7265616479206265656e20696e697469616c697a6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a264697066735822122006598862a63579dea40d0772bcaeb47e731d9368ce0b7e2063c38fb9ffb0fa0164736f6c63430006080033';
