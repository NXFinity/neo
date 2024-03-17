import { Module } from '@nestjs/common';
import { BlockchainController } from './blockchain.controller';
import { BlockchainService } from './blockchain.service';
import { P2pModule } from './p2p/p2p.module';
import { ValidatorModule } from './validator/validator.module';
import { TransactionModule } from './transaction/transaction.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [P2pModule, ValidatorModule, TransactionModule, WalletModule],
  controllers: [BlockchainController],
  providers: [BlockchainService],
})
export class BlockchainModule {}
