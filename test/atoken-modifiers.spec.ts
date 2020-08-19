import {expect} from 'chai';
import {makeSuite, TestEnv} from './helpers/make-suite';
import {ProtocolErrors} from '../helpers/types';

makeSuite('AToken: Modifiers', (testEnv: TestEnv) => {
  const {INVALID_POOL_CALLER_MSG_1} = ProtocolErrors;

  it('Tries to invoke mint not being the LendingPool', async () => {
    const {deployer, aDai} = testEnv;
    await expect(aDai.mint(deployer.address, '1')).to.be.revertedWith(INVALID_POOL_CALLER_MSG_1);
  });

  it('Tries to invoke burn not being the LendingPool', async () => {
    const {deployer, aDai} = testEnv;
    await expect(aDai.burn(deployer.address, deployer.address, '1')).to.be.revertedWith(
      INVALID_POOL_CALLER_MSG_1
    );
  });

  it('Tries to invoke transferOnLiquidation not being the LendingPool', async () => {
    const {deployer, users, aDai} = testEnv;
    await expect(
      aDai.transferOnLiquidation(deployer.address, users[0].address, '1')
    ).to.be.revertedWith(INVALID_POOL_CALLER_MSG_1);
  });

  it('Tries to invoke transferUnderlyingTo not being the LendingPool', async () => {
    const {deployer, users, aDai} = testEnv;
    await expect(aDai.transferUnderlyingTo(deployer.address, '1')).to.be.revertedWith(
      INVALID_POOL_CALLER_MSG_1
    );
  });
});
