from brownie import ParaSwapLiquiditySwapAdapter


def test_1(para_swap_liquidity_swap_adapter):
    tx = para_swap_liquidity_swap_adapter.stub(3)
    assert tx.return_value == 9
