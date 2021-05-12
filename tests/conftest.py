import pytest
from brownie import accounts, ParaSwapLiquiditySwapAdapter, LendingPool, LendingPoolAddressesProvider, ValidationLogic, GenericLogic, ReserveLogic


@pytest.fixture
def lending_pool_address_provider(accounts):
    marketId = 'XXX'
    contract = LendingPoolAddressesProvider.deploy(marketId, {'from': accounts[0]})
    return contract


@pytest.fixture
def lending_pool(accounts, lending_pool_address_provider):
    ReserveLogic.deploy({'from': accounts[0]})
    GenericLogic.deploy({'from': accounts[0]})
    ValidationLogic.deploy({'from': accounts[0]})
    contract = LendingPool.deploy({'from': accounts[0]})
    contract.initialize(lending_pool_address_provider)
    return contract


@pytest.fixture
def para_swap_liquidity_swap_adapter(accounts, lending_pool):
    contract = ParaSwapLiquiditySwapAdapter.deploy(lending_pool, {'from': accounts[0]})
    return contract
