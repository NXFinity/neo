import { Controller } from '@nestjs/common';
import { P2pService } from './p2p.service';

@Controller('p2p')
export class P2pController {
  constructor(private readonly p2pService: P2pService) {}
}
